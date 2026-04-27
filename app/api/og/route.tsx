import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Send the wham.";
  const eyebrow = searchParams.get("eyebrow") ?? "Whamr";
  const variant = searchParams.get("variant") ?? "default";

  const isDark = variant !== "wham";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: isDark ? "#0A0A0A" : "#D4FF3D",
          color: isDark ? "#F5F1E8" : "#0A0A0A",
          padding: "80px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background flourish */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "100%",
            background: isDark ? "rgba(212, 255, 61, 0.08)" : "rgba(255, 46, 92, 0.15)",
            display: "flex",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: isDark ? "#7A7570" : "rgba(10, 10, 10, 0.6)",
            fontWeight: 500,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              background: isDark ? "#D4FF3D" : "#0A0A0A",
              borderRadius: "100%",
              display: "flex",
            }}
          />
          {eyebrow}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginTop: 40,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            whamr
            <span style={{ color: isDark ? "#D4FF3D" : "#FF2E5C" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 22,
              fontStyle: "italic",
              fontWeight: 700,
              color: isDark ? "#D4FF3D" : "#0A0A0A",
              display: "flex",
            }}
          >
            Send the wham.
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
