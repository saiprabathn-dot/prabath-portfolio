import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalScrollHint from "@/components/GlobalScrollHint";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prabath-portfolio-xi.vercel.app"),
  title: "Sai Prabath — Full-Stack Developer & Software Architect",
  description:
    "Official portfolio of Sai Prabath — Full-Stack Developer, Systems Architect, and Co-Founder at QDelta. Engineering high-craft web systems, scalable backend platforms, and fluid digital products.",
  keywords: [
    "Sai Prabath",
    "Prabath",
    "Full-Stack Developer",
    "Software Architect",
    "QDelta",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Sai Prabath", url: "https://prabath-portfolio-xi.vercel.app" }],
  creator: "Sai Prabath",
  openGraph: {
    title: "Sai Prabath — Full-Stack Developer & Software Architect",
    description:
      "Official portfolio of Sai Prabath — Full-Stack Developer, Systems Architect, and Co-Founder at QDelta. Engineering high-craft web systems, scalable backend platforms, and fluid digital products.",
    url: "https://prabath-portfolio-xi.vercel.app",
    siteName: "Sai Prabath — Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Prabath — Full-Stack Developer & Software Architect",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Prabath — Full-Stack Developer & Software Architect",
    description:
      "Official portfolio of Sai Prabath — Full-Stack Developer, Systems Architect, and Co-Founder at QDelta.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="bg-grid" />
        <div className="app-container">
          <Navbar />
          <main className="main-content">{children}</main>
          <GlobalScrollHint />
          <Footer />
        </div>
      </body>
    </html>
  );
}
