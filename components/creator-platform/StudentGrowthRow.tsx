import Image from "next/image";
import { StarIcon, LevelBarsIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";

const courseCardAvatars = [
  "/images/course_avatar_1.png",
  "/images/course_avatar_2.png",
  "/images/course_avatar_3.png",
  "/images/course_avatar_4.png",
];

export default function StudentGrowthRow() {
  return (
    <div className={styles.row}>
      <div className={styles.textCol}>
        <div className={styles.headingBlock}>
          <h2 className={styles.heading}>
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className={styles.subtitle}>
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you need.
          </p>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>12K</span>
            <span className={styles.statLabel}>Students</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>70+</span>
            <span className={styles.statLabel}>Courses</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>16</span>
            <span className={styles.statLabel}>Creators</span>
          </div>
        </div>
      </div>

      <div className={styles.stageCol}>
        <div className={styles.stageFrame}>
          {/* Layer 1: Floating Course Card */}
          <div className={styles.floatingCard}>
            <div className={styles.cardThumb}>
              <Image
                src="/images/course_thumb_1.png"
                alt="Learn Figma from Basic"
                fill
                sizes="(max-width: 640px) 15rem, 23.3125rem"
                className="object-cover"
              />
              <div className={styles.badgeRow}>
                <span className={styles.miniBadge}>17 Lessons</span>
                <span className={styles.miniBadge}>2 hours 16 mins</span>
                <span className={styles.miniBadge}>59 Comments</span>
              </div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardHeaderRow}>
                <div className={styles.cardTitleGroup}>
                  <h4 className={styles.cardTitle}>
                    Learn Figma from Basic
                  </h4>
                  <p className={styles.cardInstructor}>
                    by{" "}
                    <span className={styles.instructorBlue}>
                      purepearl studio
                    </span>
                  </p>
                </div>
                <div className={styles.cardRating}>
                  <span className={styles.ratingValue}>4.5</span>
                  <StarIcon className={styles.ratingStar} />
                </div>
              </div>

              <div className={styles.cardMetaRow}>
                <div className={styles.levelPill}>
                  <LevelBarsIcon className="w-5 h-5 text-brand-gray-700" />
                  <span className={styles.levelPillText}>Beginner</span>
                </div>

                <div className={styles.miniAvatarStack}>
                  {courseCardAvatars.map((src, idx) => (
                    <div key={idx} className={styles.miniAvatar}>
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  ))}
                  <div className={styles.miniAvatarPlus}>26+</div>
                </div>
              </div>

              <div className={styles.priceRow}>
                <span className={styles.priceVal}>$25</span>
                <span className={styles.pricePeriod}>/lifetime</span>
              </div>
            </div>
          </div>

          {/* Layer 2: 3D Ornament */}
          <div className={styles.ornament}>
            <Image
              src="/images/img_34_982.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Layer 3: Main Student Cutout */}
          <div className={styles.studentImageFrame}>
            <Image
              src="/images/hero_main_student.png"
              alt="Student learning on ByteSpace"
              fill
              priority={false}
              className="object-contain object-bottom"
            />
          </div>

          {/* Layer 4: Floating Learning Progress Badge */}
          <div className={styles.progressBadge}>
            <span className={styles.progressBadgeLabel}>
              Learning Progress
            </span>
            <div className={styles.progressBadgeValue}>55%</div>
            <div className={styles.progressMeterTrack}>
              <div className={styles.progressMeterFill} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  row: cn(
    "grid grid-cols-1 lg:grid-cols-12",
    "gap-10 lg:gap-[3.9375rem] items-center"
  ),
  textCol: cn(
    "lg:col-span-6 flex flex-col",
    "gap-8 sm:gap-10 max-w-[36.0625rem]"
  ),
  headingBlock: "flex flex-col gap-4",
  heading: cn(
    "font-heading font-semibold text-brand-dark",
    "text-[1.75rem] min-[400px]:text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem]",
    "leading-[1.2em] tracking-[-0.01em] max-w-[36.0625rem]"
  ),
  subtitle: cn(
    "font-satoshi text-brand-gray-700",
    "text-base sm:text-[1.125rem] leading-[1.6em] max-w-[29.8125rem]"
  ),
  statsRow: cn(
    "flex items-center gap-8 sm:gap-12 lg:gap-[3.5rem]",
    "pt-2"
  ),
  statItem: "flex flex-col",
  statNumber: cn(
    "font-heading font-medium text-brand-blue",
    "text-[2rem] sm:text-[2.25rem] leading-[1.2em]"
  ),
  statLabel: cn(
    "font-satoshi text-brand-gray-700",
    "text-base sm:text-[1.125rem] leading-[1.6em]"
  ),
  stageCol: cn(
    "lg:col-span-6 relative flex items-center justify-center",
    "w-full"
  ),
  stageFrame: cn(
    "relative w-full max-w-[38.8125rem]",
    "h-[26rem] min-[420px]:h-[30rem] sm:h-[34rem] lg:h-[34.5rem]"
  ),
  floatingCard: cn(
    "absolute left-0 top-0 z-1",
    "w-[14rem] min-[420px]:w-[16rem] sm:w-[19rem] lg:w-[23.3125rem]",
    "bg-white rounded-[1.5rem] border border-brand-gray-200",
    "p-3 sm:p-4 shadow-lg"
  ),
  cardThumb: cn(
    "relative w-full aspect-[341/195]",
    "rounded-[0.75rem] overflow-hidden bg-brand-gray-950 mb-2 sm:mb-3"
  ),
  badgeRow: cn(
    "absolute bottom-1.5 left-1.5 right-1.5",
    "flex items-center gap-1 sm:gap-1.5 flex-wrap pointer-events-none"
  ),
  miniBadge: cn(
    "px-2 py-0.5 rounded-full",
    "bg-[#F6F6F6]/60 backdrop-blur-[4px]",
    "font-satoshi text-[0.625rem] sm:text-[0.75rem] font-medium leading-[1.2em]",
    "text-brand-gray-800"
  ),
  cardBody: "flex flex-col gap-2 sm:gap-2.5",
  cardHeaderRow: "flex items-start justify-between gap-1",
  cardTitleGroup: "flex flex-col min-w-0 flex-1",
  cardTitle: cn(
    "font-heading font-semibold text-[0.875rem] sm:text-[1rem] lg:text-[1.25rem]",
    "leading-[1.2em] tracking-[-0.01em] text-brand-dark line-clamp-1"
  ),
  cardInstructor: "font-satoshi text-[0.6875rem] sm:text-[0.75rem] text-brand-gray-800",
  instructorBlue: "text-brand-blue font-medium",
  cardRating: "flex items-center gap-0.5 shrink-0",
  ratingValue: "font-satoshi text-[0.875rem] sm:text-[1.125rem] text-brand-gray-800 font-medium",
  ratingStar: "w-4 h-4 sm:w-6 sm:h-6 text-brand-gray-200",
  cardMetaRow: "flex items-center justify-between gap-2",
  levelPill: cn(
    "flex items-center gap-1 px-2 sm:px-2.5 py-1",
    "rounded-full bg-secondary shrink-0"
  ),
  levelPillText: "font-satoshi text-[0.6875rem] sm:text-[0.75rem] font-medium text-brand-gray-700",
  miniAvatarStack: "flex items-center -space-x-1.5 shrink-0",
  miniAvatar: "relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0",
  miniAvatarPlus: cn(
    "relative w-6 h-6 sm:w-8 sm:h-8 rounded-full",
    "bg-black text-white",
    "flex items-center justify-center font-satoshi text-[0.625rem] sm:text-[0.75rem] font-medium shrink-0"
  ),
  priceRow: "flex items-baseline gap-0.5 pt-0.5",
  priceVal: "font-heading font-semibold text-[1rem] sm:text-[1.25rem] text-brand-blue",
  pricePeriod: "font-satoshi text-[0.6875rem] sm:text-[0.75rem] text-brand-gray-800",
  studentImageFrame: cn(
    "absolute left-[8%] bottom-0 z-10",
    "w-[18rem] min-[420px]:w-[22rem] sm:w-[28rem] lg:w-[36.0625rem]",
    "h-[22rem] min-[420px]:h-[26rem] sm:h-[30rem] lg:h-[33.75rem]"
  ),
  progressBadge: cn(
    "absolute right-0 top-[35%] z-20",
    "bg-white/95 backdrop-blur-[10px] rounded-[1rem]",
    "p-3.5 sm:p-4 shadow-xl border border-white/60",
    "w-[11rem] sm:w-[14.5rem] flex flex-col gap-1 sm:gap-2"
  ),
  progressBadgeLabel: "font-satoshi font-medium text-[0.8125rem] sm:text-[0.875rem] text-brand-dark",
  progressBadgeValue: cn(
    "font-heading font-semibold text-[2rem] sm:text-[3rem]",
    "leading-[1.2em] tracking-[-0.01em] text-brand-dark"
  ),
  progressMeterTrack: "w-full max-w-[12.5rem] bg-[#E5E6E8] h-2 rounded-full overflow-hidden",
  progressMeterFill: "bg-brand-lime h-full w-[55%] rounded-full",
  ornament: cn(
    "absolute right-0 top-4 z-0",
    "w-28 h-28 sm:w-36 sm:h-36 lg:w-[13.4375rem] lg:h-[13.4375rem]",
    "opacity-90 pointer-events-none"
  ),
};
