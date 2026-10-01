import { cn } from "@/lib/utils";

export default function LearningProgressBadge() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Learning Progress
      </div>
      <div className={styles.percentage}>
        55%
      </div>
      <div className={styles.progressBarTrack}>
        <div className={styles.progressBarFill} />
      </div>
    </div>
  );
}

const styles = {
  container: cn(
    "flex absolute z-20 bg-white",
    "rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4",
    "shadow-2xl flex-col gap-0.5 sm:gap-1 lg:gap-2",
    "pointer-events-auto border border-white/40 backdrop-blur-md",
    "right-2 min-[440px]:right-4 sm:right-auto",
    "sm:left-[calc(50%+4.375rem)] lg:left-[calc(50%+7.625rem)]",
    "top-[23.125rem] min-[440px]:top-[24.375rem]",
    "sm:top-[27.5rem] md:top-[29.375rem] lg:top-[33.1875rem]"
  ),
  title: cn(
    "font-satoshi font-medium text-brand-gray-950 leading-[1.2em]",
    "text-[0.625rem] min-[440px]:text-[0.6875rem]",
    "sm:text-[0.8125rem] lg:text-[0.875rem]"
  ),
  percentage: cn(
    "font-heading font-semibold text-brand-gray-950 tracking-tight leading-[1.2em]",
    "text-[1.125rem] min-[400px]:text-[1.375rem]",
    "min-[440px]:text-[1.625rem] sm:text-[2.25rem] lg:text-[3rem]",
    "w-[5.9375rem] min-[400px]:w-[6.875rem]",
    "min-[440px]:w-[8.125rem] sm:w-[10.625rem] lg:w-[12.5rem]"
  ),
  progressBarTrack: cn(
    "w-[5.9375rem] min-[400px]:w-[6.875rem]",
    "min-[440px]:w-[8.125rem] sm:w-[10.625rem] lg:w-[12.5rem]",
    "h-1 min-[440px]:h-[0.3125rem] sm:h-[0.4375rem] lg:h-2",
    "bg-secondary rounded-full overflow-hidden"
  ),
  progressBarFill: "h-full bg-brand-lime rounded-full w-[55%]",
};
