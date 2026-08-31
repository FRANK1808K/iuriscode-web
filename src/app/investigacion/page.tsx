import { publicationsData } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { formatDate, truncate } from "@/lib/utils";
import { FileText, Book, GraduationCap, Mic } from "lucide-react";

const getPublicationIcon = (type: string) => {
  switch (type) {
    case "article": return <FileText size={20} className="text-accent-cyan" />;
    case "book_chapter": return <Book size={20} className="text-accent-violet" />;
    case "thesis": return <GraduationCap size={20} className="text-success" />;
    case "paper":
    case "conference_paper": return <Mic size={20} className="text-warning" />;
    default: return <FileText size={20} />;
  }
};

const getPublicationTypeLabel = (type: string) => {
  const types: Record<string, string> = {
    article: "Artículo",
    book_chapter: "Capítulo de Libro",
    thesis: "Tesis",
    paper: "Paper",
    conference_paper: "Ponencia",
  };
  return types[type] || type;
};

export default function ResearchPage() {
  const publishedPublications = publicationsData.filter(p => p.published);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="mb-16">
          <SectionHeading 
            title="Investigación y Publicaciones" 
            subtitle="Artículos, investigaciones, ponencias y producción intelectual en la convergencia del Derecho y la Tecnología."
            accentText="PRODUCCIÓN ACADÉMICA"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedPublications.map((pub, index) => (
            <AnimatedSection key={pub.id} delay={index * 0.1} direction="up">
              <Link href={`/investigacion/${pub.slug}`} className="block h-full">
                <GlassCard hover className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-surface border border-border">
                      {getPublicationIcon(pub.type)}
                    </div>
                    <Badge variant="outline">{getPublicationTypeLabel(pub.type)}</Badge>
                    {pub.featured && <Badge variant="violet">Destacado</Badge>}
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-3 line-clamp-2">
                    {pub.title}
                  </h3>
                  
                  <p className="text-text-muted mb-6 flex-grow line-clamp-3">
                    {pub.abstract}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-border flex flex-col gap-2">
                    <p className="text-sm text-text-dim">
                      {pub.journalOrPublisher} • {formatDate(pub.publicationDate)}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {pub.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs text-accent-cyan">#{tag}</span>
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
