"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

import { NavLinks } from "@/components/ui/nav-links";
import { CartModal } from "@/components/modals/cart-modal";

import { useMediaQuery } from "@/hooks/use-media-query";
import { useFromStore } from "@/hooks/use-from-store";

import { useCartStore } from "@/store/cart-store";

import { routes } from "@/lib/links";

import { cn } from "@/lib/utils";

export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const cart = useFromStore(useCartStore, (state) => state.cart);

  const isExtraLargeScreens = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <div className="border-b border-[#979797]/30 px-6 py-8 mx-auto flex items-center md:px-0 md:max-w-[689px] xl:max-w-[1110px] z-40 relative">
        <CartModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <div className="flex grow md:justify-start md:gap-9 xl:gap-44">
          {!isExtraLargeScreens && (
            <div>
              {!navOpen ? (
                <Menu color="#ffffff" onClick={() => setNavOpen(true)} />
              ) : (
                <X color="#ffffff" onClick={() => setNavOpen(false)} />
              )}
            </div>
          )}
          <Link className="mx-auto md:mx-0 cursor-pointer" href={"/"}>
            <Image
              src="/images/shared/desktop/logo.svg"
              height={25}
              width={144}
              alt="Audiophile logo"
              priority
            />
          </Link>
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
        <div className="relative">
          <ShoppingCart
            color="#ffffff"
            onClick={() => setModalOpen(!modalOpen)}
          />
          {cart && cart.length > 0 && (
            <div className="text-white text-custom-subtitle bg-orange rounded-full absolute flex justify-center items-center w-5 h-5 -top-2 left-4">
              {cart.length}
            </div>
          )}
        </div>
      </div>

      {!isExtraLargeScreens && (
        <>
          {navOpen && (
            <div
              className="fixed h-full bg-black/40 z-30 w-full inset-0"
              onClick={() => setNavOpen(false)}
            ></div>
          )}
          <div
            className={cn(
              "absolute w-full py-20 pb-10 bg-white z-50 left-0 rounded-b-lg transition-transform duration-300",
              navOpen ? "translate-y-0 top-[90px]" : "-translate-y-full top-0"
            )}
          >
            <NavLinks />
          </div>
        </>
      )}

      {/* RESPONSIVE NAVLINKS WITHOUT ANIMATION */}
      {/* {!isExtraLargeScreens && navOpen && (
        <>
          <div className="fixed h-full bg-black/40 z-30 w-full inset-0"></div>
          <div className="absolute w-full bg-white h-[750px] md:h-[340px] z-50 rounded-b-lg">
            <div className="absolute w-full pb-10 top-24 md:top-28 md:pb-0 bg-white">
              <NavLinks />
            </div>
          </div>
        </>
      )} */}
    </>
  );
};
