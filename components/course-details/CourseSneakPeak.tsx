import Image from "next/image";
import { cn } from "@/lib/utils";

interface CourseSneakPeakProps {
  images?: string[];
}

const defaultImages = [
  "/images/course-details/sneak_peak_1.png",
  "/images/course-details/sneak_peak_2.png",
  "/images/course-details/sneak_peak_3.png",
  "/images/course-details/sneak_peak_4.png",
];

export default function CourseSneakPeak({
  images = defaultImages,
}: CourseSneakPeakProps) {
  return (
    <div className={styles.sectionGroup}>
      <h3 className={styles.sectionTitle}>Sneak Peak</h3>
      <div className={styles.grid}>
        {images.map((imgSrc, idx) => (
          <div key={idx} className={styles.imageCard}>
            <Image
              src={imgSrc}
              alt={`Course preview ${idx + 1}`}
              fill
              className={styles.imageCover}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  sectionGroup: "flex flex-col gap-6",
  sectionTitle: cn(
    "font-heading font-semibold text-brand-gray-950 tracking-[-0.01em]",
    "text-[1.25rem] leading-[1.2em]"
  ),
  grid: "grid grid-cols-2 sm:grid-cols-4 gap-4 w-full",
  imageCard: cn(
    "relative aspect-[167/125] w-full rounded-[1rem]",
    "overflow-hidden bg-[#D9D9D9] shadow-xs"
  ),
  imageCover: "object-cover",
};
