import { cn } from "@/lib/utils";

export default function HeroHeading() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Get Access to Hundreds Courses Available
      </h1>
      <p className={styles.description}>
        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
      </p>
    </div>
  );
}

const styles = {
  wrapper: cn(
    "flex flex-col items-center",
    "gap-2 sm:gap-4 lg:gap-8",
    "w-full max-w-[58.4375rem] text-center"
  ),
  title: cn(
    "font-heading font-semibold text-white tracking-tight",
    "text-[1.75rem] min-[380px]:text-[2rem] min-[440px]:text-[2.25rem]",
    "sm:text-[2.875rem] md:text-[3.625rem] lg:text-[4.5rem]",
    "leading-[1.15em] lg:leading-[1.2em]"
  ),
  description: cn(
    "font-satoshi font-normal text-brand-gray-100",
    "text-[0.8125rem] min-[440px]:text-[0.875rem]",
    "sm:text-[1rem] lg:text-[1.125rem]",
    "leading-[1.5em] lg:leading-[1.6em]",
    "max-w-[58.4375rem]"
  ),
};
