import type { Metadata } from "next";
import { classes } from "@/content/classes";
import { pagesMeta } from "@/content/seo";
import { media } from "@/content/media";
import { scheduleNote, scheduleSlots, weekdays } from "@/content/schedule";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pagesMeta.horario);

function classNameById(id: string) {
  return classes.find((item) => item.id === id)?.name ?? id;
}

export default function HorarioPage() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow="HORARIO"
        title="LA SEMANA EN LA HOUSE."
        lead="Bloques de strength, hybrid, engine y HYROX. El calendario de demostración se reemplaza cuando el horario real esté listo."
        image={media.rack}
        imageAlt="Horario de performance en BBH"
      />
      <Section>
        <p className="mb-8 text-sm text-bbh-off/70">{scheduleNote}</p>
        <div className="grid gap-4 lg:grid-cols-7">
          {weekdays.map((day) => {
            const slots = scheduleSlots.filter((slot) => slot.day === day.id);
            return (
              <article key={day.id} className="bg-bbh-graphite p-4">
                <h2 className="font-display text-sm tracking-[0.18em] text-bbh-gold">{day.id}</h2>
                <p className="mt-1 text-xs text-bbh-off/70">{day.label}</p>
                <ul className="mt-5 space-y-4">
                  {slots.length === 0 ? (
                    <li className="text-sm text-bbh-off/50">Cerrado / recovery</li>
                  ) : (
                    slots.map((slot) => (
                      <li key={slot.id} className="border-t border-white/8 pt-3">
                        <p className="font-display text-sm text-white">{slot.time}</p>
                        <p className="mt-1 text-xs leading-snug text-bbh-off">
                          {classNameById(slot.classId)}
                        </p>
                      </li>
                    ))
                  )}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button href={site.cta.primary.href} event={site.cta.primary.event}>
            {site.cta.primary.label}
          </Button>
          <Button href="/contacto" variant="ghost" event="reservar">
            {site.cta.reservar.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
