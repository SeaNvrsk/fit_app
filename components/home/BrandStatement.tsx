"use client";

import { home } from "@/content/home";
import { DisplayTitle, Eyebrow, Section } from "@/components/ui/Section";
import { GoldRule, Reveal } from "@/components/motion/Reveal";

export function BrandStatement() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>LA CASA</Eyebrow>
        <DisplayTitle as="h2" className="mt-4 max-w-5xl">
          {home.statement.title[0]}
          <br />
          {home.statement.title[1]}
        </DisplayTitle>
      </Reveal>
      <GoldRule className="mt-10 max-w-xl" />
      <Reveal delay={0.12} className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-bbh-off md:text-lg">
        {home.statement.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Reveal>
    </Section>
  );
}
