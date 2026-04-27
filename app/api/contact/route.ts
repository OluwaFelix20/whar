import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, message, honeypot } = body;

    // Honeypot spam check — real users won't fill the hidden field
    if (honeypot) {
      // Pretend it succeeded so bots don't retry
      return NextResponse.json({ ok: true });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long (max 5000 chars)" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL ?? "hello@whamr.com";
    const from = process.env.CONTACT_FROM_EMAIL ?? "Whamr <onboarding@resend.dev>";
    const safeTopic = topic ?? "General";

    // If Resend isn't configured yet, just log & return success
    // so the form is testable locally before keys are set
    if (!resend) {
      console.log("[Contact form] No RESEND_API_KEY set — skipping send");
      console.log({ name, email, topic: safeTopic, message });
      return NextResponse.json({ ok: true, dev: true });
    }

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Whamr Contact] ${safeTopic} — ${name}`,
      text: `From: ${name} <${email}>\nTopic: ${safeTopic}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px">
          <h2 style="color:#0A0A0A;border-bottom:3px solid #D4FF3D;padding-bottom:8px">
            New Whamr contact
          </h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Topic:</strong> ${escapeHtml(safeTopic)}</p>
          <hr style="border:0;border-top:1px solid #ddd;margin:20px 0" />
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
