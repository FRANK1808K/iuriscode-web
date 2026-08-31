'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { Scale, Cpu, Lightbulb, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

const pillars = [
  {
    title: 'Derecho Digital',
    description: 'Gobernanza, regulación y cumplimiento normativo para entornos tecnológicos complejos.',
    icon: Scale,
    color: 'cyan',
  },
  {
    title: 'Tecnología Aplicada',
    description: 'Desarrollo de soluciones tecnológicas orientadas al sector legal y empresarial.',
    icon: Cpu,
    color: 'violet',
  },
  {
    title: 'Innovación Jurídica',
    description: 'Nuevas perspectivas para transformar la práctica del derecho en la era digital.',
    icon: Lightbulb,
    color: 'cyan',
  },
  {
    title: 'Inteligencia Artificial',
    description: 'Análisis, investigación y aplicación de IA en procesos legales y regulatorios.',
    icon: BrainCircuit,
    color: 'violet',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        accentText="PROPUESTA DE VALOR" 
        title="Donde el Derecho encuentra la Tecnología" 
        alignment="center"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <AnimatedSection key={pillar.title} delay={index * 0.1} direction="up">
              <GlassCard hover className="h-full p-6 flex flex-col items-start gap-4">
                <div className={cn(
                  "p-3 rounded-full mb-2",
                  pillar.color === 'cyan' ? 'bg-accent-cyan/10' : 'bg-accent-violet/10'
                )}>
                  <Icon className={cn(
                    "w-6 h-6",
                    pillar.color === 'cyan' ? 'text-accent-cyan' : 'text-accent-violet'
                  )} />
                </div>
                <h3 className="text-lg font-bold text-text-primary">{pillar.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{pillar.description}</p>
              </GlassCard>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
