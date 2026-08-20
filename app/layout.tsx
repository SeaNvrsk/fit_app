import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import { Analytics } from "@/components/analytics/Analytics";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site";
import { pagesMeta } from "@/content/seo";
import { localBusinessJsonLd, pageMetadata } from "@/lib/seo";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  ...pageMetadata(pagesMeta.home),
  title: {
    default: pagesMeta.home.title,
    template: "%s | BBH",
  },
  keywords: [
    "HYROX",
    "HYROX training",
    "hybrid training",
    "performance training",
    "strength and conditioning",
    "elite coaching",
    "HYROX coach",
    "BBH",
    "The House of Champions",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} className={`${oswald.variable} ${geist.variable}`}>
      <body className="bg-bbh-black font-body text-bbh-white antialiased">
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
