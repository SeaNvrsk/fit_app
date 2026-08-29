function env(name: string) {
  return (process.env[name] || "").trim();
}

const DEFAULT_STOREFRONT = "https://booking.bbhperformance.com";
const DEFAULT_EMBED_BASE =
  "https://www.myfitune.io/embed/build-beyond-humans-performancelab";

/**
 * Fitune's generated widget URLs use myfitune.io so the dedicated embed design
 * is applied. The branded booking domain remains the full-storefront fallback.
 */
export function fitune() {
  const storefront = env("NEXT_PUBLIC_FITUNE_STOREFRONT_URL") || DEFAULT_STOREFRONT;
  const base = storefront.replace(/\/$/, "");

  return {
    storefront: base,
    schedule:
      env("NEXT_PUBLIC_FITUNE_EMBED_SCHEDULE") || `${DEFAULT_EMBED_BASE}/activities`,
    appointments:
      env("NEXT_PUBLIC_FITUNE_EMBED_APPOINTMENTS") ||
      `${DEFAULT_EMBED_BASE}/appointments`,
    events: env("NEXT_PUBLIC_FITUNE_EMBED_EVENTS") || `${DEFAULT_EMBED_BASE}/events`,
    memberships:
      env("NEXT_PUBLIC_FITUNE_EMBED_MEMBERSHIPS") || `${DEFAULT_EMBED_BASE}/pricing`,
  };
}

export function fituneOrigin(src: string) {
  try {
    return new URL(src).origin;
  } catch {
    return DEFAULT_STOREFRONT;
  }
}
