import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import AvatarUploader from "@/components/AvatarUploader";
import StickerUploader from "@/components/StickerUploader";

type StickerEntry = {
  url: string;
  publicId: string;
  format: string;
  uploadedAt: string;
};

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName = user?.firstName ?? user?.username ?? "there";

  const cloudinaryAvatarUrl = user?.publicMetadata?.cloudinaryAvatarUrl as
    | string
    | undefined;
  const stickers =
    (user?.publicMetadata?.stickers as StickerEntry[] | undefined) ?? [];

  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 md:pt-32 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wham/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="h-label mb-6">You're in</div>
          <h1 className="h-display text-[14vw] md:text-[10vw] lg:text-[140px] text-ink leading-[0.85]">
            Hey {firstName}.
            <br />
            <span className="text-wham italic">Welcome.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-ink-dim max-w-2xl leading-tight">
            Set up your profile, build your sticker library, and explore what's
            launching when v1.0 ships.
          </p>
        </div>
      </section>

      {/* AVATAR UPLOADER */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <AvatarUploader initialAvatarUrl={cloudinaryAvatarUrl} />
        </div>
      </section>

      {/* STICKER UPLOADER */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <StickerUploader initialStickers={stickers} />
        </div>
      </section>

      {/* WHAT'S COMING */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12">
            <div className="h-label mb-4">What's launching</div>
            <h2 className="h-display text-4xl md:text-5xl text-ink max-w-3xl">
              Three weeks until v1.0
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <ComingCard
              status="ready"
              n="01"
              title="Feed"
              desc="Personalised stream of memes, stickers, GIFs, and short videos. Trending, New, and category tabs."
            />
            <ComingCard
              status="ready"
              n="02"
              title="Editor"
              desc="Build memes from 10 classic templates or upload your own. AI captions, layered text, instant export."
            />
            <ComingCard
              status="ready"
              n="03"
              title="Sticker exporter"
              desc="One pack, every messaging app. WhatsApp, Telegram, Signal, Discord, iMessage, and more."
            />
            <ComingCard
              status="next"
              n="04"
              title="Dojos"
              desc="Group spaces for shared interests. Public, private, or invite-only. Pinned posts, member roles, rules."
            />
            <ComingCard
              status="next"
              n="05"
              title="DMs"
              desc="Direct messages with read receipts, typing indicators, and inline media. Unsend within the first hour."
            />
            <ComingCard
              status="planned"
              n="06"
              title="Creator monetisation"
              desc="Premium content unlocks, monthly subscriptions, brand marketplace. 80/20 revenue split."
            />
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="py-16 md:py-24 bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12">
            <div className="h-label mb-4">In the meantime</div>
            <h2 className="h-display text-4xl md:text-5xl text-ink max-w-3xl">
              Three things you can do right now.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/stickers/try"
              className="card-raise bg-bg border border-border p-8 block"
            >
              <div className="h-display text-5xl text-wham mb-6 leading-none">
                ↓
              </div>
              <h3 className="h-display text-2xl text-ink mb-3">
                Try the sticker converter
              </h3>
              <p className="text-ink-dim leading-relaxed mb-6">
                Drop an image, watch it convert to 6 platform formats live.
                Real conversion, in your browser, right now.
              </p>
              <span className="font-mono text-xs uppercase tracking-wider text-wham">
                Open converter →
              </span>
            </Link>

            <Link
              href="/blog"
              className="card-raise bg-bg border border-border p-8 block"
            >
              <div className="h-display text-5xl text-wham mb-6 leading-none">
                ✎
              </div>
              <h3 className="h-display text-2xl text-ink mb-3">
                Read the blog
              </h3>
              <p className="text-ink-dim leading-relaxed mb-6">
                Tutorials, deep dives on cross-platform sticker formats, and a
                creator's guide to monetising your work.
              </p>
              <span className="font-mono text-xs uppercase tracking-wider text-wham">
                Browse posts →
              </span>
            </Link>

            <Link
              href="/creators"
              className="card-raise bg-bg border border-border p-8 block"
            >
              <div className="h-display text-5xl text-wham mb-6 leading-none">
                ◎
              </div>
              <h3 className="h-display text-2xl text-ink mb-3">
                Apply to be a creator
              </h3>
              <p className="text-ink-dim leading-relaxed mb-6">
                Get early access to the creator tools. 80/20 revenue split.
                Pre-register now and skip the queue at launch.
              </p>
              <span className="font-mono text-xs uppercase tracking-wider text-wham">
                See requirements →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="bg-wham text-bg p-10 md:p-16 text-center">
            <h2 className="h-display text-4xl md:text-6xl text-bg leading-[0.9] mb-6">
              We'll email when v1.0 ships.
            </h2>
            <p className="text-bg/80 max-w-lg mx-auto mb-8 text-lg">
              You're already on the list. We'll send one email when the feed,
              editor, and full app are live. No spam in between.
            </p>
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-bg/70">
              Estimated launch · Mid-2026
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ComingCard({
  status,
  n,
  title,
  desc,
}: {
  status: "ready" | "next" | "planned";
  n: string;
  title: string;
  desc: string;
}) {
  const statusBadge = {
    ready: { text: "READY AT LAUNCH", color: "text-wham bg-wham/10 border-wham/30" },
    next: { text: "v1.1", color: "text-ink-dim bg-bg-alt border-border" },
    planned: { text: "v2.0+", color: "text-ink-muted bg-bg-alt border-border" },
  }[status];

  return (
    <div className="card-raise bg-bg-alt border border-border p-8">
      <div className="flex items-start justify-between mb-6">
        <span className="h-display text-3xl text-wham">{n}</span>
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.15em] border px-2 py-1 ${statusBadge.color}`}
        >
          {statusBadge.text}
        </span>
      </div>
      <h3 className="h-display text-2xl text-ink mb-3">{title}</h3>
      <p className="text-ink-dim leading-relaxed">{desc}</p>
    </div>
  );
}
