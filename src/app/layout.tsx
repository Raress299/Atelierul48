import type { Metadata, Viewport } from "next";
import { Cormorant, Outfit } from "next/font/google";
import "./globals.css";

const display = Cormorant({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atelierul48 — Tocătoare din lemn masiv",
  description:
    "Tocătoare din lemn masiv lucrate manual. Finisaj food-safe, esențe locale, comandă pe WhatsApp.",
  applicationName: "Atelierul48",
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1a140f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
