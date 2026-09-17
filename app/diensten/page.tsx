import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Container, PageHeader } from "@/components/ui";
import { breadcrumbJsonLd, businessJsonLd } from "@/content/schema";
import { pageMeta, pages, routes } from "@/content/site";

export const metadata = pageMeta("diensten", routes.diensten);

const items = [
  {
    href: routes.binnen,
    title: "Binnenschilderwerk",
    text: "Binnenschilder voor muren, plafond, trap, deuren, kozijnen en een volledige kamer.",
  },
  {
    href: routes.buiten,
    title: "Buitenschilderwerk",
    text: "Buitenschilder voor gevel, kozijnen buiten, dakkapel, schutting beitsen en de buitenboel.",
  },
  {
    href: routes.spuitwerk,
    title: "Spuitwerk",
    text: "Latex spuiten, plafond spuiten en lakspuitwerk voor een egale afwerking.",
  },
];

export default function DienstenPage() {
  return (
    <Container>
      <JsonLd data={businessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: routes.home },
          { name: "Diensten", href: routes.diensten },
        ])}
      />
      <PageHeader title={pages.diensten.h1} summary={pages.diensten.summary} />
      <ul className="grid gap-[var(--ds-space-16)] pb-[var(--ds-space-64)] md:grid-cols-3">
        {items.map((item) => (
          <li key={item.href} className="border border-line bg-surface p-[var(--ds-space-24)]">
            <h2 className="text-xl font-semibold">
              <Link href={item.href}>{item.title}</Link>
            </h2>
            <p className="mt-[var(--ds-space-8)] text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
      <div className="pb-[var(--ds-space-64)]">
        <ButtonLink href={routes.contact}>Offerte vragen</ButtonLink>
      </div>
    </Container>
  );
}
