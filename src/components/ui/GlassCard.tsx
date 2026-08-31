'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
  gradient?: 'cyan' | 'violet';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  className, 
  children, 
  hover = false, 
  gradient,
  ...props 
}) => {
  const gradientClass = gradient === 'cyan' 
    ? 'hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]' 
    : gradient === 'violet' 
      ? 'hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]'
      : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "glass rounded-xl p-6",
        hover && "glass-hover cursor-pointer transition-all duration-300",
        hover && gradientClass,
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
