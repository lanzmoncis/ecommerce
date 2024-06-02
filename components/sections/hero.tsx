"use client";

import { Button } from "@/components/ui/button";
import { NavLinks } from "@/components/ui/nav-links";

export const Hero = () => {
  return (
    <header className="bg-black-light relative flex flex-col h-[600px] mb-24 md:h-[768px]">
      <div className="bg-[url('/images/home/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat w-full h-full absolute md:bg-[url('/images/home/tablet/image-header.jpg')] xl:bg-[url('/images/home/desktop/image-hero.jpg')]"></div>
      <div className="relative bg-black-light">
        <NavLinks />
      </div>
      <div className="relative flex justify-center items-center grow xl:justify-start xl:max-w-[1110px] mx-auto w-full">
        <div className="flex flex-col justify-between items-center h-[290px] max-w-[329px] md:h-[346px] md:max-w-[379px] xl:items-start">
          <div className="uppercase text-custom-overline text-gray-extraDark text-center">
            new product
          </div>
          <h1 className="text-custom-title-text uppercase text-white text-center md:text-custom-4xl">
            xx99 mark ii headphones
          </h1>
          <p className="text-custom-base text-gray-extraDark text-center h-[75px] xl:text-left">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button>See product</Button>
        </div>
      </div>
    </header>
  );
};
