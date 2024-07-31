import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "@/types/product-type";

interface State {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (Item: Product, quantity: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart: (product: Product, quantity: number) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  cartQuantity: (item.cartQuantity as number) + quantity,
                }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + quantity,
            totalPrice: state.totalPrice + product.price * quantity,
          }));
        } else {
          const updatedCart = [...cart, { ...product, cartQuantity: quantity }];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price * quantity,
          }));
        }
      },
      increaseQuantity: (productId: number) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === productId);
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === productId
              ? { ...item, cartQuantity: (item.cartQuantity as number) + 1 }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + cartItem.price,
          }));
        }
      },
      decreaseQuantity: (productId: number) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === productId);
        if (cartItem) {
          if ((cartItem.cartQuantity as number) > 1) {
            const updatedCart = cart.map((item) =>
              item.id === productId
                ? { ...item, cartQuantity: (item.cartQuantity as number) - 1 }
                : item
            );
            set((state) => ({
              cart: updatedCart,
              totalItems: state.totalItems - 1,
              totalPrice: state.totalPrice - cartItem.price,
            }));
          } else {
            const updatedCart = cart.filter((item) => item.id !== productId);
            set((state) => ({
              cart: updatedCart,
              totalItems: state.totalItems - 1,
              totalPrice: state.totalPrice - cartItem.price,
            }));
          }
        }
      },
      clearCart: () => {
        set({
          cart: INITIAL_STATE.cart,
          totalItems: INITIAL_STATE.totalItems,
          totalPrice: INITIAL_STATE.totalPrice,
        });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
