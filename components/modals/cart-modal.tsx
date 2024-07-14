"use client";

import { Modal } from "@/components/ui/modal";
import { ShoppingCart } from "lucide-react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white flex flex-col justify-center items-center gap-6 py-10 h-[320px]">
        <div className="text-gray-500 text-custom-md">Your cart is empty</div>
        <ShoppingCart size={48} />
      </div>
    </Modal>
  );
};
