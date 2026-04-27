import Link from "next/link";

const platforms = [
  "WhatsApp", "Telegram", "Discord", "Twitter/X", "Instagram", "TikTok",
  "iMessage", "Snapchat", "Signal", "Reddit", "LinkedIn", "Pinterest",
  "Line", "Messenger", "Email",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 md:pt-32 pb-24 md:pb-40 overflow-hidden">
        {/* Decorative wham burst */}
        <div className="absolute -top-20 -right-20 md:-right-40 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-wham/10 blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[300px] h-[300px] rounded-full bg-heat/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8 reveal" style={{ animationDelay: "0.1s" }}>
            <span className="block w-2 h-2 bg-wham rounded-full animate-pulse" />
            <span className="h-label">Now shipping v1.0</span>
          </div>

          <h1
            className="h-display text-[22vw] md:text-[16vw] lg:text-[200px] text-ink reveal"
            style={{ animationDelay: "0.2s" }}
          >
            Send the
            <br />
            <span className="text-wham italic">wham.</span>
          </h1>

          <div className="mt-10 grid md:grid-cols-2 gap-8 items-end">
            <p
              className="text-xl md:text-2xl text-ink-dim max-w-xl leading-tight reveal"
              style={{ animationDelay: "0.4s" }}
            >
              The right meme, the perfect reaction, the sticker that nails the
              moment. <span className="text-ink">Find it.</span>{" "}
              <span className="text-ink">Make it.</span>{" "}
              <span className="text-ink">Send it</span>{" "}
              <span className="text-wham">anywhere</span> in one tap.
            </p>

            <div
              className="flex flex-wrap gap-3 reveal"
              style={{ animationDelay: "0.6s" }}
            >
              <Link href="/signup" className="btn-wham">
                Get Whamr →
              </Link>
              <Link href="/stickers" className="btn-ghost">
                See it work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM MARQUEE */}
      <section className="border-y border-border py-8 bg-bg-alt overflow-hidden">
        <div className="flex items-center gap-16 marquee-track whitespace-nowrap">
          {[...platforms, ...platforms].map((p, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="h-display text-4xl md:text-5xl text-ink-muted">
                {p}
              </span>
              <span className="text-wham text-3xl">✦</span>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-6">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
            ↑ Ship your content to every platform that matters, correctly
            formatted, automatically
          </p>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="h-label mb-4">01 / Built for three</div>
              <h2 className="h-display text-5xl md:text-7xl text-ink max-w-2xl">
                Three reasons to be here.
              </h2>
            </div>
            <p className="text-ink-dim max-w-md">
              Whamr works different depending on who you are. Pick your flavour.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Consumers */}
            <div className="card-raise bg-bg-alt border border-border p-8 md:p-10 relative overflow-hidden">
              <div className="flex items-start justify-between mb-12">
                <span className="h-label">For consumers</span>
                <span className="font-mono text-xs text-ink-muted">001</span>
              </div>
              <div className="text-6xl mb-6">💀</div>
              <h3 className="h-display text-4xl text-ink mb-4">
                Find it <span className="text-wham">fast.</span>
              </h3>
              <p className="text-ink-dim leading-relaxed">
                A personalised feed that learns what makes you laugh. Search by
                vibe, not keywords. Share to any app without leaving the post.
              </p>
              <ul className="mt-8 space-y-2 font-mono text-xs uppercase tracking-wider text-ink-dim">
                <li>→ Trending in under 300ms</li>
                <li>→ One-tap share to 15+ apps</li>
                <li>→ Save to collections</li>
              </ul>
            </div>

            {/* Creators */}
            <div className="card-raise bg-wham text-bg border border-wham p-8 md:p-10 relative overflow-hidden">
              <div className="flex items-start justify-between mb-12">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-bg/70">
                  For creators
                </span>
                <span className="font-mono text-xs text-bg/70">002</span>
              </div>
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="h-display text-4xl text-bg mb-4">
                Build it. Earn it.
              </h3>
              <p className="text-bg/80 leading-relaxed">
                Pro editor with layers, undo, AI captions. Publish, get analytics,
                monetise. Keep 80%. Platform takes 20%.
              </p>
              <ul className="mt-8 space-y-2 font-mono text-xs uppercase tracking-wider text-bg/70">
                <li>→ Multi-layer meme editor</li>
                <li>→ Per-post analytics</li>
                <li>→ Stripe payouts at $25</li>
              </ul>
              <Link
                href="/creators"
                className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-bg border-b border-bg pb-1"
              >
                Start creating →
              </Link>
            </div>

            {/* Communities */}
            <div className="card-raise bg-bg-alt border border-border p-8 md:p-10 relative overflow-hidden">
              <div className="flex items-start justify-between mb-12">
                <span className="h-label">For communities</span>
                <span className="font-mono text-xs text-ink-muted">003</span>
              </div>
              <div className="text-6xl mb-6">🔥</div>
              <h3 className="h-display text-4xl text-ink mb-4">
                Run your <span className="text-heat">Dojo.</span>
              </h3>
              <p className="text-ink-dim leading-relaxed">
                Private, public, invite-only spaces. Dedicated feeds. Admin tools.
                Rules that actually get read. Members who actually post.
              </p>
              <ul className="mt-8 space-y-2 font-mono text-xs uppercase tracking-wider text-ink-dim">
                <li>→ 3 visibility modes</li>
                <li>→ Invite links with expiry</li>
                <li>→ Pinned posts + rules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STICKER EXPORT HIGHLIGHT */}
      <section className="py-24 md:py-40 bg-bg-alt relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-wham/5 to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 lg:col-span-5">
              <div className="h-label mb-6">02 / The killer feature</div>
              <h2 className="h-display text-5xl md:text-7xl text-ink leading-[0.9]">
                One pack.
                <br />
                <span className="text-wham">Every</span>
                <br />
                messaging
                <br />
                app.
              </h2>
              <p className="mt-8 text-ink-dim text-lg max-w-md leading-relaxed">
                Upload once. Whamr handles the format conversion, size limits,
                and platform-specific packaging for WhatsApp, Telegram, Signal,
                Discord, iMessage, Snapchat, Line, and more. Zero manual steps.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/stickers" className="btn-wham">
                  How it works →
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
                <div>
                  <div className="h-display text-3xl text-wham">15+</div>
                  <div className="font-mono text-xs text-ink-muted uppercase tracking-wider mt-1">
                    Platforms
                  </div>
                </div>
                <div>
                  <div className="h-display text-3xl text-wham">&lt;10s</div>
                  <div className="font-mono text-xs text-ink-muted uppercase tracking-wider mt-1">
                    Per pack
                  </div>
                </div>
                <div>
                  <div className="h-display text-3xl text-wham">0</div>
                  <div className="font-mono text-xs text-ink-muted uppercase tracking-wider mt-1">
                    Manual steps
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-7">
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {[
                  { emoji: "🫠", bg: "#FF2E5C" },
                  { emoji: "😭", bg: "#D4FF3D" },
                  { emoji: "💀", bg: "#F5F1E8" },
                  { emoji: "🔥", bg: "#FF8A3D" },
                  { emoji: "👁️", bg: "#3D9FFF" },
                  { emoji: "✨", bg: "#D4FF3D" },
                  { emoji: "🥲", bg: "#FF2E5C" },
                  { emoji: "😤", bg: "#F5F1E8" },
                  { emoji: "⚡", bg: "#FF8A3D" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="sticker-mock card-raise"
                    style={{ background: s.bg }}
                  >
                    <span className="relative z-10">{s.emoji}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-ink-muted">
                <span>↳ wham_reactions_pack_01.wastickers</span>
                <span className="text-wham">READY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE TRIO */}
      <section className="py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16">
            <div className="h-label mb-4">03 / Everything in the box</div>
            <h2 className="h-display text-5xl md:text-7xl text-ink max-w-3xl">
              A full content studio. In your pocket.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard
              label="Editor"
              title="Meme in 10 seconds"
              desc="Layers, text, filters, 10 classic templates built in. AI-suggested captions. Export as PNG, WebP, APNG, or GIF."
              items={["Multi-layer canvas", "20-step undo stack", "AI caption button"]}
            />
            <FeatureCard
              label="Feed"
              title="Trained on your taste"
              desc="A personalised ranking that learns what you like, when you watch, what you skip. Plus a Rising feed for catching content before it goes viral."
              items={["Virality score", "Rising feed (2h window)", "Interest graph"]}
            />
            <FeatureCard
              label="DMs"
              title="Send it straight"
              desc="One-tap share from feed into any DM. Read receipts, typing indicators, inline media preview. Unsend within the first hour."
              items={["Read receipts", "Media in-line", "Undo send (60 min)"]}
            />
            <FeatureCard
              label="Collections"
              title="Your library, curated"
              desc="Pinterest-style boards for saved content. Public or private. Invite collaborators. No limit on collections."
              items={["Public or private", "Collaborator invites", "No item cap"]}
            />
            <FeatureCard
              label="Bulk Export"
              title="50 at a time"
              desc="Pick up to 50 items and bundle them into one archive per platform, correctly formatted. Cached on repeat export."
              items={["Multi-select UI", "Platform-specific bundles", "Instant on cache hit"]}
            />
            <FeatureCard
              label="Moderation"
              title="Safe without slow"
              desc="AI scans NSFW, hate, copyright on upload. High-confidence decisions auto-route. Human review in 30 min for edge cases."
              items={["Confidence-banded routing", "Appeal flow", "Creator reason + next steps"]}
            />
          </div>
        </div>
      </section>

      {/* NUMBERS STRIP */}
      <section className="py-24 border-y border-border bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="h-label mb-10">Where we're headed / 12 months</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat number="100k" label="Monthly active users" />
            <Stat number="1,000" label="Earning creators" />
            <Stat number="500k+" label="Content items" />
            <Stat number="8+" label="Platforms per share" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-wham/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 text-center">
          <h2 className="h-display text-[20vw] md:text-[14vw] lg:text-[200px] text-ink leading-[0.85]">
            Go on.
            <br />
            <span className="text-wham italic">Send it.</span>
          </h2>
          <p className="mt-10 text-xl text-ink-dim max-w-md mx-auto">
            Free to start. No credit card. Five seconds to your first post.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="/signup" className="btn-wham">
              Get Whamr →
            </Link>
            <Link href="/creators" className="btn-ghost">
              I'm a creator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  label,
  title,
  desc,
  items,
}: {
  label: string;
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <div className="card-raise bg-bg-alt border border-border p-8 h-full flex flex-col">
      <div className="h-label mb-8">{label}</div>
      <h3 className="h-display text-3xl text-ink mb-3">{title}</h3>
      <p className="text-ink-dim leading-relaxed">{desc}</p>
      <ul className="mt-6 space-y-2 font-mono text-xs uppercase tracking-wider text-ink-muted">
        {items.map((it, i) => (
          <li key={i}>→ {it}</li>
        ))}
      </ul>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="h-display text-5xl md:text-7xl text-ink">
        {number}
        <span className="text-wham">.</span>
      </div>
      <div className="font-mono text-xs uppercase tracking-wider text-ink-muted mt-2">
        {label}
      </div>
    </div>
  );
}
