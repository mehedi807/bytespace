import { cn } from "@/lib/utils";

export default function CatalogHeader() {
  return (
    <div className={styles.header}>
      <h2 className={styles.heading}>
        Discover Your Passion, Build Your Skills
      </h2>
      <p className={styles.subtitle}>
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology
        to the arts, and make a difference in your career and life.
      </p>
    </div>
  );
}

const styles = {
  header: cn(
    "flex flex-col items-center text-center",
    "gap-3 sm:gap-4 max-w-[57.3125rem] mx-auto",
    "mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0"
  ),
  heading: cn(
    "font-heading font-semibold text-brand-heading",
    "text-[1.625rem] min-[400px]:text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem]",
    "leading-[1.2em] tracking-[-0.01em]",
    "max-w-[36.75rem] w-full"
  ),
  subtitle: cn(
    "font-satoshi text-brand-gray-400",
    "text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem]",
    "leading-[1.6em] max-w-[57.3125rem] w-full"
  ),
};
