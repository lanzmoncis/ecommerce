"use client";

import { Product } from "@/types/product-type";

import { ProductCard } from "@/components/ui/product-card";

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="mb-48 max-w-[327px] mx-auto flex flex-col gap-24 md:max-w-[689px] xl:max-w-[1110px]">
      {products.map((product, index) => (
        <ProductCard product={product} key={product.id} index={index} />
      ))}
    </div>
  );
};
