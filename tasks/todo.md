# BGX Paints — Full Website Rebuild

**Status:** APPROVED — executing (Dutch only, 24/7, no monumentaal, no Albanian v1)

**Goal:** Replace the current dark, thin, broken `bgxpaints.be` with a light, mobile-first, people-first site that ranks for real local painter intent and converts to a call or offerte.

**Architecture:** Next.js App Router (TypeScript) + Tailwind + DTCG tokens. Static-first pages, one shared layout, copy and NAP in a single `content/site.ts` source. No CMS, no extra classes, no unused helpers.

**Tech stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, `next/font`, `next/image`, JSON-LD, Vercel-ready.

---

## Findings from the live site and local market

### Current `bgxpaints.be` (reuse facts, rewrite copy)

- Dark theme, generic template copy, almost no local entity.
- Working homepage only. Linked pages `/about`, `/services`, `/gallery`, `/contact` return **404**. That is a crawl and trust failure.
- Facts to keep:
  - Brand: **BGX Paints**
  - Phone: **0492 07 85 82** → `+32 492 07 85 82`
  - Email: **info@bgxpaints.be**
  - City: **Oostende**
  - Paints used: **Boss, Sigma, Sikkens, Mathys**
  - Tone to keep (sharper, less filler): snel, net, kwaliteit, communicatie
- Copy to drop: repeated “Op zoek naar…” blocks, empty claims, “Transformeer uw huis in één dag!” unless you confirm that is always true.
- Duplicate site exists under an old name. Public brand is **BGX Paints** only. Do **not** add a former name as `alternateName` or visible copy.

### NAP found in directories (confirm before ship)

- Listing name: **BGX Paints** (directories may still show a stale former name; the site does not)
- Address: **Zwaluwenstraat 47, 8400 Oostende**
- Phone matches the website
- Hours are **24/7** on Google Maps. Site must match: bereikbaar 24 uur per dag.

### Photos (`clientwork/`)

29 real job photos. Filenames already carry service + city. These become the gallery and proof, not stock.

- Interior: Oostende, Blankenberge, Brugge, Ingelmunster, Roeselare, Tielt, Izegem, villa interiors
- Exterior: gevels, balkon, garagepoort, ramen, hoogbouw, grotere woningen (Oostende, Brugge, Oudenburg, Ingelmunster, Izegem, Roeselare, Tielt)

### What ranking local painters already do (copy this pattern, do not invent)

