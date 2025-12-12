import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto, Alumni_Sans_Pinstripe, Jura } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google fonts (loaded via next/font for reliability and performance)
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-roboto",
  display: "swap",
});

const alumni = Alumni_Sans_Pinstripe({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-alumni-sans-pinstripe",
  display: "swap",
});

// Jura for subtitles
const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-jura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ichha Dwivedi",
  description: "Portfolio",
   icons: {
    icon: "/favicon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${alumni.variable} ${jura.variable} antialiased overflow-x-hidden`}
      >
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
