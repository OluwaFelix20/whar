import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not found" };

  const ogImage = `/api/og?title=${encodeURIComponent(post.title)}&eyebrow=${encodeURIComponent(post.category)}`;

  return {
    title: `${post.title} — Whamr`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const nextPost = allPosts[currentIndex - 1] ?? null;
  const prevPost = allPosts[currentIndex + 1] ?? null;

  return (
    <>
      {/* HEADER */}
      <article className="pt-20 md:pt-32 pb-16">
        <header className="mx-auto max-w-3xl px-6 md:px-10 mb-12">
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted hover:text-wham transition-colors mb-10 inline-flex items-center gap-2"
          >
            ← Back to blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-8 mt-10">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-wham bg-wham/10 border border-wham/30 px-3 py-1">
              {post.category}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
              {formatDate(post.date)}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
              {post.readTime}
            </span>
          </div>

          <h1 className="h-display text-4xl md:text-6xl lg:text-7xl text-ink leading-[0.9] mb-6">
            {post.title}
          </h1>

          <p className="text-xl md:text-2xl text-ink-dim leading-tight max-w-2xl">
            {post.description}
          </p>

          <div className="mt-10 pt-8 border-t border-border flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-wham flex items-center justify-center">
              <span
                className="h-display text-bg text-lg"
                style={{ fontVariationSettings: '"wdth" 85' }}
              >
                W
              </span>
            </div>
            <div>
              <div className="text-ink font-medium">{post.author}</div>
              <div className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Whamr
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div
            className="prose-whamr"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* NEXT / PREV */}
      <section className="py-16 border-t border-border bg-bg-alt">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="card-raise bg-bg border border-border p-6 md:p-8 block"
              >
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted mb-3">
                  ← Older
                </div>
                <h3 className="h-display text-xl md:text-2xl text-ink leading-tight">
                  {prevPost.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="card-raise bg-bg border border-border p-6 md:p-8 block md:text-right"
              >
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted mb-3">
                  Newer →
                </div>
                <h3 className="h-display text-xl md:text-2xl text-ink leading-tight">
                  {nextPost.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
          <h2 className="h-display text-4xl md:text-5xl text-ink mb-6">
            Ready to <span className="text-wham italic">send the wham?</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/signup" className="btn-wham">
              Get Whamr →
            </Link>
            <Link href="/blog" className="btn-ghost">
              More posts
            </Link>
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
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
