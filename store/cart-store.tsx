import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "@/types/product-type";

interface CartStoreT {
  product?: Product[];
  setProducts: (products: Product[]) => void;
}

export const useCartStore = create<CartStoreT>()(
  persist(
    (set) => ({
      product: [],
      setProducts: (products: Product[]) => set({ product: products }),
    }),
    {
      name: "cart-storage", // name of the item in the storage (must be unique)
    }
  )
);
