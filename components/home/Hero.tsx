"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { HeroAtmosphere } from "@/components/motion/HeroAtmosphere";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";

const STAGGER = 0.28;
const STAGGER_START = 0.2;

function HeroTitleStagger({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const words = home.hero.englishWords;

  return (
    <h1
      className={
        compact
          ? "mt-6 font-display text-[14vw] font-bold uppercase leading-[0.82] sm:text-6xl"
          : "mt-6 font-display text-[clamp(3.4rem,7.2vw,7.4rem)] font-bold uppercase leading-[0.8]"
      }
    >
      <span className="sr-only">{home.hero.title}</span>
      <span aria-hidden className="flex flex-col">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className={index === words.length - 1 ? "text-bbh-gold" : "text-white"}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: reduce ? 0 : STAGGER_START + index * STAGGER,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

function HeroCopy({ variant = "full" }: { variant?: "full" | "poster" }) {
  const reduce = useReducedMotion();
  const poster = variant === "poster";
  const afterTitle = STAGGER_START + home.hero.englishWords.length * STAGGER;

  return (
    <div className={poster ? "w-full max-w-[36rem]" : "max-w-3xl"}>
      <motion.p
        className="font-display text-[11px] tracking-[0.32em] text-bbh-gold"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        01 — {home.hero.kicker}
      </motion.p>
      {poster ? null : (
        <p className="mt-5 font-display text-[11px] tracking-[0.28em] text-bbh-off/70">
          {site.pillars.join(" · ")}
        </p>
      )}
      <HeroTitleStagger compact={!poster} />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: reduce ? 0 : afterTitle, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mt-6 space-y-1">
          {home.hero.lines.map((line) => (
            <p
              key={line}
              className={`font-display font-semibold uppercase tracking-[0.08em] text-bbh-gold ${
                poster ? "text-lg md:text-xl" : "text-xl md:text-3xl"
              }`}
            >
              {line}
            </p>
          ))}
        </div>
        {poster ? null : (
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bbh-off md:text-lg">{home.hero.lead}</p>
        )}
        <div className={`flex flex-col gap-3 sm:flex-row ${poster ? "mt-8" : "mt-10"}`}>
          <Button href={site.cta.primary.href} event={site.cta.primary.event}>
            {site.cta.primary.label}
          </Button>
          <Button href={site.cta.coaches.href} variant="ghost" event={site.cta.coaches.event}>
            {site.cta.coaches.label}
          </Button>
        </div>
      </motion.div>
    </div>
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
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] items-center px-10 pb-16 pt-28 lg:px-16">
          <div className="w-full md:w-1/2 lg:w-[48%]">
            <HeroCopy variant="poster" />
          </div>
        </div>
      </div>
    </section>
  );
}
