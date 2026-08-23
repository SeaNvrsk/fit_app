"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { HeroAtmosphere } from "@/components/motion/HeroAtmosphere";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { Reveal } from "@/components/motion/Reveal";

const STAGGER = 0.28;
const STAGGER_START = 0.35;
const AUTO_SCROLL_KEY = "bbh-hero-autoscroll";
const AUTO_SCROLL_DELAY_MS = 2000;
const AUTO_SCROLL_OFFSET = 0.14;

function HeroEnglishOverlay({
  compact = false,
  onSequenceComplete,
}: {
  compact?: boolean;
  onSequenceComplete?: () => void;
}) {
  const reduce = useReducedMotion();
  const words = home.hero.englishWords;
  const lastIndex = words.length - 1;
  const completed = useRef(false);

  const handleLastWordComplete = useCallback(() => {
    if (completed.current || reduce) return;
    completed.current = true;
    onSequenceComplete?.();
  }, [onSequenceComplete, reduce]);

  useEffect(() => {
    if (!reduce || !onSequenceComplete) return;
    const timer = window.setTimeout(onSequenceComplete, 400);
    return () => window.clearTimeout(timer);
  }, [onSequenceComplete, reduce]);

  return (
    <div
      aria-hidden
      className={
        compact
          ? "font-display text-[9.5vw] font-bold uppercase leading-[0.78] sm:text-4xl"
          : "font-display text-[clamp(2.5rem,5.2vw,5.5rem)] font-bold uppercase leading-[0.76]"
      }
    >
      <div className="flex flex-col drop-shadow-[0_2px_28px_rgba(0,0,0,0.9)]">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className={index === lastIndex ? "text-bbh-gold" : "text-white/95"}
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: reduce ? 0 : STAGGER_START + index * STAGGER,
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={index === lastIndex ? handleLastWordComplete : undefined}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function useMobileHeroAutoScroll() {
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(AUTO_SCROLL_KEY) === "1") {
      hasScrolled.current = true;
    }
  }, []);

  return useCallback(() => {
    if (hasScrolled.current) return;
    if (window.matchMedia("(min-width: 768px)").matches) return;

    window.setTimeout(() => {
      if (hasScrolled.current) return;
      if (window.scrollY > 40) return;

      hasScrolled.current = true;
      sessionStorage.setItem(AUTO_SCROLL_KEY, "1");
      window.scrollBy({
        top: Math.round(window.innerHeight * AUTO_SCROLL_OFFSET),
        behavior: "smooth",
      });
    }, AUTO_SCROLL_DELAY_MS);
  }, []);
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

function MobileHeroVisual({ onSequenceComplete }: { onSequenceComplete?: () => void }) {
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
        <div className="pointer-events-none absolute inset-x-0 top-[42%] z-10 flex -translate-y-1/2 justify-center px-4">
          <HeroEnglishOverlay compact onSequenceComplete={onSequenceComplete} />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bbh-black to-transparent" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-bbh-gold/50" />
      </div>
    </div>
  );
}

export function Hero() {
  const scheduleMobileAutoScroll = useMobileHeroAutoScroll();

  return (
    <section className="relative overflow-hidden bg-bbh-black">
      <div className="md:hidden">
        <MobileHeroVisual onSequenceComplete={scheduleMobileAutoScroll} />
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
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-[44%] items-center pl-10 lg:w-[42%] lg:pl-16">
          <HeroEnglishOverlay />
        </div>
        <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1440px] items-center px-10 pb-16 pt-28 lg:px-16">
          <HeroCopy />
        </div>
      </div>
    </section>
  );
}
