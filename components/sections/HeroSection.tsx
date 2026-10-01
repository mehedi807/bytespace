import HeroDecorations from "@/components/hero/HeroDecorations";
import HeroHeading from "@/components/hero/HeroHeading";
import HeroSearch from "@/components/hero/HeroSearch";
import HeroStudentStage from "@/components/hero/HeroStudentStage";
import UiUxBadge from "@/components/hero/badges/UiUxBadge";
import HappyStudentsBadge from "@/components/hero/badges/HappyStudentsBadge";
import LearningProgressBadge from "@/components/hero/badges/LearningProgressBadge";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <HeroDecorations />
      <div className={styles.stageWrapper}>
        <div className={styles.contentWrapper}>
          <HeroHeading />
          <HeroSearch />
        </div>
        <HeroStudentStage />
        <UiUxBadge />
        <HappyStudentsBadge />
        <LearningProgressBadge />
      </div>
    </section>
  );
}

const styles = {
  section: cn(
    "relative w-full overflow-hidden bg-brand-blue",
    "h-[45rem] sm:h-[48.75rem] md:h-[52.5rem] lg:h-[56.5rem]"
  ),
  stageWrapper: "relative w-full h-full",
  contentWrapper: cn(
    "absolute z-10 left-0 right-0 px-4",
    "top-5 sm:top-8 lg:top-[3.0625rem]",
    "flex flex-col items-center text-center"
  ),
};
