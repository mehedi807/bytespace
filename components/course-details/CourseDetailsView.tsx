"use client";

import { useState } from "react";
import type { Course } from "@/lib/data";
import CourseDetailsHero from "@/components/course-details/CourseDetailsHero";
import CourseVideoPreview from "@/components/course-details/CourseVideoPreview";
import CourseEnrollSidebar from "@/components/course-details/CourseEnrollSidebar";
import CourseOverviewTabs, { type CourseTab } from "@/components/course-details/CourseOverviewTabs";
import CourseSneakPeak from "@/components/course-details/CourseSneakPeak";
import CourseKeyPoints from "@/components/course-details/CourseKeyPoints";
import CourseLessonsList from "@/components/course-details/CourseLessonsList";
import CourseReviewsList from "@/components/course-details/CourseReviewsList";
import { cn } from "@/lib/utils";

interface CourseDetailsViewProps {
  course: Course;
  initialTab?: CourseTab;
}

export default function CourseDetailsView({
  course,
  initialTab = "about",
}: CourseDetailsViewProps) {
  const [activeTab, setActiveTab] = useState<CourseTab>(initialTab);

  const descriptionParagraphs = course.fullDescription
    ? course.fullDescription.split("\n\n").filter(Boolean)
    : [course.description];

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Persistent Hero Header */}
      <CourseDetailsHero course={course} />

      {/* 2. Main Body Grid */}
      <div className={styles.mainContainer}>
        <div className={styles.mainGrid}>
          {/* Left Column (Persistent Video Preview + Dynamic Tabs Content) */}
          <div className={styles.leftColumn}>
            {/* Persistent Video Player */}
            <CourseVideoPreview
              previewImage={course.videoPreviewImage || course.image}
              courseTitle={course.title}
            />

            {/* Client-Side Sub-Navigation Tabs */}
            <CourseOverviewTabs
              activeTab={activeTab}
              onTabChange={(tab) => setActiveTab(tab)}
            />

            {/* Tab 1: About Content */}
            {activeTab === "about" && (
              <div className={styles.tabContentFade}>
                <section className={styles.sectionGroup}>
                  <h2 className={styles.sectionHeading}>Description</h2>
                  <div className={styles.descriptionContent}>
                    {descriptionParagraphs.map((para, idx) => (
                      <p key={idx} className={styles.paragraph}>
                        {para}
                      </p>
                    ))}
                  </div>
                </section>

                <CourseSneakPeak />
                <CourseKeyPoints points={course.keyPoints} />
              </div>
            )}

            {/* Tab 2: Lessons Content */}
            {activeTab === "lessons" && (
              <div className={styles.tabContentFade}>
                <CourseLessonsList modules={course.modules} />
              </div>
            )}

            {/* Tab 3: Reviews Content */}
            {activeTab === "reviews" && (
              <div className={styles.tabContentFade}>
                <CourseReviewsList
                  reviews={course.reviews}
                  averageRating={course.rating}
                />
              </div>
            )}
          </div>

          {/* Right Floating Sidebar (Persistent with 0 remounts) */}
          <div className={styles.rightColumn}>
            <CourseEnrollSidebar
              course={course}
              onViewLessons={() => setActiveTab("lessons")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: "w-full bg-white pb-[6.25rem]",
  mainContainer: "max-w-[75rem] mx-auto px-6 lg:px-0 pt-10 sm:pt-12",
  mainGrid: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start",
  leftColumn: "lg:col-span-7 xl:col-span-8 flex flex-col gap-10",
  rightColumn: "lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end",
  tabContentFade: "flex flex-col gap-10 animate-in fade-in-50 duration-200",
  sectionGroup: "flex flex-col gap-4",
  sectionHeading: cn(
    "font-heading font-semibold text-brand-gray-950 tracking-[-0.01em]",
    "text-[1.25rem] leading-[1.2em]"
  ),
  descriptionContent: "flex flex-col gap-4",
  paragraph: "font-satoshi text-base text-brand-gray-700 leading-[1.6em]",
};
