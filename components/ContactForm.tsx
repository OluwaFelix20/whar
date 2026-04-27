"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "General",
    message: "",
    honeypot: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("sent");
      setForm({ name: "", email: "", topic: "General", message: "", honeypot: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-wham/10 border border-wham/40 p-8 md:p-10 text-center">
        <div className="h-display text-5xl text-wham mb-4">✓</div>
        <h3 className="h-display text-3xl text-ink mb-3">Got it.</h3>
        <p className="text-ink-dim leading-relaxed">
          Your message landed. We typically reply within one business day.
          Check the inbox for the email you provided.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-wham hover:text-ink transition-colors"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="honeypot"
        tabIndex={-1}
        autoComplete="off"
        value={form.honeypot}
        onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
        style={{ position: "absolute", left: "-9999px", height: 0, width: 0 }}
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="Name"
          required
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          placeholder="Jane Doe"
        />
        <Field
          label="Email"
          required
          type="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted mb-2 block">
          Topic
        </label>
        <select
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          className="w-full bg-bg border border-border px-4 py-3 text-ink focus:outline-none focus:border-wham transition-colors font-body"
        >
          <option>General</option>
          <option>Press / media</option>
          <option>Partnerships</option>
          <option>Creator support</option>
          <option>Bug or feedback</option>
          <option>Legal / privacy</option>
        </select>
      </div>

      <div>
        <label className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted mb-2 block">
          Message <span className="text-heat">*</span>
        </label>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          maxLength={5000}
          placeholder="Tell us what's going on..."
          className="w-full bg-bg border border-border px-4 py-3 text-ink focus:outline-none focus:border-wham transition-colors font-body resize-none"
        />
        <div className="flex justify-between mt-1">
          <span></span>
          <span className="font-mono text-[10px] text-ink-muted">
            {form.message.length} / 5000
          </span>
        </div>
      </div>

      {status === "error" && (
        <div className="bg-heat/10 border border-heat/40 p-4 font-mono text-xs uppercase tracking-wider text-heat">
          ✕ {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-wham disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message →"}
      </button>
    </form>
  );
}

function Field({
  label,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted mb-2 block">
        {label}
        {required && <span className="text-heat ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-bg border border-border px-4 py-3 text-ink focus:outline-none focus:border-wham transition-colors font-body placeholder:text-ink-muted"
      />
    </div>
  );
}
