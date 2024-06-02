"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/use-media-query";

export const AboutSection = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  return (
    <div className="max-w-[327px] mx-auto flex flex-col gap-9 mb-24 md:max-w-[689px] md:gap-16">
      <Image
        src={
          isAboveMediumScreens
            ? "/images/shared/tablet/image-best-gear.jpg"
            : "/images/shared/mobile/image-best-gear.jpg"
        }
        width={isAboveMediumScreens ? 689 : 327}
        height={300}
        alt="audiophile best gear"
        className="rounded-lg"
      />
      <div className="flex flex-col gap-9 mx-auto md:max-w-[573px]">
        <h3 className="uppercase text-custom-xl text-black text-center md:text-custom-3xl">
          Bringing you the <span className="text-orange">best</span> audio gear
        </h3>
        <p className="text-custom-base text-gray-extraDark text-center">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};
