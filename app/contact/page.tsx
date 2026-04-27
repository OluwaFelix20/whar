"use client";

import { useActionState } from "react";
import { submitContactForm } from "./actions";

const TOPICS = [
  { value: "general", label: "General inquiry" },
  { value: "press", label: "Press / media" },
  { value: "partnership", label: "Partnership / business" },
  { value: "support", label: "Account support" },
  { value: "legal", label: "Legal / privacy" },
];

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    ok: false,
    message: "",
  });

  return (
    <>
      <section className="relative pt-20 md:pt-32 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-wham/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="h-label mb-6">Get in touch</div>
          <h1 className="h-display text-[14vw] md:text-[10vw] lg:text-[140px] text-ink leading-[0.85]">
            Send us
            <br />
            <span className="text-wham italic">the wham.</span>
          </h1>
          <p className="mt-8 text-xl text-ink-dim max-w-2xl">
            Press, partnerships, support, legal questions — pick a reason
            below. We answer real emails from real humans, usually within a few
            days.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          {state.ok && state.message ? (
            <div className="bg-wham text-bg p-10 md:p-16 text-center">
              <div className="h-display text-6xl md:text-8xl text-bg mb-6 leading-none">
                ✓
              </div>
              <h2 className="h-display text-4xl md:text-5xl text-bg mb-4">
                Message sent.
              </h2>
              <p className="text-bg/80 max-w-md mx-auto text-lg">
                {state.message}
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6">
              {state.message && !state.ok && (
                <div className="p-4 border border-heat/40 bg-heat/5 text-heat font-mono text-sm">
                  {state.message}
                </div>
              )}

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px" }}
                aria-hidden="true"
              />

              <Field label="Your name" name="name" required>
                <input
                  type="text"
                  name="name"
                  required
                  minLength={2}
                  maxLength={120}
                  className="w-full bg-bg-alt border border-border px-4 py-3 text-ink focus:outline-none focus:border-wham font-body"
                  placeholder="Hannah Smith"
                />
              </Field>

              <Field label="Email address" name="email" required>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-bg-alt border border-border px-4 py-3 text-ink focus:outline-none focus:border-wham font-body"
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="What's this about?" name="topic" required>
                <select
                  name="topic"
                  required
                  defaultValue="general"
                  className="w-full bg-bg-alt border border-border px-4 py-3 text-ink focus:outline-none focus:border-wham font-body appearance-none cursor-pointer"
                >
                  {TOPICS.map((t) => (
                    <option key={t.value} value={t.value} className="bg-bg">
                      {t.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Your message" name="message" required>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={6}
                  className="w-full bg-bg-alt border border-border px-4 py-3 text-ink focus:outline-none focus:border-wham font-body resize-y"
                  placeholder="What's on your mind?"
                />
              </Field>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={isPending}
                  className="bg-wham text-bg font-display font-extrabold uppercase tracking-tight text-base px-7 py-4 hover:bg-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontVariationSettings: '"wdth" 85' }}
                >
                  {isPending ? "Sending..." : "Send message →"}
                </button>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  We'll reply within 3 business days
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="h-label mb-4">Or email us directly</div>
          <h2 className="h-display text-3xl md:text-4xl text-ink mb-12">
            Pick the right inbox.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DirectEmailCard
              email="hello@whamr.com"
              label="General"
              desc="Anything that doesn't fit the other inboxes."
            />
            <DirectEmailCard
              email="press@whamr.com"
              label="Press"
              desc="Journalists, podcasters, content creators covering Whamr."
            />
            <DirectEmailCard
              email="partners@whamr.com"
              label="Partnerships"
              desc="Brand collaborations, integrations, and business development."
            />
            <DirectEmailCard
              email="support@whamr.com"
              label="Support"
              desc="Account issues, billing, technical help."
            />
            <DirectEmailCard
              email="privacy@whamr.com"
              label="Privacy"
              desc="GDPR, CCPA, data requests, deletion."
            />
            <DirectEmailCard
              email="security@whamr.com"
              label="Security"
              desc="Vulnerability disclosures, abuse reports."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-xs uppercase tracking-[0.15em] text-ink-dim mb-2"
      >
        {label}
        {required && <span className="text-wham ml-2">*</span>}
      </label>
      {children}
    </div>
  );
}

function DirectEmailCard({
  email,
  label,
  desc,
}: {
  email: string;
  label: string;
  desc: string;
}) {
  return (
    <a
      href={`mailto:${email}`}
      className="card-raise bg-bg border border-border p-6 block"
    >
      <div className="font-mono text-xs uppercase tracking-[0.15em] text-wham mb-3">
        {label}
      </div>
      <div className="h-display text-xl text-ink mb-2 break-all">{email}</div>
      <p className="text-ink-dim text-sm leading-relaxed">{desc}</p>
    </a>
  );
}
