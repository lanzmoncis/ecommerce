"use client";

import { Modal } from "@/components/ui/modal";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="items-center justify-end w-full pt-6 space-x-2">
        <div className="p-10"></div>
      </div>
    </Modal>
  );
};
