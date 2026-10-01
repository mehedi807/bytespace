import Image from "next/image";
import { cn } from "@/lib/utils";
import { StarIcon, LevelBarsIcon } from "@/utils/icons";

interface AuthVisualShowcaseProps {
  title: string;
  description: string;
}

export function AuthVisualShowcase({
  title,
  description,
}: AuthVisualShowcaseProps) {
  return (
    <div className={styles.container}>
      <div className={styles.textGroup}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.stage}>
        {/* Background Card 2 (x: 136, y: 0) */}
        <div className={styles.backCard}>
          <div className={styles.thumbnailWrapperBack}>
            <Image
              src="/images/img_49_64.png"
              alt="the Power of Big Data"
              fill
              className={styles.thumbnailImg}
            />
            <div className={styles.metaBadgesRowBack}>
              <span className={styles.badge}>17 Lessons</span>
              <span className={styles.badge}>2 hours 16 mins</span>
              <span className={styles.badge}>59 Comments</span>
            </div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.titleGroup}>
              <h3 className={styles.cardTitleBack}>the Power of Big Data</h3>
              <p className={styles.cardAuthor}>
                by <span className={styles.authorHighlight}>purepearl studio</span>
              </p>
            </div>
          </div>
        </div>

        {/* Foreground Card 1 (x: 25, y: 89) */}
        <div className={styles.frontCard}>
          <div className={styles.thumbnailWrapper}>
            <Image
              src="/images/img_49_33.png"
              alt="Build Digital Asset"
              fill
              className={styles.thumbnailImg}
            />
            <div className={styles.metaBadgesRow}>
              <span className={styles.badge}>17 Lessons</span>
              <span className={styles.badge}>2 hours 16 mins</span>
              <span className={styles.badge}>59 Comments</span>
            </div>
          </div>

          <div className={styles.cardBody}>
            <div className={styles.titleGroup}>
              <h3 className={styles.cardTitle}>Build Digital Asset</h3>
              <p className={styles.cardAuthor}>
                by <span className={styles.authorHighlight}>purepearl studio</span>
              </p>
            </div>

            <div className={styles.levelAndAvatars}>
              <div className={styles.levelBadge}>
                <LevelBarsIcon className={styles.signalIcon} />
                <span>Beginner</span>
              </div>
              <div className={styles.avatarStack}>
                <div className={styles.avatarMini}>
                  <Image
                    src="/images/img_49_141.png"
                    alt="Student"
                    fill
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.avatarMini}>
                  <Image
                    src="/images/img_49_142.png"
                    alt="Student"
                    fill
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.avatarMini}>
                  <Image
                    src="/images/img_49_143.png"
                    alt="Student"
                    fill
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.avatarCount}>26+</div>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.priceRow}>
                <span className={styles.priceValue}>$25</span>
                <span className={styles.pricePeriod}>/lifetime</span>
              </div>
              <div className={styles.ratingRow}>
                <span className={styles.ratingText}>4.5</span>
                <StarIcon className={styles.starIcon} />
              </div>
            </div>
          </div>
        </div>

        {/* 3D Helix (x: 373, y: 321) */}
        <div className={styles.helix}>
          <Image
            src="/images/auth/auth_3d_sphere.png"
            alt="3D helix decoration"
            width={175}
            height={175}
            className={styles.ornamentImg}
          />
        </div>

        {/* 3D Torus Ring (x: 54, y: 15) */}
        <div className={styles.torusRing}>
          <Image
            src="/images/auth/auth_3d_cone_1.png"
            alt="3D torus ring decoration"
            width={146}
            height={146}
            className={styles.ornamentImg}
          />
        </div>

        {/* 3D Pyramid (x: 0, y: 397) */}
        <div className={styles.pyramid}>
          <Image
            src="/images/auth/auth_3d_cone_2.png"
            alt="3D pyramid decoration"
            width={188}
            height={188}
            className={styles.ornamentImg}
          />
        </div>

        {/* Floating Happy Students Badge (x: 251, y: 435) */}
        <div className={styles.happyBadge}>
          <div className={styles.happyHeader}>
            <span className={styles.happyTitle}>Happy Students</span>
            <div className={styles.happyRating}>
              <span className={styles.happyRatingVal}>4.5 (240)</span>
              <StarIcon className={styles.starIconSmall} />
            </div>
          </div>
          <div className={styles.happyAvatars}>
            <div className={styles.happyAvatarMini}>
              <Image
                src="/images/img_49_141.png"
                alt="Student"
                fill
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.happyAvatarMini}>
              <Image
                src="/images/img_49_142.png"
                alt="Student"
                fill
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.happyAvatarMini}>
              <Image
                src="/images/img_49_143.png"
                alt="Student"
                fill
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.happyAvatarMini}>
              <Image
                src="/images/img_49_144.png"
                alt="Student"
                fill
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.happyAvatarMini}>
              <Image
                src="/images/img_49_145.png"
                alt="Student"
                fill
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.happyAvatarCount}>2K+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: "flex flex-col gap-10 w-full max-w-[34.25rem]",
  textGroup: "flex flex-col gap-4 max-w-[29.6875rem]",
  title: cn(
    "font-heading font-semibold text-brand-gray-50 tracking-[-0.01em]",
    "text-[1.25rem] leading-[1.2em]"
  ),
  description: cn(
    "font-satoshi font-normal text-brand-gray-50",
    "text-[1.125rem] leading-[1.6em]",
    "max-w-[29.6875rem]"
  ),
  stage: "relative w-[34.25rem] h-[36.5625rem] hidden md:block",
  backCard: cn(
    "absolute left-[8.5rem] top-0 z-10",
    "w-[23.3125rem] h-[24rem] p-4 bg-white rounded-[1.5rem]",
    "border border-brand-gray-200 shadow-lg pointer-events-none opacity-90",
    "flex flex-col gap-3"
  ),
  thumbnailWrapperBack: cn(
    "relative w-full h-[12.1875rem] rounded-xl",
    "overflow-hidden bg-brand-dark"
  ),
  metaBadgesRowBack: cn(
    "absolute bottom-3 left-3 right-3",
    "flex items-center gap-2"
  ),
  cardTitleBack: cn(
    "font-heading font-semibold text-[1.25rem]",
    "leading-[1.75rem] tracking-[-0.01em] text-foreground"
  ),
  frontCard: cn(
    "absolute left-[1.5625rem] top-[5.5625rem] z-20",
    "w-[23.3125rem] h-[24rem] p-4 bg-white rounded-[1.5rem]",
    "border border-brand-gray-200 shadow-2xl",
    "flex flex-col gap-4"
  ),
  thumbnailWrapper: cn(
    "relative w-full h-[12.1875rem] rounded-xl",
    "overflow-hidden bg-brand-dark"
  ),
  thumbnailImg: "object-cover",
  metaBadgesRow: cn(
    "absolute bottom-3 left-3 right-3",
    "flex items-center gap-2"
  ),
  badge: cn(
    "px-3 py-1 rounded-full bg-white/60",
    "backdrop-blur-xs font-satoshi font-medium",
    "text-xs leading-[1.25rem] text-[#4F4F4F]"
  ),
  cardBody: "flex flex-col gap-3",
  titleGroup: "flex flex-col gap-1",
  cardTitle: cn(
    "font-heading font-semibold text-[1.25rem]",
    "leading-[1.75rem] tracking-[-0.01em] text-foreground"
  ),
  cardAuthor: "font-satoshi text-xs leading-[1.25rem] text-[#4F4F4F]",
  authorHighlight: "text-brand-blue font-medium",
  levelAndAvatars: "flex items-center justify-between pt-1",
  levelBadge: cn(
    "inline-flex items-center gap-1.5 px-3 py-1",
    "rounded-full bg-secondary font-satoshi",
    "font-medium text-xs leading-[1.25rem] text-brand-gray-700"
  ),
  signalIcon: "w-4 h-4 text-brand-blue",
  avatarStack: "flex items-center -space-x-2",
  avatarMini: cn(
    "relative w-8 h-8 rounded-full",
    "overflow-hidden border-2 border-white",
    "bg-brand-gray-100"
  ),
  avatarImg: "object-cover",
  avatarCount: cn(
    "w-8 h-8 rounded-full bg-foreground",
    "border-2 border-white flex items-center justify-center",
    "font-satoshi font-medium text-xs text-white"
  ),
  cardFooter: "flex items-center justify-between pt-2 border-t border-border/60",
  priceRow: "flex items-baseline gap-1",
  priceValue: "font-heading font-semibold text-[1.25rem] leading-[1.75rem] text-brand-blue",
  pricePeriod: "font-satoshi text-xs leading-[1.25rem] text-[#4F4F4F]",
  ratingRow: "flex items-center gap-1",
  ratingText: "font-satoshi font-medium text-[1.125rem] leading-[1.75rem] text-[#4F4F4F]",
  starIcon: "w-4 h-4 fill-amber-400 text-amber-400",
  torusRing: cn(
    "absolute left-[3.375rem] top-[0.9375rem] z-30 pointer-events-none",
    "w-[9.125rem] h-[9.125rem]"
  ),
  pyramid: cn(
    "absolute left-0 top-[24.8125rem] z-30 pointer-events-none",
    "w-[11.75rem] h-[11.75rem]"
  ),
  helix: cn(
    "absolute left-[23.3125rem] top-[20.0625rem] z-15 pointer-events-none",
    "w-[10.9375rem] h-[10.9375rem]"
  ),
  ornamentImg: "w-full h-full object-contain",
  happyBadge: cn(
    "absolute left-[15.6875rem] top-[27.1875rem] z-30",
    "w-[16.125rem] p-4 rounded-2xl",
    "bg-brand-lime shadow-xl border border-white/40",
    "flex flex-col gap-2.5"
  ),
  happyHeader: "flex items-center justify-between",
  happyTitle: "font-satoshi font-medium text-base leading-[1.5rem] text-brand-dark",
  happyRating: "flex items-center gap-1",
  happyRatingVal: "font-satoshi font-bold text-xs text-brand-dark",
  starIconSmall: "w-3.5 h-3.5 fill-brand-blue text-brand-blue",
  happyAvatars: "flex items-center -space-x-3",
  happyAvatarMini: cn(
    "relative w-[2.6875rem] h-[2.6875rem] rounded-full",
    "overflow-hidden border-2 border-brand-lime",
    "bg-brand-gray-100"
  ),
  happyAvatarCount: cn(
    "w-[2.6875rem] h-[2.6875rem] rounded-full",
    "bg-brand-dark border-2 border-brand-lime",
    "flex items-center justify-center",
    "font-satoshi font-bold text-xs leading-[1.5em] text-brand-gray-50"
  ),
};
