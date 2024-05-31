import { Hero } from "@/components/sections/hero";
import { SectionNav } from "@/components/sections/section-nav";
import { FeaturedProducts } from "@/components/sections/featured-products";

export default async function Home() {
  return (
    <>
      <Hero />
      <SectionNav />
      <FeaturedProducts />
    </>
  );
}
