"use client";

import { useEffect, useMemo, useState } from "react";
import { fituneOrigin } from "@/lib/fitune";

type Props = {
  src: string;
  title: string;
  minHeight?: string;
};

const DEFAULT_HEIGHT = 960;
/** Fitune embed header is `h-16` plus shadow. */
const HEADER_OFFSET = 72;
/** Powered-by footer plus Fitune's sticky mobile tabs (~100px in their height ping). */
const FOOTER_OFFSET = 104;

export function FituneEmbed({ src, title, minHeight = "960px" }: Props) {
  const floor = useMemo(() => {
    const parsed = Number.parseInt(minHeight, 10);
    return Number.isFinite(parsed) ? parsed : DEFAULT_HEIGHT;
  }, [minHeight]);
  const [height, setHeight] = useState(floor);
  const origin = fituneOrigin(src);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== origin) return;
      const data = event.data;
      if (!data || data.type !== "setIframeHeight" || typeof data.height !== "number") return;
      setHeight(Math.max(data.height, floor));
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [floor, origin]);

  const frameHeight = height;
  const chrome = HEADER_OFFSET + FOOTER_OFFSET;
  const viewportHeight = Math.max(frameHeight - chrome, floor - chrome);

  return (
    <div>
      <div className="overflow-hidden border border-white/10 bg-white">
        <div className="relative overflow-hidden" style={{ height: viewportHeight }}>
          <iframe
            src={src}
            title={title}
            className="absolute left-0 w-full border-0"
            style={{ top: -HEADER_OFFSET, height: frameHeight }}
            allow="payment *; clipboard-write"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
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
