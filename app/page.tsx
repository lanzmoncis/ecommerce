import { Hero } from "@/components/shared/hero";
import { SectionNav } from "@/components/shared/section-nav";
import { FeaturedProducts } from "@/components/shared/featured-products";
import { AboutSection } from "@/components/shared/about-section";
import { Footer } from "@/components/shared/footer";

export default async function Home() {
  return (
    <>
      <Hero />
      <SectionNav />
      <FeaturedProducts />
      <AboutSection />
      <Footer />
    </>
  );
}
