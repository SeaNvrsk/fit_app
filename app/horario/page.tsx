import type { Metadata } from "next";
import { pagesMeta } from "@/content/seo";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FituneEmbed } from "@/components/fitune/FituneEmbed";
import { fitune } from "@/lib/fitune";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pagesMeta.horario);

export default function HorarioPage() {
  return (
    <>
      <PageHero
        eyebrow="HORARIO"
        title="LA SEMANA EN LA CASA."
        lead="Reserva tu clase en tiempo real. El horario, los lugares y el pago se confirman en Fitune."
        image={media.rack}
        imageAlt="Horario de rendimiento en BBH"
      />
      <Section>
        <div id="reservar" className="scroll-mt-28">
          <FituneEmbed src={fitune().schedule} title="Reserva de clases BBH" />
        </div>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button href={site.cta.primary.href} event={site.cta.primary.event}>
            {site.cta.primary.label}
          </Button>
          <Button href="/contacto" variant="ghost">
            CONTACTO
          </Button>
        </div>
      </Section>
    </>
  );
}
