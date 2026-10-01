import type { Course } from "@/lib/data";
import CourseCard from "@/components/ui/CourseCard";
import { cn } from "@/lib/utils";

interface CatalogGridProps {
  courses: Course[];
}

export default function CatalogGrid({ courses }: CatalogGridProps) {
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
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "gap-6 sm:gap-8 lg:gap-10 justify-items-center",
    "w-full max-w-[75rem] mx-auto"
  ),
};
