import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function FeaturedCategories() {
  const categoriesList = [
    {
      id: "design",
      name: "Design",
      icon: "/images/cat_icon_design.svg",
      href: "/courses?category=design",
    },
    {
      id: "development",
      name: "Development",
      icon: "/images/cat_icon_dev.svg",
      href: "/courses?category=development",
    },
    {
      id: "it-software",
      name: "IT & Software",
      icon: "/images/cat_icon_it.svg",
      href: "/courses?category=it-software",
    },
    {
      id: "business",
      name: "Business",
      icon: "/images/cat_icon_biz.svg",
      href: "/courses?category=business",
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: "/images/cat_icon_marketing.svg",
      href: "/courses?category=marketing",
    },
    {
      id: "photography",
      name: "Photography",
      icon: "/images/cat_icon_photo.svg",
      href: "/courses?category=photography",
    },
  ];

  return (
    <section id="categories" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className={styles.subtitle}>
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there&apos;s
            something for everyone. Unleash your potential and explore our carefully
            curated categories.
          </p>
        </div>

        <div className={styles.grid}>
          {categoriesList.map((cat) => (
            <Link key={cat.id} href={cat.href} className={styles.card}>
              <div className={styles.iconCircle}>
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  width={36}
                  height={36}
                  className={styles.icon}
                />
              </div>
              <span className={styles.cardTitle}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: cn(
    "w-full bg-white",
    "py-16 sm:py-20 lg:py-[5rem]"
  ),
  container: cn(
    "w-full max-w-[90rem] mx-auto",
    "px-4 sm:px-6 md:px-10 lg:px-[7.5rem]"
  ),
  header: cn(
    "flex flex-col items-center text-center",
    "gap-3 sm:gap-4 max-w-[57.3125rem] mx-auto",
    "mb-10 sm:mb-12 lg:mb-16 px-2 sm:px-0"
  ),
  heading: cn(
    "font-heading font-semibold text-brand-heading",
    "text-[1.5rem] min-[400px]:text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem]",
    "leading-[1.2em] tracking-[-0.01em]",
    "w-full"
  ),
  subtitle: cn(
    "font-satoshi text-brand-gray-400",
    "text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem]",
    "leading-[1.6em] max-w-[57.3125rem] w-full"
  ),
  grid: cn(
    "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
    "gap-4 sm:gap-6 lg:gap-10",
    "w-full max-w-[75.125rem] mx-auto"
  ),
  card: cn(
    "group relative flex flex-col items-center justify-center",
    "w-full min-h-[10.5rem] sm:min-h-[11.25rem]",
    "bg-white rounded-[1.5rem] p-4 sm:p-6",
    "border border-brand-gray-200 gap-3",
    "hover:border-brand-blue hover:shadow-md",
    "transition-all duration-300"
  ),
  iconCircle: cn(
    "relative flex items-center justify-center",
    "w-[3.75rem] h-[3.75rem] rounded-full",
    "bg-brand-lime shrink-0 p-3",
    "group-hover:scale-105 transition-transform duration-300"
  ),
  icon: "w-9 h-9 object-contain shrink-0",
  cardTitle: cn(
    "font-satoshi font-medium text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem]",
    "leading-[1.2em] text-brand-dark text-center",
    "group-hover:text-brand-blue transition-colors"
  ),
};
