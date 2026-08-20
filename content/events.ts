export type EventItem = {
  id: string;
  title: string;
  dateLabel: string;
  kind: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const events: EventItem[] = [
  {
    id: "house-time-trial",
    title: "CONTRARRELOJ DE LA CASA",
    dateLabel: "Mensual",
    kind: "Rendimiento",
    summary:
      "Prueba interna de la casa. Mides tu nivel frente al estándar BBH, no frente a un entrenamiento genérico.",
    image: "/media/strength/plates.jpg",
    imageAlt: "Contrarreloj interna de BBH",
  },
  {
    id: "hyrox-simulation",
    title: "SIMULACIÓN HYROX",
    dateLabel: "Según calendario",
    kind: "HYROX",
    summary:
      "Simulación de carrera: estaciones, transiciones y ritmo. Una pieza del sistema, para quienes van a competir.",
    image: "/media/classes/plate.jpg",
    imageAlt: "Simulación HYROX en BBH",
  },
  {
    id: "competition-prep",
    title: "PREPARACIÓN PARA COMPETENCIA",
    dateLabel: "Antes del evento",
    kind: "Competencia",
    summary:
      "Ventana de preparación para atletas con fecha de competencia. Estrategia, puntos débiles y estándar de carrera.",
    image: "/media/athletes/grip.jpg",
    imageAlt: "Preparación de competencia en BBH",
  },
];
