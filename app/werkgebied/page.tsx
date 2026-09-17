import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Container, PageHeader } from "@/components/ui";
import { breadcrumbJsonLd, businessJsonLd } from "@/content/schema";
import { pageMeta, pages, routes, site } from "@/content/site";

export const metadata = pageMeta("werkgebied", routes.werkgebied);

export default function WerkgebiedPage() {
  return (
    <Container className="pb-[var(--ds-space-64)]">
      <JsonLd data={businessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: routes.home },
          { name: "Werkgebied", href: routes.werkgebied },
        ])}
      />
      <PageHeader title={pages.werkgebied.h1} summary={pages.werkgebied.summary} />
      <section>
        <h2 className="text-2xl font-semibold">Gemeenten</h2>
        <ul className="mt-[var(--ds-space-16)] grid gap-[var(--ds-space-8)] sm:grid-cols-2 md:grid-cols-3">
          {site.cities.map((city) => (
            <li key={city} id={city.toLowerCase().replace(" ", "-")} className="text-ink">
              Schilder {city}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-[var(--ds-space-48)]">
        <h2 className="text-2xl font-semibold">Ook recente projecten in</h2>
        <p className="mt-[var(--ds-space-16)] text-muted">
          {site.extraProjectCities.join(", ")}. Dat zijn geen extra beloftes, wel werk dat we al
          gedaan hebben.
        </p>
      </section>
      <div className="mt-[var(--ds-space-48)] aspect-[16/10] overflow-hidden border border-line bg-surface">
        <iframe
          title="Google Maps: BGX Paints, Zwaluwenstraat 47, 8400 Oostende"
          src={site.mapsEmbed}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="mt-[var(--ds-space-32)]">
        <ButtonLink href={routes.contact}>Schilder gezocht? Vraag een offerte</ButtonLink>
      </div>
    </Container>
  );
}
