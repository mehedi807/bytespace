"use client";

import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/data";
import {
  SourceIcon,
  VideocamIcon,
  CertificateBadgeIcon,
  ConsultationIcon,
} from "@/utils/icons";
import { cn } from "@/lib/utils";

interface CourseEnrollSidebarProps {
  course: Course;
  onViewLessons?: () => void;
}

export default function CourseEnrollSidebar({
  course,
  onViewLessons,
}: CourseEnrollSidebarProps) {
  return (
    <aside className={styles.sidebarCard}>
      {/* 1. Curriculum Overview */}
      <div className={styles.sectionGroup}>
        <h3 className={styles.sectionHeading}>
          {course.totalLessons > 0 ? `${course.totalLessons} Lessons` : "112 Lessons"} ({course.duration})
        </h3>

        <div className={styles.curriculumList}>
          <div className={styles.lessonItem}>
            <div className={styles.lessonTitleGroup}>
              <span className={styles.lessonNum}>01</span>
              <span className={styles.lessonName}>Introduction to Digital Assets</span>
            </div>
            <span className={styles.lessonDuration}>12 mins</span>
          </div>

          <div className={styles.lessonItem}>
            <div className={styles.lessonTitleGroup}>
              <span className={styles.lessonNum}>02</span>
              <span className={styles.lessonName}>Design Principles for Impacts</span>
            </div>
            <span className={styles.lessonDuration}>21 mins</span>
          </div>

          <div className={styles.lessonItem}>
            <div className={styles.lessonTitleGroup}>
              <span className={styles.lessonNum}>03</span>
              <span className={styles.lessonName}>Advanced Techniques in Digital Creation</span>
            </div>
            <span className={styles.lessonDuration}>16 mins</span>
          </div>

          <button
            onClick={onViewLessons}
            className={styles.moreVideosLink}
            type="button"
          >
            99 more videos
          </button>
        </div>
      </div>

      {/* 2. CTA & Pricing */}
      <div className={styles.sectionGroup}>
        <p className={styles.enrollCtaText}>
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className={styles.priceRow}>
          <span className={styles.priceValue}>${course.price}</span>
          <span className={styles.priceSuffix}>/lifetime</span>
        </div>

        <button
          onClick={() => {}}
          className={styles.enrollButton}
          type="button"
        >
          Enroll Now
        </button>
      </div>

      {/* 3. This course include */}
      <div className={styles.sectionGroup}>
        <h4 className={styles.includeHeading}>This course include</h4>
        <div className={styles.includeList}>
          <div className={styles.includeItem}>
            <SourceIcon className={styles.includeIcon} />
            <span className={styles.includeText}>Learning Resources</span>
          </div>
          <div className={styles.includeItem}>
            <VideocamIcon className={styles.includeIcon} />
            <span className={styles.includeText}>Quality Lesson Videos</span>
          </div>
          <div className={styles.includeItem}>
            <CertificateBadgeIcon className={styles.includeIcon} />
            <span className={styles.includeText}>Certificate of Completion</span>
          </div>
          <div className={styles.includeItem}>
            <ConsultationIcon className={styles.includeIcon} />
            <span className={styles.includeText}>Private Consultation</span>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      {/* 4. Instructor Bio Box */}
      <div className={styles.instructorBox}>
        <div className={styles.instructorHeader}>
          <div className={styles.avatarWrapper}>
            <Image
              src={course.instructor.avatar}
              alt={course.instructor.name}
              fill
              className={styles.avatarImage}
            />
          </div>
          <div className={styles.instructorNames}>
            <h4 className={styles.instructorTitle}>{course.instructor.name}</h4>
            <span className={styles.instructorSubtitle}>Professional Creator</span>
          </div>
        </div>

        <p className={styles.instructorBioText}>
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link
          href={`/creators/${course.instructor.id}`}
          className={styles.profileButton}
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}

const styles = {
  sidebarCard: cn(
    "w-full max-w-[25.75rem] bg-white",
    "rounded-[1.5rem] border border-brand-gray-200",
    "p-8 sm:p-10 flex flex-col gap-6 shadow-xl"
  ),
  sectionGroup: "flex flex-col gap-4",
  sectionHeading: cn(
    "font-heading font-semibold text-brand-gray-950 tracking-[-0.01em]",
    "text-[1.25rem] leading-[1.2em]"
  ),
  curriculumList: "flex flex-col gap-3",
  lessonItem: "flex items-center justify-between gap-4",
  lessonTitleGroup: "flex items-center gap-2 min-w-0",
  lessonNum: "font-satoshi text-base font-medium text-brand-gray-950 w-6 shrink-0",
  lessonName: "font-satoshi text-base font-medium text-brand-gray-950 truncate",
  lessonDuration: "font-satoshi text-base text-brand-blue shrink-0",
  moreVideosLink: "font-satoshi text-base text-brand-gray-700 hover:text-brand-blue pt-1 text-left cursor-pointer",
  enrollCtaText: "font-satoshi text-base text-brand-gray-700 leading-[1.6em]",
  priceRow: "flex items-baseline gap-1 pt-1",
  priceValue: cn(
    "font-heading font-semibold text-brand-blue",
    "text-[2.25rem] leading-[1.2em]"
  ),
  priceSuffix: "font-satoshi text-base text-brand-gray-700 leading-[1.6em]",
  enrollButton: cn(
    "w-full py-3 rounded-[1.5rem] bg-brand-lime text-brand-gray-950",
    "font-satoshi font-medium text-lg text-center cursor-pointer",
    "hover:opacity-90 transition-opacity"
  ),
  includeHeading: cn(
    "font-heading font-semibold text-brand-gray-950 tracking-[-0.01em]",
    "text-[1.25rem] leading-[1.2em]"
  ),
  includeList: "flex flex-col gap-3",
  includeItem: "flex items-center gap-3",
  includeIcon: "w-6 h-6 text-brand-gray-700 shrink-0",
  includeText: "font-satoshi text-base text-brand-gray-700 leading-[1.6em]",
  divider: "w-full h-px bg-brand-gray-200 my-1",
  instructorBox: "flex flex-col gap-4",
  instructorHeader: "flex items-center gap-3",
  avatarWrapper: "relative w-[3.25rem] h-[3.25rem] rounded-full overflow-hidden shrink-0",
  avatarImage: "object-cover",
  instructorNames: "flex flex-col",
  instructorTitle: "font-satoshi font-medium text-lg text-brand-gray-950",
  instructorSubtitle: "font-satoshi text-base text-brand-gray-700 leading-[1.6em]",
  instructorBioText: "font-satoshi text-base text-brand-gray-700 leading-[1.6em]",
  profileButton: cn(
    "w-fit px-4 py-2 rounded-[1.5rem] border border-brand-gray-200",
    "font-satoshi font-medium text-base text-brand-gray-700",
    "hover:bg-brand-gray-50 hover:text-brand-gray-950 transition-colors"
  ),
};
