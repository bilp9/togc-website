import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Lora, Source_Sans_3 } from "next/font/google";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    default: "Tabernacle of Grace Church",
    template: "%s | Tabernacle of Grace Church",
  },
  description:
    "Tabernacle of Grace Church is a welcoming Haitian-American congregation in Chandler, Arizona offering worship, prayer, discipleship, and community.",
  applicationName: "Tabernacle of Grace Church",
  keywords: [
    "Tabernacle of Grace Church",
    "TOGC",
    "church in Chandler AZ",
    "Haitian church Arizona",
    "Creole church",
    "Christian church",
    "worship service",
    "church ministries",
  ],
  authors: [{ name: "Tabernacle of Grace Church" }],
  creator: "Tabernacle of Grace Church",
  publisher: "Tabernacle of Grace Church",
  category: "religion",
  icons: {
    icon: "/logo.avif",
    shortcut: "/logo.avif",
    apple: "/logo.avif",
  },
  openGraph: {
    title: "Tabernacle of Grace Church",
    description:
      "A welcoming Haitian-American congregation in Chandler, Arizona offering worship, prayer, discipleship, and community.",
    siteName: "Tabernacle of Grace Church",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.avif",
        alt: "Tabernacle of Grace Church logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Tabernacle of Grace Church",
    description:
      "A welcoming Haitian-American congregation in Chandler, Arizona offering worship, prayer, discipleship, and community.",
    images: ["/logo.avif"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-stone-50 text-stone-950 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
