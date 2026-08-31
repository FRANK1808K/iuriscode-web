import { blogPostsData } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { formatDate, calculateReadingTime } from "@/lib/utils";
import { Clock } from "lucide-react";

export default function BlogPage() {
  const publishedPosts = blogPostsData
    .filter(p => p.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const featuredPost = publishedPosts.find(p => p.featured) || publishedPosts[0];
  const regularPosts = publishedPosts.filter(p => p.id !== featuredPost?.id);

  const getCategoryLabel = (cat: string) => {
    const categories: Record<string, string> = {
      legaltech: "LegalTech",
      ai: "Inteligencia Artificial",
      data_protection: "Protección de Datos",
      digital_gov: "Gobierno Digital",
      innovation: "Innovación",
      cybersecurity: "Ciberseguridad",
    };
    return categories[cat] || cat;
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="mb-16">
          <SectionHeading 
            title="Insights & Análisis" 
            subtitle="Reflexiones sobre derecho digital, innovación legal y el impacto de las tecnologías emergentes en la sociedad."
            accentText="BLOG"
          />
        </AnimatedSection>

        {/* Featured Post */}
        {featuredPost && (
          <AnimatedSection direction="up" className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <GlassCard hover className="p-0 overflow-hidden flex flex-col lg:flex-row relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="violet">{getCategoryLabel(featuredPost.category)}</Badge>
                    <div className="flex items-center text-sm text-text-muted gap-1">
                      <Clock size={14} />
                      <span>{featuredPost.readingTimeMinutes || calculateReadingTime(featuredPost.content)} min</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 group-hover:text-accent-cyan transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-text-muted mb-8 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-text-dim">{formatDate(featuredPost.publishedAt)}</span>
                    <span className="text-accent-cyan font-medium group-hover:underline">Leer artículo completo →</span>
                  </div>
                </div>
                
                {/* Decorative right side if no cover image */}
                <div className="hidden lg:flex w-1/2 bg-surface border-l border-border relative overflow-hidden items-center justify-center">
                   <div className="absolute inset-0 bg-grid opacity-30"></div>
                   <div className="w-64 h-64 bg-accent-violet/20 rounded-full blur-[80px]"></div>
                </div>
              </GlassCard>
            </Link>
          </AnimatedSection>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.1} direction="up">
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <GlassCard hover className="h-full flex flex-col p-6 group">
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="outline">{getCategoryLabel(post.category)}</Badge>
                    <div className="flex items-center text-xs text-text-muted gap-1">
                      <Clock size={12} />
                      <span>{post.readingTimeMinutes || calculateReadingTime(post.content)} min</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-text-muted mb-6 flex-grow line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-xs text-text-dim">{formatDate(post.publishedAt)}</span>
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
