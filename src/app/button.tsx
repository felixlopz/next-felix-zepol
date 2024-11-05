import React from "react";
import { cn } from "./utils";
import { montserrat } from "./layout";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-[#130F0D] rounded-lg group bg-gradient-to-br hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 w-full",
  {
    variants: {
      variant: {
        default:
          "from-white to-white group-hover:from-white group-hover:to-white",
        spotify:
          "from-[#1db954] to-[#1db949] group-hover:from-[#1db954] group-hover:to-[#1db949]",
        apple:
          "from-[#FD4C5D] to-[#F92A3D] group-hover:from-[#FD4C5D] group-hover:to-[#F92A3D]",
        amazon:
          "from-[#3B09F8] to-[#271D65] group-hover:from-[#3B09F8] group-hover:to-[#271D65]",
        deezer:
          "from-[#9733F8] to-[#891df5] group-hover:from-[#9733F8] group-hover:to-[#891df5]",
        tidal:
          "from-[#000] to-[#000] group-hover:from-[#000] group-hover:to-[#000]",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  const Comp = "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span
        className={cn(
          "flex items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#130F0D] text-white rounded-md group-hover:bg-opacity-0 text-base w-full",
          montserrat.className
        )}
      >
        {props.children}
      </span>
    </Comp>
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
