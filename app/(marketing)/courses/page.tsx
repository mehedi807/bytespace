"use client";

import { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { courses } from "@/lib/data";
import CourseCard from "@/components/ui/CourseCard";
import {
  ChevronDownIcon,
  FilterIcon,
  GridCategoryIcon,
  LevelBarsIcon,
  SortListIcon,
  SearchIcon,
  ArrowBackIosIcon,
  ArrowForwardIosIcon,
} from "@/utils/icons";
import { cn } from "@/lib/utils";

const CATEGORY_TABS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const SORT_OPTIONS = [
  { label: "Most relevant", value: "relevant" },
  { label: "Rating: High to Low", value: "rating" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];

const LEVEL_OPTIONS = ["All Levels", "Beginner", "Intermediate", "Advanced"];

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "Featured";
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("relevant");
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q) ||
        course.instructor.name.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === "Featured" ||
        selectedCategory === "All Categories" ||
        course.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        course.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        course.description.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesLevel =
        selectedLevel === "All Levels" ||
        course.level.toLowerCase() === selectedLevel.toLowerCase();

      return matchesQuery && matchesCategory && matchesLevel;
    });

    if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price_asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage) || 1;
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Banner with search bar */}
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
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
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

      {/* Main Course Discovery Content */}
      <div className={styles.mainContainer}>
        {/* Controls Row: Filter, Level, Category, Sort */}
        <div className={styles.controlsRow}>
          <div className={styles.controlsGroup}>
            <button
              onClick={() => {
                setSelectedCategory("Featured");
                setSelectedLevel("All Levels");
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className={styles.controlButton}
            >
              <FilterIcon className={styles.controlIcon} />
              <span>Filter</span>
            </button>

            <div className={styles.dropdownRelative}>
              <button
                onClick={() => {
                  setShowLevelMenu(!showLevelMenu);
                  setShowSortMenu(false);
                }}
                className={cn(
                  styles.controlButton,
                  selectedLevel !== "All Levels" && styles.controlButtonActive
                )}
              >
                <LevelBarsIcon className={styles.controlIcon} />
                <span>{selectedLevel === "All Levels" ? "Level" : selectedLevel}</span>
              </button>

              {showLevelMenu && (
                <div className={styles.dropdownMenu}>
                  {LEVEL_OPTIONS.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => {
                        setSelectedLevel(lvl);
                        setShowLevelMenu(false);
                        setCurrentPage(1);
                      }}
                      className={cn(
                        styles.dropdownItem,
                        selectedLevel === lvl && styles.dropdownItemActive
                      )}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setSelectedCategory("Featured");
                setCurrentPage(1);
              }}
              className={styles.controlButton}
            >
              <GridCategoryIcon className={styles.controlIcon} />
              <span>Category</span>
            </button>
          </div>

          <div className={styles.dropdownRelative}>
            <button
              onClick={() => {
                setShowSortMenu(!showSortMenu);
                setShowLevelMenu(false);
              }}
              className={styles.controlButton}
            >
              <SortListIcon className={styles.controlIcon} />
              <span>
                {SORT_OPTIONS.find((o) => o.value === sortBy)?.label || "Most relevant"}
              </span>
            </button>

            {showSortMenu && (
              <div className={styles.dropdownMenuRight}>
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setShowSortMenu(false);
                    }}
                    className={cn(
                      styles.dropdownItem,
                      sortBy === opt.value && styles.dropdownItemActive
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Horizontal Category Filter Pills */}
        <div className={styles.categoryTabsWrapper}>
          <div className={styles.categoryTabs}>
            {CATEGORY_TABS.map((tab) => {
              const isActive = selectedCategory === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setSelectedCategory(tab);
                    setCurrentPage(1);
                  }}
                  className={cn(
                    styles.tabButton.base,
                    isActive ? styles.tabButton.active : styles.tabButton.inactive
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Catalog Grid */}
        {paginatedCourses.length > 0 ? (
          <div className={styles.courseGrid}>
            {paginatedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyTitle}>No courses found</p>
            <p className={styles.emptySubtitle}>
              Try adjusting your search query or filters to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Featured");
                setSelectedLevel("All Levels");
                setCurrentPage(1);
              }}
              className={styles.resetButton}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination Row matching Figma #55:834 */}
        <div className={styles.paginationRow}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={styles.pageArrowButton}
            aria-label="Previous page"
          >
            <ArrowBackIosIcon className={styles.arrowIcon} />
          </button>

          <div className={styles.pageNumbers}>
            {[1, 2, 3, 4, 5].map((pageNum) => {
              const isCurrent = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={cn(
                    styles.pageNumber,
                    isCurrent ? styles.pageNumberActive : styles.pageNumberInactive
                  )}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            disabled={currentPage === 5}
            className={styles.pageArrowButton}
            aria-label="Next page"
          >
            <ArrowForwardIosIcon className={styles.arrowIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className={styles.suspenseFallback}>Loading courses...</div>}>
      <CoursesContent />
    </Suspense>
  );
}

const styles = {
  pageWrapper: "w-full bg-white pb-[6.25rem]",
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
  mainContainer: "max-w-[75rem] mx-auto px-6 lg:px-0 pt-12 sm:pt-[4.5rem]",
  controlsRow: cn(
    "flex flex-wrap items-center justify-between",
    "gap-4 mb-8 sm:mb-10"
  ),
  controlsGroup: "flex items-center gap-3 sm:gap-4 flex-wrap",
  controlButton: cn(
    "flex items-center gap-1 px-4 py-3",
    "rounded-[1.5rem] border border-brand-gray-200 bg-white",
    "font-satoshi font-medium text-base text-brand-gray-700",
    "hover:border-brand-gray-300 hover:text-brand-gray-950",
    "transition-colors cursor-pointer"
  ),
  controlButtonActive: "border-brand-blue text-brand-blue bg-blue-50/50",
  controlIcon: "w-6 h-6 shrink-0",
  dropdownRelative: "relative",
  dropdownMenu: cn(
    "absolute left-0 top-full mt-2 w-48 bg-white",
    "rounded-[1rem] border border-brand-gray-200 shadow-xl",
    "py-2 z-30 flex flex-col"
  ),
  dropdownMenuRight: cn(
    "absolute right-0 top-full mt-2 w-52 bg-white",
    "rounded-[1rem] border border-brand-gray-200 shadow-xl",
    "py-2 z-30 flex flex-col"
  ),
  dropdownItem: cn(
    "w-full text-left px-4 py-2.5 font-satoshi",
    "text-sm text-brand-gray-700 hover:bg-brand-gray-50",
    "hover:text-brand-gray-950 transition-colors"
  ),
  dropdownItemActive: "font-semibold text-brand-blue bg-blue-50/40",
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
  courseGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20",
  emptyState: "py-16 text-center flex flex-col items-center justify-center gap-3",
  emptyTitle: "font-heading font-semibold text-xl text-brand-gray-950",
  emptySubtitle: "font-satoshi text-base text-brand-gray-700 max-w-md",
  resetButton: cn(
    "mt-4 px-6 py-2.5 rounded-full bg-brand-blue text-white",
    "font-satoshi font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer"
  ),
  paginationRow: "flex items-center justify-center gap-6",
  pageArrowButton: cn(
    "flex items-center justify-center px-4 py-3",
    "rounded-[1.5rem] border border-brand-gray-200 bg-white",
    "hover:bg-brand-gray-50 disabled:opacity-40",
    "transition-colors cursor-pointer"
  ),
  arrowIcon: "w-6 h-6 text-brand-gray-700",
  pageNumbers: "flex items-center gap-4 sm:gap-6",
  pageNumber: cn(
    "font-heading font-semibold text-[1.25rem]",
    "leading-[1.75rem] tracking-[-0.01em] transition-colors cursor-pointer"
  ),
  pageNumberActive: "text-brand-gray-200",
  pageNumberInactive: "text-brand-gray-950 hover:text-brand-blue",
  suspenseFallback: "min-h-screen bg-white py-20 text-center text-brand-gray-400 font-satoshi",
};
