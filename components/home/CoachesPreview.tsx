"use client";

import { coaches } from "@/content/coaches";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { DisplayTitle, Eyebrow, Section, SectionIndex } from "@/components/ui/Section";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { GoldRule, Reveal } from "@/components/motion/Reveal";

export function CoachesPreview() {
  return (
    <Section tone="graphite">
      <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <SectionIndex>{home.coaches.index}</SectionIndex>
          <Eyebrow>{home.coaches.eyebrow}</Eyebrow>
          <DisplayTitle className="mt-4 max-w-3xl">{home.coaches.title}</DisplayTitle>
          <GoldRule className="mt-8 max-w-xs" />
          <p className="mt-8 max-w-md text-bbh-off">{home.coaches.lead}</p>
        </Reveal>
        <ParallaxMedia
          src={media.rack}
          alt="Rack de mancuernas de rendimiento en BBH"
          className="min-h-[360px] lg:min-h-[520px]"
        />
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {coaches.map((coach, index) => (
          <Reveal key={coach.id} delay={index * 0.06}>
            <article className="border border-white/8 bg-bbh-black p-5">
              <p className="font-display text-[11px] tracking-[0.2em] text-bbh-gold">0{index + 1}</p>
              <p className="mt-4 font-display text-lg font-bold tracking-[0.08em]">{coach.name}</p>
              <p className="mt-1 text-sm text-bbh-gold">{coach.role}</p>
              <p className="mt-3 text-sm text-bbh-off">{coach.focus}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <Button href={site.cta.coaches.href} variant="ghost">
          {site.cta.coaches.label}
        </Button>
      </div>
    </Section>
  );
}
