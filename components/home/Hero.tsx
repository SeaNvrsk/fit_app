"use client";

import { home } from "@/content/home";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-bbh-black">
      <ParallaxMedia
        src={media.hero}
        alt={home.hero.imageAlt}
        priority
        className="absolute inset-0 min-h-[100svh]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.88)_0%,rgba(10,10,10,0.55)_46%,rgba(10,10,10,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bbh-black to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] items-end px-6 pb-24 pt-28 md:items-center md:px-10 md:pb-16 lg:px-16">
        <Reveal className="max-w-3xl">
          <p className="font-display text-[11px] tracking-[0.32em] text-bbh-gold">
            01 — {home.hero.kicker}
          </p>
          <p className="mt-5 font-display text-[11px] tracking-[0.28em] text-bbh-off/70">
            {site.pillars.join(" · ")}
          </p>
          <h1 className="mt-6 font-display text-[13vw] font-bold uppercase leading-[0.86] sm:text-7xl md:text-8xl lg:text-[6.6rem]">
            {home.hero.title}
          </h1>
          <div className="mt-6 space-y-1">
            {home.hero.lines.map((line) => (
              <p
                key={line}
                className="font-display text-xl font-semibold uppercase tracking-[0.08em] text-bbh-gold md:text-3xl"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bbh-off md:text-lg">
            {home.hero.lead}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={site.cta.primary.href} event={site.cta.primary.event}>
              {site.cta.primary.label}
            </Button>
            <Button href={site.cta.coaches.href} variant="ghost" event={site.cta.coaches.event}>
              {site.cta.coaches.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
