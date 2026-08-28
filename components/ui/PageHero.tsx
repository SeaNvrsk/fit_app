import { DisplayTitle, Eyebrow } from "@/components/ui/Section";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { GoldRule } from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({ eyebrow, title, lead, image, imageAlt }: Props) {
  return (
    <header className="relative min-h-[52vh] overflow-hidden border-b border-white/8">
      {image ? (
        <>
          <ParallaxMedia
            src={image}
            alt={imageAlt || title}
            className="absolute inset-0 min-h-[52vh]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-bbh-black/72" />
        </>
      ) : null}
      <div className="relative px-6 pb-14 pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <DisplayTitle as="h1" className="mt-4 max-w-5xl">
            {title}
          </DisplayTitle>
          <GoldRule className="mt-8 max-w-sm" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bbh-off md:text-lg">{lead}</p>
        </div>
      </div>
    </header>
  );
}
