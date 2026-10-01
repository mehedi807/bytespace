"use client";

import { cn } from "@/lib/utils";

interface CourseCategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CourseCategoryTabs({
  categories,
  selectedCategory,
  onSelectCategory,
}: CourseCategoryTabsProps) {
  return (
    <div className={styles.categoryTabsWrapper}>
      <div className={styles.categoryTabs}>
        {categories.map((tab) => {
          const isActive = selectedCategory === tab;
          return (
            <button
              key={tab}
              onClick={() => onSelectCategory(tab)}
              className={cn(
                styles.tabButton.base,
                isActive ? styles.tabButton.active : styles.tabButton.inactive
              )}
              type="button"
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  categoryTabsWrapper: "w-full overflow-x-auto pb-2 mb-10 sm:mb-12 scrollbar-none",
  categoryTabs: cn(
    "flex items-center justify-between",
    "gap-2.5 sm:gap-3 min-w-max"
  ),
  tabButton: {
    base: cn(
      "px-4 py-3 rounded-[1.5rem] font-satoshi",
      "text-base font-medium leading-[1.2em]",
      "whitespace-nowrap transition-colors cursor-pointer"
    ),
    active: "bg-brand-lime text-brand-gray-950 shadow-xs",
    inactive: "bg-brand-gray-50 text-brand-gray-700 hover:text-brand-gray-950 hover:bg-brand-gray-100",
  },
};
