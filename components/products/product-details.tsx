"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { Product } from "@/types/product-type";

import { useCartStore } from "@/store/use-cart-store";

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

  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  const router = useRouter();

  if (!product) {
    return <div>Product not available</div>;
  }

  const featureParagraphs = product.features.split("\n\n");

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <div className="mb-44 max-w-[327px] mx-auto flex flex-col gap-20 md:max-w-[689px] xl:max-w-[1110px]">
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
          <p className="text-custom-base text-gray-extraDark">
            {product.description}
          </p>
          <div className="text-custom-md">
            $ {product.price.toLocaleString("en-US")}
          </div>
          <div className="flex gap-x-6">
            <div className="h-[48px] flex items-center bg-gray-dark gap-6 px-4 w-[120px]">
              <Minus
                size={12}
                strokeWidth={3}
                color="#6b7280"
                className="cursor-pointer"
                onClick={handleDecreaseQuantity}
              />
              <span className="w-[16px] text-center">{quantity}</span>
              <Plus
                size={12}
                strokeWidth={3}
                color="#6b7280"
                className="cursor-pointer"
                onClick={handleIncreaseQuantity}
              />
            </div>
            <Button onClick={() => addToCart(product, quantity)}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 xl:flex-row xl:gap-32">
        <div className="flex flex-col gap-6 xl:max-w-[635px]">
          <h3 className="text-custom-lg uppercase md:text-custom-2xl">
            Features
          </h3>
          {featureParagraphs.map((paragraph, index) => (
            <p key={index} className="text-custom-base text-gray-extraDark">
              {paragraph}
            </p>
          ))}
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
                  <p className="text-custom-base text-gray-extraDark">
                    {items.item}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[max-content_max-content] md:grid-rows-[min-content_min-content] justify-center md:gap-4 xl:gap-6">
        <Image
          src={
            isMediumScreens
              ? product.gallery.first.tablet
              : isExtraLargeScreens
              ? product.gallery.first.desktop
              : product.gallery.first.mobile
          }
          alt="product first image"
          width={isMediumScreens ? 277 : isExtraLargeScreens ? 445 : 327}
          height={isExtraLargeScreens ? 280 : 174}
          className="rounded-lg md:order-1 md:mb-1 xl:mb-2"
        />
        <Image
          src={
            isMediumScreens
              ? product.gallery.second.tablet
              : isExtraLargeScreens
              ? product.gallery.second.desktop
              : product.gallery.second.mobile
          }
          alt="product second image"
          width={isMediumScreens ? 277 : isExtraLargeScreens ? 445 : 327}
          height={isExtraLargeScreens ? 280 : 174}
          className="rounded-lg md:order-3"
        />
        <Image
          src={
            isMediumScreens
              ? product.gallery.third.tablet
              : isExtraLargeScreens
              ? product.gallery.third.desktop
              : product.gallery.third.mobile
          }
          alt="product third image"
          width={isMediumScreens ? 395 : isExtraLargeScreens ? 635 : 327}
          height={isExtraLargeScreens ? 592 : 368}
          className="rounded-lg md:order-2 md:row-span-2"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-custom-lg uppercase md:text-custom-2xl mb-14">
          You may also like
        </h3>
        <ul className="flex flex-col gap-16 md:flex-row md:gap-4">
          {product.others.map((otherProduct) => (
            <li
              key={otherProduct.name}
              className="flex flex-col items-center gap-8"
            >
              <Image
                src={
                  isMediumScreens
                    ? otherProduct.image.tablet
                    : isExtraLargeScreens
                    ? otherProduct.image.desktop
                    : otherProduct.image.mobile
                }
                alt={otherProduct.name}
                width={isMediumScreens ? 223 : isExtraLargeScreens ? 350 : 327}
                height={isMediumScreens ? 318 : isExtraLargeScreens ? 318 : 120}
                className="rounded-lg"
              />
              <h2 className="text-custom-lg uppercase">{otherProduct.name}</h2>
              <Button
                onClick={() => {
                  const slug = otherProduct.slug.split("/")[1];
                  router.push(slug);
                }}
              >
                See product
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
