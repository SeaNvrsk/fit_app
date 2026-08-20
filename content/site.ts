export type NavItem = {
  label: string;
  href: string;
  event?: string;
};

export const site = {
  name: "BBH",
  legalName: "BBH — The House of Champions",
  tagline: "THE HOUSE OF CHAMPIONS",
  locale: "es",
  description:
    "BBH es un performance club de élite. The House of Champions: los mejores coaches, atletas competitivos y un sistema de entrenamiento para quienes quieren competir y estar entre los mejores.",
  contact: {
    city: "[CIUDAD]",
    address: "[DIRECCIÓN]",
    email: "[EMAIL]",
    phone: "[TELÉFONO]",
    whatsapp: "[WHATSAPP]",
    whatsappUrl: "",
    instagram: "[INSTAGRAM]",
    instagramUrl: "",
  },
  nav: [
    { label: "INICIO", href: "/" },
    { label: "CLASES", href: "/clases" },
    { label: "HORARIO", href: "/horario", event: "nav_horario" },
    { label: "COACHES", href: "/coaches", event: "nav_coaches" },
    { label: "EVENTOS", href: "/eventos" },
    { label: "PERSONALIZADOS", href: "/personalizados" },
    { label: "CONTACTO", href: "/contacto" },
  ] satisfies NavItem[],
  mobileNav: [
    { label: "Inicio", href: "/" },
    { label: "Horario", href: "/horario", event: "nav_horario" },
    { label: "Coaches", href: "/coaches", event: "nav_coaches" },
    { label: "Eventos", href: "/eventos" },
  ] satisfies NavItem[],
  cta: {
    primary: { label: "TRAIN WITH US", href: "/contacto", event: "train_with_us" },
    coaches: { label: "MEET OUR COACHES", href: "/coaches", event: "nav_coaches" },
    reservar: { label: "RESERVAR", href: "/contacto", event: "reservar" },
    whatsapp: { label: "WhatsApp", event: "whatsapp" },
  },
  pillars: [
    "ELITE",
    "COMPETITIVE",
    "PREMIUM",
    "PERFORMANCE",
    "COMMUNITY",
  ],
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
