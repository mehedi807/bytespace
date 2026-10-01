import HeroSection from "@/components/sections/HeroSection";
import BrandStatsBar from "@/components/sections/BrandStatsBar";
import CourseCatalogSection from "@/components/sections/CourseCatalogSection";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import CreatorPlatformSection from "@/components/sections/CreatorPlatformSection";
import CreatorCTASection from "@/components/sections/CreatorCTASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <BrandStatsBar />
      <CourseCatalogSection />
      <FeaturedCategories />
      <CreatorPlatformSection />
      <CreatorCTASection />
      <TestimonialsSection />
    </div>
  );
}

const styles = {
  container: "flex flex-col",
};
