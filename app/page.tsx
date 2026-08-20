import { Athletes } from "@/components/home/Athletes";
import { BrandStatement } from "@/components/home/BrandStatement";
import { ClassesPreview } from "@/components/home/ClassesPreview";
import { CoachesPreview } from "@/components/home/CoachesPreview";
import { Community } from "@/components/home/Community";
import { ElitePerformance } from "@/components/home/ElitePerformance";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Hyrox } from "@/components/home/Hyrox";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <CoachesPreview />
      <Athletes />
      <ElitePerformance />
      <ClassesPreview />
      <Hyrox />
      <Community />
      <FinalCta />
    </>
  );
}
