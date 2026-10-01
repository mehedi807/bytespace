import { cn } from "@/lib/utils";

export default function HeroStudentStage() {
  return (
    <div className={styles.stage}>
      <img
        src="/images/hero_main_student.png"
        alt="Student with laptop"
        className={styles.image}
      />
    </div>
  );
}

const styles = {
  stage: cn(
    "absolute z-10 pointer-events-none",
    "left-[calc(50%-9.0625rem)] sm:left-[calc(50%-12.1875rem)]",
    "md:left-[calc(50%-14.6875rem)] lg:left-[calc(50%-17.1875rem)]",
    "bottom-[-4.25rem] sm:bottom-[-5.9375rem]",
    "md:bottom-[-7.1875rem] lg:bottom-[-8.4375rem]",
    "w-[21.25rem] sm:w-[28.75rem] md:w-[34.375rem] lg:w-[41.125rem]",
    "h-[20.875rem] sm:h-[28.25rem] md:h-[33.75rem] lg:h-[40.5rem]"
  ),
  image: "w-full h-full object-contain object-bottom",
};
