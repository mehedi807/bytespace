"use client";

import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";
import type { CourseReview } from "@/lib/data";

interface CourseReviewsListProps {
  reviews: CourseReview[];
  averageRating?: number;
}

const breakdownBars = [
  { stars: 5, count: 720, percent: 81 },
  { stars: 4, count: 120, percent: 14 },
  { stars: 3, count: 21, percent: 3 },
  { stars: 2, count: 12, percent: 1 },
  { stars: 1, count: 16, percent: 1 },
];

export default function CourseReviewsList({
  reviews,
  averageRating = 4.7,
}: CourseReviewsListProps) {
  const [selectedRating, setSelectedRating] = useState<number | "all">("all");

  const filteredReviews =
    selectedRating === "all"
      ? reviews
      : reviews.filter((r) => r.rating === selectedRating);

  return (
    <div className={styles.sectionWrapper}>
      {/* 1. What Learners Are Saying */}
      <div className={styles.headerGroup}>
        <h2 className={styles.sectionTitle}>What Learners Are Saying</h2>
        <p className={styles.sectionSubtitle}>
          Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>
      </div>

      {/* 2. Rating Breakdown Summary Card matching Figma #60:1294 */}
      <div className={styles.breakdownCard}>
        <div className={styles.scoreBox}>
          <span className={styles.scoreLabel}>Ratings</span>
          <span className={styles.scoreValue}>{averageRating.toFixed(1)}</span>
        </div>

        <div className={styles.barsList}>
          {breakdownBars.map((bar) => (
            <div key={bar.stars} className={styles.barRow}>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ width: `${bar.percent}%` }}
                />
              </div>

              <div className={styles.starIconsRow}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={cn(
                      styles.starIcon,
                      i < bar.stars ? styles.starActive : styles.starInactive
                    )}
                  />
                ))}
              </div>

              <span className={styles.barCount}>{bar.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Individual Reviews Heading & Filter Pills */}
      <div className={styles.filterSection}>
        <h3 className={styles.individualHeading}>Individual Reviews:</h3>

        <div className={styles.ratingFilterRow}>
          <button
            onClick={() => setSelectedRating("all")}
            className={cn(
              styles.filterPill.base,
              selectedRating === "all"
                ? styles.filterPill.active
                : styles.filterPill.inactive
            )}
            type="button"
          >
            All rating
          </button>

          {[5, 4, 3, 2, 1].map((star) => (
            <button
              key={star}
              onClick={() => setSelectedRating(star)}
              className={cn(
                styles.filterPill.base,
                selectedRating === star
                  ? styles.filterPill.active
                  : styles.filterPill.inactive
              )}
              type="button"
            >
              <StarIcon className={styles.filterStarIcon} />
              <span>{star}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Review Cards List matching Figma #60:1373 */}
      <div className={styles.reviewsList}>
        {filteredReviews.map((rev) => (
          <div key={rev.id} className={styles.reviewCard}>
            <div className={styles.reviewTopRow}>
              <div className={styles.authorInfoGroup}>
                <div className={styles.authorAvatar}>
                  <Image
                    src={rev.avatar}
                    alt={rev.author}
                    fill
                    className={styles.avatarImage}
                  />
                </div>
                <div className={styles.authorNames}>
                  <h4 className={styles.authorName}>{rev.author}</h4>
                  <span className={styles.authorRole}>{rev.role}</span>
                </div>
              </div>

              <div className={styles.ratingDateGroup}>
                <div className={styles.cardStars}>
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <StarIcon key={i} className={styles.cardStarIcon} />
                  ))}
                </div>
                <span className={styles.reviewDate}>{rev.date}</span>
              </div>
            </div>

            <p className={styles.reviewComment}>{rev.comment}</p>
          </div>
        ))}
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
  breakdownCard: cn(
    "flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-10",
    "rounded-[1rem] bg-white border border-brand-gray-200",
    "backdrop-blur-[10px] shadow-xs max-w-[45.1875rem]"
  ),
  scoreBox: cn(
    "flex flex-col items-center justify-center p-8 sm:p-10",
    "rounded-[0.5rem] bg-brand-lime text-brand-gray-950 shrink-0"
  ),
  scoreLabel: "font-satoshi font-medium text-sm text-brand-gray-950",
  scoreValue: cn(
    "font-heading font-semibold text-[2.25rem]",
    "leading-[1.2em] text-brand-gray-950"
  ),
  barsList: "flex flex-col gap-2 flex-1 w-full",
  barRow: "flex items-center gap-3 sm:gap-4 w-full",
  barTrack: "flex-1 h-2 rounded-full bg-brand-gray-200 overflow-hidden",
  barFill: "h-full bg-brand-blue rounded-full",
  starIconsRow: "flex items-center gap-0.5 shrink-0",
  starIcon: "w-4 h-4",
  starActive: "text-brand-blue fill-brand-blue",
  starInactive: "text-brand-gray-300",
  barCount: "font-satoshi text-base text-brand-gray-700 w-10 text-right shrink-0",
  filterSection: "flex flex-col gap-4",
  individualHeading: cn(
    "font-heading font-semibold text-brand-gray-950 tracking-[-0.01em]",
    "text-[1.25rem] leading-[1.2em]"
  ),
  ratingFilterRow: "flex items-center gap-3 overflow-x-auto scrollbar-none pb-1",
  filterPill: {
    base: cn(
      "flex items-center gap-1 px-4 py-3 rounded-[1.5rem]",
      "font-satoshi text-base font-medium transition-colors cursor-pointer shrink-0"
    ),
    active: "bg-brand-lime text-brand-gray-950",
    inactive: "bg-brand-gray-50 text-brand-gray-700 hover:text-brand-gray-950 hover:bg-brand-gray-100",
  },
  filterStarIcon: "w-4 h-4 fill-current",
  reviewsList: "flex flex-col gap-6",
  reviewCard: cn(
    "flex flex-col gap-6 p-6 sm:p-10 rounded-[1.5rem]",
    "border border-brand-gray-200 bg-white shadow-xs"
  ),
  reviewTopRow: "flex flex-wrap items-center justify-between gap-4",
  authorInfoGroup: "flex items-center gap-3",
  authorAvatar: "relative w-[3.25rem] h-[3.25rem] rounded-full overflow-hidden shrink-0",
  avatarImage: "object-cover",
  authorNames: "flex flex-col",
  authorName: "font-satoshi font-medium text-lg text-brand-gray-950",
  authorRole: "font-satoshi text-base text-brand-gray-700",
  ratingDateGroup: "flex flex-col sm:items-end gap-1",
  cardStars: "flex items-center gap-1 text-brand-blue",
  cardStarIcon: "w-5 h-5 fill-current",
  reviewDate: "font-satoshi text-base text-brand-gray-700",
  reviewComment: "font-satoshi text-base text-brand-gray-700 leading-[1.6em] max-w-[40.1875rem]",
};
