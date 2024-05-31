import { Button } from "@/components/ui/button";
import Image from "next/image";

export const FeaturedProducts = () => {
  return (
    <section className="max-w-[327px] mx-auto flex flex-col gap-6 mb-24">
      <div className="h-[600px] bg-orange rounded-lg flex flex-col items-center justify-center gap-8 relative overflow-hidden">
        <div className="before:h-[540px] before:w-[540px] before:border before:border-[#D8D8D8]/30 before:rounded-full before:absolute flex justify-center items-center">
          <div className="before:h-[280px] before:w-[280px] before:border before:border-[#D8D8D8]/30 before:rounded-full before:absolute after:h-[320px] after:w-[320px] after:border after:border-[#D8D8D8]/30 after:rounded-full after:absolute flex justify-center items-center">
            <Image
              src="/images/home/mobile/image-speaker-zx9.png"
              width={160}
              height={200}
              alt="ZX9 Speaker"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center relative z-10">
          <h1 className="text-custom-title-text text-white uppercase text-center px-20">
            zx9 speaker
          </h1>
          <p className="text-custom-base text-gray-dark text-center px-1">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button className="font-bold text-[13px] tracking-[1px] bg-black">
            see product
          </Button>
        </div>
      </div>
      <div className="h-[320px] bg-[url('/images/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-no-repeat flex flex-col justify-center rounded-lg">
        <div className="ml-6 space-y-8">
          <h1 className="text-custom-xl uppercase">zx7 speaker</h1>
          <Button variant="secondary" className="bg-white/0">
            see product
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="h-[200px] bg-[url('/images/home/mobile/image-earphones-yx1.jpg')] bg-cover bg-no-repeat rounded-lg"></div>
        <div className="h-[200px] flex flex-col justify-center bg-gray-dark rounded-lg">
          <div className="ml-6 space-y-6">
            <h1 className="text-custom-xl uppercase">yx1 earphones</h1>
            <Button variant="secondary" className="bg-white/0">
              see product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
