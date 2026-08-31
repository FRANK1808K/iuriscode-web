import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";

// Generate static parameters for SSG
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection direction="up" className="mb-8">
          <Link href="/proyectos" className="inline-flex items-center text-text-muted hover:text-accent-cyan transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Volver a Proyectos
          </Link>

          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags.map(tag => (
              <Badge key={tag} variant="violet">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            {project.title}
          </h1>
          
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-6 border-t border-border mb-12">
            {project.projectUrl && (
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                  Visitar Proyecto <ExternalLink size={16} className="ml-2" />
                </Button>
              </a>
            )}
            {project.repositoryUrl && (
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  Ver Repositorio <GitHubIcon size={16} className="ml-2" />
                </Button>
              </a>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.1} className="prose prose-invert prose-lg prose-headings:text-text-primary prose-a:text-accent-cyan hover:prose-a:text-accent-violet max-w-none">
          <div className="bg-surface p-6 md:p-8 rounded-2xl border border-border mb-10">
            <h3 className="text-lg font-bold mb-4 text-text-primary uppercase tracking-wider">Tecnologías Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <Badge key={tech} variant="outline" className="text-sm py-1.5 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Simple plain-text Markdown renderer for MVP */}
          <div className="whitespace-pre-wrap leading-relaxed text-text-muted space-y-6">
            {project.content.replace(/##/g, '').replace(/>/g, '')}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
