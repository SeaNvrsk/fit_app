export type PersonalizedProgram = {
  id: string;
  name: string;
  summary: string;
  points: string[];
};

export const personalizedPrograms: PersonalizedProgram[] = [
  {
    id: "one-to-one",
    name: "RENDIMIENTO 1 A 1",
    summary: "Entrenamiento individual para atletas que necesitan un plan, no una clase más.",
    points: [
      "Evaluación de rendimiento",
      "Programación semanal",
      "Ajustes según la competencia",
    ],
  },
  {
    id: "small-group",
    name: "GRUPO REDUCIDO",
    summary: "Grupos chicos con el mismo estándar de la casa y más atención al detalle.",
    points: ["Cupos limitados", "Estándar de movimiento", "Progreso visible"],
  },
  {
    id: "race-strategy",
    name: "ESTRATEGIA DE CARRERA",
    summary: "Preparación específica para una fecha: HYROX u otra competencia híbrida.",
    points: ["Ritmo", "Estaciones", "Plan de carrera"],
  },
];
