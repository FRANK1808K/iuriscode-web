'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { statsData } from '@/lib/data';
import AnimatedSection from '@/components/ui/AnimatedSection';

function Counter({ from, to }: { from: number; to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const duration = 2000;
      
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        
        const easeProgress = progress * (2 - progress);
        
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, from, to]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-surface/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const numericMatch = typeof stat.value === 'string' ? stat.value.match(/(\d+)/) : null;
            const numericValue = numericMatch ? parseInt(numericMatch[0], 10) : (typeof stat.value === 'number' ? stat.value : 0);
            
            const prefix = typeof stat.value === 'string' && numericMatch ? stat.value.substring(0, numericMatch.index) : '';
            const suffix = typeof stat.value === 'string' && numericMatch ? stat.value.substring(numericMatch.index! + numericMatch[0].length) : '';

            return (
              <AnimatedSection key={stat.label} delay={index * 0.1} direction="up" className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {prefix}
                  {numericValue > 0 ? <Counter from={0} to={numericValue} /> : stat.value}
                  {suffix}
                </div>
                <div className="text-text-muted text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
