"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const SectionNav = () => {
  return (
    <section className="text-black max-w-[327px] mx-auto flex flex-col items-center justify-center gap-20 mb-24 md:flex-row md:max-w-[689px] md:gap-3">
      <div className="h-[165px] bg-gray-dark flex flex-col justify-center gap-2 items-center w-full rounded-lg">
        <Image
          src="/images/shared/desktop/image-category-thumbnail-headphones.png"
          alt="earphone"
          width={150}
          height={104}
          className="-mt-20"
        />
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-custom-base font-bold tracking-[1.07px] uppercase">
            Headphones
          </h3>
          <Button variant="ghost" size="sm" className="flex gap-1">
            <div>shop</div>
            <ChevronRight size={20} strokeWidth={2.25} color="#D87D4A" />
          </Button>
        </div>
      </div>

      <div className="h-[165px] bg-gray-dark flex flex-col justify-center gap-2 items-center w-full rounded-lg">
        <Image
          src="/images/shared/desktop/image-category-thumbnail-speakers.png"
          alt="earphone"
          width={150}
          height={104}
          className="-mt-20"
        />
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-custom-base font-bold tracking-[1.07px] uppercase ">
            Speakers
          </h3>
          <Button variant="ghost" size="sm" className="flex gap-1">
            <div>shop</div>
            <ChevronRight size={20} strokeWidth={2.25} color="#D87D4A" />
          </Button>
        </div>
      </div>

      <div className="h-[165px] bg-gray-dark flex flex-col justify-center gap-1 items-center w-full rounded-lg">
        <Image
          src="/images/shared/desktop/image-category-thumbnail-earphones.png"
          alt="earphone"
          width={160}
          height={104}
          className=" -mt-16"
        />
        <div className="flex flex-col gap-2 items-center mb-4">
          <h3 className="text-custom-base font-bold tracking-[1.07px] uppercase">
            Earphones
          </h3>
          <Button variant="ghost" size="sm" className="flex gap-1">
            <div>shop</div>
            <ChevronRight size={20} strokeWidth={2.25} color="#D87D4A" />
          </Button>
        </div>
      </div>
    </section>
  );
};
