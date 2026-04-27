import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Whamr — Send the wham.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(212,255,61,0.18) 0%, transparent 60%)",
            display: "flex",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#7A7570",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              background: "#D4FF3D",
              borderRadius: "50%",
            }}
          />
          <span>whamr.com</span>
        </div>

        {/* Big type */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 200,
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
              color: "#F5F1E8",
              display: "flex",
            }}
          >
            Send the
          </div>
          <div
            style={{
              fontSize: 200,
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
              color: "#D4FF3D",
              fontStyle: "italic",
              display: "flex",
            }}
          >
            wham.
          </div>
        </div>

        {/* Bottom row */}
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
              fontSize: 28,
              color: "#B8B3AA",
              maxWidth: 700,
              lineHeight: 1.2,
              display: "flex",
            }}
          >
            The right meme, the perfect reaction, the sticker that nails the
            moment.
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
