import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import { Analytics } from "@/components/analytics/Analytics";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site";
import { pagesMeta } from "@/content/seo";
import { localBusinessJsonLd, pageMetadata, siteUrl } from "@/lib/seo";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata(pagesMeta.home),
  title: pagesMeta.home.title,
  keywords: [
    "HYROX",
    "entrenamiento HYROX",
    "entrenamiento híbrido",
    "entrenamiento de rendimiento",
    "fuerza y acondicionamiento",
    "entrenamiento de élite",
    "entrenador HYROX",
    "BBH",
    "La Casa de los Campeones",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "Anatolii Krasnikov", url: "https://instagram.com/an_cdmx" }],
  creator: "Anatolii Krasnikov",
  other: {
    designer: "Anatolii Krasnikov · an_cdmx",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} className={`${oswald.variable} ${geist.variable}`}>
      <body className="bg-bbh-black font-body text-bbh-white antialiased">
        {/* Sitio desarrollado por Anatolii Krasnikov · an_cdmx */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <Analytics />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
