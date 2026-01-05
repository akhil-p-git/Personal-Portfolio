import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akhil | Developer",
  description: "Personal portfolio of Akhil - Software Developer",
  keywords: ["developer", "portfolio", "software engineer", "web developer"],
  authors: [{ name: "Akhil" }],
  openGraph: {
    title: "Akhil | Developer",
    description: "Personal portfolio of Akhil - Software Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
