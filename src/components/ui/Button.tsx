import React, { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden cursor-pointer";

    const variants = {
      primary: "bg-gradient-to-r from-accent-cyan to-accent-violet text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:scale-[1.02] active:scale-[0.98]",
      secondary: "bg-surface border border-border text-text-primary hover:border-border-hover hover:scale-[1.02] active:scale-[0.98]",
      outline: "bg-transparent border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan/10 hover:scale-[1.02] active:scale-[0.98]",
      ghost: "bg-transparent text-text-muted hover:text-accent-cyan hover:bg-primary-light/50",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    return (
      <button
        className={classes}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
