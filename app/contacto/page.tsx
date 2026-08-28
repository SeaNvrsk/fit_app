import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { pagesMeta } from "@/content/seo";
import { media } from "@/content/media";
import { addressLines, mapsEmbedSrc, mapsHref, site, whatsappHref } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { TrackedAnchor } from "@/components/ui/TrackedLink";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pagesMeta.contacto);

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACTO"
        title="ENTRENA CON NOSOTROS."
        lead="Si quieres el siguiente nivel, este es el primer paso. Completa el formulario o escribe por WhatsApp."
        image={media.hero}
        imageAlt="Entrena con nosotros en La Casa de los Campeones"
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <aside className="space-y-8 bg-bbh-graphite p-8">
            <div>
              <p className="font-display text-[11px] tracking-[0.2em] text-bbh-gold">SEDE</p>
              <div className="mt-4 overflow-hidden border border-white/10">
                <iframe
                  title="Sede BBH en Google Maps"
                  src={mapsEmbedSrc()}
                  className="h-48 w-full border-0 grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <address className="mt-4 not-italic text-bbh-off">
                {addressLines().map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <a
                href={mapsHref()}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block font-display text-[11px] tracking-[0.18em] text-bbh-gold hover:underline"
              >
                VER EN MAPS
              </a>
            </div>
            <div>
              <p className="font-display text-[11px] tracking-[0.2em] text-bbh-gold">CONTACTO DIRECTO</p>
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="mt-3 block text-bbh-off hover:text-white">
                {site.contact.phone}
              </a>
              <TrackedAnchor
                href={whatsappHref()}
                event="whatsapp"
                className="mt-4 inline-block font-display text-[11px] tracking-[0.18em] text-bbh-gold"
              >
                WHATSAPP {site.contact.whatsapp}
              </TrackedAnchor>
            </div>
            <p className="text-sm leading-relaxed text-bbh-off/80">
              Para reservar una clase o pagar, usa RESERVAR. Aquí resolvemos dudas de la casa.
            </p>
            <Button href={site.cta.reservar.href} event={site.cta.reservar.event}>
              {site.cta.reservar.label}
            </Button>
          </aside>
        </div>
      </Section>
    </>
  );
}
