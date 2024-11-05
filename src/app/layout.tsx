import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felix Zepol | Alt Rock Artist",
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
