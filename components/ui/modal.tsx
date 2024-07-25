"use client";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface ModalProps {
  open: boolean;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, children }) => {
  // const onChange = (open: boolean) => {
  //   if (!open) {
  //     onClose();
  //   }
  // };
  // onOpenChange={onChange}

  return (
    <Dialog open={open}>
      <DialogContent
        aria-describedby={undefined}
        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"
      >
        <VisuallyHidden.Root asChild>
          <DialogTitle className="text-gray-700">
            Checkout Confirmation
          </DialogTitle>
        </VisuallyHidden.Root>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
