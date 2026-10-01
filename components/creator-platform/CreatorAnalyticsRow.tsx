import Image from "next/image";
import { StarIcon, CheckCircleIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";

const happyStudentAvatars = [
  "/images/hero_avatar_1.png",
  "/images/hero_avatar_2.png",
  "/images/hero_avatar_3.png",
  "/images/hero_avatar_4.png",
  "/images/hero_avatar_5.png",
  "/images/hero_avatar_6.png",
  "/images/hero_avatar_7.png",
];

export default function CreatorAnalyticsRow() {
  const checklistItems = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  return (
    <div className={styles.row}>
      <div className={styles.stageCol}>
        <div className={styles.stageFrame}>
          {/* Layer 1: Creator Cutout Portrait */}
          <div className={styles.creatorImageFrame}>
            <Image
              src="/images/img_34_1011.png"
              alt="ByteSpace Creator"
              fill
              priority={false}
              className="object-contain object-bottom"
            />
          </div>

          {/* Layer 2: 3D Ornament Graphic */}
          <div className={styles.ornament}>
            <Image
              src="/images/img_34_1007.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Layer 3: Total Revenue Badge */}
          <div className={styles.revenueBadgeOne}>
            <div className={styles.badgeHeaderGroup}>
              <span className={styles.revenueBadgeTitle}>Total Revenue</span>
              <span className={styles.revenueBadgeDate}>July 1-28</span>
            </div>
            <div className={styles.revenueAmountRow}>
              <span className={styles.revenueAmount}>$120.29</span>
              <span className={styles.gainPill}>+12$</span>
            </div>
            <div className={styles.revenueMiniTrack}>
              <div className={styles.revenueMiniFill} />
            </div>
          </div>

          {/* Layer 4: Year to Date Badge */}
          <div className={styles.revenueBadgeTwo}>
            <div className={styles.badgeHeaderGroup}>
              <span className={styles.revenueBadgeTitle}>Year to Date</span>
              <span className={styles.revenueBadgeDate}>2023</span>
            </div>
            <div className={styles.revenueAmountRowAlt}>
              <span className={styles.revenueAmount}>$1,200.38</span>
              <span className={styles.gainPill}>+12$</span>
            </div>
          </div>

          {/* Layer 5: Happy Students Badge */}
          <div className={styles.happyStudentsBadge}>
            <div className={styles.happyStudentsHeader}>
              <span className={styles.happyStudentsTitle}>Happy Students</span>
              <div className={styles.happyStudentsRating}>
                <span className={styles.ratingTextBold}>4.5</span>
                <span className={styles.reviewCount}>(240)</span>
                <StarIcon className="w-4 h-4 text-brand-lime" />
              </div>
            </div>

            <div className={styles.avatarOverlapRow}>
              {happyStudentAvatars.map((src, idx) => (
                <div key={idx} className={styles.happyAvatar}>
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
              <div className={styles.happyAvatarPlus}>2K+</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.textCol}>
        <div className={styles.headingBlock}>
          <h2 className={styles.heading}>
            Create & Manage Courses Easily.
          </h2>
          <p className={styles.subtitle}>
            <strong className={styles.brandBold}>ByteSpace</strong>{" "}
            supports individuals or entities in the creation, publication,
            and administration of educational courses.
          </p>
        </div>

        <div className={styles.checklistColumn}>
          {checklistItems.map((item) => (
            <div key={item} className={styles.checklistItem}>
              <CheckCircleIcon className={styles.checkIcon} />
              <span className={styles.checkText}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  row: cn(
    "grid grid-cols-1 lg:grid-cols-12",
    "gap-10 lg:gap-[4.9375rem] items-center"
  ),
  stageCol: cn(
    "lg:col-span-6 relative flex items-center justify-center",
    "w-full order-2 lg:order-1"
  ),
  stageFrame: cn(
    "relative w-full max-w-[33.8125rem]",
    "h-[26rem] min-[420px]:h-[30rem] sm:h-[34rem] lg:h-[37.25rem]"
  ),
  creatorImageFrame: cn(
    "absolute left-[5%] bottom-0 z-10",
    "w-[16rem] min-[420px]:w-[20rem] sm:w-[24rem] lg:w-[27.1875rem]",
    "h-[23rem] min-[420px]:h-[27rem] sm:h-[32rem] lg:h-[37.25rem]"
  ),
  revenueBadgeOne: cn(
    "absolute left-0 top-[7%] z-20",
    "bg-brand-blue text-white rounded-[1rem]",
    "p-3.5 sm:p-4 shadow-xl flex flex-col gap-1.5 sm:gap-2",
    "w-[10.5rem] sm:w-[14.5rem]"
  ),
  badgeHeaderGroup: "flex flex-col leading-tight",
  revenueBadgeTitle: "font-satoshi text-[0.875rem] sm:text-[1rem] font-medium text-brand-gray-50",
  revenueBadgeDate: "font-satoshi text-[0.625rem] text-brand-gray-50/80",
  revenueAmountRow: "flex items-center justify-between gap-2",
  revenueAmountRowAlt: "flex items-center gap-2",
  revenueAmount: "font-heading font-semibold text-[1.25rem] sm:text-[1.5rem] text-white",
  gainPill: cn(
    "px-2 py-0.5 rounded-full bg-[#CBFC01] text-brand-dark",
    "font-satoshi font-medium text-[0.625rem]"
  ),
  revenueMiniTrack: "w-full max-w-[12.5rem] bg-white/20 h-2 rounded-full overflow-hidden",
  revenueMiniFill: "bg-[#CBFC01] h-full w-[65%] rounded-full",
  revenueBadgeTwo: cn(
    "absolute left-0 top-[38%] z-20",
    "bg-brand-blue text-white rounded-[1rem]",
    "p-3.5 sm:p-4 shadow-xl flex flex-col gap-1 sm:gap-1.5",
    "w-[8.375rem]"
  ),
  happyStudentsBadge: cn(
    "absolute right-0 bottom-[8%] z-20",
    "bg-white rounded-[1rem] p-3.5 sm:p-4",
    "shadow-xl border border-brand-gray-200",
    "flex flex-col gap-2 sm:gap-2.5 w-[13.5rem] sm:w-[16.125rem]"
  ),
  happyStudentsHeader: "flex flex-col gap-0.5",
  happyStudentsTitle: "font-satoshi font-medium text-[0.875rem] sm:text-[1rem] text-brand-dark",
  happyStudentsRating: "flex items-center gap-1",
  ratingTextBold: "font-satoshi font-bold text-[0.625rem] text-brand-dark",
  reviewCount: "font-satoshi text-[0.625rem] text-brand-gray-400",
  avatarOverlapRow: "flex items-center -space-x-3 sm:-space-x-4 shrink-0",
  happyAvatar: cn(
    "relative w-7 h-7 sm:w-[2.6875rem] sm:h-[2.6875rem]",
    "rounded-full overflow-hidden border-2 border-white shrink-0"
  ),
  happyAvatarPlus: cn(
    "relative w-7 h-7 sm:w-[2.6875rem] sm:h-[2.6875rem]",
    "rounded-full bg-brand-lime text-brand-dark",
    "flex items-center justify-center font-satoshi font-bold",
    "text-[0.625rem] sm:text-[0.75rem] border-2 border-white shrink-0"
  ),
  ornament: cn(
    "absolute right-2 top-16 z-0",
    "w-28 h-28 sm:w-36 sm:h-36 lg:w-[13.4375rem] lg:h-[13.4375rem]",
    "opacity-90 pointer-events-none"
  ),
  textCol: cn(
    "lg:col-span-6 flex flex-col",
    "gap-8 sm:gap-10 max-w-[36.25rem]",
    "order-1 lg:order-2"
  ),
  headingBlock: "flex flex-col gap-4",
  heading: cn(
    "font-heading font-semibold text-brand-dark",
    "text-[1.75rem] min-[400px]:text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem]",
    "leading-[1.2em] tracking-[-0.01em] max-w-[24.4375rem]"
  ),
  subtitle: cn(
    "font-satoshi text-brand-gray-700",
    "text-base sm:text-[1.125rem] leading-[1.6em] max-w-[35.875rem]"
  ),
  brandBold: "font-bold text-brand-dark",
  checklistColumn: "flex flex-col gap-3.5 sm:gap-4",
  checklistItem: "flex items-center gap-2",
  checkIcon: "w-6 h-6 text-brand-blue shrink-0",
  checkText: cn(
    "font-satoshi font-medium text-[1rem] sm:text-[1.125rem]",
    "leading-[1.2em] text-brand-dark"
  ),
};
