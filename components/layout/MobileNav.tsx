"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site, whatsappHref } from "@/content/site";
import { cx } from "@/lib/utils";
import { TrackedAnchor, TrackedLink } from "@/components/ui/TrackedLink";

const icons = {
  home: (
    <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 1.5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="2.4" />
      <circle cx="15.5" cy="8.5" r="2" />
      <path d="M4.5 18c.4-3 2.4-4.6 4.5-4.6S13 15 13.4 18" />
      <path d="M13.2 13.8c1.5-.3 3.3.4 4.3 3.2" />
    </>
  ),
  flag: <path d="M6 4v16M6 5h11l-2 3.5L17 12H6" />,
  menu: (
    <>
      <path d="M5 8h14M5 12h14M5 16h10" />
    </>
  ),
};

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-bbh-black/95 backdrop-blur-md xl:hidden"
        aria-label="Navegación móvil"
      >
        <ul className="grid grid-cols-5">
          {site.mobileNav.map((item, index) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            const icon = [icons.home, icons.clock, icons.people, icons.flag][index];
            return (
              <li key={item.href}>
                <TrackedLink
                  href={item.href}
                  event={item.event}
                  onClick={() => setOpen(false)}
                  className={cx(
                    "flex flex-col items-center gap-1 py-2.5 font-display text-[9px] tracking-[0.14em]",
                    active ? "text-bbh-gold" : "text-bbh-off",
                  )}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.6]">
                    {icon}
                  </svg>
                  {item.label}
                </TrackedLink>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className={cx(
                "flex w-full flex-col items-center gap-1 py-2.5 font-display text-[9px] tracking-[0.14em]",
                open ? "text-bbh-gold" : "text-bbh-off",
              )}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.6]">
                {icons.menu}
              </svg>
              Menú
            </button>
          </li>
        </ul>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-30 bg-bbh-black/96 px-6 pb-28 pt-24 xl:hidden"
        >
          <div className="flex flex-col gap-5">
            {site.nav.map((item) => (
              <TrackedLink
                key={item.href}
                href={item.href}
                event={item.event}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold uppercase tracking-[0.12em]"
              >
                {item.label}
              </TrackedLink>
            ))}
            <TrackedLink
              href={site.cta.primary.href}
              event={site.cta.primary.event}
              onClick={() => setOpen(false)}
              className="mt-4 bg-bbh-gold px-5 py-3 text-center font-display text-sm tracking-[0.18em] text-bbh-black"
            >
              {site.cta.primary.label}
            </TrackedLink>
            <TrackedAnchor
              href={whatsappHref()}
              event="whatsapp"
              className="text-center font-display text-sm tracking-[0.16em] text-bbh-gold"
            >
              WhatsApp
            </TrackedAnchor>
          </div>
        </div>
      ) : null}
    </>
  );
}
