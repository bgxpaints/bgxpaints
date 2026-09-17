import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Container, PageHeader } from "@/components/ui";
import { breadcrumbJsonLd, businessJsonLd, serviceJsonLd } from "@/content/schema";
import { pageMeta, pages, routes } from "@/content/site";

export const metadata = pageMeta("binnen", routes.binnen);

export default function BinnenPage() {
  return (
    <Container>
      <JsonLd data={businessJsonLd()} />
      <JsonLd
        data={serviceJsonLd({
          name: "Binnenschilderwerk",
          description: pages.binnen.summary,
          path: routes.binnen,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: routes.home },
          { name: "Diensten", href: routes.diensten },
          { name: "Binnenschilderwerk", href: routes.binnen },
        ])}
      />
      <PageHeader title={pages.binnen.h1} summary={pages.binnen.summary} />
      <div className="grid gap-[var(--ds-space-32)] pb-[var(--ds-space-64)] md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold">Wat we binnen doen</h2>
          <ul className="mt-[var(--ds-space-16)] list-disc pl-[var(--ds-space-24)] text-muted">
            <li>Muren verven en een kamer schilderen</li>
            <li>Plafond sausen</li>
            <li>Trap schilderen</li>
            <li>Deuren schilderen</li>
            <li>Kozijnen binnen schilderen</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Aanpak</h2>
          <p className="mt-[var(--ds-space-16)] text-muted">
            Binnen begint het resultaat bij de ondergrond. We schuren, ontvetten, plamuren waar
            nodig en zetten een primer. Daarna volgen de afwerklagen met Sigma, Sikkens, Boss of
            Mathys, afgestemd op vocht, slijtage en de gewenste glans.
          </p>
        </section>
      </div>
      <div className="flex flex-wrap gap-[var(--ds-space-12)] pb-[var(--ds-space-64)]">
        <ButtonLink href={routes.contact}>Offerte binnenschilderwerk</ButtonLink>
        <ButtonLink href={routes.buiten} variant="secondary">
          Buitenschilderwerk
        </ButtonLink>
      </div>
    </Container>
  );
}
