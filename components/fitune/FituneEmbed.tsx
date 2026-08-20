type Props = {
  src: string;
  title: string;
  minHeight?: string;
};

export function FituneEmbed({ src, title, minHeight = "960px" }: Props) {
  return (
    <div>
      <div className="overflow-hidden border border-white/10 bg-white">
        <iframe
          src={src}
          title={title}
          className="w-full border-0"
          style={{ minHeight }}
          allow="payment *; clipboard-write"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-4 text-sm text-bbh-off">
        Si el calendario no carga,{" "}
        <a href={src} target="_blank" rel="noreferrer" className="text-bbh-gold hover:underline">
          abre la reserva en Fitune
        </a>
        .
      </p>
    </div>
  );
}

export function FitunePending({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-bbh-gold/35 bg-bbh-graphite p-8">
      <p className="font-display text-sm tracking-[0.18em] text-bbh-gold">FITUNE</p>
      <p className="mt-4 max-w-xl text-bbh-off">{children}</p>
    </div>
  );
}
