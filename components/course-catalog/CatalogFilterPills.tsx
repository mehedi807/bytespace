"use client";

import { cn } from "@/lib/utils";

interface CatalogFilterPillsProps {
  selectedTag: string;
  onSelectTag: (tag: string) => void;
}

export default function CatalogFilterPills({
  selectedTag,
  onSelectTag,
}: CatalogFilterPillsProps) {
  const row1Tags = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ];

  const row2Tags = [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ];

  const row3Tags = [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        {row1Tags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onSelectTag(tag)}
              className={cn(
                styles.pillBase,
                isActive ? styles.pillActive : styles.pillInactive
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className={styles.row}>
        {row2Tags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onSelectTag(tag)}
              className={cn(
                styles.pillBase,
                isActive ? styles.pillActive : styles.pillInactive
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className={styles.row}>
        {row3Tags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onSelectTag(tag)}
              className={cn(
                styles.pillBase,
                isActive ? styles.pillActive : styles.pillInactive
              )}
            >
              {tag}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => onSelectTag("Featured")}
          className={styles.moreButton}
        >
          + More
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: cn(
    "flex flex-col items-center gap-2.5 sm:gap-4",
    "mb-10 sm:mb-12 lg:mb-[4.5rem]",
    "w-full overflow-hidden"
  ),
  row: cn(
    "flex flex-wrap items-center justify-center",
    "gap-2 sm:gap-3 lg:gap-4 w-full"
  ),
  pillBase: cn(
    "px-3.5 py-2 sm:px-4 sm:py-3",
    "rounded-full font-satoshi",
    "text-[0.875rem] sm:text-[1rem] font-medium leading-[1.2em]",
    "transition-colors duration-200 cursor-pointer shrink-0"
  ),
  pillActive: cn(
    "bg-brand-lime text-brand-dark",
    "shadow-xs select-none"
  ),
  pillInactive: cn(
    "bg-secondary text-brand-gray-700",
    "hover:bg-brand-gray-100 hover:text-brand-dark"
  ),
  moreButton: cn(
    "px-3.5 py-2 sm:px-4 sm:py-3 font-satoshi",
    "text-[0.875rem] sm:text-[1rem] font-medium leading-[1.2em]",
    "text-brand-blue hover:underline cursor-pointer transition-colors"
  ),
};
