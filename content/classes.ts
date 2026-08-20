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
    name: "LOWER STRENGTH",
    index: "01",
    summary: "Fuerza y potencia del tren inferior. La base de un atleta que compite.",
    description:
      "Sentadillas, peso muerto y trabajo de potencia para construir una base sólida. Aquí no se busca volumen vacío: se busca fuerza que se transfiere a la pista, a las estaciones y a la competición.",
    focus: ["Fuerza máxima", "Potencia", "Estabilidad"],
    image: "/media/strength/plates.jpg",
    imageAlt: "Discos de 20 kg para Lower Strength en BBH",
  },
  {
    id: "upper-push",
    name: "UPPER PUSH",
    index: "02",
    summary: "Empuje de élite. Press, hombros y control bajo carga.",
    description:
      "Desarrollo de empuje horizontal y vertical con estándar de movimiento alto. Pensado para atletas que necesitan fuerza útil, no estética de gimnasio comercial.",
    focus: ["Press", "Hombros", "Control"],
    image: "/media/athletes/grip.jpg",
    imageAlt: "Agarre y empuje en Upper Push en BBH",
  },
  {
    id: "upper-pull",
    name: "UPPER PULL",
    index: "03",
    summary: "Tracción, dominadas y remo. Espalda fuerte, agarre que no falla.",
    description:
      "Tracción estricta y trabajo de agarre para sostener el rendimiento cuando el cuerpo ya está fatigado. Un atleta sin pull no llega lejos.",
    focus: ["Dominadas", "Remo", "Agarre"],
    image: "/media/coaches/rack.jpg",
    imageAlt: "Rack de mancuernas para Upper Pull en BBH",
  },
  {
    id: "hybrid-performance",
    name: "HYBRID PERFORMANCE",
    index: "04",
    summary: "Fuerza y engine en la misma sesión. El estándar BBH.",
    description:
      "Sesiones híbridas donde la fuerza no se separa de la capacidad. El atleta aprende a producir y a sostener, exactamente como ocurre en competición.",
    focus: ["Fuerza", "Condición", "Transiciones"],
    image: "/media/hero/kettlebell.jpg",
    imageAlt: "Kettlebell en sesión Hybrid Performance de BBH",
  },
  {
    id: "lower-engine",
    name: "LOWER ENGINE",
    index: "05",
    summary: "Piernas que no se apagan. Capacidad bajo fatiga.",
    description:
      "Lunges, squats y trabajo de tren inferior con demanda aeróbica. Construye la resistencia específica que separa a quien termina de quien compite.",
    focus: ["Capacidad", "Fatiga", "Ritmo"],
    image: "/media/classes/dumbbells.jpg",
    imageAlt: "Trabajo de engine con mancuernas en BBH",
  },
  {
    id: "hyrox-performance",
    name: "HYROX PERFORMANCE",
    index: "06",
    summary: "Estaciones, transiciones y race craft. Un pilar del sistema, no el único.",
    description:
      "Preparación específica para HYROX: estaciones, pacing, transiciones y simulación de carrera. Forma parte del training system de BBH, junto a fuerza, engine y coaching de élite.",
    focus: ["Estaciones", "Pacing", "Race craft"],
    image: "/media/classes/plate.jpg",
    imageAlt: "Disco y estaciones de HYROX Performance en BBH",
  },
  {
    id: "aerobic-engine",
    name: "AEROBIC ENGINE",
    index: "07",
    summary: "Base aeróbica, umbral y consistencia. El motor que sostiene todo.",
    description:
      "Trabajo aeróbico estructurado para elevar el techo de rendimiento. Sin engine no hay temporada larga ni resultados estables.",
    focus: ["Base aeróbica", "Umbral", "Consistencia"],
    image: "/media/performance/chain.jpg",
    imageAlt: "Entrenamiento de engine en un entorno de élite BBH",
  },
];
