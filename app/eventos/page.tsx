import type { Metadata } from "next";
import { events } from "@/content/events";
import { pagesMeta } from "@/content/seo";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pagesMeta.eventos);

export default function EventosPage() {
  return (
    <>
      <PageHero
        index="08"
        eyebrow="EVENTOS"
        title="LA HOUSE TAMBIÉN COMPITE."
        lead="Time trials, simulaciones y ventanas de preparación. La comunidad se mide en el suelo, no en un feed."
        image={media.plates}
        imageAlt="Eventos de competición en BBH"
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.id} className="bg-bbh-graphite">
              <MediaFrame
                src={event.image || undefined}
                alt={event.imageAlt}
                label={event.kind}
                className="min-h-[240px]"
              />
              <div className="p-6">
                <p className="font-display text-[11px] tracking-[0.2em] text-bbh-gold">
                  {event.dateLabel}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-[0.08em]">
                  {event.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-bbh-off">{event.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/contacto" event="reservar">
            {site.cta.reservar.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
