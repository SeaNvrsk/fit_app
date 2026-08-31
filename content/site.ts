export type NavItem = {
  label: string;
  href: string;
  event?: string;
};

export const site = {
  name: "BBH",
  legalName: "BBH — Build Beyond Humans",
  tagline: "LA CASA DE LOS CAMPEONES",
  locale: "es-MX",
  description:
    "BBH es un club de rendimiento de élite. La Casa de los Campeones: los mejores entrenadores, atletas competitivos y un sistema de entrenamiento para quienes quieren competir y estar entre los mejores.",
  contact: {
    street: "Calzada de los Jinetes 35",
    floor: "1er piso",
    colony: "Las Arboledas",
    postalCode: "54026",
    city: "Tlalnepantla de Baz",
    state: "Méx.",
    email: "hola@bbhperformance.com",
    phone: "+52 56 19915404",
    whatsapp: "+52 55 2855 1174",
    whatsappUrl: "",
    instagram: "@bbh_performancelab",
    instagramUrl: "https://www.instagram.com/bbh_performancelab/",
  },
  nav: [
    { label: "INICIO", href: "/" },
    { label: "CLASES", href: "/clases" },
    { label: "HORARIO", href: "/horario", event: "nav_horario" },
    { label: "ENTRENADORES", href: "/coaches", event: "nav_coaches" },
    { label: "EVENTOS", href: "/eventos" },
    { label: "PERSONALIZADOS", href: "/personalizados" },
    { label: "CONTACTO", href: "/contacto" },
  ] satisfies NavItem[],
  mobileNav: [
    { label: "Inicio", href: "/" },
    { label: "Horario", href: "/horario", event: "nav_horario" },
    { label: "Entrenadores", href: "/coaches", event: "nav_coaches" },
    { label: "Eventos", href: "/eventos" },
  ] satisfies NavItem[],
  cta: {
    primary: { label: "ENTRENA CON NOSOTROS", href: "/horario#reservar", event: "train_with_us" },
    coaches: { label: "CONOCE A LOS ENTRENADORES", href: "/coaches", event: "nav_coaches" },
    reservar: { label: "RESERVAR", href: "/horario#reservar", event: "reservar" },
    whatsapp: { label: "WhatsApp", event: "whatsapp" },
  },
  pillars: ["ÉLITE", "COMPETITIVO", "EXCLUSIVO", "RENDIMIENTO", "COMUNIDAD"],
} as const;

export function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

export function whatsappHref(message?: string) {
  let href: string = site.contact.whatsappUrl;
  const digits = site.contact.whatsapp.replace(/\D/g, "");
  if (!href) {
    if (!digits || isPlaceholder(site.contact.whatsapp)) return "/contacto";
    href = `https://wa.me/${digits}`;
  }

  if (!message) return href;
  const separator = href.includes("?") ? "&" : "?";
  return `${href}${separator}text=${encodeURIComponent(message)}`;
}

export function addressLines() {
  const { street, floor, colony, city, state, postalCode } = site.contact;
  return [`${street}, ${floor}`, `Col. ${colony}`, `${city}, ${state} C.P. ${postalCode}`];
}

export function mapsQuery() {
  const { street, colony, city, postalCode } = site.contact;
  return `${street}, ${colony}, ${city}, ${postalCode}, México`;
}

export function mapsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery())}`;
}

export function mapsEmbedSrc() {
  const params = new URLSearchParams({
    q: mapsQuery(),
    hl: "es-419",
    z: "17",
    output: "embed",
  });
  return `https://maps.google.com/maps?${params.toString()}`;
}
