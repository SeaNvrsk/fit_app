import type { Metadata } from "next";
import Image from "next/image";
import { coaches } from "@/content/coaches";
import { media } from "@/content/media";
import { pagesMeta } from "@/content/seo";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pagesMeta.coaches);

export default function CoachesPage() {
  return (
    <>
      <PageHero
        eyebrow="LOS MEJORES ENTRENADORES"
        title="ESPECIALISTAS EN RENDIMIENTO."
        lead="No están aquí para dirigir entrenamientos. Trabajan para formar atletas capaces de competir al más alto nivel."
        image={media.grip}
        imageAlt="Entrenamiento de élite en el piso de BBH"
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {coaches.map((coach) => (
            <article key={coach.id} className="overflow-hidden border border-white/8 bg-bbh-graphite">
              {coach.image ? (
                <div className="relative aspect-[3/4] min-h-[320px]">
                  <Image
                    src={coach.image}
                    alt={coach.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-[center_18%]"
                  />
                </div>
              ) : (
                <MediaFrame alt={coach.imageAlt} className="min-h-[240px] md:min-h-[320px]" />
              )}
              <div className="p-6 md:p-8">
                <h2 className="font-display text-3xl font-bold tracking-[0.08em]">{coach.name}</h2>
                <p className="mt-2 text-sm text-bbh-gold">{coach.role}</p>
                <p className="mt-1 text-sm text-bbh-off">{coach.focus}</p>
                <p className="mt-4 leading-relaxed text-bbh-off">{coach.bio}</p>
              </div>
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
