import Image from "next/image";
import StudentGrowthRow from "@/components/creator-platform/StudentGrowthRow";
import CreatorAnalyticsRow from "@/components/creator-platform/CreatorAnalyticsRow";
import { cn } from "@/lib/utils";

export default function CreatorPlatformSection() {
  return (
    <section id="platform" className={styles.section}>
      <div className={styles.bgGridWrapper}>
        <Image
          src="/images/creator_bg_grid.svg"
          alt=""
          fill
          className="object-cover opacity-60 pointer-events-none"
        />
      </div>
      <div className={styles.radialGlow} />

      <div className={styles.container}>
        <StudentGrowthRow />
        <CreatorAnalyticsRow />
      </div>
    </section>
  );
}

const styles = {
  section: cn(
    "relative w-full bg-[#FAFAFA] overflow-hidden",
    "py-16 sm:py-20 lg:py-[7.5rem]"
  ),
  bgGridWrapper: cn(
    "absolute inset-0 z-0",
    "w-full h-full pointer-events-none"
  ),
  radialGlow: cn(
    "absolute left-[-10rem] bottom-[-5rem] z-0",
    "w-[42rem] h-[42rem] rounded-full",
    "bg-radial from-[#CBFC01]/30 via-[#CBFC01]/10 to-transparent",
    "blur-[30px] pointer-events-none"
  ),
  container: cn(
    "relative z-10 w-full max-w-[90rem] mx-auto",
    "px-4 sm:px-6 md:px-10 lg:px-[7.5rem]",
    "flex flex-col gap-16 sm:gap-20 lg:gap-[4.5rem]"
  ),
};
