"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { gallery } from "@/content/media";

export function ImageRail() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["6%", "-24%"]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ x }} className="flex w-max gap-3 will-change-transform md:gap-4">
        {[...gallery, ...gallery.slice(0, 3)].map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            className="relative h-48 w-[72vw] shrink-0 overflow-hidden md:h-72 md:w-[28vw]"
          >
            <Image src={item.src} alt={item.alt} fill sizes="30vw" quality={70} className="object-cover" />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
