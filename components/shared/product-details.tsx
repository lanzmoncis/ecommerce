"use client";

import Image from "next/image";

import { Product } from "@/types/product-type";

import { useMediaQuery } from "@/hooks/use-media-query";

import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
  product?: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const isMediumScreens = useMediaQuery(
    "(min-width: 768px) and (max-width: 1279px)"
  );
  const isExtraLargeScreens = useMediaQuery("(min-width: 1280px)");

  if (!product) {
    return <div>Product not available</div>;
  }

  return (
    <div className="mb-24 max-w-[327px] mx-auto flex flex-col gap-20 md:max-w-[689px] xl:max-w-[1110px]">
      <div className="flex flex-col gap-6 md:flex-row md:gap-16 xl:gap-28">
        <Image
          src={
            isMediumScreens
              ? product.image.tablet
              : isExtraLargeScreens
              ? product.image.desktop
              : product.image.mobile
          }
          alt={product.name}
          width={isMediumScreens ? 281 : isExtraLargeScreens ? 540 : 327}
          height={isMediumScreens ? 480 : isExtraLargeScreens ? 560 : 327}
        />

        <div className="flex flex-col gap-6 md:py-14">
          {product.new && (
            <div className="uppercase text-custom-overline text-orange">
              New product
            </div>
          )}
          <h2 className="text-custom-xl uppercase xl:text-custom-3xl">
            {product.name}
          </h2>
          <p className="text-custom-base text-gray-500">
            {product.description}
          </p>
          <div className="text-custom-md"> $ {product.price}</div>
          <div className="flex gap-x-6">
            <div className="h-[48px] flex items-center bg-gray-dark">+ -</div>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 xl:flex-row xl:gap-32">
        <div className="flex flex-col gap-6 xl:max-w-[635px]">
          <h3 className="text-custom-lg uppercase md:text-custom-2xl">
            Features
          </h3>
          <p className="text-custom-base text-gray-500">{product.features}</p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-40 xl:flex-col xl:gap-6 xl:pr-20">
          <h3 className="text-custom-lg uppercase md:text-custom-2xl">
            In the box
          </h3>
          <ul className="flex flex-col gap-y-2">
            {product.includedItems.map((items, index) => (
              <li key={index}>
                <div className="flex gap-6">
                  <p className="text-orange">{items.quantity}x</p>
                  <p className="text-custom-base text-gray-500">{items.item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
