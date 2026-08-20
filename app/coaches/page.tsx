import type { Metadata } from "next";
import { coaches } from "@/content/coaches";
import { media } from "@/content/media";
import { pagesMeta } from "@/content/seo";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pagesMeta.coaches);

export default function CoachesPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="LOS MEJORES ENTRENADORES"
        title="ESPECIALISTAS EN RENDIMIENTO."
        lead="No están aquí para dirigir entrenamientos. Trabajan para formar atletas capaces de competir al más alto nivel. Los nombres y fotos reales se publican cuando el equipo esté listo."
        image={media.grip}
        imageAlt="Entrenamiento de élite en el piso de BBH"
      />
      <Section>
        <ParallaxMedia
          src={media.rack}
          alt="Espacio de entrenadores y rendimiento en BBH"
          className="mb-12 min-h-[320px] md:min-h-[460px]"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {coaches.map((coach, index) => (
            <article key={coach.id} className="border border-white/8 bg-bbh-graphite p-6 md:p-8">
              <p className="font-display text-[11px] tracking-[0.2em] text-bbh-gold">0{index + 1}</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[0.08em]">{coach.name}</h2>
              <p className="mt-2 text-sm text-bbh-gold">{coach.role}</p>
              <p className="mt-1 text-sm text-bbh-off">{coach.focus}</p>
              <p className="mt-4 leading-relaxed text-bbh-off">{coach.bio}</p>
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
