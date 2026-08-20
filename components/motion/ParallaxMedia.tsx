"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cx } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: boolean;
};

export function ParallaxMedia({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 70vw, 100vw",
  priority,
  overlay = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-16%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.2, 1.05]);

  return (
    <div ref={ref} className={cx("relative overflow-hidden bg-bbh-graphite", className)}>
      <motion.div style={{ y, scale }} className="absolute -inset-[18%] will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={75}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
      {overlay ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bbh-black/55 via-transparent to-bbh-black/25" />
      ) : null}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-bbh-gold/50" />
    </div>
  );
}
