export type Weekday = "LUN" | "MAR" | "MIE" | "JUE" | "VIE" | "SAB" | "DOM";

export type ScheduleSlot = {
  id: string;
  day: Weekday;
  time: string;
  classId: string;
  coachId?: string;
};

export const weekdays: { id: Weekday; label: string }[] = [
  { id: "LUN", label: "Lunes" },
  { id: "MAR", label: "Martes" },
  { id: "MIE", label: "Miércoles" },
  { id: "JUE", label: "Jueves" },
  { id: "VIE", label: "Viernes" },
  { id: "SAB", label: "Sábado" },
  { id: "DOM", label: "Domingo" },
];

export const scheduleSlots: ScheduleSlot[] = [
  { id: "lun-0630", day: "LUN", time: "06:30", classId: "lower-strength" },
  { id: "lun-0730", day: "LUN", time: "07:30", classId: "aerobic-engine" },
  { id: "lun-1830", day: "LUN", time: "18:30", classId: "hybrid-performance" },
  { id: "lun-1930", day: "LUN", time: "19:30", classId: "hyrox-performance" },
  { id: "mar-0630", day: "MAR", time: "06:30", classId: "upper-push" },
  { id: "mar-0730", day: "MAR", time: "07:30", classId: "lower-engine" },
  { id: "mar-1830", day: "MAR", time: "18:30", classId: "upper-pull" },
  { id: "mar-1930", day: "MAR", time: "19:30", classId: "hybrid-performance" },
  { id: "mie-0630", day: "MIE", time: "06:30", classId: "aerobic-engine" },
  { id: "mie-0730", day: "MIE", time: "07:30", classId: "lower-strength" },
  { id: "mie-1830", day: "MIE", time: "18:30", classId: "hyrox-performance" },
  { id: "mie-1930", day: "MIE", time: "19:30", classId: "upper-push" },
  { id: "jue-0630", day: "JUE", time: "06:30", classId: "upper-pull" },
  { id: "jue-0730", day: "JUE", time: "07:30", classId: "hybrid-performance" },
  { id: "jue-1830", day: "JUE", time: "18:30", classId: "lower-engine" },
  { id: "jue-1930", day: "JUE", time: "19:30", classId: "aerobic-engine" },
  { id: "vie-0630", day: "VIE", time: "06:30", classId: "hyrox-performance" },
  { id: "vie-0730", day: "VIE", time: "07:30", classId: "lower-strength" },
  { id: "vie-1830", day: "VIE", time: "18:30", classId: "hybrid-performance" },
  { id: "vie-1930", day: "VIE", time: "19:30", classId: "upper-push" },
  { id: "sab-0800", day: "SAB", time: "08:00", classId: "hybrid-performance" },
  { id: "sab-0900", day: "SAB", time: "09:00", classId: "hyrox-performance" },
  { id: "sab-1000", day: "SAB", time: "10:00", classId: "aerobic-engine" },
];

export const scheduleNote =
  "Horario de demostración. Sustituye estos bloques en content/schedule.ts cuando el calendario real esté listo.";
