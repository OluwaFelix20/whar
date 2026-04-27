import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import NewsletterForm from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Whamr",
  description:
    "Product deep-dives, creator guides, and thoughts on internet culture from the Whamr team.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 md:pt-32 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-wham/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="h-label mb-6">The blog</div>
          <h1 className="h-display text-[18vw] md:text-[12vw] lg:text-[160px] text-ink leading-[0.85]">
            Words about
            <br />
            <span className="text-wham italic">whams.</span>
          </h1>
          <p className="mt-8 text-xl text-ink-dim max-w-2xl">
            Product deep-dives, creator guides, brand stories, and opinions on
            internet culture from the people building Whamr.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-8 border-y border-border bg-bg-alt sticky top-16 z-40 backdrop-blur-lg bg-bg-alt/80">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-wrap gap-2 md:gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-wham bg-wham/10 border border-wham/30 px-4 py-2">
            All posts
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="font-mono text-xs uppercase tracking-[0.15em] text-ink-dim border border-border px-4 py-2 hover:border-wham/40 hover:text-ink transition-colors cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED POST */}
      {featured && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="h-label mb-8">Latest</div>
            <Link
              href={`/blog/${featured.slug}`}
              className="block card-raise bg-bg-alt border border-border p-8 md:p-12 lg:p-16"
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-wham">
                  {featured.category}
                </span>
                <span className="text-ink-muted">·</span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                  {formatDate(featured.date)}
                </span>
                <span className="text-ink-muted">·</span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                  {featured.readTime}
                </span>
              </div>
              <h2 className="h-display text-4xl md:text-6xl lg:text-7xl text-ink mb-6 leading-[0.9] max-w-4xl">
                {featured.title}
              </h2>
              <p className="text-ink-dim text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                {featured.description}
              </p>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-wham">
                Read article →
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ALL POSTS GRID */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="h-label mb-10">All posts</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-raise bg-bg-alt border border-border p-8 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-wham">
                    {post.category}
                  </span>
                  <span className="text-ink-muted">·</span>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="h-display text-2xl md:text-3xl text-ink mb-4 leading-tight">
                  {post.title}
                </h3>
                <p className="text-ink-dim leading-relaxed mb-8 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-ink-muted">
                  <span>{formatDate(post.date)}</span>
                  <span className="text-wham">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="bg-wham text-bg p-10 md:p-16 text-center relative overflow-hidden">
            <h2 className="h-display text-4xl md:text-6xl text-bg leading-[0.9] mb-6">
              Get the wham newsletter.
            </h2>
            <p className="text-bg/80 max-w-lg mx-auto mb-8 text-lg">
              One email a week. New posts, product updates, creator spotlights.
              No spam. No filler. Unsubscribe any time.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
