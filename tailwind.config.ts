import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        "bg-alt": "#141414",
        "bg-card": "#1A1A1A",
        ink: "#F5F1E8",
        "ink-dim": "#B8B3AA",
        "ink-muted": "#7A7570",
        wham: "#D4FF3D",
        heat: "#FF2E5C",
        border: "rgba(245, 241, 232, 0.08)",
        "border-strong": "rgba(245, 241, 232, 0.16)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
