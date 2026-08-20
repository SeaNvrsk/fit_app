export type TrainingClass = {
  id: string;
  name: string;
  index: string;
  summary: string;
  description: string;
  focus: string[];
  image: string;
  imageAlt: string;
};

export const classes: TrainingClass[] = [
  {
    id: "lower-strength",
    name: "FUERZA INFERIOR",
    index: "01",
    summary: "Fuerza y potencia del tren inferior. La base de un atleta que compite.",
    description:
      "Sentadillas, peso muerto y trabajo de potencia para construir una base sólida. Aquí no se busca volumen vacío: se busca fuerza que se transfiere a la pista, a las estaciones y a la competencia.",
    focus: ["Fuerza máxima", "Potencia", "Estabilidad"],
    image: "/media/strength/plates.jpg",
    imageAlt: "Discos de 20 kg para Fuerza Inferior en BBH",
  },
  {
    id: "upper-push",
    name: "EMPUJE SUPERIOR",
    index: "02",
    summary: "Empuje de élite. Hombros, pecho y control bajo carga.",
    description:
      "Desarrollo de empuje horizontal y vertical con un estándar de movimiento alto. Pensado para atletas que necesitan fuerza útil, no estética de gimnasio comercial.",
    focus: ["Empuje", "Hombros", "Control"],
    image: "/media/athletes/grip.jpg",
    imageAlt: "Agarre y empuje en Empuje Superior en BBH",
  },
  {
    id: "upper-pull",
    name: "TRACCIÓN SUPERIOR",
    index: "03",
    summary: "Tracción, dominadas y remo. Espalda fuerte, agarre que no falla.",
    description:
      "Tracción estricta y trabajo de agarre para sostener el rendimiento cuando el cuerpo ya está fatigado. Un atleta sin tracción no llega lejos.",
    focus: ["Dominadas", "Remo", "Agarre"],
    image: "/media/coaches/rack.jpg",
    imageAlt: "Rack de mancuernas para Tracción Superior en BBH",
  },
  {
    id: "hybrid-performance",
    name: "RENDIMIENTO HÍBRIDO",
    index: "04",
    summary: "Fuerza y motor en la misma sesión. El estándar BBH.",
    description:
      "Sesiones híbridas donde la fuerza no se separa de la capacidad. El atleta aprende a producir y a sostener, exactamente como ocurre en competencia.",
    focus: ["Fuerza", "Condición", "Transiciones"],
    image: "/media/hero/kettlebell.jpg",
    imageAlt: "Pesas rusas en sesión de Rendimiento Híbrido de BBH",
  },
  {
    id: "lower-engine",
    name: "MOTOR INFERIOR",
    index: "05",
    summary: "Piernas que no se apagan. Capacidad bajo fatiga.",
    description:
      "Zancadas, sentadillas y trabajo de tren inferior con demanda aeróbica. Construye la resistencia específica que separa a quien termina de quien compite.",
    focus: ["Capacidad", "Fatiga", "Ritmo"],
    image: "/media/classes/dumbbells.jpg",
    imageAlt: "Trabajo de motor con mancuernas en BBH",
  },
  {
    id: "hyrox-performance",
    name: "RENDIMIENTO HYROX",
    index: "06",
    summary: "Estaciones, transiciones y técnica de competencia. Un pilar del sistema, no el único.",
    description:
      "Preparación específica para HYROX: estaciones, ritmo, transiciones y simulación de carrera. Forma parte del sistema de entrenamiento de BBH, junto a fuerza, motor y entrenamiento de élite.",
    focus: ["Estaciones", "Ritmo", "Técnica de carrera"],
    image: "/media/classes/plate.jpg",
    imageAlt: "Disco y estaciones de Rendimiento HYROX en BBH",
  },
  {
    id: "aerobic-engine",
    name: "MOTOR AERÓBICO",
    index: "07",
    summary: "Base aeróbica, umbral y consistencia. El motor que sostiene todo.",
    description:
      "Trabajo aeróbico estructurado para elevar el techo de rendimiento. Sin motor no hay temporada larga ni resultados estables.",
    focus: ["Base aeróbica", "Umbral", "Consistencia"],
    image: "/media/performance/chain.jpg",
    imageAlt: "Entrenamiento de motor en un entorno de élite BBH",
  },
];
