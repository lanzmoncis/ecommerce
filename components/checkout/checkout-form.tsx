"use client";

import * as z from "zod";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PayModal } from "@/components/modals/payment-modal";

import { useFromStore } from "@/hooks/use-from-store";
import { useCartTotals } from "@/hooks/use-cart-total";

import { useCartStore } from "@/store/cart-store";

import { SHIPPING_FEE } from "@/constants/fees";

import { formSchema } from "@/schema/form-schema";

export const CheckOutForm = () => {
  const [open, setOpen] = useState(false);

  const cart = useFromStore(useCartStore, (state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const { total, tax, grandTotal } = useCartTotals();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      type: "eMoney",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setOpen(true);
    // clearCart();
  }

  return (
    <>
      <PayModal isOpen={open} />
      <div className="max-w-[327px] md:max-w-[689px] lg:max-w-[1110px] mx-auto mb-24">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 lg:grid lg:grid-cols-[65%_1fr] lg:space-y-0 lg:gap-6"
          >
            <div className="space-y-9 md:space-y-11 rounded-lg py-8 px-6 bg-white">
              <h3 className="text-custom-xl uppercase mb-4">Checkout</h3>
              <div>
                <h4 className="text-custom-subtitle uppercase text-orange mb-4">
                  Billing details
                </h4>
                <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-4 md:gap-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Alexie Ward" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="alexie@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 202-555-0136" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <h4 className="text-custom-subtitle uppercase text-orange mb-4">
                  Shipping Info
                </h4>
                <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-4 md:gap-y-6">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Your Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="1137 Williams Avenue"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input placeholder="10001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="New York" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input placeholder="United States" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <h4 className="text-custom-subtitle uppercase text-orange mb-4">
                  Payment Details
                </h4>
                <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-4 md:gap-y-6">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="space-y-3 md:grid md:grid-cols-2 col-span-2 md:space-y-0 md:gap-4">
                        <FormLabel>Payment Method</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0 h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:border-orange disabled:cursor-not-allowed disabled:opacity-50">
                              <FormControl>
                                <RadioGroupItem value="eMoney" />
                              </FormControl>
                              <FormLabel className="text-sm font-medium">
                                e-Money
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:border-orange disabled:cursor-not-allowed disabled:opacity-50">
                              <FormControl>
                                <RadioGroupItem value="cashOnDelivery" />
                              </FormControl>
                              <FormLabel className="font-sm font-medium">
                                Cash on Delivery
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eMoneyNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>e-Money Number</FormLabel>
                        <FormControl>
                          <Input placeholder="238521993" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eMoneyPin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>e-Money PIN</FormLabel>
                        <FormControl>
                          <Input placeholder="6891" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-10 rounded-lg py-8 px-6 bg-white lg:h-fit">
              <h3 className="text-custom-xl uppercase mb-4">Summary</h3>
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
                    <div className="text-gray-500 text-custom-base font-semibold">
                      x{item.cartQuantity}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full space-y-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between w-full uppercase">
                    <div className="text-gray-500">Total</div>
                    <div className="text-custom-md tracking-[0]">
                      $ {total?.toLocaleString("en-US")}
                    </div>
                  </div>
                  <div className="flex justify-between w-full uppercase">
                    <div className="text-gray-500">Shipping</div>
                    <div className="text-custom-md tracking-[0]">
                      $ {SHIPPING_FEE?.toLocaleString("en-US")}
                    </div>
                  </div>
                  <div className="flex justify-between w-full uppercase">
                    <div className="text-gray-500">Vat included</div>
                    <div className="text-custom-md tracking-[0]">
                      $ {tax?.toLocaleString("en-US")}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full uppercase">
                  <div className="text-gray-500">Grand Total</div>
                  <div className="text-custom-md tracking-[0] text-orange">
                    $ {grandTotal?.toLocaleString("en-US")}
                  </div>
                </div>
                <Button className="w-full" type="submit">
                  Continue and Pay
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};
