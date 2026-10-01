"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { courses } from "@/lib/data";
import CourseCard from "@/components/ui/CourseCard";
import CourseSearchHero from "@/components/courses/CourseSearchHero";
import CourseFilterBar from "@/components/courses/CourseFilterBar";
import CourseCategoryTabs from "@/components/courses/CourseCategoryTabs";
import CoursePagination from "@/components/courses/CoursePagination";
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

function SearchParamsListener({
  onParams: handleParams,
}: {
  onParams: (category: string | null, query: string | null) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const cat = searchParams.get("category");
    const q = searchParams.get("q");
    if (cat || q) {
      handleParams(cat, q);
    }
  }, [searchParams, handleParams]);

  return null;
}

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("relevant");
  const [currentPage, setCurrentPage] = useState(1);

  const handleParams = (category: string | null, query: string | null) => {
    if (category) setSelectedCategory(category);
    if (query) setSearchQuery(query);
  };

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
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Featured");
    setSelectedLevel("All Levels");
    setSortBy("relevant");
    setCurrentPage(1);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Silent URL sync with zero render blocking */}
      <Suspense fallback={null}>
        <SearchParamsListener onParams={handleParams} />
      </Suspense>

      <CourseSearchHero
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setCurrentPage(1);
        }}
      />

      <div className={styles.mainContainer}>
        <CourseFilterBar
          selectedLevel={selectedLevel}
          onLevelChange={(lvl) => {
            setSelectedLevel(lvl);
            setCurrentPage(1);
          }}
          sortBy={sortBy}
          onSortChange={(sort) => setSortBy(sort)}
          onResetFilters={handleResetFilters}
          levelOptions={LEVEL_OPTIONS}
          sortOptions={SORT_OPTIONS}
        />

        <CourseCategoryTabs
          categories={CATEGORY_TABS}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage(1);
          }}
        />

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
              onClick={handleResetFilters}
              className={styles.resetButton}
              type="button"
            >
              Reset Filters
            </button>
          </div>
        )}

        <CoursePagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={(p) => setCurrentPage(p)}
        />
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: "w-full bg-white pb-[6.25rem]",
  mainContainer: "max-w-[75rem] mx-auto px-6 lg:px-0 pt-12 sm:pt-[4.5rem]",
  courseGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20",
  emptyState: "py-16 text-center flex flex-col items-center justify-center gap-3",
  emptyTitle: "font-heading font-semibold text-xl text-brand-gray-950",
  emptySubtitle: "font-satoshi text-base text-brand-gray-700 max-w-md",
  resetButton: cn(
    "mt-4 px-6 py-2.5 rounded-full bg-brand-blue text-white",
    "font-satoshi font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer"
  ),
};
