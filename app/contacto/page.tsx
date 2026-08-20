import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { pagesMeta } from "@/content/seo";
import { media } from "@/content/media";
import { site, whatsappHref } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { TrackedAnchor } from "@/components/ui/TrackedLink";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(pagesMeta.contacto);

export default function ContactoPage() {
  return (
    <>
      <PageHero
        index="09"
        eyebrow="CONTACTO"
        title="TRAIN WITH US."
        lead="Si quieres el siguiente nivel, este es el primer paso. Completa el formulario o escribe por WhatsApp."
        image={media.hero}
        imageAlt="Train with us en The House of Champions"
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <aside className="space-y-8 bg-bbh-graphite p-8">
            <div>
              <p className="font-display text-[11px] tracking-[0.2em] text-bbh-gold">HOUSE</p>
              <p className="mt-3 text-bbh-off">{site.contact.city}</p>
              <p className="text-bbh-off">{site.contact.address}</p>
            </div>
            <div>
              <p className="font-display text-[11px] tracking-[0.2em] text-bbh-gold">DIRECTO</p>
              <p className="mt-3 text-bbh-off">{site.contact.email}</p>
              <p className="text-bbh-off">{site.contact.phone}</p>
              <TrackedAnchor
                href={whatsappHref()}
                event="whatsapp"
                className="mt-4 inline-block font-display text-[11px] tracking-[0.18em] text-bbh-gold"
              >
                WHATSAPP {site.contact.whatsapp}
              </TrackedAnchor>
            </div>
            <p className="text-sm leading-relaxed text-bbh-off/80">
              El booking online llega en la siguiente etapa. Mientras tanto, TRAIN WITH US y RESERVAR
              llegan aquí.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
