import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCta } from "@/components/StickyCta";
import { pages, site } from "@/content/site";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pages.home.title,
  description: pages.home.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: site.name,
    title: pages.home.title,
    description: pages.home.description,
    url: site.url,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ee",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE" className={sans.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
