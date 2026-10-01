"use client";

import { useState } from "react";
import {
  FilterIcon,
  LevelBarsIcon,
  GridCategoryIcon,
  SortListIcon,
} from "@/utils/icons";
import { cn } from "@/lib/utils";

interface SortOption {
  label: string;
  value: string;
}

interface CourseFilterBarProps {
  selectedLevel: string;
  onLevelChange: (level: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onResetFilters: () => void;
  levelOptions: string[];
  sortOptions: SortOption[];
}

export default function CourseFilterBar({
  selectedLevel,
  onLevelChange,
  sortBy,
  onSortChange,
  onResetFilters,
  levelOptions,
  sortOptions,
}: CourseFilterBarProps) {
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  return (
    <div className={styles.controlsRow}>
      <div className={styles.controlsGroup}>
        <button
          onClick={onResetFilters}
          className={styles.controlButton}
          type="button"
        >
          <FilterIcon className={styles.controlIcon} />
          <span>Filter</span>
        </button>

        <div className={styles.dropdownRelative}>
          <button
            onClick={() => {
              setShowLevelMenu(!showLevelMenu);
              setShowSortMenu(false);
            }}
            className={cn(
              styles.controlButton,
              selectedLevel !== "All Levels" && styles.controlButtonActive
            )}
            type="button"
          >
            <LevelBarsIcon className={styles.controlIcon} />
            <span>{selectedLevel === "All Levels" ? "Level" : selectedLevel}</span>
          </button>

          {showLevelMenu && (
            <div className={styles.dropdownMenu}>
              {levelOptions.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => {
                    onLevelChange(lvl);
                    setShowLevelMenu(false);
                  }}
                  className={cn(
                    styles.dropdownItem,
                    selectedLevel === lvl && styles.dropdownItemActive
                  )}
                  type="button"
                >
                  {lvl}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={onResetFilters}
          className={styles.controlButton}
          type="button"
        >
          <GridCategoryIcon className={styles.controlIcon} />
          <span>Category</span>
        </button>
      </div>

      <div className={styles.dropdownRelative}>
        <button
          onClick={() => {
            setShowSortMenu(!showSortMenu);
            setShowLevelMenu(false);
          }}
          className={styles.controlButton}
          type="button"
        >
          <SortListIcon className={styles.controlIcon} />
          <span>
            {sortOptions.find((o) => o.value === sortBy)?.label || "Most relevant"}
          </span>
        </button>

        {showSortMenu && (
          <div className={styles.dropdownMenuRight}>
            {sortOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  onSortChange(opt.value);
                  setShowSortMenu(false);
                }}
                className={cn(
                  styles.dropdownItem,
                  sortBy === opt.value && styles.dropdownItemActive
                )}
                type="button"
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  controlsRow: cn(
    "flex flex-wrap items-center justify-between",
    "gap-4 mb-8 sm:mb-10"
  ),
  controlsGroup: "flex items-center gap-3 sm:gap-4 flex-wrap",
  controlButton: cn(
    "flex items-center gap-1 px-4 py-3",
    "rounded-[1.5rem] border border-brand-gray-200 bg-white",
    "font-satoshi font-medium text-base text-brand-gray-700",
    "hover:border-brand-gray-300 hover:text-brand-gray-950",
    "transition-colors cursor-pointer"
  ),
  controlButtonActive: "border-brand-blue text-brand-blue bg-blue-50/50",
  controlIcon: "w-6 h-6 shrink-0",
  dropdownRelative: "relative",
  dropdownMenu: cn(
    "absolute left-0 top-full mt-2 w-48 bg-white",
    "rounded-[1rem] border border-brand-gray-200 shadow-xl",
    "py-2 z-30 flex flex-col"
  ),
  dropdownMenuRight: cn(
    "absolute right-0 top-full mt-2 w-52 bg-white",
    "rounded-[1rem] border border-brand-gray-200 shadow-xl",
    "py-2 z-30 flex flex-col"
  ),
  dropdownItem: cn(
    "w-full text-left px-4 py-2.5 font-satoshi",
    "text-sm text-brand-gray-700 hover:bg-brand-gray-50",
    "hover:text-brand-gray-950 transition-colors"
  ),
  dropdownItemActive: "font-semibold text-brand-blue bg-blue-50/40",
};
