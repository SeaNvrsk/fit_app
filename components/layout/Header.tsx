"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { cx } from "@/lib/utils";
import { TrackedLink } from "@/components/ui/TrackedLink";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-40 transition-colors",
        scrolled ? "bg-bbh-black/92 backdrop-blur-md border-b border-white/8" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:h-[72px] md:px-10 lg:px-16">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-display text-2xl font-bold tracking-[0.14em]">BBH</span>
          <span className="hidden font-display text-[10px] tracking-[0.22em] text-bbh-off/70 lg:inline">
            LA CASA DE LOS CAMPEONES
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegación principal">
          {site.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <TrackedLink
                key={item.href}
                href={item.href}
                event={item.event}
                className={cx(
                  "font-display text-[11px] tracking-[0.2em] transition-colors",
                  active ? "text-bbh-gold" : "text-bbh-off hover:text-white",
                )}
              >
                {item.label}
              </TrackedLink>
            );
          })}
        </nav>

        <TrackedLink
          href={site.cta.primary.href}
          event={site.cta.primary.event}
          className="bg-bbh-gold px-4 py-2 font-display text-[10px] font-semibold tracking-[0.18em] text-bbh-black hover:bg-[#e4b83a] md:px-5 md:text-[11px]"
        >
          {site.cta.primary.label}
        </TrackedLink>
      </div>
    </header>
  );
}
