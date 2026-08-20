function env(name: string) {
  return (process.env[name] || "").trim();
}

const DEFAULT_STOREFRONT = "https://www.bbhperformance.com";

/**
 * Fitune tab slugs on a custom domain (not our marketing URLs):
 * Home `/` · Schedule `/activities` · Events `/events`
 * Appointments `/appointments` (BBH renamed this tab Personalizados) · Pricing `/pricing`
 *
 * Paths like `/horario` or `/eventos` are not Fitune tabs — the app 404s.
 * `embed=true` is widget chrome (Preferencias → Embed).
 */
function fituneWidget(base: string, path: string) {
  const url = new URL(path, `${base}/`);
  url.searchParams.set("embed", "true");
  return url.toString();
}

export function fitune() {
  const storefront = env("NEXT_PUBLIC_FITUNE_STOREFRONT_URL") || DEFAULT_STOREFRONT;
  const base = storefront.replace(/\/$/, "");

  return {
    storefront: base,
    schedule: env("NEXT_PUBLIC_FITUNE_EMBED_SCHEDULE") || fituneWidget(base, "/activities"),
    appointments: env("NEXT_PUBLIC_FITUNE_EMBED_APPOINTMENTS") || fituneWidget(base, "/appointments"),
    events: env("NEXT_PUBLIC_FITUNE_EMBED_EVENTS") || fituneWidget(base, "/events"),
    memberships: env("NEXT_PUBLIC_FITUNE_EMBED_MEMBERSHIPS") || fituneWidget(base, "/pricing"),
  };
}

export function isFituneReady() {
  return Boolean(fitune().storefront);
}

export function bookHref() {
  return "/horario#reservar";
}
