import "./globals.css";

import type { Metadata } from "next";
import {
  Inter,
  Major_Mono_Display,
  Poppins,
  Sofia_Sans,
} from "next/font/google";

import Header from "./components/header";

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const majorMonoDisplay = Major_Mono_Display({
  variable: "--font-major-mono-display",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Games Store",
  description: "E-Commerce Game Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${majorMonoDisplay.variable} ${poppins.variable} ${sofiaSans.variable} bg-bg-primary antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
