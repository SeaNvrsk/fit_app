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
    name: "ENTRENADOR 01",
    role: "Dirección de rendimiento",
    focus: "Programación y desarrollo de atletas",
    bio: "Dirige el sistema de entrenamiento de BBH. El estándar no es terminar la sesión: es preparar atletas capaces de competir al más alto nivel.",
    image: "",
    imageAlt: "Espacio reservado para la foto de Dirección de rendimiento de BBH",
  },
  {
    id: "coach-02",
    name: "ENTRENADOR 02",
    role: "Fuerza y acondicionamiento",
    focus: "Fuerza, potencia y transferencia",
    bio: "Especialista en fuerza y acondicionamiento. Construye la fuerza que se ve en marcas personales, podios y en la capacidad de sostener intensidad.",
    image: "",
    imageAlt: "Espacio reservado para la foto del entrenador de fuerza y acondicionamiento de BBH",
  },
  {
    id: "coach-03",
    name: "ENTRENADOR 03",
    role: "Híbrido y HYROX",
    focus: "Rendimiento híbrido y técnica de competencia",
    bio: "Trabaja el cruce entre fuerza, motor y competencia. HYROX es una de las herramientas. El objetivo es el atleta completo.",
    image: "",
    imageAlt: "Espacio reservado para la foto del entrenador de híbrido y HYROX de BBH",
  },
  {
    id: "coach-04",
    name: "ENTRENADOR 04",
    role: "Motor y resistencia",
    focus: "Capacidad aeróbica y umbral",
    bio: "Desarrolla el motor. Sin motor no hay temporada, no hay clasificación y no hay consistencia el día de la competencia.",
    image: "",
    imageAlt: "Espacio reservado para la foto del entrenador de motor de BBH",
  },
];
