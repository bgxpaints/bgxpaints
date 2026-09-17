import type { Metadata } from "next";

export const site = {
  name: "BGX Paints",
  legalName: "Gërxhaliu, Bekim",
  vat: "BE0698585981",
  started: "2018-06-19",
  startedLabel: "19 juni 2018",
  email: "info@bgxpaints.be",
  phoneDisplay: "0492 07 85 82",
  phoneTel: "+32492078582",
  whatsapp: "https://wa.me/32492078582",
  url: "https://bgxpaints.be",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=BGX+PAINTS+Zwaluwenstraat+47+8400+Oostende",
  appleMapsUrl:
    "https://maps.apple.com/?address=Zwaluwenstraat%2047,%208400%20Oostende,%20Belgium",
  mapsEmbed:
    "https://maps.google.com/maps?q=BGX%20PAINTS%2C%20Zwaluwenstraat%2047%2C%208400%20Oostende&hl=nl&z=16&output=embed",
  alternateNames: ["BGX PAINTS"] as const,
  geo: {
    latitude: 51.21763,
    longitude: 2.90858,
  },
  hoursLabel: "24 uur per dag, 7 dagen per week",
  brands: ["Sigma", "Sikkens", "Boss", "Mathys"] as const,
  address: {
    street: "Zwaluwenstraat 47",
    city: "Oostende",
    postal: "8400",
    region: "West-Vlaanderen",
    country: "BE",
    countryLabel: "België",
    line: "Zwaluwenstraat 47, 8400 Oostende, België",
  },
  cities: [
    "Oostende",
    "Bredene",
    "Middelkerke",
    "Oudenburg",
    "Gistel",
    "De Haan",
    "Nieuwpoort",
    "Blankenberge",
    "Brugge",
    "Torhout",
    "Diksmuide",
    "Jabbeke",
    "Ichtegem",
    "Zuienkerke",
  ] as const,
  extraProjectCities: [
    "Ingelmunster",
    "Izegem",
    "Roeselare",
    "Tielt",
  ] as const,
  nav: [
    { href: "/diensten", label: "Diensten" },
    { href: "/realisaties", label: "Realisaties" },
    { href: "/werkgebied", label: "Werkgebied" },
    { href: "/over", label: "Over" },
    { href: "/contact", label: "Contact" },
  ] as const,
};

export const routes = {
  home: "/",
  diensten: "/diensten",
  binnen: "/diensten/binnen",
  buiten: "/diensten/buiten",
  spuitwerk: "/diensten/spuitwerk",
  realisaties: "/realisaties",
  werkgebied: "/werkgebied",
  over: "/over",
  contact: "/contact",
  privacy: "/privacy",
} as const;

