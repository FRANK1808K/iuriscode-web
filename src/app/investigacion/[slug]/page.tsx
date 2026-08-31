import { publicationsData } from "@/lib/data";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";

// Generate static parameters for SSG
export function generateStaticParams() {
  return publicationsData.map((pub) => ({
    slug: pub.slug,
  }));
}

export default function PublicationDetailPage({ params }: { params: { slug: string } }) {
  const publication = publicationsData.find(p => p.slug === params.slug);

  if (!publication) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection direction="up" className="mb-8">
          <Link href="/investigacion" className="inline-flex items-center text-text-muted hover:text-accent-cyan transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Volver a Investigación
          </Link>

          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="default" className="uppercase tracking-wider">{publication.type.replace('_', ' ')}</Badge>
            {publication.tags.map(tag => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            {publication.title}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-4 text-text-dim border-y border-border py-4 mb-10">
            <div className="flex flex-col">
              <span className="text-text-muted font-medium">Autores:</span>
              <span>{publication.authors.join(", ")}</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-border"></div>
            <div className="flex flex-col">
              <span className="text-text-muted font-medium">Publicado en:</span>
              <span>{publication.journalOrPublisher || 'N/A'}</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-border"></div>
            <div className="flex flex-col">
              <span className="text-text-muted font-medium">Fecha:</span>
              <span>{formatDate(publication.publicationDate)}</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.1} className="prose prose-invert prose-lg prose-headings:text-text-primary prose-a:text-accent-cyan hover:prose-a:text-accent-violet max-w-none">
          <div className="bg-surface/50 p-6 md:p-8 rounded-2xl border border-border mb-10">
            <h3 className="text-xl font-bold mb-4 mt-0">Resumen</h3>
            <p className="text-text-muted m-0 italic">{publication.abstract}</p>
          </div>

          {/* Simple plain-text Markdown renderer for MVP */}
          <div className="whitespace-pre-wrap leading-relaxed text-text-muted space-y-6">
            {publication.content.replace(/##/g, '').replace(/>/g, '')}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2} className="mt-16 pt-10 border-t border-border flex flex-wrap gap-4">
          {publication.externalUrl && (
            <a href={publication.externalUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                Leer original <ExternalLink size={16} className="ml-2" />
              </Button>
            </a>
          )}
          {publication.pdfUrl && (
            <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                Descargar PDF <Download size={16} className="ml-2" />
              </Button>
            </a>
          )}
        </AnimatedSection>

      </div>
    </div>
  );
}
