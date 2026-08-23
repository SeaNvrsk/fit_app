import type { Metadata } from "next";
import { isPlaceholder, site } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(input.path);

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: site.legalName,
      locale: "es_MX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: siteUrl,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.contact.address}, ${site.contact.floor}`,
      addressLocality: "Tlalnepantla de Baz",
      addressRegion: "México",
      postalCode: "54026",
      addressCountry: "MX",
    },
    email: isPlaceholder(site.contact.email) ? undefined : site.contact.email,
    telephone: site.contact.phone,
    sameAs: site.contact.instagramUrl ? [site.contact.instagramUrl] : undefined,
  };
}
