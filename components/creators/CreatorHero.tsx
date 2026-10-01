"use client";

import Image from "next/image";
import { useState } from "react";
import type { Instructor } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CreatorHeroProps {
  creator: Instructor;
  coursesCount: number;
}

export function CreatorHero({ creator, coursesCount }: CreatorHeroProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  const productsCount = creator.stats?.courses ?? coursesCount ?? 3;
  const followersCount = creator.stats?.followers ?? 12;

  return (
    <section className={styles.section}>
      <div className={styles.gridPattern}>
        <img
          src="/images/hero_grid_pattern.svg"
          alt=""
          className={styles.imageCover}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.profileBlock}>
          <div className={styles.profileRow}>
            <div className={styles.avatarWrapper}>
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={96}
                height={96}
                className={styles.avatarImg}
                priority
              />
            </div>

            <div className={styles.infoCol}>
              <div className={styles.nameRow}>
                <h1 className={styles.name}>{creator.name}</h1>
                <span className={styles.creatorBadge}>Creator</span>
              </div>
              <p className={styles.headline}>{creator.role}</p>
            </div>
          </div>

          <div className={styles.bioWrapper}>
            <p className={styles.bioText}>{creator.bio}</p>
          </div>
        </div>

        <div className={styles.actionsBar}>
          <div className={styles.statsGroup}>
            <div className={styles.statPill}>
              <span className={styles.statCount}>{productsCount}</span>
              <span className={styles.statLabel}>Products</span>
            </div>

            <div className={styles.statPill}>
              <span className={styles.statCount}>{followersCount}</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsFollowing(!isFollowing)}
            className={cn(
              styles.followBtn,
              isFollowing && styles.followBtnActive
            )}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: cn(
    "relative w-full bg-brand-blue overflow-hidden",
    "pt-[10.75rem] pb-[3.875rem] text-brand-gray-50"
  ),
  gridPattern: "absolute inset-0 pointer-events-none z-0",
  imageCover: "w-full h-full object-cover object-top",
  container: cn(
    "relative z-10 mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8",
    "flex flex-col gap-10"
  ),
  profileBlock: cn(
    "flex flex-col gap-10 max-w-[74.8125rem]"
  ),
  profileRow: cn(
    "flex flex-row items-center gap-6"
  ),
  avatarWrapper: cn(
    "relative w-24 h-24 rounded-[1.5rem] overflow-hidden",
    "bg-white/10 shrink-0 border border-white/20 shadow-md"
  ),
  avatarImg: cn(
    "w-full h-full object-cover"
  ),
  infoCol: cn(
    "flex flex-col gap-2"
  ),
  nameRow: cn(
    "flex items-center gap-2 flex-wrap"
  ),
  name: cn(
    "font-poppins font-semibold text-[2.25rem] leading-[1.2em] -tracking-[0.01em] text-brand-gray-50"
  ),
  creatorBadge: cn(
    "inline-flex items-center justify-center",
    "px-6 py-2 rounded-full",
    "bg-brand-lime text-brand-gray-950",
    "font-satoshi font-medium text-[1rem] leading-[1.2em]",
    "backdrop-blur-[20px]"
  ),
  headline: cn(
    "font-satoshi text-[1.125rem] leading-[1.6em] text-brand-gray-50"
  ),
  bioWrapper: cn(
    "w-full max-w-[74.8125rem]"
  ),
  bioText: cn(
    "font-satoshi text-[1.125rem] leading-[1.6em] text-brand-gray-50",
    "whitespace-pre-line"
  ),
  actionsBar: cn(
    "flex flex-row items-center justify-between",
    "w-full gap-4"
  ),
  statsGroup: cn(
    "flex items-center gap-4 flex-wrap"
  ),
  statPill: cn(
    "inline-flex items-center gap-2",
    "px-6 py-3 rounded-full",
    "bg-white backdrop-blur-[20px]",
    "shadow-sm"
  ),
  statCount: cn(
    "font-satoshi font-medium text-[1.125rem] leading-[1.2em] text-brand-blue"
  ),
  statLabel: cn(
    "font-satoshi font-medium text-[1.125rem] leading-[1.2em] text-brand-gray-950"
  ),
  followBtn: cn(
    "inline-flex items-center justify-center",
    "px-6 py-3 rounded-full",
    "bg-brand-lime text-brand-heading",
    "font-satoshi font-medium text-[1.125rem] leading-[1.2em]",
    "transition-all duration-200 hover:brightness-105 active:scale-95",
    "cursor-pointer shadow-sm shrink-0"
  ),
  followBtnActive: cn(
    "bg-white text-brand-blue shadow-md"
  ),
};
