"use client";

import { useReducedMotion } from "framer-motion";

const motes = [
  { x: "28%", y: "18%", s: 1.5, d: 0, t: 11 },
  { x: "41%", y: "8%", s: 1, d: 1.4, t: 9 },
  { x: "52%", y: "22%", s: 2, d: 0.6, t: 13 },
  { x: "63%", y: "12%", s: 1, d: 2.2, t: 10 },
  { x: "36%", y: "36%", s: 1.2, d: 3.1, t: 12 },
  { x: "48%", y: "42%", s: 1.8, d: 1.8, t: 8 },
  { x: "58%", y: "31%", s: 1, d: 4.4, t: 14 },
  { x: "71%", y: "24%", s: 1.4, d: 2.8, t: 11 },
  { x: "33%", y: "54%", s: 1, d: 5.2, t: 9 },
  { x: "46%", y: "61%", s: 1.6, d: 0.9, t: 12 },
  { x: "67%", y: "48%", s: 1.1, d: 3.7, t: 10 },
  { x: "55%", y: "16%", s: 1.3, d: 6.1, t: 15 },
];

export function HeroAtmosphere() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-beam absolute inset-0" />
      {motes.map((mote, index) => (
        <span
          key={index}
          className={reduce ? "hero-mote" : "hero-mote hero-mote-live"}
          style={{
            left: mote.x,
            top: mote.y,
            width: mote.s,
            height: mote.s,
            animationDelay: `${mote.d}s`,
            animationDuration: `${mote.t}s`,
          }}
        />
      ))}
    </div>
  );
}
