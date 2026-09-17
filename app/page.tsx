import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { GalleryGrid } from "@/components/GalleryGrid";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Container } from "@/components/ui";
import { gallery } from "@/content/gallery";
import { businessJsonLd, faqJsonLd } from "@/content/schema";
import { faq, pages, routes, site } from "@/content/site";

const proof = gallery.filter((item) => item.city === "Oostende").slice(0, 6);

export default function HomePage() {
  return (
    <>
      <JsonLd data={businessJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <section className="bg-surface">
        <Container className="grid items-center gap-[var(--ds-space-32)] py-[var(--ds-space-48)] lg:grid-cols-2">
          <div>
            <p className="text-sm text-muted">Schildersbedrijf · Oostende · sinds 2018</p>
            <h1 className="mt-[var(--ds-space-8)] text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              {pages.home.h1}
            </h1>
            <p className="mt-[var(--ds-space-16)] max-w-xl text-lg text-muted">{pages.home.summary}</p>
            <div className="mt-[var(--ds-space-24)] flex flex-wrap gap-[var(--ds-space-12)]">
              <ButtonLink href={`tel:${site.phoneTel}`}>Bel {site.phoneDisplay}</ButtonLink>
              <ButtonLink href={routes.contact} variant="secondary">
                Vrijblijvende offerte
              </ButtonLink>
            </div>
            <p className="mt-[var(--ds-space-16)] text-sm text-muted">
              {site.address.line} · bereikbaar {site.hoursLabel}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-canvas">
            <Image
              src="/realisaties/buitenmuurschilderenoudenburg.jpeg"
              alt="Buitenmuur geschilderd door BGX Paints"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-[var(--ds-space-64)]">
          <h2 className="text-3xl font-semibold text-ink">Wat we schilderen</h2>
          <div className="mt-[var(--ds-space-24)] grid gap-[var(--ds-space-16)] md:grid-cols-3">
            {[
              {
                href: routes.binnen,
                title: "Binnenschilderwerk",
                text: "Muren verven, plafond sausen, trap, deuren en kozijnen binnen. Strak, stofarm en klaar om in te wonen.",
              },
              {
                href: routes.buiten,
                title: "Buitenschilderwerk",
                text: "Gevel schilderen, kozijnen buiten, dakkapel en buitenboel. Verf die zout, wind en vocht aan de kust aankan.",
              },
              {
                href: routes.spuitwerk,
                title: "Spuitwerk",
                text: "Muren latex spuiten, plafond spuiten en lakspuitwerk als u een egale laag wilt zonder rolstrepen.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-link block min-h-[var(--ds-target)] border border-line bg-surface p-[var(--ds-space-24)] no-underline"
              >
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-[var(--ds-space-8)] text-muted">{item.text}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-[var(--ds-space-64)]">
          <h2 className="text-3xl font-semibold text-ink">Zo werken we</h2>
          <ol className="mt-[var(--ds-space-24)] grid gap-[var(--ds-space-16)] md:grid-cols-5">
            {[
              "U belt, appt of mailt wat er moet gebeuren.",
              "We kijken ter plaatse of via foto’s.",
              "U krijgt een duidelijke, vrijblijvende offerte.",
              "Voorbereiding: schuren, ontvetten, afplakken, primer.",
              "Afwerking met Sigma, Sikkens, Boss of Mathys en nette oplevering.",
            ].map((step, index) => (
              <li key={step} className="text-muted">
                <span className="font-semibold text-ink">{index + 1}.</span> {step}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container className="py-[var(--ds-space-64)]">
          <div className="flex flex-wrap items-end justify-between gap-[var(--ds-space-16)]">
            <h2 className="text-3xl font-semibold text-ink">Recent werk in Oostende</h2>
            <Link className="nav-link" href={routes.realisaties}>
              Alle realisaties
            </Link>
          </div>
          <div className="mt-[var(--ds-space-24)]">
            <GalleryGrid items={proof} />
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-[var(--ds-space-64)]">
          <h2 className="text-3xl font-semibold text-ink">Schilder in de buurt</h2>
          <p className="mt-[var(--ds-space-16)] max-w-2xl text-muted">
            Zoekt u een betrouwbare schilder in Oostende of de kustregio? We werken vanuit de
            Zwaluwenstraat en komen ter plaatse in deze gemeenten.
          </p>
          <p className="mt-[var(--ds-space-16)] text-ink">{site.cities.join(" · ")}</p>
          <div className="mt-[var(--ds-space-24)]">
            <ButtonLink href={routes.werkgebied} variant="secondary">
              Volledig werkgebied
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-[var(--ds-space-64)]">
          <h2 className="text-3xl font-semibold text-ink">Veelgestelde vragen</h2>
          <div className="mt-[var(--ds-space-24)] border-y border-line">
            {faq.map((item) => (
              <details key={item.q} className="group border-b border-line last:border-b-0">
                <summary className="flex min-h-[var(--ds-target)] cursor-pointer items-center justify-between gap-[var(--ds-space-16)] py-[var(--ds-space-16)] font-semibold text-ink">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-muted after:content-['+'] group-open:after:content-['−']"
                  />
                </summary>
                <p className="pb-[var(--ds-space-16)] text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="grid gap-[var(--ds-space-48)] py-[var(--ds-space-64)] lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Vraag een offerte</h2>
            <p className="mt-[var(--ds-space-16)] max-w-xl text-muted">
              Zeg wat er geschilderd moet worden en in welke gemeente. We ontvangen het op{" "}
              {site.email}. Of bel meteen.
            </p>
            <div className="mt-[var(--ds-space-24)]">
              <ButtonLink href={`tel:${site.phoneTel}`}>Bel {site.phoneDisplay}</ButtonLink>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
