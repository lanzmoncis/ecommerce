"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Minus, Plus, ShoppingCart } from "lucide-react";

import { CustomModal } from "@/components/ui/custom-modal";
import { Button } from "@/components/ui/button";

import { useCartStore } from "@/store/cart-store";

import { useFromStore } from "@/hooks/use-from-store";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const cart = useFromStore(useCartStore, (state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart?.reduce(
    (acc, product) => acc + product.price * (product.cartQuantity as number),
    0
  );

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      {cart?.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-6 py-10 h-full w-full">
          <div className="text-gray-500 text-custom-md">Your cart is empty</div>
          <ShoppingCart size={48} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center py-8 px-6 space-y-8">
          <div className="flex justify-between w-full">
            <div className="uppercase text-custom-md">
              cart ({cart?.length})
            </div>
            <button
              className="text-gray-500 underline hover:text-orange focus:outline-none"
              onClick={() => clearCart()}
            >
              Remove all
            </button>
          </div>
          <div className="w-full space-y-6">
            {cart?.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center w-full"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.cartImage}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                  <div className="text-custom-base uppercase font-semibold">
                    <div className="mb-[1px]">{item.shortName}</div>
                    <div className="text-gray-500">
                      $ {item.price.toLocaleString("en-US")}
                    </div>
                  </div>
                </div>
                <div className="h-[32px] flex items-center bg-gray-dark gap-4 px-4 w-[96px]">
                  <Minus
                    size={8}
                    color="#6b7280"
                    strokeWidth={3}
                    className="cursor-pointer"
                    onClick={() => decreaseQuantity(item.id)}
                  />
                  <span className="w-[16px] text-center text-custom-subtitle">
                    {item.cartQuantity}
                  </span>
                  <Plus
                    size={8}
                    color="#6b7280"
                    strokeWidth={3}
                    className="cursor-pointer"
                    onClick={() => increaseQuantity(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full space-y-7">
            <div className="flex justify-between w-full uppercase">
              <div className="text-gray-500">Total</div>
              <div className="text-custom-md tacking-[0]">
                $ {total?.toLocaleString("en-US")}
              </div>
            </div>
            <Button className="w-full" onClick={() => router.push("/checkout")}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </CustomModal>
  );
};
