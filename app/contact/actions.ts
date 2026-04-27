"use server";

import { Resend } from "resend";

type FormState = {
  ok: boolean;
  message: string;
};

const TOPIC_LABELS: Record<string, string> = {
  general: "General inquiry",
  press: "Press / media",
  partnership: "Partnership / business",
  support: "Account support",
  legal: "Legal / privacy",
};

export async function submitContactForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const topic = String(formData.get("topic") ?? "general").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "").trim();

  // Honeypot check — real users don't fill this hidden field
  if (honeypot) {
    return { ok: true, message: "Thanks. We'll be in touch." };
  }

  if (!name || name.length < 2) {
    return { ok: false, message: "Please tell us your name." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "That doesn't look like a valid email." };
  }
  if (!message || message.length < 10) {
    return { ok: false, message: "A bit more detail in your message please." };
  }
  if (message.length > 5000) {
    return { ok: false, message: "Message is too long (5000 chars max)." };
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_EMAIL_TO ?? "hello@whamr.com";
  const fromAddress = process.env.CONTACT_EMAIL_FROM ?? "Whamr <onboarding@resend.dev>";

  if (!resendKey) {
    console.warn(
      "RESEND_API_KEY missing — message logged to console instead of sent"
    );
    console.log("Contact form submission:", { name, email, topic, message });
    return {
      ok: true,
      message: "Thanks. We'll be in touch.",
    };
  }

  const resend = new Resend(resendKey);
  const topicLabel = TOPIC_LABELS[topic] ?? "General inquiry";

  try {
    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `[Whamr Contact] ${topicLabel} — ${name}`,
      text: [
        `New message from the Whamr contact form.`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Topic: ${topicLabel}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    return {
      ok: true,
      message: "Got it. We'll be in touch within a few days.",
    };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      ok: false,
      message:
        "Something broke on our end. Try again in a minute or email hello@whamr.com directly.",
    };
  }
}
