import { SectionNav } from "@/components/shared/section-nav";
import { CategoryHeader } from "@/components/shared/category-header";
import { Footer } from "@/components/shared/footer";
import { AboutSection } from "@/components/shared/about-section";
import { ProductList } from "@/components/shared/product-list";

import { getProductsByCategory } from "@/lib/products";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const productsByCategory = await getProductsByCategory(params.category);

  return (
    <>
      <CategoryHeader />
      <ProductList products={productsByCategory} />
      <SectionNav />
      <AboutSection />
      <Footer />
    </>
  );
}
