import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={80}
          height={80}
          className={styles.avatarImage}
        />
      </div>

      <div className={styles.authorInfo}>
        <h3 className={styles.authorName}>{testimonial.name}</h3>
        <p className={styles.authorRole}>{testimonial.role}</p>
      </div>

      <p className={styles.quoteText}>{testimonial.content}</p>
    </div>
  );
}

const styles = {
  card: cn(
    "flex flex-col gap-6 p-6",
    "rounded-[1.5rem] bg-white border border-border/60",
    "shadow-xs hover:shadow-md transition-shadow duration-300"
  ),
  avatarWrapper: cn(
    "relative w-20 h-20 rounded-full",
    "overflow-hidden bg-brand-gray-100 shrink-0"
  ),
  avatarImage: "w-full h-full object-cover",
  authorInfo: "flex flex-col gap-0.5",
  authorName: cn(
    "font-heading font-semibold text-[1.25rem]",
    "leading-[1.2em] tracking-[-0.01em] text-foreground"
  ),
  authorRole: cn(
    "font-satoshi text-[1.125rem] leading-[1.6em]",
    "text-brand-blue"
  ),
  quoteText: cn(
    "font-satoshi text-[1.125rem] leading-[1.6em]",
    "text-brand-gray-700"
  ),
};
