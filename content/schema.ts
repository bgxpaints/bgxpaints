import { faq, site } from "./site";

const businessId = `${site.url}/#business`;
const websiteId = `${site.url}/#website`;

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": businessId,
    name: site.name,
    alternateName: [...site.alternateNames],
    legalName: site.legalName,
    taxID: site.vat,
    vatID: site.vat,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    image: [
      `${site.url}/logo/bgxpaints_logo_full.png`,
      `${site.url}/realisaties/buitenmuurschilderenoudenburg.jpeg`,
    ],
    logo: `${site.url}/logo/bgxpaints_logo_only.png`,
    foundingDate: site.started,
    founder: {
      "@type": "Person",
      name: "Bekim Gërxhaliu",
      jobTitle: "Schilder",
      worksFor: { "@id": businessId },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postal,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.mapsUrl,
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
    knowsLanguage: "nl",
    sameAs: [site.mapsUrl, site.appleMapsUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Schilderdiensten",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Binnenschilderwerk",
            url: `${site.url}/diensten/binnen`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Buitenschilderwerk",
            url: `${site.url}/diensten/buiten`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Spuitwerk",
            url: `${site.url}/diensten/spuitwerk`,
          },
        },
      ],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: site.url,
    inLanguage: "nl-BE",
    publisher: { "@id": businessId },
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${site.url}${input.path}`,
    serviceType: input.name,
    provider: { "@id": businessId },
    areaServed: site.cities.map((name) => ({ "@type": "City", name })),
    availableLanguage: "nl",
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
      item: `${site.url}${item.href === "/" ? "" : item.href}`,
    })),
  };
}
