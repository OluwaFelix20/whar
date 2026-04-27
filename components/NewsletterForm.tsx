"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus("ok");
        setMessage(data.message ?? "Thanks for subscribing.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something broke. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Try again in a minute.");
    }
  };

  if (status === "ok") {
    return (
      <div className="text-center py-4">
        <div className="h-display text-3xl text-bg mb-2">✓ {message}</div>
        <p className="text-bg/70 font-mono text-xs uppercase tracking-wider">
          Watch your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === "loading"}
          className="flex-1 bg-bg text-ink px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-bg disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-bg text-wham font-display font-extrabold uppercase px-6 py-3 hover:-translate-y-0.5 transition-transform disabled:opacity-50 disabled:cursor-wait"
          style={{ fontVariationSettings: '"wdth" 85' }}
        >
          {status === "loading" ? "Sending..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-center font-mono text-xs uppercase tracking-wider text-bg/80">
          {message}
        </p>
      )}
    </form>
  );
}
