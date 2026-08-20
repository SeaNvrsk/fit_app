import type { Metadata } from "next";
import { personalizedPrograms } from "@/content/personalizados";
import { pagesMeta } from "@/content/seo";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pagesMeta.personalizados);

export default function PersonalizadosPage() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="PERSONALIZADOS"
        title="EL PLAN QUE PIDE EL ATLETA."
        lead="1:1, small group y race strategy. Para quien ya no cabe en un horario genérico y necesita un estándar más alto."
        image={media.chain}
        imageAlt="Entrenamiento personalizado de élite en BBH"
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {personalizedPrograms.map((program, index) => (
            <article key={program.id} className="border border-white/8 bg-bbh-graphite p-8">
              <p className="font-display text-[11px] tracking-[0.22em] text-bbh-gold">
                0{index + 1}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[0.08em]">
                {program.name}
              </h2>
              <p className="mt-4 text-bbh-off">{program.summary}</p>
              <ul className="mt-6 space-y-2">
                {program.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-bbh-off">
                    <span className="h-px w-5 bg-bbh-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Button href={site.cta.primary.href} event={site.cta.primary.event}>
            {site.cta.primary.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
