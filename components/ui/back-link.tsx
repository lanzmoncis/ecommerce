"use client";

import { useRouter } from "next/navigation";

export const GoBackLink = () => {
  const router = useRouter();

  return (
    <div className="text-gray-extraDark text-custom-base max-w-[327px] mx-auto mb-6 md:max-w-[689px] xl:max-w-[1110px]">
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};
