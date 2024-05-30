import Image from "next/image";

import { Button } from "./ui/button";

export const SectionNav = () => {
  return (
    <div className="text-black max-w-[327px] w-full mx-auto flex flex-col items-center gap-20 mb-10">
      <div className="h-[165px] bg-gray-dark flex flex-col justify-center gap-2 items-center w-full">
        <Image
          src="/images/shared/desktop/image-category-thumbnail-headphones.png"
          alt="earphone"
          width={150}
          height={104}
          className="-mt-20"
        />
        <div className="flex flex-col gap-2 items-center">
          <span className="block text-custom-base font-bold tracking-[1.07px] uppercase">
            Headphones
          </span>
          <Button variant="ghost" size="sm">
            shop
          </Button>
        </div>
      </div>

      <div className="h-[165px] bg-gray-dark flex flex-col justify-center gap-2 items-center w-full">
        <Image
          src="/images/shared/desktop/image-category-thumbnail-speakers.png"
          alt="earphone"
          width={150}
          height={104}
          className="-mt-20"
        />
        <div className="flex flex-col gap-2 items-center">
          <span className="block text-custom-base font-bold tracking-[1.07px] uppercase ">
            Speakers
          </span>
          <Button variant="ghost" size="sm">
            shop
          </Button>
        </div>
      </div>

      <div className="h-[165px] bg-gray-dark flex flex-col justify-center gap-1 items-center w-full">
        <Image
          src="/images/shared/desktop/image-category-thumbnail-earphones.png"
          alt="earphone"
          width={160}
          height={104}
          className=" -mt-16"
        />
        <div className="flex flex-col gap-2 items-center mb-4">
          <span className="block text-custom-base font-bold tracking-[1.07px] uppercase">
            Earphones
          </span>
          <Button variant="ghost" size="sm">
            shop
          </Button>
        </div>
      </div>
    </div>
  );
};
