"use client";

import { FormEvent } from "react";
import { site, isPlaceholder, whatsappHref } from "@/content/site";
import { track } from "@/lib/analytics";

const interests = [
  { value: "clases", label: "Clases" },
  { value: "personalizado", label: "Personalizado" },
  { value: "evento", label: "Evento" },
  { value: "otro", label: "Otro" },
];

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

    track("contact_submit", { interest });

    const body = [
      "Hola, quiero entrenar en BBH.",
      "",
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `WhatsApp: ${phone || "No indicado"}`,
      `Interés: ${interest}`,
      message ? `Mensaje: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    if (!isPlaceholder(site.contact.email)) {
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
        `BBH — ${name}`,
      )}&body=${encodeURIComponent(body)}`;
    } else {
      window.location.href = whatsappHref(body);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Nombre" name="name" required />
      <Field label="Correo" name="email" type="email" required />
      <Field label="WhatsApp" name="phone" />
      <label className="block">
        <span className="font-display text-[11px] tracking-[0.18em] text-bbh-gold">INTERÉS</span>
        <select
          name="interest"
          className="mt-2 w-full border border-white/12 bg-bbh-black px-4 py-3 text-sm text-white outline-none focus:border-bbh-gold"
          defaultValue="clases"
        >
          {interests.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="font-display text-[11px] tracking-[0.18em] text-bbh-gold">MENSAJE</span>
        <textarea
          name="message"
          rows={5}
          className="mt-2 w-full border border-white/12 bg-bbh-black px-4 py-3 text-sm text-white outline-none focus:border-bbh-gold"
        />
      </label>
      <button
        type="submit"
        className="bg-bbh-gold px-6 py-3 font-display text-[11px] font-semibold tracking-[0.18em] text-bbh-black hover:bg-[#e4b83a]"
      >
        ENVIAR SOLICITUD
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-display text-[11px] tracking-[0.18em] text-bbh-gold">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-white/12 bg-bbh-black px-4 py-3 text-sm text-white outline-none focus:border-bbh-gold"
      />
    </label>
  );
}
