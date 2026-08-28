import type { Metadata } from "next";
import { classes } from "@/content/classes";
import { media } from "@/content/media";
import { pagesMeta } from "@/content/seo";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pagesMeta.clases);

export default function ClasesPage() {
  return (
    <>
      <PageHero
        eyebrow="SISTEMA DE ENTRENAMIENTO"
        title="SIETE DIRECCIONES. UN ESTÁNDAR."
        lead="Fuerza, empuje, tracción, híbrido, motor y Rendimiento HYROX. El sistema existe para crear atletas, no para llenar un horario."
        image={media.dumbbells}
        imageAlt="Sistema de entrenamiento de BBH"
      />
      <Section>
        <div className="space-y-16">
          {classes.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="grid scroll-mt-28 gap-8 border-t border-white/8 pt-12 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <MediaFrame
                src={item.image || undefined}
                alt={item.imageAlt}
                label={item.name}
                className="min-h-[280px]"
              />
              <div>
                <h2 className="font-display text-4xl font-bold tracking-[0.06em] md:text-5xl">
                  {item.name}
                </h2>
                <p className="mt-4 text-lg text-bbh-off">{item.summary}</p>
                <p className="mt-4 leading-relaxed text-bbh-off/90">{item.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.focus.map((focus) => (
                    <li
                      key={focus}
                      className="border border-white/12 px-3 py-1 font-display text-[11px] tracking-[0.14em] text-bbh-off"
                    >
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <Button href={site.cta.primary.href} event={site.cta.primary.event}>
            {site.cta.primary.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
