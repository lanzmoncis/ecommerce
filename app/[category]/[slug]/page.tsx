import { AboutSection } from "@/components/shared/about-section";
import { Footer } from "@/components/shared/footer";
import { ProductDetails } from "@/components/products/product-details";
import { SectionNav } from "@/components/shared/section-nav";
import { GoBackLink } from "@/components/ui/back-link";
import { Nav } from "@/components/shared/nav";

import { getProductBySlug } from "@/lib/products";

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  return (
    <>
      <div className="bg-black mb-6">
        <Nav />
      </div>
      <GoBackLink />
      <ProductDetails product={product} />
      <SectionNav />
      <AboutSection />
      <Footer />
    </>
  );
}
