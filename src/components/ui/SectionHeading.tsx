import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accentText?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  accentText,
  alignment = 'center',
  className
}) => {
  return (
    <div className={cn("flex flex-col gap-3", alignment === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      {accentText && (
        <span className="font-mono text-sm uppercase tracking-wider text-accent-cyan">
          {accentText}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
