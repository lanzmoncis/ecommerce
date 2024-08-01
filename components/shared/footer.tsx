"use client";

import Image from "next/image";
import Link from "next/link";

import Facebook from "@/public/images/shared/desktop/icon-facebook.svg";
import Twitter from "@/public/images/shared/desktop/icon-twitter.svg";
import Instagram from "@/public/images/shared/desktop/icon-instagram.svg";

import { routes } from "@/lib/links";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-[327px] flex flex-col items-center mx-auto gap-10 py-10 md:items-start md:max-w-[689px] xl:max-w-[1110px] relative">
        <div className="border-2 border-orange w-[104px] absolute top-0"></div>
        <div className="w-full flex flex-col items-center md:items-start xl:flex-row xl:justify-between xl:items-center gap-10">
          <Image
            src="/images/shared/desktop/logo.svg"
            height={25}
            width={144}
            alt="Audiophile logo"
            priority
          />
          <ul className="text-custom-subtitle text-white uppercase flex flex-col items-center gap-4 md:flex-row">
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.href}
                  key={route.name}
                  className="hover:text-orange cursor-pointer duration-300"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-10 md:justify-between">
          <p className="text-custom-base text-gray-extraDark text-center md:text-left md:w-full xl:w-[50%] xl:self-start">
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7 days a week.
          </p>
          <div className="w-full flex flex-col items-center gap-10 md:flex-row md:justify-between xl:relative">
            <p className="text-custom-base text-gray-extraDark text-center">
              Copyright 2021. All Rights Reserved
            </p>
            <div className="flex gap-5 xl:absolute xl:right-0 xl:bottom-16 ">
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
      </div>
    </footer>
  );
};
