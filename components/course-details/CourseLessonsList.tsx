"use client";

import { VideocamIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";
import type { CourseModule } from "@/lib/data";

interface CourseLessonsListProps {
  modules: CourseModule[];
}

export default function CourseLessonsList({ modules }: CourseLessonsListProps) {
  return (
    <div className={styles.sectionWrapper}>
      {/* 1. Explore the Modules */}
      <div className={styles.headerGroup}>
        <h2 className={styles.sectionTitle}>Explore the Modules</h2>
        <p className={styles.sectionSubtitle}>
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
        </p>
      </div>

      {/* 2. Lesson List (6 Figma Modules) */}
      <h3 className={styles.listHeading}>Lesson List</h3>
      <div className={styles.moduleList}>
        {modules.map((module) => (
          <div key={module.id} className={styles.moduleItem}>
            <div className={styles.iconWrapper}>
              <VideocamIcon className={styles.videoIcon} />
            </div>
            <div className={styles.moduleContent}>
              <h4 className={styles.moduleTitle}>
                {module.title.startsWith("Module") ? module.title : `Module ${module.moduleNumber}: ${module.title}`}
              </h4>
              <p className={styles.moduleDescription}>
                {module.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Lesson Content */}
      <div className={styles.headerGroup}>
        <h3 className={styles.sectionTitle}>Lesson Content</h3>
        <p className={styles.sectionSubtitle}>
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      {/* 4. Lesson Progress Tracking */}
      <div className={styles.headerGroup}>
        <h3 className={styles.sectionTitle}>Lesson Progress Tracking</h3>
        <p className={styles.sectionSubtitle}>
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>
      </div>

      {/* 5. Learning Progress Card */}
      <div className={styles.progressCard}>
        <span className={styles.progressLabel}>Learning Progress</span>
        <span className={styles.progressPercent}>55%</span>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: "55%" }} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  sectionWrapper: "flex flex-col gap-8",
  headerGroup: "flex flex-col gap-2",
  sectionTitle: cn(
    "font-heading font-semibold text-brand-gray-950 tracking-[-0.01em]",
    "text-[1.25rem] leading-[1.2em]"
  ),
  sectionSubtitle: "font-satoshi text-base text-brand-gray-700 leading-[1.6em] max-w-[45.1875rem]",
  listHeading: cn(
    "font-heading font-semibold text-brand-gray-950 tracking-[-0.01em]",
    "text-[1.25rem] leading-[1.2em] pt-2"
  ),
  moduleList: "flex flex-col gap-6",
  moduleItem: "flex items-start gap-4",
  iconWrapper: cn(
    "flex items-center justify-center p-4",
    "rounded-[1.5rem] bg-brand-lime text-brand-gray-950 shrink-0"
  ),
  videoIcon: "w-10 h-10",
  moduleContent: "flex flex-col gap-1 max-w-[39.875rem]",
  moduleTitle: "font-satoshi font-medium text-base text-brand-gray-950",
  moduleDescription: "font-satoshi text-base text-brand-gray-700 leading-[1.6em]",
  progressCard: cn(
    "flex flex-col gap-2 p-6 rounded-[1rem] bg-white",
    "border border-brand-gray-200 shadow-xs max-w-[45.1875rem]"
  ),
  progressLabel: "font-satoshi text-sm text-brand-gray-950 font-medium",
  progressPercent: cn(
    "font-heading font-semibold text-[2.25rem]",
    "text-brand-gray-950 leading-[1.2em]"
  ),
  progressTrack: "w-full h-2 rounded-full bg-brand-gray-200 overflow-hidden",
  progressFill: "h-full bg-brand-lime rounded-full transition-all duration-500",
};
