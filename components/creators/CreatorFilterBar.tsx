"use client";

import { useState, useRef, useEffect } from "react";
import {
  FigmaFilterAltIcon,
  LevelBarsIcon,
  FigmaCategoryIcon,
  FigmaSortIcon,
} from "@/utils/icons";
import { cn } from "@/lib/utils";

interface CreatorFilterBarProps {
  selectedLevel: string;
  onLevelChange: (level: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  levels: string[];
  categories: string[];
}

export function CreatorFilterBar({
  selectedLevel,
  onLevelChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  levels,
  categories,
}: CreatorFilterBarProps) {
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const levelRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        levelRef.current &&
        !levelRef.current.contains(event.target as Node)
      ) {
        setShowLevelMenu(false);
      }
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setShowCategoryMenu(false);
      }
      if (
        sortRef.current &&
        !sortRef.current.contains(event.target as Node)
      ) {
        setShowSortMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sortOptions = [
    { label: "Most relevant", value: "relevant" },
    { label: "Most popular", value: "popular" },
    { label: "Highest rated", value: "rating" },
    { label: "Newest first", value: "newest" },
  ];

  const currentSortLabel =
    sortOptions.find((opt) => opt.value === sortBy)?.label || "Most relevant";

  const handleResetFilters = () => {
    onLevelChange("All");
    onCategoryChange("All");
    setShowLevelMenu(false);
    setShowCategoryMenu(false);
  };

  const isFiltered = selectedLevel !== "All" || selectedCategory !== "All";

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftGroup}>
        <button
          type="button"
          onClick={handleResetFilters}
          className={cn(
            styles.filterPill,
            isFiltered ? styles.filterPillActive : styles.filterPillDefault
          )}
        >
          <FigmaFilterAltIcon className={styles.icon24} />
          <span>Filter</span>
        </button>

        <div ref={levelRef} className={styles.dropdownContainer}>
          <button
            type="button"
            onClick={() => {
              setShowLevelMenu(!showLevelMenu);
              setShowCategoryMenu(false);
              setShowSortMenu(false);
            }}
            className={cn(
              styles.filterPill,
              selectedLevel !== "All"
                ? styles.filterPillActive
                : styles.filterPillDefault
            )}
          >
            <LevelBarsIcon className={styles.icon20} />
            <span>{selectedLevel === "All" ? "Level" : selectedLevel}</span>
          </button>

          {showLevelMenu && (
            <div className={styles.menuDropdown}>
              <button
                type="button"
                onClick={() => {
                  onLevelChange("All");
                  setShowLevelMenu(false);
                }}
                className={cn(
                  styles.menuItem,
                  selectedLevel === "All" && styles.menuItemActive
                )}
              >
                All Levels
              </button>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    onLevelChange(lvl);
                    setShowLevelMenu(false);
                  }}
                  className={cn(
                    styles.menuItem,
                    selectedLevel === lvl && styles.menuItemActive
                  )}
                >
                  {lvl}
                </button>
              ))}
            </div>
          )}
        </div>

        <div ref={categoryRef} className={styles.dropdownContainer}>
          <button
            type="button"
            onClick={() => {
              setShowCategoryMenu(!showCategoryMenu);
              setShowLevelMenu(false);
              setShowSortMenu(false);
            }}
            className={cn(
              styles.filterPill,
              selectedCategory !== "All"
                ? styles.filterPillActive
                : styles.filterPillDefault
            )}
          >
            <FigmaCategoryIcon className={styles.icon24} />
            <span>
              {selectedCategory === "All" ? "Category" : selectedCategory}
            </span>
          </button>

          {showCategoryMenu && (
            <div className={styles.menuDropdown}>
              <button
                type="button"
                onClick={() => {
                  onCategoryChange("All");
                  setShowCategoryMenu(false);
                }}
                className={cn(
                  styles.menuItem,
                  selectedCategory === "All" && styles.menuItemActive
                )}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    onCategoryChange(cat);
                    setShowCategoryMenu(false);
                  }}
                  className={cn(
                    styles.menuItem,
                    selectedCategory === cat && styles.menuItemActive
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div ref={sortRef} className={styles.dropdownContainer}>
        <button
          type="button"
          onClick={() => {
            setShowSortMenu(!showSortMenu);
            setShowLevelMenu(false);
            setShowCategoryMenu(false);
          }}
          className={cn(styles.filterPill, styles.filterPillDefault)}
        >
          <FigmaSortIcon className={styles.icon24} />
          <span>{currentSortLabel}</span>
        </button>

        {showSortMenu && (
          <div className={cn(styles.menuDropdown, "right-0")}>
            {sortOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onSortChange(opt.value);
                  setShowSortMenu(false);
                }}
                className={cn(
                  styles.menuItem,
                  sortBy === opt.value && styles.menuItemActive
                )}
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
  wrapper: cn(
    "w-full flex flex-col md:flex-row items-start md:items-center",
    "justify-between gap-4"
  ),
  leftGroup: cn(
    "flex items-center flex-wrap gap-4"
  ),
  dropdownContainer: cn(
    "relative"
  ),
  filterPill: cn(
    "inline-flex items-center gap-1",
    "px-4 py-3 rounded-full border border-brand-gray-200",
    "font-satoshi font-medium text-[1rem] leading-[1.2em]",
    "transition-all duration-200 cursor-pointer"
  ),
  filterPillDefault: cn(
    "bg-white text-brand-gray-700",
    "hover:border-brand-dark hover:text-brand-dark"
  ),
  filterPillActive: cn(
    "bg-brand-blue text-white border-brand-blue shadow-sm"
  ),
  icon24: cn(
    "w-6 h-6 shrink-0"
  ),
  icon20: cn(
    "w-5 h-5 shrink-0"
  ),
  menuDropdown: cn(
    "absolute top-full mt-2 z-50 min-w-[12rem]",
    "bg-white rounded-[1rem] border border-brand-gray-200",
    "shadow-xl py-2 flex flex-col overflow-hidden",
    "animate-in fade-in zoom-in-95 duration-150"
  ),
  menuItem: cn(
    "w-full px-4 py-2.5 text-left font-satoshi text-[0.9375rem]",
    "text-brand-gray-700 hover:text-brand-dark hover:bg-brand-gray-50",
    "transition-colors duration-150 cursor-pointer"
  ),
  menuItemActive: cn(
    "bg-brand-blue-light text-brand-blue font-medium"
  ),
};
