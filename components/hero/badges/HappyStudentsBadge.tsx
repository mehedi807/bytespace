import Image from "next/image";
import { StarIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";

export default function HappyStudentsBadge() {
  const avatarImages = [
    "/images/hero_avatar_1.png",
    "/images/hero_avatar_2.png",
    "/images/hero_avatar_3.png",
    "/images/hero_avatar_4.png",
    "/images/hero_avatar_5.png",
    "/images/hero_avatar_6.png",
    "/images/hero_avatar_7.png",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <span className={styles.title}>
          Happy Students
        </span>
        <div className={styles.ratingRow}>
          <span className={styles.ratingText}>
            <strong className={styles.ratingStrong}>4.5</strong>{" "}
            <span className={styles.ratingCount}>(240)</span>
          </span>
          <StarIcon className={styles.starIcon} />
        </div>
      </div>
      <div className={styles.avatarStack}>
        {avatarImages.map((src, i) => (
          <div key={i} className={styles.avatarWrapper}>
            <Image
              src={src}
              alt="Student"
              width={43}
              height={43}
              className={styles.avatarImage}
              priority
            />
          </div>
        ))}
        <div className={styles.countBadge}>
          2K+
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: cn(
    "flex absolute z-20 bg-white",
    "rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4",
    "shadow-2xl flex-col gap-0.5 sm:gap-1 lg:gap-2",
    "w-[9.375rem] min-[400px]:w-[10.9375rem] min-[440px]:w-[12.1875rem]",
    "sm:w-[14.375rem] lg:w-[16.125rem]",
    "pointer-events-auto border border-white/40 backdrop-blur-md",
    "left-2 min-[440px]:left-4",
    "sm:left-[calc(50%-20.625rem)] lg:left-[calc(50%-24.5rem)]",
    "bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-auto lg:top-[44.8125rem]"
  ),
  headerRow: "flex items-center justify-between",
  title: cn(
    "font-satoshi font-medium text-brand-gray-950 leading-[1.2em]",
    "text-[0.6875rem] min-[440px]:text-[0.75rem]",
    "sm:text-[0.875rem] lg:text-[1rem]"
  ),
  ratingRow: "flex items-center gap-0.5 sm:gap-1",
  ratingText: cn(
    "font-satoshi font-normal text-brand-gray-950",
    "text-[0.5625rem] min-[440px]:text-[0.625rem]",
    "sm:text-[0.6875rem] lg:text-[0.75rem]"
  ),
  ratingStrong: "font-bold",
  ratingCount: "text-brand-gray-400",
  starIcon: "w-2.5 sm:w-3.5 lg:w-4 h-2.5 sm:h-3.5 lg:h-4 text-brand-lime",
  avatarStack: cn(
    "flex items-center pt-0.5 sm:pt-1",
    "-space-x-2 min-[440px]:-space-x-2.5",
    "sm:-space-x-3.5 lg:-space-x-4"
  ),
  avatarWrapper: cn(
    "relative rounded-full border-2 border-white",
    "overflow-hidden shrink-0",
    "w-5 min-[400px]:w-6 min-[440px]:w-7 sm:w-9 lg:w-[2.6875rem]",
    "h-5 min-[400px]:h-6 min-[440px]:h-7 sm:h-9 lg:h-[2.6875rem]"
  ),
  avatarImage: "w-full h-full object-cover",
  countBadge: cn(
    "relative rounded-full bg-brand-lime text-brand-gray-950",
    "flex items-center justify-center font-satoshi font-bold",
    "text-[0.5rem] min-[400px]:text-[0.5625rem] min-[440px]:text-[0.625rem]",
    "sm:text-[0.6875rem] lg:text-[0.75rem] border-2 border-white shrink-0",
    "w-5 min-[400px]:w-6 min-[440px]:w-7 sm:w-9 lg:w-[2.6875rem]",
    "h-5 min-[400px]:h-6 min-[440px]:h-7 sm:h-9 lg:h-[2.6875rem]"
  ),
};
