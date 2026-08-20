import { site } from "./site";

export const pagesMeta = {
  home: {
    title: "BBH — The House of Champions | Performance Club",
    description: site.description,
    path: "/",
  },
  clases: {
    title: "Clases | BBH Training System",
    description:
      "Sistema de entrenamiento BBH: Lower Strength, Upper Push, Upper Pull, Hybrid Performance, Lower Engine, HYROX Performance y Aerobic Engine.",
    path: "/clases",
  },
  horario: {
    title: "Horario | BBH",
    description:
      "Horario de clases de performance en BBH. Strength, hybrid training, engine y HYROX training.",
    path: "/horario",
  },
  coaches: {
    title: "Coaches | Elite Coaching BBH",
    description:
      "Los coaches de BBH son especialistas en rendimiento. Elite coaching para atletas que quieren competir.",
    path: "/coaches",
  },
  eventos: {
    title: "Eventos | BBH",
    description:
      "Time trials, simulaciones HYROX y preparación de competición en The House of Champions.",
    path: "/eventos",
  },
  personalizados: {
    title: "Entrenamiento personalizado | BBH",
    description:
      "Coaching 1:1, small group y race strategy. Performance training a la medida del atleta.",
    path: "/personalizados",
  },
  contacto: {
    title: "Contacto | Train with us — BBH",
    description:
      "Empieza en BBH. Contacto, WhatsApp y reserva para entrenar en The House of Champions.",
    path: "/contacto",
  },
} as const;
