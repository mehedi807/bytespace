import HeroDecorations from "@/components/hero/HeroDecorations";
import HeroHeading from "@/components/hero/HeroHeading";
import HeroSearch from "@/components/hero/HeroSearch";
import HeroStudentStage from "@/components/hero/HeroStudentStage";
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
      </div>
    </section>
  );
}

const styles = {
  section: cn(
    "relative w-full overflow-hidden bg-brand-blue",
    "h-[100dvh] min-h-[46rem] max-h-[64rem]"
  ),
  stageWrapper: "relative w-full h-full",
  contentWrapper: cn(
    "absolute z-10 left-0 right-0 px-4",
    "top-[7.5rem] sm:top-[8.5rem] lg:top-[9rem] xl:top-[10.5625rem]",
    "flex flex-col items-center text-center"
  ),
};
