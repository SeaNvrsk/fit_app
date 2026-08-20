"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { cx } from "@/lib/utils";

type Props = {
  href: string;
  event?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function TrackedLink({ href, event, className, children, onClick }: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (event) track(event);
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}

export function TrackedAnchor({
  href,
  event,
  className,
  children,
}: {
  href: string;
  event?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={cx(className)}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={() => {
        if (event) track(event);
      }}
    >
      {children}
    </a>
  );
}
