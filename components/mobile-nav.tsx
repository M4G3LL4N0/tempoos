"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Product", href: "/product" },
    { name: "Pricing", href: "/pricing" },
    { name: "Vision", href: "/vision" },
    { name: "Waitlist", href: "/waitlist" },
  ];

  return (
    <div className="flex md:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 backdrop-blur-sm" />
        <Dialog.Panel className="glass-panel fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold tracking-[0.22em] text-white">TEMPOOS</span>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-12 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-8 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
