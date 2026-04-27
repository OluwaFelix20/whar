import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="h-display text-2xl text-ink group-hover:text-wham transition-colors">
            whamr
          </span>
          <span className="text-wham font-display text-2xl leading-none -ml-0.5">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/stickers"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink-dim hover:text-wham transition-colors"
          >
            Stickers
          </Link>
          <Link
            href="/creators"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink-dim hover:text-wham transition-colors"
          >
            Creators
          </Link>
          <Link
            href="/dojos"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink-dim hover:text-wham transition-colors"
          >
            Dojos
          </Link>
          <Link
            href="/pricing"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink-dim hover:text-wham transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink-dim hover:text-wham transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink-dim hover:text-wham transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <Link
              href="/signin"
              className="hidden sm:block font-mono text-xs uppercase tracking-[0.15em] text-ink-dim hover:text-ink transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="bg-wham text-bg font-display font-extrabold uppercase tracking-tight text-sm px-4 py-2 hover:bg-ink transition-colors"
              style={{ fontVariationSettings: '"wdth" 85' }}
            >
              Get Whamr
            </Link>
          </Show>
          <Show when="signed-in">
            <Link
              href="/dashboard"
              className="hidden sm:block font-mono text-xs uppercase tracking-[0.15em] text-ink-dim hover:text-wham transition-colors"
            >
              Dashboard
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9 border-2 border-wham/40 hover:border-wham transition-colors",
                  userButtonPopoverCard: "bg-bg-alt border border-border",
                  userButtonPopoverActionButton: "hover:bg-bg",
                },
              }}
            />
          </Show>
        </div>
      </div>
    </header>
  );
}