export const pages = {
  home: {
    title: "Schilder Oostende | BGX Paints",
    description:
      "Schildersbedrijf in Oostende voor binnen- en buitenschilderwerk. Muren, plafonds, ramen, deuren en gevels. 24/7 bereikbaar. Vraag een vrijblijvende offerte.",
    h1: "Schilder in Oostende voor binnen en buiten",
    summary:
      "BGX Paints is het schildersbedrijf van Bekim Gërxhaliu in Oostende. Sinds 2018 schilderen we woningen en bedrijfspanden aan de kust: muren, plafonds, ramen, deuren en gevels, met Sigma, Sikkens, Boss en Mathys.",
  },
  diensten: {
    title: "Schilderdiensten Oostende | BGX Paints",
    description:
      "Binnenschilderwerk, buitenschilderwerk en spuitwerk in Oostende en de kustregio. Duidelijke offerte, nette voorbereiding, kwaliteitsverf.",
    h1: "Schilderdiensten voor woning en zaak",
    summary:
      "Drie duidelijke pistes: binnen, buiten en spuitwerk. Geen catalogus van 30 beloftes. Wel het werk dat we elke week doen in Oostende en omstreken.",
  },
  binnen: {
    title: "Binnenschilder Oostende | muren, plafond, deuren",
    description:
      "Binnenschilder in Oostende: muren verven, plafond sausen, trap, deuren en kozijnen binnen schilderen. Strakke afwerking met kwaliteitsverf.",
    h1: "Binnenschilderwerk in Oostende",
    summary:
      "Kamer schilderen, muren verven, plafond sausen, deuren en kozijnen binnen: één aanspreekpunt, van opmeting tot nette oplevering.",
  },
  buiten: {
    title: "Buitenschilder Oostende | gevel en kozijnen",
    description:
      "Buitenschilder in Oostende voor gevel schilderen, kozijnen buiten, dakkapel en buitenboel. Verf die het kustklimaat aankan.",
    h1: "Buitenschilderwerk aan de kust",
    summary:
      "Gevel schilderen, kozijnen buiten verven, dakkapel en buitenboel: voorbereiding en verfsysteem afgestemd op zout, wind en vocht in West-Vlaanderen.",
  },
  spuitwerk: {
    title: "Spuitwerk Oostende | latex en lak",
    description:
      "Spuitwerk in Oostende: muren latex spuiten, plafond spuiten en lakspuitwerk voor een egale, stofarme afwerking.",
    h1: "Spuitwerk voor muren, plafond en lak",
    summary:
      "Waar rollen strepen nalaat, spuiten we latex of lak egaal. Handig voor plafonds, grote wanden en strak lakwerk.",
  },
  realisaties: {
    title: "Realisaties schilderwerken | BGX Paints",
    description:
      "Foto’s van binnenschilderwerk en buitenschilderwerk door BGX Paints in Oostende, Brugge, Blankenberge en de rest van West-Vlaanderen.",
    h1: "Werk dat u kunt zien",
    summary:
      "Echte werven, geen stockfoto’s. Binnen en buiten, van appartement tot gevel, met de stad in het bijschrift.",
  },
  werkgebied: {
    title: "Schilder in de buurt | werkgebied BGX Paints",
    description:
      "Schilder gezocht in Oostende, Bredene, Middelkerke, Brugge, Blankenberge en de kustregio? BGX Paints komt ter plaatse.",
    h1: "Werkgebied: Oostende en de kust tot Brugge",
    summary:
      "U zoekt een schilder in de buurt. Wij werken vanuit Oostende en rijden uit naar de gemeenten hieronder. Recente projecten liggen ook verder inland.",
  },
  over: {
    title: "Over BGX Paints | schildersbedrijf Oostende",
    description:
      "BGX Paints is het schildersbedrijf van Bekim Gërxhaliu, Zwaluwenstraat 47, 8400 Oostende. BTW BE0698585981. Sinds 2018.",
    h1: "Een schilder met naam en adres",
    summary:
      "BGX Paints is de zaak van Bekim Gërxhaliu. Geen anonieme ploeg van een platform. Een erkende onderneming in Oostende, 24/7 bereikbaar.",
  },
  contact: {
    title: "Contact en offerte | BGX Paints Oostende",
    description:
      "Bel 0492 07 85 82, WhatsApp of mail info@bgxpaints.be. Zwaluwenstraat 47, 8400 Oostende. 24/7 bereikbaar. Vrijblijvende offerte.",
    h1: "Offerte of afspraak: bel, app of mail",
    summary:
      "Zeg wat er geschilderd moet worden, de gemeente en wanneer we mogen kijken. U krijgt een duidelijk antwoord, geen callcenter.",
  },
  privacy: {
    title: "Privacy | BGX Paints",
    description:
      "Privacyverklaring van BGX Paints, Gërxhaliu Bekim, Zwaluwenstraat 47, 8400 Oostende.",
    h1: "Privacyverklaring",
    summary:
      "We vragen alleen wat nodig is om u te antwoorden of een offerte te maken.",
  },
};

export function pageMeta(key: keyof typeof pages, path: string): Metadata {
  const page = pages[key];
  const canonical = path === "/" ? site.url : `${site.url}${path}`;
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: path,
      languages: { "nl-BE": path, "x-default": path },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      locale: "nl_BE",
      type: "website",
      url: canonical,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export const faq = [
  {
    q: "Werkt BGX Paints als schilder in Oostende?",
    a: "Ja. De zaak zit op Zwaluwenstraat 47, 8400 Oostende. We doen binnen- en buitenschilderwerk voor particulieren en bedrijven in Oostende en de omliggende gemeenten.",
  },
  {
    q: "Welke schilderwerken voeren jullie uit?",
    a: "Binnenschilderwerk (muren, plafonds, trap, deuren, kozijnen), buitenschilderwerk (gevel, kozijnen, dakkapel, buitenboel) en spuitwerk (latex en lak).",
  },
  {
    q: "Zijn jullie een erkende schilder?",
    a: "BGX Paints is de handelsnaam van Gërxhaliu Bekim, ondernemingsnummer BE0698585981, actief sinds 19 juni 2018. U vindt ons ook op Google Maps, Apple Maps, Gouden Gids en lokale gidsen.",
  },
  {
    q: "Wanneer kan ik bellen?",
    a: "We zijn 24 uur per dag, 7 dagen per week bereikbaar op 0492 07 85 82, via WhatsApp of via e-mail.",
  },
  {
    q: "Werken jullie ook voor bedrijven?",
    a: "Ja. We schilderen woningen en bedrijfspanden. Facturatie kan via Peppol (0208:0698585981).",
  },
  {
    q: "Wat kost een schilder in Oostende?",
    a: "De prijs hangt af van oppervlakte, staat van de ondergrond en of het binnen of buiten is. We kijken eerst ter plaatse of via foto’s en geven daarna een vrijblijvende offerte. Geen catalogusprijs per m² zonder de werf te zien.",
  },
  {
    q: "Schilderen jullie gevels in het kustklimaat?",
    a: "Ja. Buitenwerk in Oostende en de kustregio vraagt een systeem tegen zout, wind en vocht. We zetten geen binnenlatex op een gevel.",
  },
];
