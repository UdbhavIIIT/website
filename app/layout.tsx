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
  title: "Udhbav - Transform Your Ideas Into Reality",
  description:
    "Empowering creativity and innovation through cutting-edge technology. Join thousands of creators building the future with Udhbav's powerful platform.",
  keywords: [
    "innovation",
    "creativity",
    "platform",
    "technology",
    "collaboration",
    "creators",
  ],
  authors: [{ name: "Udhbav Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Udhbav - Transform Your Ideas Into Reality",
    description:
      "Empowering creativity and innovation through cutting-edge technology. Join thousands of creators building the future.",
    type: "website",
    locale: "en_US",
    siteName: "Udhbav",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udhbav - Transform Your Ideas Into Reality",
    description:
      "Empowering creativity and innovation through cutting-edge technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
