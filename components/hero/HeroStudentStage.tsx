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
    "left-1/2 translate-x-[calc(-50%+1.5rem)] sm:translate-x-[calc(-50%+2.25rem)]",
    "md:translate-x-[calc(-50%+2.75rem)] lg:translate-x-[calc(-50%+3.375rem)]",
    "bottom-[-4.25rem] sm:bottom-[-5.9375rem] md:bottom-[-7.1875rem] lg:bottom-[-8.4375rem]",
    "w-[21.25rem] sm:w-[28.75rem] md:w-[34.375rem] lg:w-[41.125rem]",
    "h-[20.875rem] sm:h-[28.25rem] md:h-[33.75rem] lg:h-[40.5rem]"
  ),
  image: "w-full h-full object-contain object-bottom",
};
