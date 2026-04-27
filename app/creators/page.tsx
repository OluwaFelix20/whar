import Link from "next/link";

export default function CreatorsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 md:pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-heat/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="h-label mb-6">For Creators</div>
          <h1 className="h-display text-[18vw] md:text-[12vw] lg:text-[160px] text-ink leading-[0.85] max-w-5xl">
            Get paid to make
            <br />
            <span className="text-wham italic">the internet laugh.</span>
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-ink-dim max-w-2xl leading-tight">
            Full editor. Real analytics. Direct payouts. Keep 80% of what you
            earn — we take 20%. No subscribers to chase, no algorithms to game.
            Just make good stuff and get paid when it travels.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/signup?tier=creator" className="btn-wham">
              Apply to Create →
            </Link>
            <Link href="/pricing" className="btn-ghost">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* REVENUE SPLIT BIG MOMENT */}
      <section className="py-16 md:py-24 bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="h-label mb-4">The split</div>
              <div className="flex items-baseline gap-2">
                <span className="h-display text-[30vw] md:text-[22vw] lg:text-[260px] text-wham leading-none">
                  80
                </span>
                <span className="h-display text-6xl md:text-9xl text-ink">%</span>
              </div>
              <p className="mt-6 text-xl text-ink-dim max-w-md">
                Of every premium unlock, subscription, and brand deal. Goes
                straight to you. We take 20%. That's it.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-bg border border-border p-6">
                <div className="font-mono text-xs uppercase tracking-wider text-wham mb-2">
                  Example / $1,000 earned
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="h-display text-3xl text-ink">You keep</span>
                  <span className="h-display text-4xl text-wham">$800</span>
                </div>
              </div>
              <div className="bg-bg border border-border p-6">
                <div className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                  Platform share
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="h-display text-3xl text-ink-dim">Whamr takes</span>
                  <span className="h-display text-4xl text-ink-dim">$200</span>
                </div>
              </div>
              <div className="font-mono text-xs text-ink-muted uppercase tracking-wider pt-4">
                → Minimum payout threshold: $25 · Payout via Stripe Connect or PayPal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW YOU EARN */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16">
            <div className="h-label mb-4">How you earn</div>
            <h2 className="h-display text-5xl md:text-6xl text-ink max-w-3xl">
              Three revenue streams. One dashboard.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <EarnCard
              n="01"
              title="Premium content"
              desc="Mark any post as Premium. Set a price between $0.99 and $9.99. Consumers unlock with one tap. You keep 80%."
              tag="One-time unlock"
            />
            <EarnCard
              n="02"
              title="Creator subscription"
              desc="Monthly subscribers get everything you make. Price: $1.99 to $19.99/month. Recurring revenue. Compounding over time."
              tag="Monthly recurring"
              highlight
            />
            <EarnCard
              n="03"
              title="Brand marketplace"
              desc="Brands post briefs. You submit proposals. Content produced, approved, paid from escrow. All transparent. All labelled."
              tag="Coming v3.0"
            />
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-24 md:py-32 bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16">
            <div className="h-label mb-4">Your toolkit</div>
            <h2 className="h-display text-5xl md:text-6xl text-ink max-w-3xl">
              Pro-grade tools. Zero pro price tag.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <ToolCard
              icon="✎"
              title="Multi-layer editor"
              desc="Draggable text layers, per-layer font and colour, 20-step undo, template marketplace, AI caption suggestions in under 2 seconds."
            />
            <ToolCard
              icon="▣"
              title="Video + GIF export"
              desc="Upload up to 5 minutes on the Creator tier. Trim, crop, overlay text. Auto-transcoded to MP4 + WebM. Export short clips as GIF."
            />
            <ToolCard
              icon="▤"
              title="Analytics dashboard"
              desc="Per-post views, likes, comments, shares, downloads, and virality. Over time. By platform. Top performers surfaced."
            />
            <ToolCard
              icon="◯"
              title="Audience insights"
              desc="Where your followers are, when they're most active, what they click on. Best time to post, calculated from actual data."
            />
            <ToolCard
              icon="✦"
              title="Viral alerts"
              desc="When any post exceeds 10× your average engagement in 24 hours, we ping you. Catch the moment, make more of it."
            />
            <ToolCard
              icon="↗"
              title="Cross-platform reach"
              desc="See every external share of your content broken down by platform. Know which content travels where."
            />
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="bg-wham text-bg p-10 md:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-bg/60 mb-6">
                How to become a creator
              </div>
              <h2 className="h-display text-5xl md:text-7xl text-bg leading-[0.9] mb-8">
                Apply. Get verified. Start earning.
              </h2>
              <ol className="space-y-4 mb-10">
                <li className="flex gap-4 items-baseline">
                  <span className="h-display text-3xl text-bg w-10">1</span>
                  <span className="text-bg text-lg">
                    Create a free Whamr account and upload at least 3 posts
                  </span>
                </li>
                <li className="flex gap-4 items-baseline">
                  <span className="h-display text-3xl text-bg w-10">2</span>
                  <span className="text-bg text-lg">
                    Submit your creator application (link your socials, share
                    your best work)
                  </span>
                </li>
                <li className="flex gap-4 items-baseline">
                  <span className="h-display text-3xl text-bg w-10">3</span>
                  <span className="text-bg text-lg">
                    Get reviewed within 72 hours. Connect Stripe. Start
                    monetising the same day.
                  </span>
                </li>
              </ol>
              <Link
                href="/signup?tier=creator"
                className="inline-flex items-center gap-2 bg-bg text-wham font-display font-extrabold uppercase px-8 py-4 text-lg hover:-translate-y-1 transition-transform"
                style={{ fontVariationSettings: '"wdth" 85' }}
              >
                Apply now →
              </Link>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-bg/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </>
  );
}

function EarnCard({
  n,
  title,
  desc,
  tag,
  highlight,
}: {
  n: string;
  title: string;
  desc: string;
  tag: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`card-raise p-8 border h-full flex flex-col ${
        highlight
          ? "bg-wham text-bg border-wham"
          : "bg-bg-alt border-border text-ink"
      }`}
    >
      <div
        className={`h-display text-4xl mb-6 ${
          highlight ? "text-bg" : "text-wham"
        }`}
      >
        {n}
      </div>
      <h3
        className={`h-display text-3xl mb-3 ${highlight ? "text-bg" : "text-ink"}`}
      >
        {title}
      </h3>
      <p
        className={`leading-relaxed flex-1 ${
          highlight ? "text-bg/80" : "text-ink-dim"
        }`}
      >
        {desc}
      </p>
      <div
        className={`mt-6 font-mono text-xs uppercase tracking-wider ${
          highlight ? "text-bg/70" : "text-ink-muted"
        }`}
      >
        → {tag}
      </div>
    </div>
  );
}

function ToolCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card-raise bg-bg border border-border p-8 flex gap-6">
      <div className="h-display text-5xl text-wham leading-none shrink-0">{icon}</div>
      <div>
        <h3 className="h-display text-2xl text-ink mb-2">{title}</h3>
        <p className="text-ink-dim leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
