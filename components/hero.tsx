import { Button } from "./ui/button";
import { NavLinks } from "./ui/nav-links";

export const Hero = () => {
  return (
    <header className="relative bg-black-light">
      <div className="py-[32px] border-b-[0.5px] border-gray-extraDark relative z-10 bg-black-light">
        <NavLinks />
      </div>
      <div className="bg-[url('/images/home/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat h-[600px] w-full absolute -mt-20 flex flex-col justify-center items-center">
        <div className="relative text-2xl text-white flex flex-col justify-between items-center max-w-[329px] mx-auto h-[290px]">
          <div className="uppercase text-custom-overline text-gray-extraDark text-center">
            new product
          </div>
          <h1 className="text-[36px] uppercase font-bold leading-[40px] tracking-[1.29px] text-center">
            xx99 mark ii headphones
          </h1>
          <p className="text-custom-base text-gray-extraDark text-center h-[75px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button>See product</Button>
        </div>
      </div>
    </header>
  );
};
