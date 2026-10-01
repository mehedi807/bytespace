import { cn } from "@/lib/utils";

export default function UiUxBadge() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        UI/UX Design
      </div>
      <div className={styles.subtitle}>
        <span>200 Courses</span>
        <span>•</span>
        <span>1000+ Students</span>
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
    "left-[-2%] sm:left-[-4.7%]",
    "top-[20%] sm:top-[23.5%]"
  ),
  title: cn(
    "font-satoshi font-medium text-brand-gray-950 leading-[1.2em]",
    "text-[0.6875rem] min-[440px]:text-[0.75rem]",
    "sm:text-[0.875rem] lg:text-[1rem]"
  ),
  subtitle: cn(
    "flex items-center gap-1 sm:gap-1.5 lg:gap-2",
    "font-satoshi text-brand-gray-400",
    "text-[0.5625rem] min-[440px]:text-[0.625rem]",
    "sm:text-[0.6875rem] lg:text-[0.75rem]"
  ),
};
