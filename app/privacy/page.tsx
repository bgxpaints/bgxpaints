import { JsonLd } from "@/components/JsonLd";
import { Container, PageHeader } from "@/components/ui";
import { breadcrumbJsonLd } from "@/content/schema";
import { pageMeta, pages, routes, site } from "@/content/site";

export const metadata = pageMeta("privacy", routes.privacy);

export default function PrivacyPage() {
  return (
    <Container className="pb-[var(--ds-space-64)]">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: routes.home },
          { name: "Privacy", href: routes.privacy },
        ])}
      />
      <PageHeader title={pages.privacy.h1} summary={pages.privacy.summary} />
      <article className="max-w-2xl space-y-[var(--ds-space-16)] text-muted">
        <p>
          Verwerkingsverantwoordelijke: {site.legalName}, {site.address.line}, {site.email},{" "}
          {site.phoneDisplay}. Ondernemingsnummer {site.vat}.
        </p>
        <p>
          Als u het contactformulier, e-mail, telefoon of WhatsApp gebruikt, verwerken we uw naam,
          contactgegevens, gemeente en de inhoud van uw vraag. Dat is nodig om te antwoorden of
          een offerte te maken.
        </p>
        <p>
          We verkopen die gegevens niet. We bewaren ze zolang de offerte of de werf loopt, en
          daarna zolang de wet boekhoudstukken vraagt.
        </p>
        <p>
          Deze website plaatst geen trackingcookies. U hebt recht op inzage, verbetering en
          wissing. Stuur daarvoor een mail naar {site.email}. Klachten: Gegevensbeschermingsautoriteit,
          Drukpersstraat 35, 1000 Brussel.
        </p>
      </article>
    </Container>
  );
}
