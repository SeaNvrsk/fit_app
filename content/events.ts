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
    title: "HOUSE TIME TRIAL",
    dateLabel: "Mensual",
    kind: "Performance",
    summary:
      "Test interno de la house. Mides tu nivel frente al estándar BBH, no frente a un WOD genérico.",
    image: "/media/strength/plates.jpg",
    imageAlt: "Time trial interno de BBH",
  },
  {
    id: "hyrox-simulation",
    title: "HYROX SIMULATION",
    dateLabel: "Según calendario",
    kind: "HYROX",
    summary:
      "Simulación de carrera: estaciones, transiciones y pacing. Una pieza del sistema, para quienes van a competir.",
    image: "/media/classes/plate.jpg",
    imageAlt: "Simulación HYROX en BBH",
  },
  {
    id: "competition-prep",
    title: "COMPETITION PREP",
    dateLabel: "Pre-evento",
    kind: "Competition",
    summary:
      "Ventana de preparación para atletas con fecha de competición. Estrategia, puntos débiles y estándar de carrera.",
    image: "/media/athletes/grip.jpg",
    imageAlt: "Preparación de competición en BBH",
  },
];
