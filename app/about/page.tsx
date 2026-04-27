import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 md:pt-32 pb-16 overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 md:px-10">
          <div className="h-label mb-6">About / The story</div>
          <h1 className="h-display text-[18vw] md:text-[12vw] lg:text-[160px] text-ink leading-[0.85]">
            What's a<br />
            <span className="text-wham italic">wham?</span>
          </h1>
        </div>
      </section>

      {/* NAME STORY */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-10 space-y-8 text-lg md:text-xl text-ink-dim leading-relaxed">
          <p>
            <em className="text-wham not-italic">Wham</em> is the sound of a
            perfect meme landing. Not a gentle tap. The full involuntary
            gut-reaction when someone drops exactly the right thing in the group
            chat and everyone loses it at once.
          </p>
          <p className="text-ink">
            Whamr is named after what great content does to people. Not what it
            is.
          </p>
          <p>
            That's a rare thing in a brand name: it's the reaction, not the
            format. Like TikTok captured the relentless tick of short-form
            content and Snapchat captured the ephemeral snap of a moment, Whamr
            captures the impact. The wham that lives at the heart of why people
            share things at all.
          </p>
        </div>
      </section>

      {/* WORKS AS */}
      <section className="py-16 bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="h-label mb-10">Three jobs, one word</div>
          <div className="space-y-8">
            <WordUse type="Noun" quote="That's an absolute whamr." />
            <WordUse type="Verb" quote="Just whamr'd it to the group." />
            <WordUse type="Brand" quote="Found it on Whamr." />
          </div>
        </div>
      </section>

      {/* WHAT WE ARE */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <div className="h-label mb-6">What Whamr is</div>
              <div className="bg-bg-alt border border-wham/40 p-8">
                <p className="text-ink leading-relaxed">
                  A content discovery, creation, and sharing platform built
                  around humour, pop culture, and digital expression. Browse a
                  feed of memes, stickers, GIFs, and short videos. Create your
                  own with built-in tools. Share to any messaging app or social
                  network without leaving the platform.
                </p>
              </div>
            </div>
            <div>
              <div className="h-label mb-6">What Whamr isn't <span className="text-ink-muted">(yet)</span></div>
              <div className="bg-bg-alt border border-border p-8">
                <p className="text-ink-dim leading-relaxed">
                  A live-streaming platform, a general-purpose social network,
                  or a professional video editor. Those belong to later
                  versions, or to other companies. We're here for the wham.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES / PRINCIPLES */}
      <section className="py-24 md:py-32 bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16">
            <div className="h-label mb-4">How we build</div>
            <h2 className="h-display text-5xl md:text-6xl text-ink max-w-3xl">
              Five things we care about.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Principle
              n="01"
              title="Speed beats polish"
              desc="A feed that loads in 2 seconds will always win a feed that loads in 4. Performance is a feature, not a chore."
            />
            <Principle
              n="02"
              title="Creators first"
              desc="80/20 split. Clear analytics. Fast payouts. If creators don't win, nobody does."
            />
            <Principle
              n="03"
              title="Culture is local"
              desc="A meme that kills in Lagos isn't the same one that kills in São Paulo. Regional feeds, regional trending, regional language. Day one."
            />
            <Principle
              n="04"
              title="Moderation is a service"
              desc="AI scan + human review with clear reasons, clear appeals. Not a black box that eats your post and disappears."
            />
            <Principle
              n="05"
              title="Interop or die"
              desc="People live across 15 messaging apps. Any platform that pretends otherwise loses. Whamr ships to all of them."
            />
            <Principle
              n="06"
              title="Ship small, ship often"
              desc="Weekly releases. Small changes compound. Big bang launches rarely survive contact with users."
            />
          </div>
        </div>
      </section>

      {/* VERSION MAP */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16">
            <div className="h-label mb-4">The roadmap</div>
            <h2 className="h-display text-5xl md:text-6xl text-ink max-w-3xl">
              Where we're going.
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            <VersionCard v="v1.0" name="Core Platform" desc="Discovery, sharing, editor, social graph" status="shipping" />
            <VersionCard v="v1.1" name="Creator Upgrade" desc="Video, layered editor, AI tagging, OAuth" status="next" />
            <VersionCard v="v1.2" name="Community & Growth" desc="Dojos, onboarding, share-link pages" status="planned" />
            <VersionCard v="v2.0" name="Multimedia" desc="Audio, premium content, monetisation" status="planned" />
            <VersionCard v="v3.0" name="Intelligence & Economy" desc="AI feed, brand marketplace, mobile apps" status="planned" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-center">
          <h2 className="h-display text-[16vw] md:text-[10vw] lg:text-[140px] text-ink leading-[0.9]">
            Join the
            <br />
            <span className="text-wham italic">wham.</span>
          </h2>
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            <Link href="/signup" className="btn-wham">
              Get Whamr →
            </Link>
            <Link href="/careers" className="btn-ghost">
              We're hiring
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function WordUse({ type, quote }: { type: string; quote: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10 border-b border-border pb-6">
      <div className="font-mono text-xs uppercase tracking-[0.15em] text-wham md:w-24 shrink-0">
        {type}
      </div>
      <div className="h-display text-3xl md:text-5xl text-ink italic">
        "{quote}"
      </div>
    </div>
  );
}

function Principle({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="card-raise bg-bg border border-border p-8">
      <div className="font-mono text-xs text-wham uppercase tracking-wider mb-6">
        {n}
      </div>
      <h3 className="h-display text-2xl text-ink mb-3">{title}</h3>
      <p className="text-ink-dim leading-relaxed">{desc}</p>
    </div>
  );
}

function VersionCard({
  v,
  name,
  desc,
  status,
}: {
  v: string;
  name: string;
  desc: string;
  status: "shipping" | "next" | "planned";
}) {
  const statusStyle = {
    shipping: "bg-wham text-bg border-wham",
    next: "bg-bg border-wham/60 text-ink",
    planned: "bg-bg-alt border-border text-ink-dim",
  }[status];
  const statusText = {
    shipping: "SHIPPING",
    next: "UP NEXT",
    planned: "PLANNED",
  }[status];

  return (
    <div className={`card-raise p-6 border h-full flex flex-col ${statusStyle}`}>
      <div className="h-display text-3xl mb-2">{v}</div>
      <h3 className="h-display text-xl mb-2">{name}</h3>
      <p className="text-sm opacity-80 leading-relaxed flex-1">{desc}</p>
      <div className="mt-6 font-mono text-xs uppercase tracking-wider opacity-70">
        {statusText}
      </div>
    </div>
  );
}
