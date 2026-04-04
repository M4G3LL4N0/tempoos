"use client";

import { MobileNav } from "./mobile-nav";

export function Nav() {
  return (
    <header className="glass-panel rounded-full px-5 py-3">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold tracking-[0.22em] text-white">
          TEMPOOS
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="/product" className="transition hover:text-emerald-200">Product</a>
          <a href="/pricing" className="transition hover:text-emerald-200">Pricing</a>
          <a href="/vision" className="transition hover:text-emerald-200">Vision</a>
          <a href="/waitlist" className="transition hover:text-emerald-200">Waitlist</a>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
