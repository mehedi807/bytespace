import Image from "next/image";
import { cn } from "@/lib/utils";

export default function BrandStatsBar() {
  const partnerLogos = [
    { name: "Partner 1", src: "/images/partner_1.svg", width: 167, height: 41 },
    { name: "Partner 2", src: "/images/partner_2.svg", width: 168, height: 41 },
    { name: "Partner 3", src: "/images/partner_3.svg", width: 170, height: 41 },
    { name: "Partner 4", src: "/images/partner_4_full.svg", width: 170, height: 41 },
    { name: "Partner 5", src: "/images/partner_5_full.svg", width: 169, height: 42 },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          {partnerLogos.map((logo, idx) => (
            <div key={idx} className={styles.itemWrapper}>
              <div className={styles.logoFrame}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={styles.logoImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: cn(
    "w-full bg-secondary overflow-hidden",
    "py-10 sm:py-14 lg:py-[5rem]",
    "flex items-center justify-center"
  ),
  container: cn(
    "w-full max-w-[90rem] mx-auto",
    "px-4 sm:px-6 md:px-10 lg:px-[9.625rem]"
  ),
  row: cn(
    "flex flex-nowrap items-center justify-between",
    "gap-2 sm:gap-6 md:gap-10 lg:gap-[4.5rem]",
    "w-full"
  ),
  itemWrapper: cn(
    "relative flex items-center justify-center shrink min-w-0",
    "opacity-85 hover:opacity-100 transition-opacity"
  ),
  logoFrame: cn(
    "relative flex items-center justify-center",
    "w-[3.5rem] min-[400px]:w-[4.0625rem] sm:w-[6.875rem]",
    "md:w-[8.75rem] lg:w-[10.625rem]",
    "h-[1.125rem] min-[400px]:h-[1.375rem] sm:h-[1.875rem]",
    "md:h-[2.25rem] lg:h-[2.625rem]"
  ),
  logoImage: "w-full h-full object-contain",
};
