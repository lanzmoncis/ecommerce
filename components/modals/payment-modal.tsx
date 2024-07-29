"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Check } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { useFromStore } from "@/hooks/use-from-store";
import { useCartTotals } from "@/hooks/use-cart-total";

import { useCartStore } from "@/store/cart-store";

interface PayModalProps {
  isOpen: boolean;
}

export const PayModal: React.FC<PayModalProps> = ({ isOpen }) => {
  const router = useRouter();

  const cart = useFromStore(useCartStore, (state) => state.cart);
  const { total } = useCartTotals();

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed left-[50%] top-[50%] max-w-[327px] md:max-w-[540px] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"
        >
          <VisuallyHidden.Root asChild>
            <Dialog.Title>Payment confirmation Modal</Dialog.Title>
          </VisuallyHidden.Root>
          <div className="p-1 space-y-6 md:space-y-8 md:p-4">
            <div className="space-y-6 md:space-y-8">
              <div className="bg-orange rounded-full w-16 h-16 flex justify-center items-center">
                <div>
                  <Check color="#fff" size={36} strokeWidth={3} />
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-custom-lg uppercase">
                  Thank you <br /> for your order
                </p>
                <p className="text-gray-500 text-custom-base">
                  You will receive an email confirmation shortly
                </p>
              </div>
              <div className="md:grid md:grid-cols-[55%_1fr]">
                <div className="bg-[#979797]/15 p-6 space-y-3 rounded-t-lg">
                  {cart && cart.length > 0 && (
                    <>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                          <Image
                            src={cart[0].cartImage}
                            alt={cart[0].name}
                            width={64}
                            height={64}
                            className="rounded-lg"
                          />
                          <div className="text-custom-base uppercase font-semibold">
                            <div className="mb-[1px]">{cart[0].shortName}</div>
                            <div className="text-gray-500">
                              $ {cart[0].price.toLocaleString("en-US")}
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-500 text-custom-base font-semibold">
                          x{cart[0].cartQuantity}
                        </div>
                      </div>
                      <Separator />
                      <div className="text-center text-gray-500 text-[12px] tracking-[-0.21px]">
                        and {cart.length} other items(s)
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6 bg-black space-y-2 rounded-b-lg md:place-content-center">
                  <div className="uppercase text-gray-500 text-custom-base">
                    Grand total
                  </div>
                  <div className="text-white text-custom-md font-bold">
                    $ {total.toLocaleString("en-US")}
                  </div>
                </div>
              </div>
            </div>
            <Button className="w-full" onClick={() => router.push("/")}>
              Back to home
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
