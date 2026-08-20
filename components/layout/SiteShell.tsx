import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { ScrollChrome } from "@/components/motion/ScrollChrome";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollChrome />
      <Header />
      <main className="pb-16 xl:pb-0">{children}</main>
      <Footer />
      <MobileNav />
    </>
  );
}
