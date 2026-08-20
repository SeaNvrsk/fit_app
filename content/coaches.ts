export type Coach = {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  image: string;
  imageAlt: string;
};

export const coaches: Coach[] = [
  {
    id: "coach-01",
    name: "COACH 01",
    role: "Head of Performance",
    focus: "Programación y desarrollo de atletas",
    bio: "Dirige el sistema de entrenamiento de BBH. El estándar no es completar la sesión: es preparar atletas capaces de competir al más alto nivel.",
    image: "",
    imageAlt: "Espacio reservado para la foto del Head of Performance de BBH",
  },
  {
    id: "coach-02",
    name: "COACH 02",
    role: "Strength & Conditioning",
    focus: "Fuerza, potencia y transfer",
    bio: "Especialista en strength & conditioning. Construye la fuerza que se ve en PRs, podiums y en la capacidad de sostener intensidad.",
    image: "",
    imageAlt: "Espacio reservado para la foto del coach de Strength & Conditioning de BBH",
  },
  {
    id: "coach-03",
    name: "COACH 03",
    role: "Hybrid & HYROX",
    focus: "Rendimiento híbrido y race craft",
    bio: "Trabaja el cruce entre fuerza, engine y competición. HYROX es una de las herramientas. El objetivo es el atleta completo.",
    image: "",
    imageAlt: "Espacio reservado para la foto del coach de Hybrid y HYROX de BBH",
  },
  {
    id: "coach-04",
    name: "COACH 04",
    role: "Engine & Endurance",
    focus: "Capacidad aeróbica y umbral",
    bio: "Desarrolla el motor. Sin engine no hay temporada, no hay ranking y no hay consistencia el día de la competición.",
    image: "",
    imageAlt: "Espacio reservado para la foto del coach de Engine de BBH",
  },
];
