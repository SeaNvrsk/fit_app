"use client";

import { home } from "@/content/home";
import { media } from "@/content/media";
import { DisplayTitle, Eyebrow, Section, SectionIndex } from "@/components/ui/Section";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { GoldRule, Reveal } from "@/components/motion/Reveal";

export function Athletes() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionIndex>{home.athletes.index}</SectionIndex>
          <Eyebrow>{home.athletes.eyebrow}</Eyebrow>
          <DisplayTitle className="mt-4">{home.athletes.title}</DisplayTitle>
          <GoldRule className="mt-8 max-w-xs" />
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-bbh-off">{home.athletes.lead}</p>
          <ul className="mt-8 space-y-3">
            {home.athletes.points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-display text-sm tracking-[0.12em]">
                <span className="h-px w-6 bg-bbh-gold" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <ParallaxMedia
          src={media.grip}
          alt={home.athletes.imageAlt}
          className="min-h-[420px] lg:min-h-[620px]"
        />
      </div>
    </Section>
  );
}
