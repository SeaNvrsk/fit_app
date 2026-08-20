"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export function ScrollChrome() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-bbh-gold"
        style={{ scaleX: reduce ? 0 : scrollYProgress }}
      />

      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[12] hidden h-full w-full lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 7 0 C 14 16, 24 26, 12 40 S 4 58, 16 70 S 30 86, 10 100"
          fill="none"
          stroke="#D6A82E"
          strokeWidth="0.08"
          vectorEffect="non-scaling-stroke"
          opacity="0.12"
        />
        <path
          d="M 93 0 C 84 18, 76 32, 90 48 S 98 70, 82 82 S 68 93, 92 100"
          fill="none"
          stroke="#D6A82E"
          strokeWidth="0.06"
          vectorEffect="non-scaling-stroke"
          opacity="0.08"
        />
        <motion.path
          d="M 7 0 C 14 16, 24 26, 12 40 S 4 58, 16 70 S 30 86, 10 100"
          fill="none"
          stroke="#D6A82E"
          strokeWidth="0.14"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: reduce ? 0 : scrollYProgress, opacity: 0.55 }}
        />
        <motion.path
          d="M 93 0 C 84 18, 76 32, 90 48 S 98 70, 82 82 S 68 93, 92 100"
          fill="none"
          stroke="#D6A82E"
          strokeWidth="0.1"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: reduce ? 0 : scrollYProgress, opacity: 0.28 }}
        />
      </svg>
    </>
  );
}
