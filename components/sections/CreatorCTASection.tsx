import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CreatorCTASection() {
  return (
    <section className={styles.section}>
      {/* Background Grid Pattern */}
      <div className={styles.gridPatternWrapper}>
        <Image
          src="/images/cta_bg_grid.svg"
          alt=""
          fill
          className={styles.imageCover}
        />
      </div>

      {/* 3D Floating Ornaments */}
      <div className={styles.ornamentWrapper}>
        <div className={styles.ornamentContainer}>
          <Image
            src="/images/cta_3d_ornament.png"
            alt=""
            fill
            className={styles.ornamentImage}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className={styles.description}>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link href="/register?role=creator" className={styles.button}>
          Join as Creator
        </Link>
      </div>
    </section>
  );
}

const styles = {
  section: cn(
    "relative w-full bg-brand-blue overflow-hidden",
    "min-h-[26rem] sm:min-h-[28rem] lg:min-h-[30.5rem]",
    "py-16 sm:py-20 lg:py-[5.3125rem]",
    "flex items-center justify-center"
  ),
  gridPatternWrapper: cn(
    "absolute inset-0 pointer-events-none opacity-12",
    "w-full h-full"
  ),
  imageCover: "object-cover",
  ornamentWrapper: cn(
    "absolute inset-0 pointer-events-none",
    "overflow-hidden flex items-center justify-center"
  ),
  ornamentContainer: cn(
    "relative w-[107.125rem] h-[50.1875rem]",
    "pointer-events-none shrink-0"
  ),
  ornamentImage: "object-contain object-center opacity-90",
  content: cn(
    "relative z-10 max-w-[60.25rem] mx-auto px-4 sm:px-6",
    "flex flex-col items-center text-center gap-8 sm:gap-10"
  ),
  heading: cn(
    "font-heading font-semibold text-brand-gray-50 tracking-[-0.01em]",
    "text-[1.75rem] min-[400px]:text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem]",
    "leading-[1.2em] max-w-[44.375rem]"
  ),
  description: cn(
    "font-satoshi text-brand-gray-50 leading-[1.6em]",
    "text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] max-w-[60.25rem]"
  ),
  button: cn(
    "inline-flex items-center justify-center",
    "px-6 py-3 rounded-full bg-brand-lime text-brand-dark",
    "font-satoshi font-medium text-[1rem] sm:text-[1.125rem] leading-[1.2em]",
    "hover:bg-brand-lime-hover hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
  ),
};
