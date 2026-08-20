import { site } from "./site";

export const pagesMeta = {
  home: {
    title: "BBH — La Casa de los Campeones | Club de rendimiento",
    description: site.description,
    path: "/",
  },
  clases: {
    title: "Clases | Sistema de entrenamiento BBH",
    description:
      "Sistema de entrenamiento BBH: Fuerza Inferior, Empuje Superior, Tracción Superior, Rendimiento Híbrido, Motor Inferior, Rendimiento HYROX y Motor Aeróbico.",
    path: "/clases",
  },
  horario: {
    title: "Horario | BBH",
    description:
      "Horario de clases de rendimiento en BBH. Fuerza, entrenamiento híbrido, motor y preparación HYROX.",
    path: "/horario",
  },
  coaches: {
    title: "Entrenadores | Entrenamiento de élite BBH",
    description:
      "Los entrenadores de BBH son especialistas en rendimiento. Entrenamiento de élite para atletas que quieren competir.",
    path: "/coaches",
  },
  eventos: {
    title: "Eventos | BBH",
    description:
      "Contrarreloj, simulaciones HYROX y preparación de competencia en La Casa de los Campeones.",
    path: "/eventos",
  },
  personalizados: {
    title: "Entrenamiento personalizado | BBH",
    description:
      "Entrenamiento 1 a 1, grupo reducido y estrategia de carrera. Rendimiento a la medida del atleta.",
    path: "/personalizados",
  },
  contacto: {
    title: "Contacto | Entrena con nosotros — BBH",
    description:
      "Empieza en BBH. Contacto, WhatsApp y reserva para entrenar en La Casa de los Campeones.",
    path: "/contacto",
  },
} as const;
