import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 md:pt-32 pb-16 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="h-label mb-6">Pricing</div>
          <h1 className="h-display text-[18vw] md:text-[12vw] lg:text-[160px] text-ink leading-[0.85] max-w-5xl">
            Free to start.
            <br />
            <span className="text-wham italic">Fair to scale.</span>
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-ink-dim max-w-2xl leading-tight">
            Three tiers. No hidden fees. No bait-and-switch. You always know
            what you're paying for.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-4">
            {/* FREE */}
            <div className="card-raise bg-bg-alt border border-border p-8 md:p-10 flex flex-col">
              <div className="h-label mb-4">For everyone</div>
              <h2 className="h-display text-4xl text-ink mb-2">Free</h2>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="h-display text-6xl text-ink">$0</span>
                <span className="text-ink-muted">/forever</span>
              </div>
              <p className="text-ink-dim mb-8 leading-relaxed">
                Full access to browsing, creating, sharing. Everything the
                platform does, with reasonable limits.
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                <Feat>Unlimited browse + feed</Feat>
                <Feat>Basic meme editor</Feat>
                <Feat>20 sticker exports per day</Feat>
                <Feat>3 pack exports per day</Feat>
                <Feat>Share to all 15+ platforms</Feat>
                <Feat>Collections, DMs, Dojos</Feat>
                <Feat muted>Ads in feed</Feat>
              </ul>
              <Link href="/signup" className="btn-ghost w-full justify-center">
                Start free
              </Link>
            </div>

            {/* PRO - highlighted */}
            <div className="card-raise bg-wham text-bg border border-wham p-8 md:p-10 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bg text-wham font-mono text-xs uppercase tracking-[0.15em] px-3 py-1">
                Most picked
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-bg/60 mb-4">
                For power users
              </div>
              <h2 className="h-display text-4xl text-bg mb-2">PRO</h2>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="h-display text-6xl text-bg">$4.99</span>
                <span className="text-bg/70">/month</span>
              </div>
              <p className="text-bg/80 mb-8 leading-relaxed">
                For people who use Whamr daily. Everything unlocked. No ads. No
                limits.
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                <Feat dark>Everything in Free</Feat>
                <Feat dark>Ad-free experience</Feat>
                <Feat dark>Unlimited sticker + pack exports</Feat>
                <Feat dark>Higher upload limits</Feat>
                <Feat dark>Access to all premium content</Feat>
                <Feat dark>Priority support</Feat>
              </ul>
              <Link
                href="/signup?tier=pro"
                className="inline-flex items-center justify-center gap-2 bg-bg text-wham font-display font-extrabold uppercase tracking-tight px-6 py-4 hover:-translate-y-1 transition-transform"
                style={{ fontVariationSettings: '"wdth" 85' }}
              >
                Get PRO →
              </Link>
            </div>

            {/* CREATOR */}
            <div className="card-raise bg-bg-alt border border-border p-8 md:p-10 flex flex-col">
              <div className="h-label mb-4">For creators</div>
              <h2 className="h-display text-4xl text-ink mb-2">Creator</h2>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="h-display text-6xl text-ink">$9.99</span>
                <span className="text-ink-muted">/month</span>
              </div>
              <p className="text-ink-dim mb-8 leading-relaxed">
                The full toolkit. Monetisation unlocked. Analytics included.
                Keep 80% of what you earn.
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                <Feat>Everything in PRO</Feat>
                <Feat>Monetisation enabled</Feat>
                <Feat>Creator analytics dashboard</Feat>
                <Feat>Audience insights</Feat>
                <Feat>Video uploads up to 5 min</Feat>
                <Feat>Brand marketplace (v3.0)</Feat>
                <Feat>Direct Stripe payouts</Feat>
              </ul>
              <Link href="/signup?tier=creator" className="btn-ghost w-full justify-center">
                Apply to Create
              </Link>
            </div>
          </div>

          <p className="mt-12 text-center font-mono text-xs text-ink-muted uppercase tracking-wider">
            All tiers. All platforms. Cancel anytime. No long-term contract.
          </p>
        </div>
      </section>

      {/* REVENUE SPLIT NOTE */}
      <section className="py-16 md:py-24 bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
          <div className="h-label mb-6">Creator revenue</div>
          <h2 className="h-display text-4xl md:text-6xl text-ink mb-6">
            You keep <span className="text-wham">80%</span>. Every time.
          </h2>
          <p className="text-ink-dim max-w-xl mx-auto text-lg leading-relaxed">
            Premium unlocks, subscriptions, brand deals. Whamr takes a flat
            20%. No tiers on the split. No surprises. Minimum payout: $25. Paid
            via Stripe Connect or PayPal.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="h-label mb-4">FAQ</div>
          <h2 className="h-display text-5xl md:text-6xl text-ink mb-12">
            Quick answers.
          </h2>
          <div className="space-y-4">
            <Faq q="Can I cancel anytime?" a="Yes. No contract, no minimum term. Cancel from your account settings and your plan continues until the end of the current billing period." />
            <Faq q="What happens if I stop being a Creator?" a="Your existing earnings pay out as normal. Premium content stays up but no new monetisation activity is tracked. Downgrade anytime." />
            <Faq q="Are there team or business plans?" a="Not yet. Whamr is built for individual consumers and creators. Enterprise/white-label is on the v3.0+ horizon, not now." />
            <Faq q="Which countries can receive payouts?" a="Anywhere Stripe Connect or PayPal operates. Currency conversion handled automatically. Pick your preferred payout currency in settings." />
            <Faq q="What counts as a sticker export?" a="Each time you export a single sticker to any platform (WhatsApp, Telegram, Signal, etc). A pack export counts as one pack, not N stickers." />
          </div>
        </div>
      </section>
    </>
  );
}

function Feat({
  children,
  dark,
  muted,
}: {
  children: React.ReactNode;
  dark?: boolean;
  muted?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-1 shrink-0 font-mono text-sm ${
          dark ? "text-bg" : muted ? "text-ink-muted" : "text-wham"
        }`}
      >
        →
      </span>
      <span
        className={`${
          dark
            ? "text-bg"
            : muted
              ? "text-ink-muted line-through"
              : "text-ink-dim"
        }`}
      >
        {children}
      </span>
    </li>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-bg-alt border border-border p-6 [&_summary]:cursor-pointer">
      <summary className="flex items-center justify-between gap-4 list-none">
        <h3 className="h-display text-xl md:text-2xl text-ink">{q}</h3>
        <span className="h-display text-3xl text-wham leading-none group-open:rotate-45 transition-transform shrink-0">
          +
        </span>
      </summary>
      <p className="mt-4 text-ink-dim leading-relaxed">{a}</p>
    </details>
  );
}
