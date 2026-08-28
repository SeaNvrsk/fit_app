"use client";

import { home } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { DisplayTitle, Eyebrow, Section } from "@/components/ui/Section";
import { ImageRail } from "@/components/motion/ImageRail";
import { GoldRule, Reveal } from "@/components/motion/Reveal";

export function Community() {
  return (
    <section className="bg-bbh-black">
      <Section>
        <Reveal>
          <Eyebrow>{home.community.eyebrow}</Eyebrow>
          <DisplayTitle className="mt-4 max-w-4xl">{home.community.title}</DisplayTitle>
          <GoldRule className="mt-8 max-w-xs" />
          <p className="mt-6 max-w-2xl text-lg text-bbh-off">{home.community.lead}</p>
        </Reveal>
      </Section>
      <ImageRail />
      <Section className="pt-10">
        <Button href="/eventos" variant="ghost">
          VER EVENTOS
        </Button>
      </Section>
    </section>
  );
}
