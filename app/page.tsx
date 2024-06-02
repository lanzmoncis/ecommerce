import { Hero } from "@/components/sections/hero";
import { SectionNav } from "@/components/sections/section-nav";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { AboutSection } from "@/components/sections/about-section";
import { Footer } from "@/components/sections/footer";

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
