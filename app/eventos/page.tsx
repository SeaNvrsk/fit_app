import type { Metadata } from "next";
import { events } from "@/content/events";
import { pagesMeta } from "@/content/seo";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FituneEmbed } from "@/components/fitune/FituneEmbed";
import { fitune } from "@/lib/fitune";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pagesMeta.eventos);

export default function EventosPage() {
  return (
    <>
      <PageHero
        index="08"
        eyebrow="EVENTOS"
        title="LA CASA TAMBIÉN COMPITE."
        lead="Contrarreloj, simulaciones y ventanas de preparación. La comunidad se mide en el piso, no en una red social."
        image={media.plates}
        imageAlt="Eventos de competencia en BBH"
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
          {fitune().events ? (
            <div id="reservar" className="scroll-mt-28">
              <FituneEmbed src={fitune().events} title="Reserva de eventos BBH" />
            </div>
          ) : (
            <Button href={site.cta.reservar.href} event="reservar">
              {site.cta.reservar.label}
            </Button>
          )}
        </div>
      </Section>
    </>
  );
}
