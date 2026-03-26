import "./globals.css";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-cormorant",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-stone-50 text-stone-950 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
