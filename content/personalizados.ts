export type PersonalizedProgram = {
  id: string;
  name: string;
  summary: string;
  points: string[];
};

export const personalizedPrograms: PersonalizedProgram[] = [
  {
    id: "one-to-one",
    name: "1:1 PERFORMANCE",
    summary:
      "Coaching individual para atletas que necesitan un plan, no una clase más.",
    points: [
      "Evaluación de rendimiento",
      "Programación semanal",
      "Ajustes según competición",
    ],
  },
  {
    id: "small-group",
    name: "SMALL GROUP",
    summary:
      "Grupos reducidos con el mismo estándar de la house y más atención al detalle.",
    points: ["Cupos limitados", "Estándar de movimiento", "Progresión visible"],
  },
  {
    id: "race-strategy",
    name: "RACE STRATEGY",
    summary:
      "Preparación específica para una fecha: HYROX u otra competición híbrida.",
    points: ["Pacing", "Estaciones", "Plan de carrera"],
  },
];
