import { SectionNav } from "@/components/shared/section-nav";
import { Footer } from "@/components/shared/footer";
import { AboutSection } from "@/components/shared/about-section";
import { ProductList } from "@/components/products/product-list";
import { Nav } from "@/components/shared/nav";

import { getProductsByCategory } from "@/lib/products";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const productsByCategory = await getProductsByCategory(params.category);

  return (
    <>
      <div className="bg-black flex flex-col mb-12">
        <div>
          <Nav />
        </div>
        <div className="text-white uppercase py-8 md:py-24 text-custom-xl text-center md:text-custom-3xl">
          {params.category}
        </div>
      </div>
      <ProductList products={productsByCategory} />
      <SectionNav />
      <AboutSection />
      <Footer />
    </>
  );
}
