"use client";

import { useState } from "react";
import { courses } from "@/lib/data";
import CatalogHeader from "@/components/course-catalog/CatalogHeader";
import CatalogFilterPills from "@/components/course-catalog/CatalogFilterPills";
import CatalogGrid from "@/components/course-catalog/CatalogGrid";
import { cn } from "@/lib/utils";

export default function CourseCatalogSection() {
  const [selectedTag, setSelectedTag] = useState("Featured");

  const filteredCourses =
    selectedTag === "Featured"
      ? courses.slice(0, 6)
      : courses.filter(
          (c) =>
            c.category.toLowerCase().includes(selectedTag.toLowerCase()) ||
            c.title.toLowerCase().includes(selectedTag.toLowerCase()) ||
            c.keyPoints.some((kp) =>
              kp.toLowerCase().includes(selectedTag.toLowerCase())
            )
        );

  const displayCourses =
    filteredCourses.length > 0 ? filteredCourses : courses.slice(0, 6);

  return (
    <section id="courses" className={styles.section}>
      <div className={styles.container}>
        <CatalogHeader />
        <CatalogFilterPills
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
        />
        <CatalogGrid courses={displayCourses} />
      </div>
    </section>
  );
}

const styles = {
  section: cn(
    "w-full bg-white",
    "py-16 sm:py-20 lg:py-[4.5rem]"
  ),
  container: cn(
    "w-full max-w-[90rem] mx-auto",
    "px-4 sm:px-6 md:px-10 lg:px-[7.5rem]"
  ),
};
