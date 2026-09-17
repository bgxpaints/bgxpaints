import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--ds-width-content)] px-[var(--ds-space-16)] sm:px-[var(--ds-space-24)] ${className}`}
    >
      {children}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles = variant === "primary" ? "btn btn-primary" : "btn btn-secondary";
  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a className={styles} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={styles} href={href}>
      {children}
    </Link>
  );
}

export function PageHeader({
  kicker = "BGX Paints · Oostende",
  title,
  summary,
}: {
  kicker?: string;
  title: string;
  summary: string;
}) {
  return (
    <header className="py-[var(--ds-space-48)]">
      <p className="text-sm text-muted">{kicker}</p>
      <h1 className="mt-[var(--ds-space-8)] max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        {title}
      </h1>
      <p className="mt-[var(--ds-space-16)] max-w-2xl text-lg text-muted">{summary}</p>
    </header>
  );
}
