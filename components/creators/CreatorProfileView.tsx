"use client";

import { useState, useMemo } from "react";
import type { Instructor, Course } from "@/lib/data";
import { CreatorHero } from "./CreatorHero";
import { CreatorFilterBar } from "./CreatorFilterBar";
import { CreatorCourseGrid } from "./CreatorCourseGrid";
import { cn } from "@/lib/utils";

interface CreatorProfileViewProps {
  creator: Instructor;
  courses: Course[];
}

export function CreatorProfileView({
  creator,
  courses,
}: CreatorProfileViewProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("relevant");

  const creatorCourses = useMemo(() => {
    return courses.filter(
      (c) =>
        c.instructor.id === creator.id ||
        c.instructor.name.toLowerCase() === creator.name.toLowerCase() ||
        c.instructor.handle === creator.handle
    );
  }, [courses, creator]);

  const levels = useMemo(() => {
    return Array.from(new Set(creatorCourses.map((c) => c.level))).filter(
      Boolean
    );
  }, [creatorCourses]);

  const categories = useMemo(() => {
    return Array.from(new Set(creatorCourses.map((c) => c.category))).filter(
      Boolean
    );
  }, [creatorCourses]);

  const filteredCourses = useMemo(() => {
    let result = [...creatorCourses];

    if (selectedLevel !== "All") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    if (selectedCategory !== "All") {
      result = result.filter((c) => c.category === selectedCategory);
    }

    if (sortBy === "popular") {
      result.sort((a, b) => b.studentsCount - a.studentsCount);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
      result.reverse();
    }

    return result;
  }, [creatorCourses, selectedLevel, selectedCategory, sortBy]);

  return (
    <div className={styles.page}>
      <CreatorHero
        creator={creator}
        coursesCount={creatorCourses.length}
      />

      <section className={styles.catalogSection}>
        <div className={styles.catalogContainer}>
          <CreatorFilterBar
            selectedLevel={selectedLevel}
            onLevelChange={setSelectedLevel}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            levels={levels}
            categories={categories}
          />

          <CreatorCourseGrid courses={filteredCourses} />
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: cn(
    "w-full min-h-screen bg-white"
  ),
  catalogSection: cn(
    "w-full bg-white py-[3.875rem]"
  ),
  catalogContainer: cn(
    "mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8",
    "flex flex-col gap-10"
  ),
};
