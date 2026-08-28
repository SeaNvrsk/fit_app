"use client";

import { home } from "@/content/home";
import { media } from "@/content/media";
import { Button } from "@/components/ui/Button";
import { DisplayTitle, Eyebrow, Section } from "@/components/ui/Section";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { GoldRule, Reveal } from "@/components/motion/Reveal";

export function Hyrox() {
  return (
    <Section tone="graphite">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <ParallaxMedia
          src={media.plate}
          alt={home.hyrox.imageAlt}
          className="min-h-[380px] lg:min-h-[560px]"
        />
        <Reveal>
          <Eyebrow>{home.hyrox.eyebrow}</Eyebrow>
          <DisplayTitle className="mt-4">{home.hyrox.title}</DisplayTitle>
          <GoldRule className="mt-8 max-w-xs" />
          <p className="mt-6 text-lg leading-relaxed text-bbh-off">{home.hyrox.lead}</p>
          <div className="mt-8">
            <Button href="/clases#hyrox-performance" variant="ghost">
              RENDIMIENTO HYROX
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
