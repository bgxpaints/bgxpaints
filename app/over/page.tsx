import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Container, PageHeader } from "@/components/ui";
import { breadcrumbJsonLd, businessJsonLd } from "@/content/schema";
import { pageMeta, pages, routes, site } from "@/content/site";

export const metadata = pageMeta("over", routes.over);

export default function OverPage() {
  return (
    <Container className="pb-[var(--ds-space-64)]">
      <JsonLd data={businessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: routes.home },
          { name: "Over", href: routes.over },
        ])}
      />
      <PageHeader title={pages.over.h1} summary={pages.over.summary} />
      <article className="max-w-2xl text-muted">
        <p>
          BGX Paints is het schildersbedrijf van Bekim Gërxhaliu. De zaak startte op{" "}
          {site.startedLabel} en is gevestigd op {site.address.line}. Ondernemingsnummer{" "}
          {site.vat}. Eerder was dezelfde zaak bekend als Eki Schilder: zelfde schilder, zelfde
          adres, zelfde telefoon.
        </p>
        <p className="mt-[var(--ds-space-16)]">
          We schilderen woningen en bedrijfspanden: muren, plafonds, ramen, deuren en duurzame
          gevels. Kleuradvies hoort erbij. We werken met Sigma, Sikkens, Boss en Mathys.
        </p>
        <p className="mt-[var(--ds-space-16)]">
          Geen platform, geen anonieme ploeg. U belt de schilder. We zijn 24 uur per dag
          telefonisch bereikbaar. Facturen voor bedrijven kunnen via Peppol
          (0208:0698585981).
        </p>
        <p className="mt-[var(--ds-space-16)]">
          U vindt ons op Google Maps, Apple Maps, Gouden Gids, oostendelokaal.be,
          schildergids.be, opendi.be en cylex-belgie.be.
        </p>
      </article>
      <div className="mt-[var(--ds-space-32)]">
        <ButtonLink href={routes.contact}>Contact</ButtonLink>
      </div>
    </Container>
  );
}
