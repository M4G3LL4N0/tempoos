import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TempoOS — Your time is your real net worth",
  description:
    "TempoOS is the AI operating system for time allocation, focus protection, and adaptive weekly planning."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
