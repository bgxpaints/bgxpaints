import Image from "next/image";
import Link from "next/link";
import { routes, site } from "@/content/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface pb-[calc(var(--ds-target)+var(--ds-space-24))] md:pb-[var(--ds-space-32)]">
      <Container className="grid gap-[var(--ds-space-32)] py-[var(--ds-space-48)] md:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex min-h-[var(--ds-target)] items-center">
            <Image
              src="/logo/bgxpaints_logo_only.svg"
              alt="BGX Paints"
              width={40}
              height={40}
              className="size-10"
            />
          </Link>
          <p className="mt-[var(--ds-space-8)] text-muted">
            Schildersbedrijf in Oostende voor binnen- en buitenschilderwerk.
          </p>
          <p className="mt-[var(--ds-space-16)] text-ink">
            {site.legalName}
            <br />
            {site.vat}
            <br />
            {site.address.line}
          </p>
        </div>
        <div>
          <p className="font-semibold text-ink">Contact</p>
          <ul className="mt-[var(--ds-space-8)] space-y-[var(--ds-space-8)]">
            <li>
              <a className="footer-link" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="footer-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href={site.whatsapp}
                rel="noopener noreferrer"
                target="_blank"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href={site.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Google Maps
              </a>
            </li>
            <li>Bereikbaar {site.hoursLabel}</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-ink">Werkgebied</p>
          <p className="mt-[var(--ds-space-8)] text-muted">{site.cities.join(", ")}.</p>
          <nav aria-label="Footer" className="mt-[var(--ds-space-16)] flex flex-wrap gap-x-[var(--ds-space-16)] gap-y-[var(--ds-space-8)]">
            <Link className="footer-link" href={routes.diensten}>
              Diensten
            </Link>
            <Link className="footer-link" href={routes.realisaties}>
              Realisaties
            </Link>
            <Link className="footer-link" href={routes.privacy}>
              Privacy
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
