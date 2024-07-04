"use client";

import { NavLinks } from "../ui/nav-links";

export const SectionNav = () => {
  return (
    <section className="text-black max-w-[327px] mx-auto flex flex-col items-center justify-center gap-20 mb-24 md:flex-row md:max-w-[689px] md:gap-3 xl:max-w-[1110px] xl:gap-7">
      <NavLinks />
    </section>
  );
};
