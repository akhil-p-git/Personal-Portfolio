import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Akhil Pinnani | Full Stack Developer & AI-First Engineer",
  description: "Full Stack Developer and AI-First Engineer with 5+ years building web, mobile, and AI-first products. Open to full-time roles.",
  keywords: ["full stack developer", "ai engineer", "react", "next.js", "typescript", "portfolio", "akhil pinnani"],
  authors: [{ name: "Akhil Pinnani" }],
  openGraph: {
    title: "Akhil Pinnani | Full Stack Developer & AI-First Engineer",
    description: "Full Stack Developer and AI-First Engineer with 5+ years building web, mobile, and AI-first products.",
    type: "website",
    url: "https://akhil-p.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
