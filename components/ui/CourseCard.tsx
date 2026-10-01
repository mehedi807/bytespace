import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/lib/data";
import { StarIcon, LevelBarsIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
}

const defaultAvatars = [
  "/images/course_avatar_1.png",
  "/images/course_avatar_2.png",
  "/images/course_avatar_3.png",
  "/images/course_avatar_4.png",
];

export default function CourseCard({ course, className }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className={cn(styles.card, className)}
    >
      <div className={styles.thumbnailWrapper}>
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 23.3125rem"
          className={styles.thumbnailImage}
        />
        <div className={styles.overlayBadges}>
          <span className={styles.badge}>
            {course.totalLessons} Lessons
          </span>
          <span className={styles.badge}>
            {course.duration}
          </span>
          <span className={styles.badge}>
            {course.reviewCount} Comments
          </span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.topRow}>
          <div className={styles.titleGroup}>
            <h3 className={styles.title}>
              {course.title}
            </h3>
            <p className={styles.instructor}>
              by{" "}
              <span className={styles.instructorName}>
                {course.instructor.name.toLowerCase()}
              </span>
            </p>
          </div>

          <div className={styles.ratingWrapper}>
            <span className={styles.ratingText}>
              {course.rating.toFixed(1)}
            </span>
            <StarIcon className={styles.starIcon} />
          </div>
        </div>

        <div className={styles.levelRow}>
          <div className={styles.levelBadge}>
            <LevelBarsIcon className={styles.levelIcon} />
            <span className={styles.levelText}>
              {course.level}
            </span>
          </div>

          <div className={styles.avatarStack}>
            {defaultAvatars.map((src, idx) => (
              <div key={idx} className={styles.avatarWrapper}>
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="2rem"
                  className={styles.avatarImage}
                />
              </div>
            ))}
            <div className={styles.avatarCount}>
              26+
            </div>
          </div>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>
            ${course.price}
          </span>
          <span className={styles.priceSuffix}>
            /lifetime
          </span>
        </div>
      </div>
    </Link>
  );
}

const styles = {
  card: cn(
    "group relative flex flex-col w-full",
    "max-w-[23.3125rem] min-h-[23rem] sm:min-h-[24rem] mx-auto",
    "bg-white rounded-[1.5rem] border border-brand-gray-200",
    "p-3.5 sm:p-4 hover:border-brand-blue hover:shadow-lg",
    "transition-all duration-300"
  ),
  thumbnailWrapper: cn(
    "relative w-full aspect-[341/195] sm:h-[12.1875rem]",
    "rounded-[0.75rem] overflow-hidden",
    "bg-brand-gray-950 shrink-0"
  ),
  thumbnailImage: cn(
    "object-cover group-hover:scale-105",
    "transition-transform duration-500"
  ),
  overlayBadges: cn(
    "absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3",
    "flex items-center gap-1.5 sm:gap-2 lg:gap-3 flex-wrap pointer-events-none"
  ),
  badge: cn(
    "px-2 sm:px-3 py-1 sm:py-1.5 rounded-full",
    "bg-[#F6F6F6]/60 backdrop-blur-[4px]",
    "font-satoshi text-[0.6875rem] sm:text-[0.75rem] font-medium leading-[1.2em]",
    "text-brand-gray-800 shadow-xs"
  ),
  content: cn(
    "flex flex-col flex-1 gap-3.5 sm:gap-4",
    "pt-3 sm:pt-4"
  ),
  topRow: cn(
    "flex items-start justify-between",
    "gap-2 w-full"
  ),
  titleGroup: cn(
    "flex flex-col gap-0.5",
    "min-w-0 flex-1"
  ),
  title: cn(
    "font-heading font-semibold text-[1.125rem] sm:text-[1.25rem]",
    "leading-[1.2em] tracking-[-0.01em] text-brand-heading",
    "group-hover:text-brand-blue transition-colors line-clamp-1"
  ),
  instructor: cn(
    "font-satoshi text-[0.75rem]",
    "leading-[1.6em] text-brand-gray-800"
  ),
  instructorName: cn(
    "text-brand-blue font-medium"
  ),
  ratingWrapper: cn(
    "flex items-center gap-1 shrink-0",
    "pt-0.5"
  ),
  ratingText: cn(
    "font-satoshi text-[1rem] sm:text-[1.125rem]",
    "leading-[1.6em] text-brand-gray-800"
  ),
  starIcon: cn(
    "w-5 h-5 sm:w-6 sm:h-6 text-brand-gray-200"
  ),
  levelRow: cn(
    "flex items-center justify-between",
    "gap-2 sm:gap-3 w-full"
  ),
  levelBadge: cn(
    "flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5",
    "rounded-full bg-secondary shrink-0"
  ),
  levelIcon: cn(
    "w-4 h-4 sm:w-5 sm:h-5 text-brand-gray-700"
  ),
  levelText: cn(
    "font-satoshi text-[0.6875rem] sm:text-[0.75rem]",
    "font-medium leading-[1.2em] text-brand-gray-700"
  ),
  avatarStack: cn(
    "flex items-center -space-x-1.5 sm:-space-x-2",
    "shrink-0"
  ),
  avatarWrapper: cn(
    "relative w-7 h-7 sm:w-8 sm:h-8 rounded-full",
    "overflow-hidden shrink-0"
  ),
  avatarImage: "object-cover",
  avatarCount: cn(
    "relative w-7 h-7 sm:w-8 sm:h-8 rounded-full",
    "bg-brand-lime text-brand-dark",
    "flex items-center justify-center font-satoshi",
    "text-[0.6875rem] sm:text-[0.75rem] font-medium leading-[1.2em] shrink-0"
  ),
  priceRow: cn(
    "flex items-baseline gap-0.5",
    "mt-auto pt-1"
  ),
  price: cn(
    "font-heading font-semibold text-[1.125rem] sm:text-[1.25rem]",
    "leading-[1.2em] text-brand-blue"
  ),
  priceSuffix: cn(
    "font-satoshi text-[0.75rem]",
    "leading-[1.6em] text-brand-gray-800"
  ),
};
