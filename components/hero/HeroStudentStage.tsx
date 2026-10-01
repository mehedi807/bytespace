import UiUxBadge from "@/components/hero/badges/UiUxBadge";
import HappyStudentsBadge from "@/components/hero/badges/HappyStudentsBadge";
import LearningProgressBadge from "@/components/hero/badges/LearningProgressBadge";
import { cn } from "@/lib/utils";

export default function HeroStudentStage() {
  return (
    <div className={styles.stage}>
      <img
        src="/images/hero_main_student.png"
        alt="Student with laptop"
        className={styles.image}
      />
      <UiUxBadge />
      <LearningProgressBadge />
      <HappyStudentsBadge />
    </div>
  );
}

const styles = {
  stage: cn(
    "absolute z-10 pointer-events-none",
    "left-1/2 -translate-x-1/2",
    "bottom-[-1.5rem] sm:bottom-[-1.8125rem]",
    "w-[20rem] sm:w-[26rem] md:w-[30rem] lg:w-[36.125rem]",
    "h-[19.6rem] sm:h-[25.5rem] md:h-[29.4rem] lg:h-[33.8125rem]"
  ),
  image: "w-full h-full object-contain object-bottom",
};
