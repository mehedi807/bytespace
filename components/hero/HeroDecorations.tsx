import { cn } from "@/lib/utils";

export default function HeroDecorations() {
  return (
    <>
      <div className={styles.gridPattern}>
        <img
          src="/images/hero_grid_pattern.svg"
          alt=""
          className={styles.imageCover}
        />
      </div>

      <div className={styles.ellipseRing} />

      <div className={styles.ornamentContainer}>
        <img
          src="/images/hero_3d_ornament.png"
          alt=""
          className={styles.imageContain}
        />
      </div>
    </>
  );
}

const styles = {
  gridPattern: "absolute inset-0 pointer-events-none z-0",
  imageCover: "w-full h-full object-cover object-top",
  imageContain: "w-full h-full object-contain",
  ellipseRing: cn(
    "absolute pointer-events-none rounded-full border-brand-lime-alt z-[1]",
    "left-1/2 -translate-x-1/2",
    "w-[28.75rem] h-[28.75rem] border-[6.875rem] top-[24.5rem]",
    "sm:w-[46.875rem] sm:h-[46.875rem] sm:border-[11.25rem] sm:top-[28.5rem]",
    "lg:w-[71.8125rem] lg:h-[71.8125rem] lg:border-[20rem] lg:top-[33.5rem]"
  ),
  ornamentContainer: cn(
    "absolute pointer-events-none overflow-hidden z-[2]",
    "left-1/2 -translate-x-1/2",
    "top-[12rem] sm:top-[13rem] lg:top-[13.8125rem]",
    "w-[37.5rem] sm:w-[68.75rem] lg:w-[107.4375rem]",
    "h-[25rem] sm:h-[36.25rem] lg:h-[50.1875rem]",
    "opacity-60 sm:opacity-75 lg:opacity-100"
  ),
};
