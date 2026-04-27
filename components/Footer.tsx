import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-bg">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="h-display text-6xl text-ink">
              whamr<span className="text-wham">.</span>
            </div>
            <p className="mt-4 text-ink-dim max-w-xs">
              Send the wham. The default destination for digital expression.
            </p>
          </div>

          <div>
            <div className="h-label mb-4">Product</div>
            <ul className="space-y-2">
              <li>
                <Link href="/stickers" className="text-ink-dim hover:text-wham transition-colors">
                  Stickers
                </Link>
              </li>
              <li>
                <Link href="/stickers/try" className="text-ink-dim hover:text-wham transition-colors">
                  Try converter
                </Link>
              </li>
              <li>
                <Link href="/creators" className="text-ink-dim hover:text-wham transition-colors">
                  Creators
                </Link>
              </li>
              <li>
                <Link href="/dojos" className="text-ink-dim hover:text-wham transition-colors">
                  Dojos
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-ink-dim hover:text-wham transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="h-label mb-4">Company</div>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-ink-dim hover:text-wham transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-ink-dim hover:text-wham transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-ink-dim hover:text-wham transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink-dim hover:text-wham transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="h-label mb-4">Legal</div>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-ink-dim hover:text-wham transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-ink-dim hover:text-wham transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-ink-dim hover:text-wham transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="text-ink-dim hover:text-wham transition-colors">
                  Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <div className="font-mono text-xs text-ink-muted uppercase tracking-wider">
            © 2026 Whamr. All wham reserved.
          </div>
          <div className="flex gap-6 font-mono text-xs text-ink-muted uppercase tracking-wider">
            <span>v1.0</span>
            <span className="text-wham">●</span>
            <span>Status: Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
