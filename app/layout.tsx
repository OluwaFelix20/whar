import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Whamr — Send the wham.",
  description:
    "Find the right meme, sticker, or clip for any moment. Share it anywhere in one tap. The content platform built for the social internet.",
  metadataBase: new URL("https://whamr.com"),
  openGraph: {
    title: "Whamr — Send the wham.",
    description:
      "Find the right meme, sticker, or clip for any moment. Share it anywhere in one tap.",
    url: "https://whamr.com",
    siteName: "Whamr",
    type: "website",
    images: [
      {
        url: "/api/og?title=Send%20the%20wham.&eyebrow=The%20content%20platform&variant=wham",
        width: 1200,
        height: 630,
        alt: "Whamr — Send the wham.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whamr — Send the wham.",
    description:
      "Find the right meme, sticker, or clip for any moment. Share it anywhere in one tap.",
    images: ["/api/og?title=Send%20the%20wham.&eyebrow=The%20content%20platform&variant=wham"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#D4FF3D",
          colorBackground: "#141414",
          colorText: "#F5F1E8",
          colorTextSecondary: "#B8B3AA",
          colorInputBackground: "#0A0A0A",
          colorInputText: "#F5F1E8",
          colorDanger: "#FF2E5C",
          fontFamily: "DM Sans, sans-serif",
          borderRadius: "0",
        },
        elements: {
          card: "bg-bg-alt border border-border shadow-none",
          headerTitle: "text-ink",
          headerSubtitle: "text-ink-dim",
          socialButtonsBlockButton:
            "border border-border hover:border-wham/40 bg-bg",
          formButtonPrimary:
            "bg-wham text-bg hover:bg-ink uppercase tracking-tight font-extrabold",
          footerActionLink: "text-wham hover:text-ink",
          formFieldInput: "bg-bg border border-border focus:border-wham",
          identityPreviewEditButton: "text-wham",
        },
      }}
    >
      <html lang="en">
        <body>
          <div className="grain" aria-hidden="true" />
          <Nav />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
