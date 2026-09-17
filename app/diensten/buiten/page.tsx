import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Container, PageHeader } from "@/components/ui";
import { breadcrumbJsonLd, businessJsonLd, serviceJsonLd } from "@/content/schema";
import { pageMeta, pages, routes } from "@/content/site";

export const metadata = pageMeta("buiten", routes.buiten);

export default function BuitenPage() {
  return (
    <Container>
      <JsonLd data={businessJsonLd()} />
      <JsonLd
        data={serviceJsonLd({
          name: "Buitenschilderwerk",
          description: pages.buiten.summary,
          path: routes.buiten,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: routes.home },
          { name: "Diensten", href: routes.diensten },
          { name: "Buitenschilderwerk", href: routes.buiten },
        ])}
      />
      <PageHeader title={pages.buiten.h1} summary={pages.buiten.summary} />
      <div className="grid gap-[var(--ds-space-32)] pb-[var(--ds-space-64)] md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold">Wat we buiten doen</h2>
          <ul className="mt-[var(--ds-space-16)] list-disc pl-[var(--ds-space-24)] text-muted">
            <li>Gevel schilderen</li>
            <li>Kozijnen buiten verven</li>
            <li>Dakkapel schilderen</li>
            <li>Schutting beitsen</li>
            <li>De buitenboel opnieuw in de verf</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Kustklimaat</h2>
          <p className="mt-[var(--ds-space-16)] text-muted">
            In Oostende en langs de kust vraagt buitenwerk een systeem dat zout, wind en vocht
            aankan. We kiezen geen binnenlatex voor een gevel. Eerst de ondergrond, dan de juiste
            primer en een duurzame buitenverf.
          </p>
        </section>
      </div>
      <div className="flex flex-wrap gap-[var(--ds-space-12)] pb-[var(--ds-space-64)]">
        <ButtonLink href={routes.contact}>Offerte buitenschilderwerk</ButtonLink>
        <ButtonLink href={routes.binnen} variant="secondary">
          Binnenschilderwerk
        </ButtonLink>
      </div>
    </Container>
  );
}
