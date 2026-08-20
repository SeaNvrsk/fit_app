"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { cx } from "@/lib/utils";

type Variant = "gold" | "ghost" | "line";

const styles: Record<Variant, string> = {
  gold: "bg-bbh-gold text-bbh-black hover:bg-[#e4b83a]",
  ghost: "border border-white/20 text-bbh-white hover:border-bbh-gold hover:text-bbh-gold",
  line: "border-b border-bbh-gold text-bbh-gold rounded-none px-0 py-1 hover:opacity-80",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  event?: string;
  onClick?: () => void;
};

export function Button({ href, children, variant = "gold", className, event, onClick }: Props) {
  return (
    <Link
      href={href}
      onClick={() => {
        if (event) track(event);
        onClick?.();
      }}
      className={cx(
        "inline-flex items-center justify-center px-6 py-3 text-[11px] font-display font-semibold uppercase tracking-[0.18em] transition-colors",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
