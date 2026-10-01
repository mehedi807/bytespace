"use client";

import Image from "next/image";
import { SearchIcon, ChevronDownIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";

interface CourseSearchHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function CourseSearchHero({
  searchQuery,
  onSearchChange,
}: CourseSearchHeroProps) {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.gridPatternWrapper}>
        <Image
          src="/images/hero_grid_pattern.svg"
          alt=""
          fill
          className={styles.imageCover}
        />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Find Your Next Course
        </h1>

        <div className={styles.searchBarWrapper}>
          <div className={styles.searchInputContainer}>
            <SearchIcon className={styles.searchIcon} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search"
              className={styles.searchInput}
            />
          </div>

          <div className={styles.coursesDropdownButton}>
            <span>Courses</span>
            <ChevronDownIcon className={styles.chevronIcon} />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  heroBanner: cn(
    "relative w-full overflow-hidden bg-brand-blue",
    "pt-6 pb-12 sm:pt-8 sm:pb-16",
    "flex flex-col items-center justify-center"
  ),
  gridPatternWrapper: "absolute inset-0 pointer-events-none opacity-12",
  imageCover: "object-cover",
  heroContent: cn(
    "relative z-10 flex flex-col items-center",
    "gap-8 px-6 text-center max-w-[50rem] w-full"
  ),
  heroTitle: cn(
    "font-heading font-semibold text-brand-gray-50 tracking-[-0.01em]",
    "text-[2rem] sm:text-[2.25rem] leading-[1.2em]"
  ),
  searchBarWrapper: cn(
    "flex items-center justify-center",
    "gap-3 sm:gap-4 w-full flex-wrap sm:flex-nowrap"
  ),
  searchInputContainer: cn(
    "flex items-center gap-2 px-6 py-3",
    "bg-white rounded-[1.5rem] w-full max-w-[28.8125rem]",
    "h-[3.25rem] shadow-xs"
  ),
  searchIcon: "w-6 h-6 text-brand-gray-400 shrink-0",
  searchInput: cn(
    "w-full font-satoshi text-lg text-brand-gray-950",
    "placeholder-brand-gray-400 outline-none bg-transparent"
  ),
  coursesDropdownButton: cn(
    "flex items-center justify-center gap-2 px-6 py-3",
    "rounded-[1.5rem] bg-brand-lime text-brand-gray-950",
    "font-satoshi font-medium text-lg h-[3.25rem] shrink-0"
  ),
  chevronIcon: "w-6 h-6 text-brand-gray-950",
};
