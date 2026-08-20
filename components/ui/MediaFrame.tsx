import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { cx } from "@/lib/utils";

type Props = {
  src?: string;
  alt: string;
  caption?: string;
  className?: string;
  label?: string;
};

export function MediaFrame({ src, alt, caption, className, label }: Props) {
  if (src) {
    return (
      <figure className={cx("relative", className)}>
        <ParallaxMedia src={src} alt={alt} className="h-full min-h-[280px] w-full" />
        {caption ? (
          <figcaption className="absolute bottom-0 right-0 bg-bbh-black/80 px-3 py-1.5 font-display text-[10px] tracking-[0.2em] text-bbh-off">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={cx("group relative overflow-hidden bg-bbh-graphite", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,168,46,0.08),transparent_42%),linear-gradient(160deg,#171717_0%,#0a0a0a_70%)]" />
      <div className="media-grain pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 border border-white/8" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-bbh-gold/70" />
      <div className="relative flex h-full min-h-[280px] w-full items-end p-6 md:min-h-[360px] md:p-8">
        <div>
          {label ? (
            <p className="font-display text-[11px] tracking-[0.24em] text-bbh-gold">{label}</p>
          ) : null}
          <p className="mt-2 max-w-xs text-sm text-bbh-off/80">{alt}</p>
        </div>
      </div>
    </figure>
  );
}
