"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
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
            <div>{children}</div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div ref={setContainer} />
    </>
  );
};
