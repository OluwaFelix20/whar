import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = String(body?.email ?? "").trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email." },
      { status: 400 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!resendKey || !audienceId) {
    console.warn(
      "Newsletter signup: RESEND_API_KEY or RESEND_AUDIENCE_ID missing — logging instead"
    );
    console.log("Newsletter signup:", email);
    return NextResponse.json({
      ok: true,
      message: "Thanks for subscribing.",
    });
  }

  try {
    const resend = new Resend(resendKey);
    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId,
    });

    return NextResponse.json({
      ok: true,
      message: "Thanks for subscribing.",
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : String(error);
    if (errorMessage.toLowerCase().includes("already")) {
      return NextResponse.json({
        ok: true,
        message: "You're already on the list.",
      });
    }

    console.error("Newsletter signup failed:", error);
    return NextResponse.json(
      { ok: false, error: "Something broke. Try again in a minute." },
      { status: 500 }
    );
  }
}
