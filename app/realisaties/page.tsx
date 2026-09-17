import { GalleryGrid } from "@/components/GalleryGrid";
import { JsonLd } from "@/components/JsonLd";
import { Container, PageHeader } from "@/components/ui";
import { gallery } from "@/content/gallery";
import { breadcrumbJsonLd, businessJsonLd } from "@/content/schema";
import { pageMeta, pages, routes } from "@/content/site";

export const metadata = pageMeta("realisaties", routes.realisaties);

export default function RealisatiesPage() {
  const binnen = gallery.filter((item) => item.type === "binnen");
  const buiten = gallery.filter((item) => item.type === "buiten");

  return (
    <Container className="pb-[var(--ds-space-64)]">
      <JsonLd data={businessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: routes.home },
          { name: "Realisaties", href: routes.realisaties },
        ])}
      />
      <PageHeader title={pages.realisaties.h1} summary={pages.realisaties.summary} />
      <section>
        <h2 className="text-2xl font-semibold">Binnenschilderwerk</h2>
        <div className="mt-[var(--ds-space-16)]">
          <GalleryGrid items={binnen} />
        </div>
      </section>
      <section className="mt-[var(--ds-space-64)]">
        <h2 className="text-2xl font-semibold">Buitenschilderwerk</h2>
        <div className="mt-[var(--ds-space-16)]">
          <GalleryGrid items={buiten} />
        </div>
      </section>
    </Container>
  );
}
