import { useCartStore } from "@/store/use-cart-store";

import { TAX_RATE, SHIPPING_FEE } from "@/constants/fees";

export const useCartTotals = () => {
  const cart = useCartStore((state) => state.cart);

  const total = cart?.reduce(
    (acc, product) => acc + product.price * (product.cartQuantity as number),
    0
  );

  const tax = TAX_RATE * total;
  const grandTotal = total + tax + SHIPPING_FEE;

  return {
    total,
    tax,
    grandTotal,
  };
};
