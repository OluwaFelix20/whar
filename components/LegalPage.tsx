import Link from "next/link";

type Section = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: React.ReactNode;
  sections: Section[];
}) {
  return (
    <>
      {/* HEADER */}
      <section className="relative pt-20 md:pt-32 pb-12">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="h-label mb-6">{eyebrow}</div>
          <h1 className="h-display text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.9] mb-8">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.15em]">
            <span className="text-ink-muted">Last updated</span>
            <span className="text-wham">{lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="bg-bg-alt border-l-4 border-wham p-6 md:p-8">
            <div className="text-ink-dim text-lg leading-relaxed">{intro}</div>
          </div>
        </div>
      </section>

      {/* LAYOUT */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10 grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16">
          {/* Table of Contents */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="h-label mb-4">Contents</div>
            <nav>
              <ol className="space-y-2 font-mono text-xs">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-ink-dim hover:text-wham transition-colors block py-1"
                    >
                      <span className="text-wham mr-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Body */}
          <article className="prose-whamr min-w-0">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24 mb-16">
                <h2>
                  <span className="text-wham">
                    {String(i + 1).padStart(2, "0")}.
                  </span>{" "}
                  {s.title}
                </h2>
                {s.content}
              </section>
            ))}
          </article>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="py-16 border-t border-border bg-bg-alt">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <p className="text-ink-muted text-sm max-w-2xl mx-auto leading-relaxed">
            This document is a draft and does not constitute legal advice. Final
            legal review required before launch. For questions, contact{" "}
            <Link href="/contact" className="text-wham hover:underline">
              legal@whamr.com
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
