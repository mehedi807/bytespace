import { CheckCircleIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";

interface CourseKeyPointsProps {
  points: string[];
}

export default function CourseKeyPoints({ points }: CourseKeyPointsProps) {
  return (
    <div className={styles.sectionGroup}>
      <h3 className={styles.sectionTitle}>Key Points</h3>
      <div className={styles.pointsList}>
        {points.map((point, idx) => (
          <div key={idx} className={styles.pointItem}>
            <CheckCircleIcon className={styles.checkIcon} />
            <span className={styles.pointText}>{point}</span>
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
  pointsList: "flex flex-col gap-3",
  pointItem: "flex items-center gap-2",
  checkIcon: "w-6 h-6 text-brand-blue shrink-0",
  pointText: "font-satoshi text-base text-brand-gray-700 leading-[1.6em]",
};
