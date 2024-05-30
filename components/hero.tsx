import { Button } from "./ui/button";
import { NavLinks } from "./ui/nav-links";

export const Hero = () => {
  return (
    <header className="relative bg-black-light">
      <div className="py-[32px] border-b-[0.5px] border-gray-extraDark relative z-10 bg-black-light">
        <NavLinks />
      </div>
      <div className="bg-[url('/images/home/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat h-[600px] w-full absolute -mt-20">
        <div className="relative text-2xl text-white flex flex-col justify-center h-full items-center max-w-[329px] mx-auto gap-2">
          <div className="uppercase text-custom-overline text-gray-extraDark text-center mb-1">
            new product
          </div>
          <h1 className="text-[36px] uppercase font-bold leading-[40px] tracking-[1.29px] text-center mb-2">
            xx99 mark ii headphones
          </h1>
          <p className="text-custom-base text-gray-extraDark text-center mb-2">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button>See product</Button>
        </div>
      </div>
    </header>
  );
};
