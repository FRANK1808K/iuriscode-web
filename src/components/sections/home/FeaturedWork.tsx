'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { publicationsData, projectsData } from '@/lib/data';
import { formatDate, truncate } from '@/lib/utils';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export default function FeaturedWork() {
  const featuredPublications = publicationsData.filter((p) => p.featured).map(p => ({ 
    ...p, 
    type: 'Publicación' as const, 
    url: `/investigacion/${p.slug}`,
    displayDate: p.publicationDate,
    displayDesc: p.abstract
  }));
  const featuredProjects = projectsData.filter((p) => p.featured).map(p => ({ 
    ...p, 
    type: 'Proyecto' as const, 
    url: `/proyectos/${p.slug}`,
    displayDate: p.startDate,
    displayDesc: p.description
  }));
  
  const allFeatured = [...featuredPublications, ...featuredProjects].slice(0, 3);

  return (
    <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        accentText="TRABAJO DESTACADO" 
        title="Investigación y Proyectos Recientes" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {allFeatured.map((item, index) => (
          <AnimatedSection key={item.slug} delay={index * 0.1} direction="up">
            <Link href={item.url} className="block h-full">
              <GlassCard hover className="h-full p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant={item.type === 'Publicación' ? 'violet' : 'default'}>
                    {item.type}
                  </Badge>
                  <div className="flex items-center text-xs text-text-muted gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(item.displayDate)}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-text-muted text-sm flex-grow line-clamp-3">
                  {item.displayDesc ? truncate(item.displayDesc, 120) : ''}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {item.tags?.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </GlassCard>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
