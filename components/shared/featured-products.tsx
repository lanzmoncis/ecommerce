"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { useMediaQuery } from "@/hooks/use-media-query";

export const FeaturedProducts = () => {
  const isMediumScreens = useMediaQuery(
    "(min-width: 768px) and (max-width: 1279px)"
  );
  const isExtraLargeScreens = useMediaQuery("(min-width: 1280px)");

  const router = useRouter();

  return (
    <section className="max-w-[327px] mx-auto flex flex-col gap-6 mb-24 md:max-w-[689px] xl:max-w-[1110px]">
      <div className="h-[600px] bg-orange rounded-lg flex flex-col items-center justify-center gap-8 relative overflow-hidden md:h-[720px] xl:h-[560px] xl:grid xl:grid-cols-[60%_40%] xl:gap-0">
        <div className="flex justify-center items-center xl:relative xl:h-full">
          <div className="before:h-[540px] md:before:h-[870px] before:w-[540px] md:before:w-[870px] before:border before:border-[#D8D8D8]/30 before:rounded-full before:absolute flex justify-center items-center xl:absolute xl:left-32 xl:top-[74px]">
            <div className="before:h-[280px] md:before:h-[440px] before:w-[280px] md:before:w-[440px] before:border before:border-[#D8D8D8]/30 before:rounded-full before:absolute after:h-[320px] md:after:h-[540px] after:w-[320px] md:after:w-[540px] after:border after:border-[#D8D8D8]/30 after:rounded-full after:absolute flex justify-center items-center">
              <Image
                src={
                  isMediumScreens
                    ? "/images/home/tablet/image-speaker-zx9.png"
                    : isExtraLargeScreens
                    ? "/images/home/desktop/image-speaker-zx9.png"
                    : "/images/home/mobile/image-speaker-zx9.png"
                }
                width={
                  isMediumScreens ? 197 : isExtraLargeScreens ? 410.23 : 160
                }
                height={isMediumScreens ? 237 : isExtraLargeScreens ? 493 : 200}
                alt="ZX9 Speaker"
                className=" z-10"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center relative z-10 md:max-w-[349px] xl:items-start">
          <h2 className="text-custom-title-text text-white uppercase text-center px-20 w-full md:px-0 md:text-custom-4xl xl:text-left">
            zx9 speaker
          </h2>
          <p className="text-custom-base text-gray-dark text-center px-1 xl:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            className="font-bold text-[13px] tracking-[1px] bg-black hover:bg-[#4C4C4C]"
            onClick={() => router.push("speakers/zx9-speaker")}
          >
            see product
          </Button>
        </div>
      </div>
      <div className="h-[320px] bg-[url('/images/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-no-repeat flex flex-col justify-center rounded-lg md:bg-[url('/images/home/tablet/image-speaker-zx7.jpg')] xl:bg-[url('/images/home/desktop/image-speaker-zx7.jpg')]">
        <div className="ml-6 space-y-8 md:ml-16 xl:ml-24">
          <h2 className="text-custom-xl uppercase">zx7 speaker</h2>
          <Button
            variant="secondary"
            className="bg-white/0"
            onClick={() => router.push("speakers/zx7-speaker")}
          >
            see product
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:gap-3 xl:gap-7">
        <div className="h-[200px] bg-[url('/images/home/mobile/image-earphones-yx1.jpg')] bg-cover bg-no-repeat rounded-lg md:h-[320px] md:w-[339px] md:bg-[url('/images/home/tablet/image-earphones-yx1.jpg')] xl:bg-[url('/images/home/desktop/image-earphones-yx1.jpg')] xl:w-[540px]"></div>
        <div className="h-[200px] flex flex-col justify-center bg-gray-dark rounded-lg md:h-[320px] md:w-[339px] xl:w-[540px]">
          <div className="ml-6 space-y-6 md:ml-16 xl:ml-24">
            <h2 className="text-custom-xl uppercase">yx1 earphones</h2>
            <Button
              variant="secondary"
              className="bg-white/0"
              onClick={() => router.push("earphones/yx1-earphones")}
            >
              see product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
