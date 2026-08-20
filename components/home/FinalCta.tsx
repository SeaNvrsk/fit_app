"use client";

import { home } from "@/content/home";
import { media } from "@/content/media";
import { site, whatsappHref } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { DisplayTitle } from "@/components/ui/Section";
import { TrackedAnchor } from "@/components/ui/TrackedLink";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { GoldRule, Reveal } from "@/components/motion/Reveal";

export function FinalCta() {
  return (
    <section className="relative min-h-[80svh] overflow-hidden">
      <ParallaxMedia
        src={media.plates}
        alt="Discos de competición en BBH"
        className="absolute inset-0 min-h-[80svh]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-bbh-black/72" />
      <div className="relative mx-auto flex min-h-[80svh] max-w-[1280px] flex-col justify-end px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <DisplayTitle as="h2" className="max-w-5xl">
            {home.finalCta.title}
          </DisplayTitle>
          <GoldRule className="mt-8 max-w-md" />
          <p className="mt-6 max-w-xl text-lg text-bbh-off">{home.finalCta.lead}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={site.cta.primary.href} event={site.cta.primary.event}>
              {site.cta.primary.label}
            </Button>
            <TrackedAnchor
              href={whatsappHref()}
              event="whatsapp"
              className="font-display text-[11px] tracking-[0.18em] text-bbh-gold"
            >
              WHATSAPP
            </TrackedAnchor>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
