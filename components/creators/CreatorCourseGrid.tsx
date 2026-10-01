"use client";

import type { Course } from "@/lib/data";
import CourseCard from "@/components/ui/CourseCard";
import { cn } from "@/lib/utils";

interface CreatorCourseGridProps {
  courses: Course[];
}

export function CreatorCourseGrid({ courses }: CreatorCourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h3 className={styles.emptyTitle}>No courses found</h3>
        <p className={styles.emptySubtitle}>
          Try adjusting your filter or search criteria to view available
          courses.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

const styles = {
  grid: cn(
    "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "gap-10"
  ),
  emptyContainer: cn(
    "w-full py-20 flex flex-col items-center justify-center text-center",
    "bg-brand-gray-50 rounded-[1.5rem] border border-brand-gray-200 my-8"
  ),
  emptyTitle: cn(
    "font-poppins font-semibold text-[1.5rem] text-brand-dark mb-2"
  ),
  emptySubtitle: cn(
    "font-satoshi text-[1rem] text-brand-gray-700 max-w-md"
  ),
};
