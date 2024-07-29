"use client";

import * as React from "react";

import { useFormField } from "@/components/ui/form";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { error, formItemId } = useFormField();
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground placeholder:text-[14px] placeholder:tracking-[-0.25px] focus-visible:outline-none focus-visible:border-orange disabled:cursor-not-allowed disabled:opacity-50",
          className,
          error && "border-[#CD2C2C] border-[1.5px]"
        )}
        ref={ref}
        id={formItemId}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
