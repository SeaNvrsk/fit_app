import type { Metadata } from "next";
import { isPlaceholder, mapsHref, site } from "@/content/site";
import { media } from "@/content/media";

function withProtocol(value: string) {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelUrl = (
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  ""
).trim();
const configuredIsLocal = configuredUrl
  ? new URL(withProtocol(configuredUrl)).hostname === "localhost"
  : false;

export const siteUrl = withProtocol(
  (configuredUrl && (!configuredIsLocal || !vercelUrl) ? configuredUrl : vercelUrl) ||
    "http://localhost:3000",
);

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(input.path);
  const socialImage = absoluteUrl(media.hero);

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
      images: [{ url: socialImage, alt: site.tagline }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [socialImage],
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
    image: absoluteUrl(media.hero),
    slogan: site.tagline,
    hasMap: mapsHref(),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.contact.street}, ${site.contact.floor}`,
      addressLocality: site.contact.city,
      addressRegion: "México",
      postalCode: site.contact.postalCode,
      addressCountry: "MX",
    },
    email: isPlaceholder(site.contact.email) ? undefined : site.contact.email,
    telephone: site.contact.phone,
    sameAs: site.contact.instagramUrl ? [site.contact.instagramUrl] : undefined,
  };
}
