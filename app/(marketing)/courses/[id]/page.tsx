import { use } from "react";
import { notFound } from "next/navigation";
import { courses } from "@/lib/data";
import CourseDetailsView from "@/components/course-details/CourseDetailsView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CourseDetailsPage({ params }: PageProps) {
  const { id } = use(params);
  const course = courses.find((c) => c.slug === id || c.id === id) || courses[0];

  if (!course) {
    return notFound();
  }

  return <CourseDetailsView course={course} initialTab="about" />;
}
