import React, { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = 'text', ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-text-muted">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-lg bg-surface border border-border px-3 py-2 text-text-primary placeholder:text-text-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan/20 focus-visible:border-accent-cyan disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            error && "border-red-500 focus-visible:ring-red-500/20 focus-visible:border-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-text-muted">
            {label}
          </label>
        )}
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-lg bg-surface border border-border px-3 py-2 text-text-primary placeholder:text-text-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan/20 focus-visible:border-accent-cyan disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y",
            error && "border-red-500 focus-visible:ring-red-500/20 focus-visible:border-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export default Input;
