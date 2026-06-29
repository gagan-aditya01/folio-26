import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import CustomCursor from "@/components/cursor/CustomCursor";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "Gaganaditya — AI/ML Engineer & Full-Stack Builder",
    template: "%s | Gaganaditya",
  },
  description:
    "Portfolio of Gaganaditya — AI/ML engineer and full-stack builder specializing in generative AI pipelines, computer vision, and production web applications. B.Tech CSE (AIML), Christ University, Bangalore.",
  keywords: [
    "Gaganaditya",
    "AI Engineer",
    "ML Engineer",
    "Full-Stack Developer",
    "Generative AI",
    "Next.js",
    "PyTorch",
    "Christ University",
    "Bangalore",
  ],
  authors: [{ name: "Gaganaditya" }],
  creator: "Gaganaditya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Gaganaditya — AI/ML Engineer & Full-Stack Builder",
    description:
      "Engineering systems that think — from generative AI pipelines to full-stack applications.",
    siteName: "Gaganaditya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaganaditya — AI/ML Engineer & Full-Stack Builder",
    description:
      "Engineering systems that think — from generative AI pipelines to full-stack applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head />
      <body className="bg-black text-white antialiased">
        {/* Film grain noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:text-sm focus:font-mono focus:rounded"
        >
          Skip to main content
        </a>

        {/* Custom cursor — desktop only */}
        <div className="hidden md:block">
          <CustomCursor />
        </div>

        {/* Physics scroll wrapper */}
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
