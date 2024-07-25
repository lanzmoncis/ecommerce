import { create } from "zustand";

interface usePayModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const usePayModal = create<usePayModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
