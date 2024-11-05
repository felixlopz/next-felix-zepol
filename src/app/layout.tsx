import type { Metadata } from "next";
import "./globals.css";

import { Righteous, Montserrat } from "next/font/google";

export const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Felix Zepol",
  description: "Felix Zepol's Artist Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
