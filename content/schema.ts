import { faq, site } from "./site";

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: site.name,
    alternateName: "BGX PAINTS",
    legalName: site.legalName,
    taxID: site.vat,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.url}/logo/bgxpaints_logo_full.png`,
    logo: `${site.url}/logo/bgxpaints_logo_only.png`,
    foundingDate: site.started,
    founder: { "@type": "Person", name: "Bekim Gërxhaliu" },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postal,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: site.cities.map((name) => ({ "@type": "City", name })),
    sameAs: [site.mapsUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Schilderdiensten",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Binnenschilderwerk" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Buitenschilderwerk" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spuitwerk" } },
      ],
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}
