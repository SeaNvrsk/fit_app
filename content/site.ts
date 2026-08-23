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
    city: "Tlalnepantla de Baz, Méx.",
    address: "Calzada de los Jinetes 35, Las Arboledas, 54026",
    floor: "1er piso",
    email: "[CORREO]",
    phone: "+52 56 19915404",
    whatsapp: "+52 56 19915404",
    whatsappUrl: "",
    instagram: "[INSTAGRAM]",
    instagramUrl: "",
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

export function whatsappHref() {
  if (site.contact.whatsappUrl) return site.contact.whatsappUrl;
  const digits = site.contact.whatsapp.replace(/\D/g, "");
  if (!digits || isPlaceholder(site.contact.whatsapp)) return "/contacto";
  return `https://wa.me/${digits}`;
}
