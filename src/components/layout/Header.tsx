"use client";

import Link from "next/link";
import { useState } from "react";
import { pageContainerClass } from "@/components/ui/pageContainer";
import { navItems, site } from "@/content/landing";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className={`${pageContainerClass} flex h-14 items-center justify-between`}>
        <Link
          href="/"
          className="min-w-0 truncate text-lg font-bold tracking-tight text-blue-700"
          onClick={closeMenu}
        >
          {site.logoText}
        </Link>

        <button
          type="button"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-slate-200 text-slate-800"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-menu"
          className="border-t border-slate-200 bg-white"
          aria-label="모바일 메뉴"
        >
          <ul className={`${pageContainerClass} py-2`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-12 items-center text-base font-medium leading-6 text-slate-800"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <span className="relative block h-4 w-4" aria-hidden>
        <span className="absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1/2 rotate-45 bg-current" />
        <span className="absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1/2 -rotate-45 bg-current" />
      </span>
    );
  }

  return (
    <span className="flex flex-col gap-1.5" aria-hidden>
      <span className="block h-0.5 w-4 bg-current" />
      <span className="block h-0.5 w-4 bg-current" />
      <span className="block h-0.5 w-4 bg-current" />
    </span>
  );
}
