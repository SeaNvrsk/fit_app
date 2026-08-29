function env(name: string) {
  return (process.env[name] || "").trim();
}

const DEFAULT_STOREFRONT = "https://booking.bbhperformance.com";

/**
 * Fitune tab slugs on a custom domain (not our marketing URLs):
 * Home `/` · Schedule `/activities` · Events `/events`
 * Appointments `/appointments` (BBH renamed this tab Personalizados) · Memberships `/memberships`
 *
 * `/embed/{tab}` loads Fitune's widget layout instead of the full storefront
 * (the `/activities` site chrome is what made Horario look like a site-in-site).
 */
function fituneWidget(base: string, tab: string) {
  return `${base}/embed/${tab.replace(/^\//, "")}`;
}

export function fitune() {
  const storefront = env("NEXT_PUBLIC_FITUNE_STOREFRONT_URL") || DEFAULT_STOREFRONT;
  const base = storefront.replace(/\/$/, "");

  return {
    storefront: base,
    schedule: env("NEXT_PUBLIC_FITUNE_EMBED_SCHEDULE") || fituneWidget(base, "activities"),
    appointments: env("NEXT_PUBLIC_FITUNE_EMBED_APPOINTMENTS") || fituneWidget(base, "appointments"),
    events: env("NEXT_PUBLIC_FITUNE_EMBED_EVENTS") || fituneWidget(base, "events"),
    memberships: env("NEXT_PUBLIC_FITUNE_EMBED_MEMBERSHIPS") || fituneWidget(base, "memberships"),
  };
}

export function fituneOrigin(src: string) {
  try {
    return new URL(src).origin;
  } catch {
    return DEFAULT_STOREFRONT;
  }
}
