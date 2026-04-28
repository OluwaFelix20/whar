import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-wham/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-heat/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="hidden lg:block">
          <div className="h-label mb-6">Get started</div>
          <h1 className="h-display text-6xl xl:text-8xl text-ink leading-[0.85]">
            Join the
            <br />
            <span className="text-wham italic">wham.</span>
          </h1>
          <p className="mt-8 text-lg text-ink-dim max-w-md leading-relaxed">
            Five seconds to your first post. Free forever. No credit card.
            Cancel by deleting the account.
          </p>

          <ul className="mt-10 space-y-4">
            <li className="flex items-start gap-3 text-ink-dim">
              <span className="text-wham font-mono text-sm mt-1">→</span>
              <span>Personalised feed of memes, stickers, clips</span>
            </li>
            <li className="flex items-start gap-3 text-ink-dim">
              <span className="text-wham font-mono text-sm mt-1">→</span>
              <span>Built-in editor with 10 templates</span>
            </li>
            <li className="flex items-start gap-3 text-ink-dim">
              <span className="text-wham font-mono text-sm mt-1">→</span>
              <span>One-tap share to 15+ messaging apps</span>
            </li>
            <li className="flex items-start gap-3 text-ink-dim">
              <span className="text-wham font-mono text-sm mt-1">→</span>
              <span>Join Dojos, save collections, message friends</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <div className="lg:hidden mb-8 text-center">
            <div className="h-label mb-3">Get started</div>
            <h1 className="h-display text-5xl text-ink leading-[0.85]">
              Join the <span className="text-wham italic">wham.</span>
            </h1>
          </div>

          <SignUp
            path="/signup"
            routing="path"
            signInUrl="/signin"
            forceRedirectUrl="/dashboard"
          />

          <div className="mt-8 text-center lg:text-left">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted max-w-sm">
              By creating an account you agree to our{" "}
              <Link href="/terms" className="text-wham hover:underline">
                Terms
              </Link>
              ,{" "}
              <Link href="/privacy" className="text-wham hover:underline">
                Privacy Policy
              </Link>
              , and{" "}
              <Link href="/guidelines" className="text-wham hover:underline">
                Community Guidelines
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
