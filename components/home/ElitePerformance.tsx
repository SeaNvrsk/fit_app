"use client";

import { home } from "@/content/home";
import { media } from "@/content/media";
import { DisplayTitle, Eyebrow } from "@/components/ui/Section";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { GoldRule, Reveal } from "@/components/motion/Reveal";

export function ElitePerformance() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-bbh-black">
      <ParallaxMedia
        src={media.chain}
        alt="Pesas rusas y cadena en un entorno de entrenamiento de élite"
        className="absolute inset-0 min-h-[100svh]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-bbh-black/62" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-end px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <Eyebrow>{home.performance.eyebrow}</Eyebrow>
          <DisplayTitle className="mt-4 max-w-4xl">{home.performance.title}</DisplayTitle>
          <GoldRule className="mt-8 max-w-md" />
          <p className="mt-6 max-w-2xl text-lg text-bbh-off">{home.performance.lead}</p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {home.performance.points.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.07}>
              <article className="border border-white/12 bg-bbh-black/70 p-6 backdrop-blur-sm">
                <h3 className="font-display text-2xl font-bold tracking-[0.08em]">{item.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bbh-off">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
