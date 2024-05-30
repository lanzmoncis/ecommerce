import { Button } from "./ui/button";
import { NavLinks } from "./ui/nav-links";

export const Hero = () => {
  return (
    <header className="bg-black-light relative flex flex-col h-[600px] mb-24">
      <div className="bg-[url('/images/home/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat w-full h-full absolute"></div>
      <div className="py-8 border-b border-gray-dark relative z-10 bg-black-light">
        <NavLinks />
      </div>
      <div className="relative flex justify-center items-center grow">
        <div className="flex flex-col justify-between items-center h-[290px] max-w-[329px]">
          <div className="uppercase text-custom-overline text-gray-extraDark text-center">
            new product
          </div>
          <h1 className="text-4xl uppercase text-white font-bold tracking-[1.29px] text-center">
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
