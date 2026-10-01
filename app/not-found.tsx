import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <Navbar />

      <main className={styles.heroSection}>
        <div className={styles.gridOverlay}>
          <img
            src="/images/hero_grid_pattern.svg"
            alt=""
            className={styles.imageCover}
          />
        </div>

        <div className={styles.big404Text} aria-hidden="true">
          404
        </div>

        <div className={styles.contentBox}>
          <h1 className={styles.heading}>
            The page you are looking for doesn’t exist
          </h1>
          <p className={styles.subtitle}>
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link href="/" className={styles.homeBtn}>
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  wrapper: "flex min-h-screen flex-col bg-white",
  heroSection: cn(
    "relative w-full overflow-hidden",
    "bg-brand-blue flex flex-col items-center justify-center",
    "min-h-screen pt-[7.5rem] pb-20 px-6"
  ),
  gridOverlay: "absolute inset-0 pointer-events-none z-0",
  imageCover: "w-full h-full object-cover object-top",
  big404Text: cn(
    "absolute top-4 sm:top-8 lg:top-[2.5rem]",
    "left-1/2 -translate-x-1/2 pointer-events-none select-none",
    "font-heading font-semibold text-center",
    "text-[11rem] sm:text-[18rem] md:text-[24rem] lg:text-[30rem]",
    "leading-[1em] tracking-[-0.01em]",
    "bg-[linear-gradient(180deg,#D4FB20_0%,rgba(212,251,32,0.96)_25%,rgba(212,251,32,0.81)_50%,rgba(212,251,32,0.61)_68%,rgba(255,255,255,0)_100%)]",
    "bg-clip-text text-transparent"
  ),
  contentBox: cn(
    "relative z-10 flex flex-col items-center text-center",
    "gap-8 max-w-[58.4375rem] mx-auto",
    "mt-24 sm:mt-36 md:mt-48 lg:mt-[22.5rem]"
  ),
  heading: cn(
    "font-heading font-semibold text-white tracking-[-0.01em]",
    "text-[2rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem]",
    "leading-[1.2em] max-w-[58.4375rem]"
  ),
  subtitle: cn(
    "font-satoshi text-brand-gray-100",
    "text-base sm:text-[1.125rem] leading-[1.6em]",
    "max-w-[37.5rem]"
  ),
  homeBtn: cn(
    "inline-flex items-center justify-center",
    "h-[3.25rem] px-6 rounded-full",
    "bg-brand-lime hover:bg-brand-lime-hover",
    "font-satoshi font-medium text-[1.125rem]",
    "leading-[1.2em] text-brand-dark transition-colors shadow-xs"
  ),
};
