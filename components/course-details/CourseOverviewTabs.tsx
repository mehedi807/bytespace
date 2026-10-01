"use client";

import { cn } from "@/lib/utils";

export type CourseTab = "about" | "lessons" | "reviews";

interface CourseOverviewTabsProps {
  activeTab: CourseTab;
  onTabChange: (tab: CourseTab) => void;
}

export default function CourseOverviewTabs({
  activeTab,
  onTabChange,
}: CourseOverviewTabsProps) {
  const tabs: { key: CourseTab; label: string }[] = [
    { key: "about", label: "About" },
    { key: "lessons", label: "Lessons" },
    { key: "reviews", label: "Reviews" },
  ];

  return (
    <div className={styles.tabsWrapper}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={cn(
              styles.tabButton.base,
              isActive ? styles.tabButton.active : styles.tabButton.inactive
            )}
            type="button"
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

const styles = {
  tabsWrapper: "flex items-center gap-4 mb-10 overflow-x-auto scrollbar-none",
  tabButton: {
    base: cn(
      "px-4 py-3 rounded-[1.5rem] font-satoshi",
      "text-base font-medium leading-[1.2em]",
      "whitespace-nowrap transition-colors cursor-pointer"
    ),
    active: "bg-brand-lime text-brand-gray-950 shadow-xs",
    inactive: "bg-brand-gray-50 text-brand-gray-700 hover:text-brand-gray-950 hover:bg-brand-gray-100",
  },
};
