"use client";

import Image from "next/image";
import { Menu, ShoppingCart } from "lucide-react";

import { useMediaQuery } from "@/hooks/use-media-query";

export const NavLinks = () => {
  const isExtraLargeScreens = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="border-b border-[#979797]/30 px-6 py-8 mx-auto flex items-center md:px-0 md:max-w-[689px] xl:max-w-[1110px]">
      <div className="flex grow md:justify-start md:gap-9 xl:gap-44">
        {!isExtraLargeScreens && (
          <div>
            <Menu color="#ffffff" />
          </div>
        )}
        <div className="mx-auto md:mx-0">
          <Image
            src="/images/shared/desktop/logo.svg"
            height={25}
            width={144}
            alt="Audiophile logo"
            priority
          />
        </div>
        <ul className="hidden xl:flex gap-9 uppercase text-white text-custom-subtitle tracking-[2px]">
          <li className="hover:text-orange cursor-pointer duration-300">
            Home
          </li>
          <li className="hover:text-orange cursor-pointer duration-300">
            Headphones
          </li>
          <li className="hover:text-orange cursor-pointer duration-300">
            Speakers
          </li>
          <li className="hover:text-orange cursor-pointer duration-300">
            Earphones
          </li>
        </ul>
      </div>
      <div>
        <ShoppingCart color="#ffffff" />
      </div>
    </div>
  );
};
