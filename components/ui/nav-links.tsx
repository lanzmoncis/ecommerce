import { Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";

export const NavLinks = () => {
  return (
    <div className="px-6 flex items-center">
      <div className="flex grow">
        <div>
          <Menu color="#ffffff" />
        </div>
        <div className="mx-auto">
          <Image
            src="/images/shared/desktop/logo.svg"
            height={25}
            width={144}
            alt="Audiophile logo"
            priority
          />
        </div>
      </div>
      <div>
        <ShoppingCart color="#ffffff" />
      </div>
    </div>
  );
};
