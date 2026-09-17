"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { site } from "@/content/site";
import { Container } from "./ui";

function NavLinks({ onSameRoute }: { onSameRoute?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {site.nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => {
            if (item.href === pathname) onSameRoute?.();
          }}
          className="nav-link inline-flex min-h-[var(--ds-target)] items-center text-ink no-underline"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = useCallback(() => {
    menuRef.current?.removeAttribute("open");
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  return (
    <header className="relative border-b border-line bg-surface">
      <Container className="flex items-center justify-between gap-[var(--ds-space-16)] py-[var(--ds-space-8)]">
        <Link
          href="/"
          onClick={() => {
            if (pathname === "/") closeMenu();
          }}
          className="inline-flex min-h-[var(--ds-target)] items-center no-underline"
        >
          <Image
            src="/logo/bgxpaints_logo_full.svg"
            alt="BGX Paints"
            width={160}
            height={40}
            className="h-8 w-[140px] object-cover object-center"
            priority
          />
        </Link>
        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-[var(--ds-space-16)] md:flex">
          <NavLinks />
        </nav>
        <details
          ref={menuRef}
          className="md:hidden"
          onKeyDown={(event) => {
            if (event.key === "Escape") closeMenu();
          }}
        >
          <summary className="btn btn-secondary cursor-pointer list-none px-[var(--ds-space-16)]">
            Menu
          </summary>
          <nav
            aria-label="Mobiel menu"
            className="absolute inset-x-0 top-full z-20 flex flex-col gap-[var(--ds-space-8)] border-b border-line bg-surface px-[var(--ds-space-16)] py-[var(--ds-space-16)]"
          >
            <NavLinks onSameRoute={closeMenu} />
          </nav>
        </details>
      </Container>
    </header>
  );
}
