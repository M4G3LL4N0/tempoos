import type { Metadata } from "next";
import { Nav } from "./nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "TempoOS — Your time is your real net worth",
  description: "TempoOS is the AI operating system for time allocation, focus protection, and adaptive weekly planning."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.08]" />
          <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 md:pb-32 md:pt-10">
            <Nav />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
