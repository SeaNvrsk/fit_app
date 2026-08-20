import { Button } from "@/components/ui/Button";
import { DisplayTitle, Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] pt-36">
      <p className="font-display text-[11px] tracking-[0.24em] text-bbh-gold">404</p>
      <DisplayTitle as="h1" className="mt-4">
        ESTA PÁGINA NO EXISTE.
      </DisplayTitle>
      <p className="mt-6 max-w-md text-bbh-off">Vuelve a la house.</p>
      <div className="mt-8">
        <Button href="/">INICIO</Button>
      </div>
    </Section>
  );
}
