import Link from "next/link";

export default function DojosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 md:pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-heat/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="h-label mb-6">Dojos / Community spaces</div>
          <h1 className="h-display text-[18vw] md:text-[12vw] lg:text-[160px] text-ink leading-[0.85] max-w-5xl">
            Your crew.
            <br />
            <span className="text-heat italic">Your rules.</span>
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-ink-dim max-w-2xl leading-tight">
            A Dojo is a space on Whamr for people who share your sense of
            humour. Private, public, or invite-only. Dedicated feed, pinned
            posts, admin tools. It's a group chat that doesn't die after 48
            hours.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/signup" className="btn-wham">
              Start a Dojo →
            </Link>
            <Link href="/dojos/discover" className="btn-ghost">
              Browse Dojos
            </Link>
          </div>
        </div>
      </section>

      {/* VISIBILITY MODES */}
      <section className="py-24 md:py-32 bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16">
            <div className="h-label mb-4">Three visibility modes</div>
            <h2 className="h-display text-5xl md:text-6xl text-ink max-w-3xl">
              Build the room you actually want.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <VisibilityCard
              icon="◉"
              label="Public"
              desc="Anyone can find it, anyone can join. Best for big fandoms, city-based groups, or general-interest spaces."
            />
            <VisibilityCard
              icon="◐"
              label="Private"
              desc="Shows up in search, but you have to approve each join request. Best for vetted communities."
            />
            <VisibilityCard
              icon="○"
              label="Secret"
              desc="Invite-only. Doesn't appear in search at all. Your group chat, but with better tools."
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16">
            <div className="h-label mb-4">What every Dojo gets</div>
            <h2 className="h-display text-5xl md:text-6xl text-ink max-w-3xl">
              Tools that make running it actually possible.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <DojoFeature
              title="Dedicated feed"
              desc="Content posted to the Dojo shows up only in the Dojo. Members can still cross-post to their profile. Pinned posts hold at the top."
            />
            <DojoFeature
              title="Member roles"
              desc="Admin, Moderator, Member. Promote trusted members to help run the place. Remove the bad actors in two taps."
            />
            <DojoFeature
              title="Rules on join"
              desc="Write your rules in markdown. New members see them on join. Read the room before they post."
            />
            <DojoFeature
              title="Invite links"
              desc="Generate a link with a max-use count and expiry. Share it externally. Each join tracked. Revoke anytime."
            />
            <DojoFeature
              title="Reports + moderation"
              desc="Members report, mods action. All queued, all auditable. Actions logged for transparency."
            />
            <DojoFeature
              title="Discovery"
              desc="Public Dojos appear on the Discover page. Filter by category. Featured Dojos get boosted. Grow your crew."
            />
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="py-24 md:py-32 bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16">
            <div className="h-label mb-4">How to start yours</div>
            <h2 className="h-display text-5xl md:text-6xl text-ink max-w-3xl">
              Four steps. Five minutes.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Name it", d: "Pick a name, a short description, a cover image." },
              { n: "02", t: "Set rules", d: "Write what's allowed, what's not. Markdown supported." },
              { n: "03", t: "Invite", d: "Generate an invite link or share publicly." },
              { n: "04", t: "Post", d: "First pinned post sets the vibe. Go." },
            ].map((s) => (
              <div key={s.n} className="card-raise bg-bg border border-border p-6">
                <div className="h-display text-3xl text-wham mb-4">{s.n}</div>
                <h3 className="h-display text-xl text-ink mb-2">{s.t}</h3>
                <p className="text-ink-dim text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-center">
          <h2 className="h-display text-[16vw] md:text-[10vw] lg:text-[140px] text-ink leading-[0.9]">
            Build the room.
            <br />
            <span className="text-heat italic">Fill it up.</span>
          </h2>
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            <Link href="/signup" className="btn-wham">
              Start a Dojo →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function VisibilityCard({
  icon,
  label,
  desc,
}: {
  icon: string;
  label: string;
  desc: string;
}) {
  return (
    <div className="card-raise bg-bg border border-border p-8">
      <div className="h-display text-6xl text-wham mb-6 leading-none">{icon}</div>
      <h3 className="h-display text-3xl text-ink mb-3">{label}</h3>
      <p className="text-ink-dim leading-relaxed">{desc}</p>
    </div>
  );
}

function DojoFeature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card-raise bg-bg-alt border border-border p-8">
      <h3 className="h-display text-2xl text-ink mb-3">
        <span className="text-wham mr-3">→</span>
        {title}
      </h3>
      <p className="text-ink-dim leading-relaxed pl-8">{desc}</p>
    </div>
  );
}
