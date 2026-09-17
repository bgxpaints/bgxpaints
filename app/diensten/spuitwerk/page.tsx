import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Container, PageHeader } from "@/components/ui";
import { breadcrumbJsonLd, businessJsonLd, serviceJsonLd } from "@/content/schema";
import { pageMeta, pages, routes } from "@/content/site";

export const metadata = pageMeta("spuitwerk", routes.spuitwerk);

export default function SpuitwerkPage() {
  return (
    <Container>
      <JsonLd data={businessJsonLd()} />
      <JsonLd
        data={serviceJsonLd({
          name: "Spuitwerk",
          description: pages.spuitwerk.summary,
          path: routes.spuitwerk,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: routes.home },
          { name: "Diensten", href: routes.diensten },
          { name: "Spuitwerk", href: routes.spuitwerk },
        ])}
      />
      <PageHeader title={pages.spuitwerk.h1} summary={pages.spuitwerk.summary} />
      <section className="max-w-2xl pb-[var(--ds-space-64)]">
        <h2 className="text-2xl font-semibold">Wanneer spuiten beter is</h2>
        <ul className="mt-[var(--ds-space-16)] list-disc pl-[var(--ds-space-24)] text-muted">
          <li>Muren latex spuiten voor een egale wand</li>
          <li>Plafond spuiten zonder rolbanen</li>
          <li>Lakspuitwerk op deuren, kozijnen of andere vlakken</li>
        </ul>
        <p className="mt-[var(--ds-space-16)] text-muted">
          Spuiten is geen trucje om sneller klaar te zijn. Het is de juiste methode als u een
          strakke, gelijkmatige laag wilt op grote of gedetailleerde vlakken.
        </p>
      </section>
      <div className="pb-[var(--ds-space-64)]">
        <ButtonLink href={routes.contact}>Offerte spuitwerk</ButtonLink>
      </div>
    </Container>
  );
}
