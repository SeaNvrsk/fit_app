"use client";

import { useEffect, useMemo, useState } from "react";
import { fituneOrigin } from "@/lib/fitune";

type Props = {
  src: string;
  title: string;
  minHeight?: string;
};

const DEFAULT_HEIGHT = 960;
/** Fitune storefront header is `h-16`. Keep the back-row title ("Choose an option") visible. */
const HEADER_OFFSET = 64;
/** Extra space so checkout "Next" / pay actions are not flush with the clip edge. */
const CTA_BUFFER = 56;

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
      setHeight(Math.max(data.height + CTA_BUFFER, floor));
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [floor, origin]);

  const frameHeight = height;
  const viewportHeight = Math.max(frameHeight - HEADER_OFFSET, floor - HEADER_OFFSET);

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
