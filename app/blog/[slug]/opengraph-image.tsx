import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "Whamr blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const title = post?.title ?? "Whamr";
  const category = post?.category ?? "Blog";
  const readTime = post?.readTime ?? "";

  // Reduce font size for very long titles
  const titleFontSize = title.length > 60 ? 80 : title.length > 40 ? 96 : 120;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: "80px",
          color: "#F5F1E8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -200,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(212,255,61,0.15) 0%, transparent 60%)",
            display: "flex",
          }}
        />

        {/* Top: category + read time */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            zIndex: 1,
          }}
        >
          <div
            style={{
              padding: "12px 20px",
              background: "rgba(212,255,61,0.15)",
              border: "1px solid rgba(212,255,61,0.4)",
              fontSize: 22,
              color: "#D4FF3D",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              display: "flex",
            }}
          >
            {category}
          </div>
          {readTime && (
            <div
              style={{
                fontSize: 22,
                color: "#7A7570",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                display: "flex",
              }}
            >
              {readTime}
            </div>
          )}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: titleFontSize,
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "#F5F1E8",
            zIndex: 1,
            maxWidth: 1040,
            display: "flex",
          }}
        >
          {title}
        </div>

        {/* Bottom: Whamr brand */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#7A7570",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              display: "flex",
            }}
          >
            whamr.com / blog
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#F5F1E8",
              display: "flex",
            }}
          >
            whamr<span style={{ color: "#D4FF3D" }}>.</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
