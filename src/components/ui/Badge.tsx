import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'violet' | 'success' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variants = {
    default: "bg-primary-light/50 text-accent-cyan border-accent-cyan/20",
    violet: "bg-accent-violet/10 text-accent-violet border-accent-violet/20",
    success: "bg-success/10 text-success border-success/20",
    outline: "bg-transparent border-border text-text-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
