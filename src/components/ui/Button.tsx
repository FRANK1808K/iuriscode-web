'use client';
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    
    // Warp-inspired tight geometry (border-radius: 3px / rounded-sm)
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-[3px]";
    
    const variants = {
      primary: "bg-primary text-on-primary hover:bg-body-strong",
      secondary: "bg-canvas-soft text-ink border border-hairline hover:bg-hairline",
      outline: "bg-transparent text-ink border border-hairline hover:bg-canvas-soft",
      ghost: "bg-transparent text-ink hover:bg-canvas-soft",
      icon: "bg-transparent text-ink hover:bg-canvas-soft rounded-full"
    };

    const sizes = {
      sm: "h-8 px-3 text-[14px]",
      md: "h-10 px-4 py-2 text-[14px]", // text-button-md
      lg: "h-12 px-6 text-[16px]",
      icon: "p-2"
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export default Button;
