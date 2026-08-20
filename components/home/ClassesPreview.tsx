"use client";

import Link from "next/link";
import { classes } from "@/content/classes";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { Button } from "@/components/ui/Button";
import { DisplayTitle, Eyebrow, Section, SectionIndex } from "@/components/ui/Section";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { GoldRule, Reveal } from "@/components/motion/Reveal";

export function ClassesPreview() {
  return (
    <Section>
      <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <SectionIndex>{home.classes.index}</SectionIndex>
          <Eyebrow>{home.classes.eyebrow}</Eyebrow>
          <DisplayTitle className="mt-4 max-w-4xl">{home.classes.title}</DisplayTitle>
          <GoldRule className="mt-8 max-w-xs" />
          <p className="mt-6 max-w-2xl text-lg text-bbh-off">{home.classes.lead}</p>
        </Reveal>
        <ParallaxMedia
          src={media.dumbbells}
          alt="Mancuernas en el floor de entrenamiento BBH"
          className="min-h-[260px] lg:min-h-[340px]"
        />
      </div>

      <div className="mt-12 divide-y divide-white/8 border-y border-white/8">
        {classes.map((item) => (
          <Link
            key={item.id}
            href={`/clases#${item.id}`}
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 md:gap-8"
          >
            <span className="font-display text-sm text-bbh-gold">{item.index}</span>
            <div>
              <h3 className="font-display text-xl font-bold tracking-[0.08em] group-hover:text-bbh-gold md:text-3xl">
                {item.name}
              </h3>
              <p className="mt-1 hidden text-sm text-bbh-off md:block">{item.summary}</p>
            </div>
            <span className="font-display text-[11px] tracking-[0.16em] text-bbh-off group-hover:text-bbh-gold">
              VER
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Button href="/clases" variant="ghost">
          VER CLASES
        </Button>
      </div>
    </Section>
  );
}
