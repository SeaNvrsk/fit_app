import { cx } from "@/lib/utils";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "black" | "graphite";
};

export function Section({ id, children, className, tone = "black" }: Props) {
  return (
    <section
      id={id}
      className={cx(
        "px-6 py-20 md:px-10 md:py-28 lg:px-16",
        tone === "graphite" ? "bg-bbh-graphite" : "bg-bbh-black",
        className,
      )}
    >
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-[12px] font-semibold uppercase tracking-[0.28em] text-bbh-gold">
      {children}
    </p>
  );
}

export function DisplayTitle({
  children,
  as: Tag = "h2",
  className,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={cx(
        "font-display text-4xl font-bold uppercase leading-[0.95] md:text-6xl lg:text-7xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
