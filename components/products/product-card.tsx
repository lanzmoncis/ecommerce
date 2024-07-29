"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { Product } from "@/types/product-type";

import { useMediaQuery } from "@/hooks/use-media-query";

import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const isMediumScreens = useMediaQuery(
    "(min-width: 768px) and (max-width: 1279px)"
  );
  const isExtraLargeScreens = useMediaQuery("(min-width: 1280px)");

  const router = useRouter();

  return (
    <div
      className={cn(
        "flex flex-col gap-9 xl:flex-row",
        index % 2 !== 0 && "xl:flex-row-reverse"
      )}
    >
      <Image
        src={
          isMediumScreens
            ? product.categoryImage.tablet
            : isExtraLargeScreens
            ? product.categoryImage.desktop
            : product.categoryImage.mobile
        }
        width={isMediumScreens ? 689 : isExtraLargeScreens ? 540 : 327}
        height={isExtraLargeScreens ? 560 : 352}
        alt={product.name}
        className="rounded-lg"
      />
      <div
        className={cn(
          "flex flex-col items-center gap-6 md:px-16 xl:justify-center xl:items-start",
          index % 2 !== 0 && "xl:px-0"
        )}
      >
        {product.new && (
          <div className="uppercase text-custom-overline text-orange">
            New product
          </div>
        )}
        <h2 className=" text-custom-xl text-center uppercase px-6 md:w-1/2 xl:text-left xl:w-3/5 xl:px-0">
          {product.name}
        </h2>
        <p
          className={cn(
            "text-custom-base text-gray-500 text-center xl:px-0 xl:text-left xl:w-5/6"
          )}
        >
          {product.description}
        </p>
        <Button
          onClick={() => router.push(`/${product.category}/${product.slug}`)}
        >
          See product
        </Button>
      </div>
    </div>
  );
};