[Van Eycken](https://vaneyckenschilderwerken.be/) is the local model:

1. Clear H1 with city + kustregio
2. Separate **binnen / buiten / speciale technieken** pages with real process copy
3. One honest **werkgebied** list on the homepage and footer (not 20 thin city clones)
4. NAP in the footer on every page
5. One primary CTA: **gratis offerte** + phone
6. Coastal climate as a real reason to hire a local painter

[Pascal Paint](https://pascalpaint.be/) shows the small-company version: person, phone first, “ook kleine werken”, simple services.

**We will not build 14 doorway city pages.** That violates Google spam policy and the SEO skill (people-first wins). Cities live on one werkgebied page, in footer NAP, in photo captions, and in `areaServed` schema that matches visible text.

---

## Assumptions (proceed with these unless you correct them)

1. Brand: **BGX Paints**. Legal name: **Gërxhaliu, Bekim** (natuurlijk persoon). BTW: **BE0698585981**. Start: 19-06-2018.
2. Address: **Zwaluwenstraat 47, 8400 Oostende, België** (same as Google Maps).
3. Hours: **24/7**, matching Google Maps. Shown as 24 uur per dag telefonisch bereikbaar.
4. Language: **Dutch only** in v1.
5. No monumentaal / beschermd-erfgoed claims.
6. Host later on `bgxpaints.be`. This rebuild lives in this folder first.
7. Contact: phone + WhatsApp + mailto form. No extra email SaaS.
8. No “klaar in één dag” guarantee. No blog in v1.

---

## Decision table

| Option | Result | Why it loses or wins |
|---|---|---|
| Keep current dark SPA and restyle | Loses | Inner URLs 404, generic copy, no local pages |
| 14 city pages + keyword lists | Loses | Doorway/spam risk, thin content, more to maintain |
| WordPress like competitors | Loses | Heavier than needed for this site |
| **Next.js static-first, hub + 3 services + 1 werkgebied** | **Wins** | Matches Van Eycken IA, stays small, indexable, mobile-first |

---

## Information architecture (v1)

```
/                      Home — schilder Oostende + kust, proof, CTA
/diensten              Service hub
/diensten/binnen       Binnenschilderwerk
/diensten/buiten       Buitenschilderwerk
/diensten/spuitwerk    Spuitwerk en speciale technieken
/realisaties           Real job photos, filter by binnen/buiten
/werkgebied            Honest coverage list + map
/over                  Who does the work, how we work
/contact               Phone, WhatsApp, form, map
/privacy               GDPR, required for the form
```

v1 is Dutch only. Albanian routes are out of scope.

Technical files: `robots.ts`, `sitemap.ts`, favicon from `logo/bgxpaints_logo_only.svg`, header logo from `logo/bgxpaints_logo_full.svg`.

### Files to create (nothing exists yet except logos and photos)

```
app/layout.tsx
app/page.tsx
app/diensten/page.tsx
app/diensten/binnen/page.tsx
app/diensten/buiten/page.tsx
app/diensten/spuitwerk/page.tsx
app/realisaties/page.tsx
app/werkgebied/page.tsx
app/over/page.tsx
app/contact/page.tsx
app/privacy/page.tsx
app/robots.ts
app/sitemap.ts
app/opengraph-image.tsx
components/Header.tsx
components/Footer.tsx
components/MobileNav.tsx
components/ContactForm.tsx
components/GalleryGrid.tsx
components/JsonLd.tsx
content/site.ts
content/gallery.ts
tokens/tokens.json
app/globals.css
public/logo/*
public/realisaties/*   (optimized copies of clientwork)
```

No extra util files unless a second call site exists.

---

## Design system (light theme)

Brand from the SVG logos:

- Amber mark: `#FFAB00`
- Ink: `#333333`
- Canvas: warm off-white, not pure glare white

**Contrast rule:** amber is a brand mark, not body text and not the only color on a primary button. Primary button = dark surface + light label. Amber = logo, underlines, small accents.

Tokens (DTCG → CSS vars only):

- Color: canvas, surface, text primary/secondary, action, focus, border
- Space: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64
- Type: title / body / label
- Motion: fast 120ms, moderate 240ms; `prefers-reduced-motion` disables slide

Breakpoints to test: **320, 375, 768, 1024, 1440**

Touch targets: 44×44 CSS px minimum. Sticky mobile CTA: **Bel** + **Offerte**.

Motion: menu open/close and focus only. No parallax, no looping paint animations.

---

## SEO / GEO / AEO / AIO (people-first, no stuffing)

Keywords live inside useful answers, not as a dump.

**Home / entity**
- Schilder Oostende, schildersbedrijf Oostende, schilder in de buurt, erkende / betrouwbare schilder

**Binnen page**
- Binnenschilder, muren verven, plafond sausen, trap schilderen, deuren schilderen, kozijnen binnen, kamer schilderen

**Buiten page**
- Buitenschilder, gevel schilderen, buitenboel, dakkapel, schutting beitsen, kozijnen buiten, kustklimaat (zout + vocht)

**Spuitwerk page**
- Spuitwerk, muren latex spuiten, plafond spuiten, lakspuitwerk. Monumentaal only if you actually do it — default copy will **not** claim monumenten unless you confirm.

**Werkgebied page (one page, all cities)**
Oostende, Bredene, Middelkerke, Oudenburg, Gistel, De Haan, Nieuwpoort, Blankenberge, Brugge, Torhout, Diksmuide, Jabbeke, Ichtegem, Zuienkerke.

Photos also prove work in Ingelmunster, Izegem, Roeselare, Tielt. Those appear as “recente projecten”, not as fake extra service cities unless you want them added.

Each public page gets:

- Unique title + meta description
- H1, extractable summary, H2/H3, FAQ where it helps
- Internal links, no orphans
- Image alt that describes the job and city (from filenames)
- JSON-LD that matches visible text only: `HousePainter`, `Service`, `FAQPage`, `BreadcrumbList`, `areaServed`

Also: `sitemap.xml`, indexable robots, canonical URLs, OG image, `llms.txt` with the same facts as the site (not extra claims).

Citations already exist (Google Maps, Apple Maps, Gouden Gids, oostendelokaal.be, schildergids.be, opendi.be, cylex). The site NAP must match those. After launch: same name, phone, address everywhere.

---

## Copy direction (neuromarketing without tricks)

One primary action per page. Hick: do not offer 8 CTAs.

Proof over adjectives: real rooms, real gevels, named paints, named cities.

Coastal honesty: buitenwerk at the kust needs the right system, not a cheap indoor latex.

Process (Van Eycken pattern, shorter):

1. Bel of formulier
2. Bezoek / foto’s / opmeting
3. Duidelijke offerte
4. Voorbereiding (schuren, ontvetten, afplakken, primer)
5. Afwerking en oplevering

Keep their four values, rewritten once: snel waar het kan, netjes, juiste verf, bereikbaar.

Albanian pages: same facts, natural Albanian, no keyword stuffing.

---

## DCO pre-work (required before execute)

Selected skills:

- `dco-gate`
- `unified-design-tokens`
- `responsive-layout-tokens`
- `accessibility-wcag21-aa-gate`
- `motion-reduced-motion`
- `seo-ai-visibility-framework`

Source registry last full review was 2026-03-22. During execute, re-open Google SEO + LocalBusiness + WCAG contrast/reflow/focus URLs before shipping.

P0 gates for this build:

- Token-only colors/spacing (no raw hex in components)
- Contrast 4.5:1 text, 3:1 UI
- Reflow at 320, text resize 200%
- Keyboard + visible focus
- Reduced-motion path
- Indexable pages, unique titles, people-first copy, schema = visible facts

---

## Checklist (check these off during execute)

### 0. Approval gate

- [x] You approve this plan
- [x] Confirmed: Zwaluwenstraat 47, 8400 Oostende; BE0698585981; Gërxhaliu Bekim; 24/7; Dutch only; no monumentaal; no één-dag guarantee

### 1. Scaffold

- [x] Create Next.js app in this folder without deleting `logo/` or `clientwork/`
- [x] Add `.gitignore` for `.firecrawl/`, `.next/`, `node_modules/`
- [x] Add DTCG tokens + CSS variables
- [x] Add fonts via `next/font` (no Google CSS link)

### 2. Shared chrome

- [x] Header with logo-only + wordmark, 5 nav items, 44px targets, mobile details menu
- [x] Footer NAP + cities + privacy + phone
- [x] Sticky mobile call/offerte bar
- [x] Favicon = logo-only

### 3. Content model

- [x] `content/site.ts` with NAP, cities, services, FAQ, titles/metas
- [x] `content/gallery.ts` mapping each `clientwork` photo to alt, service, city
- [x] Copy rewritten in Dutch only

### 4. Pages

- [x] Home
- [x] Diensten hub + binnen + buiten + spuitwerk
- [x] Realisaties
- [x] Werkgebied + Google Maps embed
- [x] Over
- [x] Contact + working form
- [x] Privacy
- [x] Albanian skipped (v1 Dutch only)

### 5. Search and trust

- [x] Metadata + OG on every page
- [x] `HousePainter` JSON-LD + FAQ + breadcrumbs
- [x] `sitemap.ts` + `robots.ts`
- [x] `llms.txt`
- [x] 301: `/about` → `/over`, `/services` → `/diensten`, `/gallery` → `/realisaties`

### 6. Verify (must pass before we call it done)

- [x] Desktop + mobile in the browser: tap, type, navigate every route
- [x] 320 width: no horizontal scroll
- [x] Form fields accept input (mailto submit not fired in browser tool)
- [x] Focus ring token in CSS
- [x] Reduced-motion: no slide animations shipped
- [x] Production build succeeds
- [x] Review section filled below

---

## Review

- Changes: Light Dutch-only Next.js site. Confirmed NAP (Zwaluwenstraat 47, BE0698585981, Gërxhaliu Bekim, info@bgxpaints.be, 24/7). Real job photos. No city doorway pages. No monumentaal. Brand is BGX Paints only.
- Routes shipped: `/` `/diensten` `/diensten/binnen` `/diensten/buiten` `/diensten/spuitwerk` `/realisaties` `/werkgebied` `/over` `/contact` `/privacy` plus 301s from old English slugs.
- Verification: `npm run build` OK. Browser: home, contact form fill, realisaties, over (via `/about` 301), binnen, privacy, werkgebied. Mobile 320: no overflow. Sticky Bel/Offerte present.
- Open risks: Form uses mailto (needs a mail app). Align remaining directories that still show a stale former name / old email. Point `bgxpaints.be` DNS to this deploy when ready.

---

## SEO / GEO / AEO / AIO (2026-09-17)

Selected skills: `dco-gate`, `seo-ai-visibility-framework`. Google docs re-checked 2026-09-17.

### Checklist

- [x] Indexable robots + sitemap (allow Google, Bing, GPTBot, Claude, Perplexity)
- [x] Unique title + meta + canonical + OG/Twitter per page
- [x] People-first: no city doorway pages, no fake reviews/ratings
- [x] Entity: NAP + brand **BGX Paints** only (no former-name `alternateName`)
- [x] GEO: lat/long 51.21763, 2.90858 + `hasMap` + areaServed cities
- [x] Extractable FAQ (visible + FAQPage) including prijs and kustklimaat
- [x] Service JSON-LD on binnen/buiten/spuitwerk matching visible copy
- [x] Bilingual `llms.txt` for AI crawlers / ChatGPT-style retrieval
- [x] Schema matches visible content only

### Compliance packet

- Change: AI/search visibility layer on existing Dutch pages
- Pre-work: Google starter, spam, SD policies, LocalBusiness re-opened
- Exceptions: none
- DCO: APPROVED for this layer (no new UI chrome, existing FAQ pattern)

---

## What I will not do

- Keyword-stuffed city clones
- Fake reviews or fake ratings in schema
- Dark theme
- Duplicate copy from a former-brand site pasted under a new logo
- Extra component libraries, animation libraries, or CMS
- Dead code, unused helpers, comments that repeat the code

---

## Brand cleanup: BGX Paints only (2026-09-17)

**Status:** executed (no commit)

### Checklist

- [x] Search repo for former-brand strings in code, content, schema, `llms.txt`, `tasks/todo.md`
- [x] Remove former-brand copy from `app/over/page.tsx`
- [x] Remove former-brand from `site.alternateNames` / schema `alternateName`
- [x] Remove former-brand lines from `public/llms.txt`
- [x] Keep legal name Gërxhaliu, Bekim and the same NAP
- [x] Do not add former name as current `alternateName`
- [x] No city doorway pages, no fake reviews
- [x] Production build, then Cloudflare deploy if build succeeds
- [x] No git commit or push

### Review

- Public brand is **BGX Paints** only. Schema `alternateName` is only `BGX PAINTS` (casing variant), not a former trading name.
- Legal name and NAP unchanged: Gërxhaliu, Bekim; Zwaluwenstraat 47, 8400 Oostende; BE0698585981; info@bgxpaints.be.
- Do not reintroduce a former name in user-visible copy, `llms.txt`, or JSON-LD. That confuses Google/AI entity matching.

---

## Mobile menu stays open after navigate (2026-09-17)

**Status:** executed (no commit)

The header uses native `<details>`. Next.js App Router keeps the layout mounted, so the menu stayed open after a tap to Diensten. Closing the panel in the same click hid the link and could cancel navigation. Close after the route changes instead.

### Checklist

- [x] Close mobile `<details>` on pathname change
- [x] Close on same-route nav/logo tap only (do not hide the link mid-click)
- [x] Close on Escape
- [x] Keep native disclosure (no extra menu library)
- [x] Verify mobile viewport: open Menu → Diensten → panel gone, page visible
- [x] Deploy live Worker after verify

### Review

- `components/Header.tsx` is a client header. Menu closes when `usePathname()` changes, so the new page is visible.
- Same-route taps (already on Diensten, logo on home) still close the panel.
- Escape closes the panel.
- Do not close the `<details>` in the same click as a new-route `Link`. That can swallow the navigation.
- Verified locally on 390×844: Menu → Diensten (navigates + closes), same-route Diensten (closes), Menu → Contact (navigates + closes).
- Deployed Worker `bgxpaints` version `8fbd931f-aed6-44eb-9e26-dcde4cb23e7c`. Not committed.

---

## White logo mark (2026-09-27)

**Status:** executing

The footer mark (`bgxpaints_logo_only.svg`) is the current roller. PNG copies used as favicon, Apple icon, and schema logo were the same roller on black. Google does not use SVG favicons, so search kept an older icon.

### Checklist

- [x] White background on `bgxpaints_logo_only.svg`
- [x] Replace black PNGs (mark, wordmark, Apple icon) with the white versions
- [x] Link a 192×192 PNG favicon (Google requires a square multiple of 48px)
- [x] Deploy so bgxpaints.be serves the white icons

### Review

- Footer and favicon use the roller on white. Wordmark PNG used in schema is white, not black.
- Live Worker version `dc50357b-6d18-408f-ad64-e6667c93501c`. Homepage links `/icon-192.png` first.
- Google’s search icon updates on its own crawl. The browser tab updates after a hard refresh.

---

## IndexNow (2026-09-27)

**Status:** live

- Key file: `https://bgxpaints.be/3d3e8abaa5e06a8f876a3767059ef92b.txt`
- `npm run deploy` submits the live sitemap to `https://api.indexnow.org/indexnow`
- First submit returned **202** (accepted, key check pending) for 10 URLs
- Worker version `6d4c1399-a3b4-412a-99f9-0e01532fc764`
