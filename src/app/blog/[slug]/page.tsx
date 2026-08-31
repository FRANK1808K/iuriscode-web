import { blogPostsData } from "@/lib/data";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { calculateReadingTime, formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const readingTime = post.readingTimeMinutes || calculateReadingTime(post.content);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection direction="up" className="mb-10">
          <Link href="/blog" className="inline-flex items-center text-text-muted hover:text-accent-cyan transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Volver al Blog
          </Link>

          <div className="flex flex-wrap gap-3 mb-6 items-center">
            <Badge variant="violet">{post.category.replace('_', ' ')}</Badge>
            <div className="flex items-center gap-4 text-sm text-text-dim ml-2">
              <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(post.publishedAt)}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {readingTime} min de lectura</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-text-muted mb-10 leading-relaxed italic border-l-4 border-accent-cyan pl-4">
            {post.excerpt}
          </p>
        </AnimatedSection>

        {post.coverImageUrl && (
          <AnimatedSection direction="up" delay={0.1} className="mb-12 rounded-2xl overflow-hidden border border-border aspect-video relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.coverImageUrl} alt={post.title} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
          </AnimatedSection>
        )}

        <AnimatedSection direction="up" delay={0.2} className="prose prose-invert prose-lg prose-headings:text-text-primary prose-a:text-accent-cyan hover:prose-a:text-accent-violet max-w-none">
          {/* Simple plain-text Markdown renderer for MVP */}
          <div className="whitespace-pre-wrap leading-relaxed text-text-muted space-y-6">
            {post.content.replace(/##/g, '').replace(/>/g, '')}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.3} className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            <span className="text-text-primary font-medium mr-2">Etiquetas:</span>
            {post.tags.map(tag => (
              <span key={tag} className="text-accent-cyan text-sm">#{tag}</span>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
