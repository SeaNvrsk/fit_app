import Link from "next/link";
import { site, whatsappHref } from "@/content/site";
import { TrackedAnchor } from "@/components/ui/TrackedLink";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-bbh-black px-6 py-16 pb-28 md:px-10 lg:px-16 xl:pb-16">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl font-bold tracking-[0.14em]">BBH</p>
          <p className="mt-3 font-display text-sm tracking-[0.18em] text-bbh-gold">
            THE HOUSE OF CHAMPIONS
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bbh-off">
            Si quieres ser el mejor, entrena con los mejores.
          </p>
        </div>

        <div>
          <p className="font-display text-[11px] tracking-[0.22em] text-bbh-gold">NAVEGACIÓN</p>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-display text-sm tracking-[0.12em] text-bbh-off hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-[11px] tracking-[0.22em] text-bbh-gold">CONTACTO</p>
          <ul className="mt-4 space-y-2 text-sm text-bbh-off">
            <li>{site.contact.city}</li>
            <li>{site.contact.address}</li>
            <li>{site.contact.email}</li>
            <li>
              <TrackedAnchor href={whatsappHref()} event="whatsapp" className="hover:text-bbh-gold">
                WhatsApp {site.contact.whatsapp}
              </TrackedAnchor>
            </li>
            <li>{site.contact.instagram}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1280px] flex-col gap-3 border-t border-white/8 pt-6 text-xs text-bbh-off/60 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} BBH. The House of Champions.</p>
        <p>ELITE · COMPETITIVE · PREMIUM · PERFORMANCE · COMMUNITY</p>
      </div>
    </footer>
  );
}
