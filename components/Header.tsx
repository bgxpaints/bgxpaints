import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./ui";

const links = site.nav.map((item) => (
  <Link
    key={item.href}
    href={item.href}
    className="nav-link inline-flex min-h-[var(--ds-target)] items-center text-ink no-underline"
  >
    {item.label}
  </Link>
));

export function Header() {
  return (
    <header className="relative border-b border-line bg-surface">
      <Container className="flex items-center justify-between gap-[var(--ds-space-16)] py-[var(--ds-space-8)]">
        <Link
          href="/"
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
          {links}
        </nav>
        <details className="md:hidden">
          <summary className="btn btn-secondary cursor-pointer list-none px-[var(--ds-space-16)]">
            Menu
          </summary>
          <nav
            aria-label="Mobiel menu"
            className="absolute inset-x-0 top-full z-20 flex flex-col gap-[var(--ds-space-8)] border-b border-line bg-surface px-[var(--ds-space-16)] py-[var(--ds-space-16)]"
          >
            {links}
          </nav>
        </details>
      </Container>
    </header>
  );
}
