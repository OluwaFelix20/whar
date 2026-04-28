import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-wham/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-heat/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="hidden lg:block">
          <div className="h-label mb-6">Welcome back</div>
          <h1 className="h-display text-6xl xl:text-8xl text-ink leading-[0.85]">
            Send the
            <br />
            <span className="text-wham italic">wham</span>
            <br />
            again.
          </h1>
          <p className="mt-8 text-lg text-ink-dim max-w-md leading-relaxed">
            Pick up where you left off. Your feed, your collections, your
            Dojos, your DMs — all waiting.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <div className="lg:hidden mb-8 text-center">
            <div className="h-label mb-3">Welcome back</div>
            <h1 className="h-display text-5xl text-ink leading-[0.85]">
              Send the <span className="text-wham italic">wham</span> again.
            </h1>
          </div>

          <SignIn
            path="/signin"
            routing="path"
            signUpUrl="/signup"
            forceRedirectUrl="/dashboard"
          />

          <div className="mt-8 text-center lg:text-left">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              By signing in you agree to our{" "}
              <Link href="/terms" className="text-wham hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-wham hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
