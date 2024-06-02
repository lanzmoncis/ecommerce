import Image from "next/image";

import Facebook from "@/public/images/shared/desktop/icon-facebook.svg";
import Twitter from "@/public/images/shared/desktop/icon-twitter.svg";
import Instagram from "@/public/images/shared/desktop/icon-instagram.svg";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-[327px] flex flex-col items-center mx-auto gap-10 py-10 md:items-start md:max-w-[689px]">
        <Image
          src="/images/shared/desktop/logo.svg"
          height={25}
          width={144}
          alt="Audiophile logo"
          priority
          className=""
        />
        <ul className="text-custom-subtitle text-white uppercase flex flex-col items-center gap-4 md:flex-row">
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
        <p className="text-custom-base text-gray-extraDark text-center md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </p>
        <div className="flex flex-col items-center gap-10 w-full md:flex-row md:justify-between">
          <p className="text-custom-base text-gray-extraDark text-center">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex gap-5">
            <Image
              src={Facebook}
              width={24}
              height={24}
              alt="audiophile facebook"
            />
            <Image
              src={Twitter}
              width={24}
              height={24}
              alt="audiophile Twitter"
            />
            <Image
              src={Instagram}
              width={24}
              height={24}
              alt="audiophile instagram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
