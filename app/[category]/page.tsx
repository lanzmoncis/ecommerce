import { SectionNav } from "@/components/sections/section-nav";
import { CategoryHeader } from "@/components/sections/category-header";
import { Footer } from "@/components/sections/footer";
import { AboutSection } from "@/components/sections/about-section";

const CategoryPage = () => {
  return (
    <>
      <CategoryHeader />
      <SectionNav />
      <AboutSection />
      <Footer />
    </>
  );
};

export default CategoryPage;
