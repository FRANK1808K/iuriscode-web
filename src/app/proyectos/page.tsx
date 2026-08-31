import { projectsData } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { FolderKanban } from "lucide-react";

export default function ProjectsPage() {
  const publishedProjects = projectsData.filter(p => p.published);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed": return <Badge variant="success">Completado</Badge>;
      case "in_progress": return <Badge variant="violet">En Curso</Badge>;
      case "planned": return <Badge variant="default">Planificado</Badge>;
      default: return null;
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="mb-16">
          <SectionHeading 
            title="Proyectos y Casos" 
            subtitle="Explora las iniciativas de innovación tecnológica y legal que he desarrollado o en las que estoy trabajando actualmente."
            accentText="PORTAFOLIO"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publishedProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1} direction="up">
              <Link href={`/proyectos/${project.slug}`} className="block h-full">
                <GlassCard hover className="h-full flex flex-col p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-surface border border-border">
                      <FolderKanban size={28} className="text-accent-cyan" />
                    </div>
                    {getStatusBadge(project.status)}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-muted mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium text-text-dim uppercase tracking-wider mb-3">Stack Tecnológico</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="outline" className="border-accent-cyan/30 text-accent-cyan bg-accent-cyan/5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </div>
  );
}
