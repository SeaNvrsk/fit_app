function env(name: string) {
  return (process.env[name] || "").trim();
}

const DEFAULT_STOREFRONT = "https://www.bbhperformance.com";

export function fitune() {
  const storefront = env("NEXT_PUBLIC_FITUNE_STOREFRONT_URL") || DEFAULT_STOREFRONT;
  const base = storefront.replace(/\/$/, "");

  return {
    storefront: base,
    schedule: env("NEXT_PUBLIC_FITUNE_EMBED_SCHEDULE") || `${base}/horario`,
    appointments: env("NEXT_PUBLIC_FITUNE_EMBED_APPOINTMENTS") || `${base}/personalizados`,
    events: env("NEXT_PUBLIC_FITUNE_EMBED_EVENTS") || `${base}/eventos`,
    memberships: env("NEXT_PUBLIC_FITUNE_EMBED_MEMBERSHIPS") || `${base}/precios`,
  };
}

export function isFituneReady() {
  return Boolean(fitune().storefront);
}

export function bookHref() {
  return "/horario#reservar";
}
