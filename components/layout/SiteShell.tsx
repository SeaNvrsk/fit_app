import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { ScrollChrome } from "@/components/motion/ScrollChrome";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-bbh-gold px-4 py-3 font-display text-sm text-bbh-black transition-transform focus:translate-y-0"
      >
        IR AL CONTENIDO
      </a>
      <ScrollChrome />
      <Header />
      <main id="main-content" className="pb-16 xl:pb-0">
        {children}
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
