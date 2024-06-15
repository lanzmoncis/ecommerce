"use client";

import { usePathname } from "next/navigation";

import { NavLinks } from "@/components/ui/nav-links";

export const CategoryHeader = () => {
  const pathName = usePathname();
  const name = pathName.slice(1);

  return (
    <div className="bg-black flex flex-col mb-12">
      <div>
        <NavLinks />
      </div>
      <div className="text-white uppercase py-8 md:py-24 text-custom-xl text-center md:text-custom-3xl">
        {name}
      </div>
    </div>
  );
};
