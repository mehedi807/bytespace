"use client";

import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/data";
import {
  LevelBarsIcon,
  StarIcon,
  PeopleIcon,
  ShareIcon,
} from "@/utils/icons";
import { cn } from "@/lib/utils";

interface CourseDetailsHeroProps {
  course: Course;
}

export default function CourseDetailsHero({ course }: CourseDetailsHeroProps) {
  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: course.title,
        url: window.location.href,
      }).catch(() => {});
    }
  };

  return (
    <section className={styles.heroBanner}>
      <div className={styles.gridPatternWrapper}>
        <Image
          src="/images/hero_grid_pattern.svg"
          alt=""
          fill
          className={styles.imageCover}
          priority
        />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.titleGroup}>
          <h1 className={styles.heroTitle}>
            {course.title}: A Comprehensive Guide
          </h1>
          <p className={styles.heroSubtitle}>
            {course.subtitle}
          </p>
          <p className={styles.instructorText}>
            by{" "}
            <Link
              href={`/creators/${course.instructor.id}`}
              className={styles.instructorLink}
            >
              {course.instructor.name.toLowerCase()}
            </Link>
          </p>
        </div>

        <div className={styles.metaRow}>
          <div className={styles.metaBadges}>
            <div className={styles.glassBadge}>
              <LevelBarsIcon className={styles.badgeIcon} />
              <span>{course.level}</span>
            </div>

            <div className={styles.glassBadge}>
              <StarIcon className={styles.starIcon} />
              <span>{course.rating.toFixed(1)} ({course.reviewCount} reviews)</span>
            </div>

            <div className={styles.glassBadge}>
              <PeopleIcon className={styles.badgeIcon} />
              <span>{course.studentsCount} Students</span>
            </div>
          </div>

          <button
            onClick={handleShare}
            className={styles.shareButton}
            type="button"
          >
            <ShareIcon className={styles.shareIcon} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  heroBanner: cn(
    "relative w-full overflow-hidden bg-brand-blue",
    "pt-6 pb-12 sm:pt-8 sm:pb-16 text-brand-gray-50"
  ),
  gridPatternWrapper: "absolute inset-0 pointer-events-none opacity-12",
  imageCover: "object-cover",
  heroContent: cn(
    "relative z-10 max-w-[75rem] mx-auto",
    "px-6 lg:px-0 flex flex-col gap-6"
  ),
  titleGroup: "flex flex-col gap-2 max-w-[45rem]",
  heroTitle: cn(
    "font-heading font-semibold text-brand-gray-50 tracking-[-0.01em]",
    "text-[2rem] sm:text-[2.25rem] leading-[1.2em]"
  ),
  heroSubtitle: cn(
    "font-heading font-semibold text-brand-gray-50 tracking-[-0.01em]",
    "text-[1.125rem] sm:text-[1.25rem] leading-[1.2em]"
  ),
  instructorText: "font-satoshi text-lg text-[#F1F4FE] font-medium",
  instructorLink: "text-brand-lime hover:underline transition-colors",
  metaRow: "flex flex-wrap items-center justify-between gap-4 pt-2",
  metaBadges: "flex flex-wrap items-center gap-3 sm:gap-4",
  glassBadge: cn(
    "flex items-center gap-2 px-6 py-2",
    "rounded-[1.5rem] bg-white text-brand-gray-950",
    "font-satoshi font-medium text-base shadow-xs backdrop-blur-[20px]"
  ),
  badgeIcon: "w-6 h-6 text-brand-gray-950 shrink-0",
  starIcon: "w-6 h-6 text-brand-gray-950 shrink-0 fill-current",
  shareButton: cn(
    "flex items-center gap-2 px-6 py-2",
    "rounded-[1.5rem] bg-brand-lime text-brand-gray-950",
    "font-satoshi font-medium text-base cursor-pointer",
    "hover:opacity-90 transition-opacity"
  ),
  shareIcon: "w-6 h-6 text-brand-gray-950 shrink-0",
};
