"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { useCartStore } from "@/store/use-cart-store";

import { useFromStore } from "@/hooks/use-from-store";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  const router = useRouter();

  const cart = useFromStore(useCartStore, (state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart?.reduce(
    (acc, product) => acc + product.price * (product.cartQuantity as number),
    0
  );

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const handleClearCart = () => {
    clearCart();
    toast("Removed cart item(s)");
  };

  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={onChange}>
        <Dialog.Portal container={container}>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content
            aria-describedby={undefined}
            className="absolute top-32 left-[50%] md:left-[73%] xl:left-[83%] translate-x-[-50%] z-50 grid w-full max-w-[327px] md:max-w-[377px] gap-4 border bg-white shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg"
          >
            <VisuallyHidden.Root asChild>
              <Dialog.Title>Cart Modal</Dialog.Title>
            </VisuallyHidden.Root>
            <div>
              {cart?.length === 0 ? (
                <div className="flex flex-col justify-center items-center gap-6 py-10 h-full w-full">
                  <div className="text-gray-extraDark text-custom-md">
                    Your cart is empty
                  </div>
                  <ShoppingCart size={48} color="#979797" />
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center py-8 px-6 space-y-8">
                  <div className="flex justify-between w-full">
                    <div className="uppercase text-custom-md">
                      cart ({cart?.length})
                    </div>
                    <button
                      className="text-gray-extraDark underline hover:text-orange focus:outline-none"
                      onClick={handleClearCart}
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
                      <div className="text-gray-extraDark text-custom-base">
                        Total
                      </div>
                      <div className="text-custom-md tacking-[0]">
                        $ {total?.toLocaleString("en-US")}
                      </div>
                    </div>
                    <Button
                      className="w-full"
                      onClick={() => router.push("/checkout")}
                    >
                      Checkout
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div ref={setContainer} />
    </>
  );
};
