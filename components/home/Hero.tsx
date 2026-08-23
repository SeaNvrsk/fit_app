"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { HeroAtmosphere } from "@/components/motion/HeroAtmosphere";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { Reveal } from "@/components/motion/Reveal";

const STAGGER = 0.28;
const STAGGER_START = 0.35;

function HeroEnglishOverlay({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const words = home.hero.englishWords;

  return (
    <div
      aria-hidden
      className={
        compact
          ? "font-display text-[11vw] font-bold uppercase leading-[0.78] sm:text-5xl"
          : "font-display text-[clamp(2.75rem,5.8vw,6rem)] font-bold uppercase leading-[0.76]"
      }
    >
      <div className="flex flex-col drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)]">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className={index === words.length - 1 ? "text-bbh-gold" : "text-white/95"}
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: reduce ? 0 : STAGGER_START + index * STAGGER,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function HeroCopy() {
  return (
    <Reveal className="max-w-3xl">
      <p className="font-display text-[11px] tracking-[0.32em] text-bbh-gold">
        01 — {home.hero.kicker}
      </p>
      <p className="mt-5 font-display text-[11px] tracking-[0.28em] text-bbh-off/70">
        {site.pillars.join(" · ")}
      </p>
      <h1 className="mt-6 font-display text-[12vw] font-bold uppercase leading-[0.86] sm:text-7xl md:text-8xl lg:text-[6.6rem]">
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
      <p className="mt-8 max-w-xl text-base leading-relaxed text-bbh-off md:text-lg">{home.hero.lead}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href={site.cta.primary.href} event={site.cta.primary.event}>
          {site.cta.primary.label}
        </Button>
        <Button href={site.cta.coaches.href} variant="ghost" event={site.cta.coaches.event}>
          {site.cta.coaches.label}
        </Button>
      </div>
    </Reveal>
  );
}

function MobileHeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-5 mt-20 overflow-hidden border border-white/10">
      <div className="relative aspect-[4/5] min-h-[58svh]">
        <motion.div
          className="absolute -inset-[4%]"
          initial={reduce ? false : { scale: 1.02 }}
          animate={reduce ? undefined : { scale: 1.06 }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src={media.heroMobile}
            alt={home.hero.imageAlt}
            fill
            priority
            quality={78}
            sizes="100vw"
            className="object-cover object-[center_72%]"
          />
        </motion.div>
        <HeroAtmosphere />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,10,10,0.55)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6">
          <HeroEnglishOverlay compact />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bbh-black to-transparent" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-bbh-gold/50" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bbh-black">
      <div className="md:hidden">
        <MobileHeroVisual />
        <div className="px-6 pb-16 pt-10">
          <HeroCopy />
        </div>
      </div>

      <div className="relative hidden min-h-[100svh] md:block">
        <ParallaxMedia
          src={media.hero}
          alt={home.hero.imageAlt}
          priority
          intensity="subtle"
          objectClassName="object-cover object-[78%_center]"
          className="absolute inset-0 min-h-[100svh]"
          sizes="100vw"
        />
        <HeroAtmosphere />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.88)_0%,rgba(10,10,10,0.55)_46%,rgba(10,10,10,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bbh-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-[58%] items-center justify-center px-8 lg:w-[55%] lg:px-14">
          <HeroEnglishOverlay />
        </div>
        <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1440px] items-center px-10 pb-16 pt-28 lg:px-16">
          <HeroCopy />
        </div>
      </div>
    </section>
  );
}
