"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";

import { useMediaQuery } from "@/hooks/use-media-query";

import { NavLinks } from "@/components/ui/nav-links";
import { CartModal } from "@/components/modals/cart-modal";

const routes = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/headphones",
    name: "Headphones",
  },
  {
    href: "/speakers",
    name: "Speakers",
  },
  {
    href: "/earphones",
    name: "Earphones",
  },
];

export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const isExtraLargeScreens = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <div className="border-b border-[#979797]/30 px-6 py-8 mx-auto flex items-center md:px-0 md:max-w-[689px] xl:max-w-[1110px]">
        <CartModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <div className="flex grow md:justify-start md:gap-9 xl:gap-44">
          {!isExtraLargeScreens && (
            <div>
              <Menu color="#ffffff" onClick={() => setNavOpen(!navOpen)} />
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
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.href}
                  key={route.name}
                  className="hover:text-orange cursor-pointer duration-300"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ShoppingCart
            color="#ffffff"
            onClick={() => setModalOpen(!modalOpen)}
          />
        </div>
      </div>

      {!isExtraLargeScreens && navOpen && (
        <div className="absolute w-full bg-white h-[750px] md:h-[340px] z-10 rounded-b-lg">
          <div className="absolute w-full pb-10 top-24 md:top-28 md:pb-0 bg-white">
            <NavLinks />
          </div>
        </div>
      )}
    </>
  );
};