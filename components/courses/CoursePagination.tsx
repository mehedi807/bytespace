"use client";

import { ArrowBackIosIcon, ArrowForwardIosIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";

interface CoursePaginationProps {
  currentPage: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
}

export default function CoursePagination({
  currentPage,
  totalPages = 5,
  onPageChange,
}: CoursePaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.paginationRow}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={styles.pageArrowButton}
        aria-label="Previous page"
        type="button"
      >
        <ArrowBackIosIcon className={styles.arrowIcon} />
      </button>

      <div className={styles.pageNumbers}>
        {pages.map((pageNum) => {
          const isCurrent = currentPage === pageNum;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={cn(
                styles.pageNumber,
                isCurrent ? styles.pageNumberActive : styles.pageNumberInactive
              )}
              type="button"
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={styles.pageArrowButton}
        aria-label="Next page"
        type="button"
      >
        <ArrowForwardIosIcon className={styles.arrowIcon} />
      </button>
    </div>
  );
}

const styles = {
  paginationRow: "flex items-center justify-center gap-6",
  pageArrowButton: cn(
    "flex items-center justify-center px-4 py-3",
    "rounded-[1.5rem] border border-brand-gray-200 bg-white",
    "hover:bg-brand-gray-50 disabled:opacity-40",
    "transition-colors cursor-pointer"
  ),
  arrowIcon: "w-6 h-6 text-brand-gray-700",
  pageNumbers: "flex items-center gap-4 sm:gap-6",
  pageNumber: cn(
    "font-heading font-semibold text-[1.25rem]",
    "leading-[1.75rem] tracking-[-0.01em] transition-colors cursor-pointer"
  ),
  pageNumberActive: "text-brand-gray-200",
  pageNumberInactive: "text-brand-gray-950 hover:text-brand-blue",
};
