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
    name: "ÁNGEL QUINTERO",
    role: "Running, HYROX y OCR",
    focus: "Fuerza, resistencia y mentalidad",
    bio: "Ángel Quintero es atleta de alto rendimiento y coach especializado en running, HYROX y carreras de obstáculos. Campeón Panamericano y Norteamericano de Spartan, suma más de 80 podios Élite en OCR y múltiples podios en HYROX. Actualmente tiene récord nacional en Dobles Open y Dobles PRO en HYROX. También es participante en el reality Habilidad Física 100 México de Netflix. Su metodología combina fuerza, resistencia y mentalidad para llevar a cada persona a su máximo rendimiento.",
    image: "/media/coaches/angel-quintero.jpg",
    imageAlt: "Ángel Quintero, atleta y coach de running, HYROX y OCR en BBH",
  },
  {
    id: "coach-02",
    name: "ALDO MÁRQUEZ",
    role: "HYROX y entrenamiento híbrido",
    focus: "Fuerza, resistencia y disciplina",
    bio: "Aldo Márquez es atleta de alto rendimiento y coach especializado en HYROX y entrenamiento híbrido. Campeón de múltiples competencias nacionales e internacionales, suma 20 podios en HYROX y ha representado a México en campeonatos mundiales. Actualmente tiene récord nacional en Singles Open, Dobles Open y Dobles PRO en HYROX. También es participante en el reality Habilidad Física 100 México de Netflix. Su metodología combina fuerza, resistencia y disciplina para impulsar a cada persona a alcanzar su máximo rendimiento.",
    image: "/media/coaches/aldo-marquez.jpg",
    imageAlt: "Aldo Márquez, atleta y coach de HYROX y entrenamiento híbrido en BBH",
  },
  /*
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
  */
];
