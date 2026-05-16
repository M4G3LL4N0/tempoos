"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#platform", label: "Platform" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#vision", label: "Vision" },
  { href: "#waitlist", label: "Waitlist" }
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white backdrop-blur md:hidden"
      >
        <span className="sr-only">Open menu</span>
        {open ? (
          <span className="text-xl leading-none">✕</span>
        ) : (
          <span className="text-xl leading-none">☰</span>
        )}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close navigation overlay"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          />
          <div className="absolute inset-x-4 top-4 rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold tracking-[0.22em] text-white">
                TEMPOOS
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white"
              >
                ✕
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-200 transition hover:bg-white/[0.06]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#8ff8d4_0%,#49f2b8_45%,#2ad890_100%)] px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Request access
            </a>
            <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
              Week plans and slip alerts are planning estimates — not calendar, medical, or employment scheduling advice.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
