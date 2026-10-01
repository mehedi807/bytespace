import { cn } from "@/lib/utils";
import {
  TestimonialCard,
  type TestimonialItem,
} from "@/components/testimonials/TestimonialCard";

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "sarah-m",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonials/sarah.png",
    content:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: "james-l",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonials/james.png",
    content:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: "alex-b",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonials/alex.png",
    content:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.glowLime1} />
      <div className={styles.glowLime2} />
      <div className={styles.glowBlue} />

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitleCol}>
            <h2 className={styles.heading}>
              Discover What Our Community Is Saying
            </h2>
          </div>
          <div className={styles.headerDescCol}>
            <p className={styles.subtitle}>
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: cn(
    "relative w-full overflow-hidden",
    "bg-[#FAFAFA] border-t border-border",
    "py-16 md:py-20 lg:py-[4.625rem]"
  ),
  glowLime1: cn(
    "absolute -top-[15rem] left-[58%] pointer-events-none",
    "w-[71.0625rem] h-[71.0625rem] rounded-full",
    "bg-[radial-gradient(circle_at_50%_50%,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0.09)_53%,rgba(203,252,1,0.02)_75%,transparent_100%)]",
    "blur-[20px]"
  ),
  glowLime2: cn(
    "absolute -top-[8.625rem] left-[27%] pointer-events-none",
    "w-[42rem] h-[42rem] rounded-full",
    "bg-[radial-gradient(circle_at_50%_50%,rgba(203,252,1,0.6)_0%,rgba(203,252,1,0.14)_53%,rgba(203,252,1,0.04)_75%,transparent_100%)]",
    "blur-[20px]"
  ),
  glowBlue: cn(
    "absolute top-[9.3125rem] -left-[27.625rem] pointer-events-none",
    "w-[71.0625rem] h-[71.0625rem] rounded-full",
    "bg-[radial-gradient(circle_at_50%_50%,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.06)_53%,rgba(0,59,226,0.01)_75%,transparent_100%)]",
    "blur-[20px]"
  ),
  container: cn(
    "relative z-10 max-w-[75rem] mx-auto",
    "px-6 lg:px-0"
  ),
  header: cn(
    "grid grid-cols-1 lg:grid-cols-2",
    "gap-6 lg:gap-[2.6875rem] items-end mb-12 lg:mb-[4.5rem]"
  ),
  headerTitleCol: "w-full max-w-[36.0625rem]",
  heading: cn(
    "font-heading font-semibold text-foreground tracking-[-0.01em]",
    "text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-[1.2em]"
  ),
  headerDescCol: "w-full max-w-[36.25rem]",
  subtitle: cn(
    "font-satoshi text-base sm:text-[1.125rem] leading-[1.6em]",
    "text-brand-gray-700"
  ),
  grid: cn(
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "gap-6 lg:gap-[2.5625rem]"
  ),
};
