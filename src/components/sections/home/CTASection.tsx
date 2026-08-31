'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection direction="up">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 lg:p-20 flex flex-col items-center text-center">
          {/* Gradient Background / Glow */}
          <div className="absolute inset-0 bg-surface border border-glass-border rounded-3xl" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-cyan/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-violet/20 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              ¿Listo para explorar el futuro del Derecho?
            </h2>
            <p className="text-lg text-text-muted mb-10">
              Descubre cómo la tecnología y la innovación están transformando la práctica jurídica.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/blog">
                <Button variant="primary" size="lg">
                  Leer el Blog
                </Button>
              </Link>
              <Link href="/sobre-mi">
                <Button variant="outline" size="lg">
                  Conocer más sobre mí
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
