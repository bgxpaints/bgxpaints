import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Container, PageHeader } from "@/components/ui";
import { breadcrumbJsonLd, businessJsonLd } from "@/content/schema";
import { pageMeta, pages, routes, site } from "@/content/site";

export const metadata = pageMeta("contact", routes.contact);

export default function ContactPage() {
  return (
    <Container className="pb-[var(--ds-space-64)]">
      <JsonLd data={businessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: routes.home },
          { name: "Contact", href: routes.contact },
        ])}
      />
      <PageHeader title={pages.contact.h1} summary={pages.contact.summary} />
      <div className="grid gap-[var(--ds-space-48)] md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold">Rechtstreeks</h2>
          <ul className="mt-[var(--ds-space-16)] space-y-[var(--ds-space-8)]">
            <li>
              Telefoon: <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              E-mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              WhatsApp:{" "}
              <a href={site.whatsapp} rel="noopener noreferrer" target="_blank">
                Bericht sturen
              </a>
            </li>
            <li>Adres: {site.address.line}</li>
            <li>Open: {site.hoursLabel}</li>
          </ul>
          <div className="mt-[var(--ds-space-24)] flex flex-wrap gap-[var(--ds-space-12)]">
            <ButtonLink href={`tel:${site.phoneTel}`}>Nu bellen</ButtonLink>
            <ButtonLink href={site.whatsapp} variant="secondary">
              WhatsApp
            </ButtonLink>
          </div>
          <div className="mt-[var(--ds-space-32)] aspect-[16/10] overflow-hidden border border-line bg-surface">
            <iframe
              title="Google Maps: BGX Paints, Zwaluwenstraat 47, 8400 Oostende"
              src={site.mapsEmbed}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Offerteformulier</h2>
          <p className="mt-[var(--ds-space-8)] text-muted">
            Het formulier komt rechtstreeks binnen op {site.email}.
          </p>
          <div className="mt-[var(--ds-space-16)]">
            <ContactForm />
          </div>
        </section>
      </div>
    </Container>
  );
}
