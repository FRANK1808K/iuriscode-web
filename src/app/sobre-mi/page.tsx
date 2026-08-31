import { profileData } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Profile Section */}
        <AnimatedSection className="mb-20 pt-10" direction="up">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              <div className="aspect-square rounded-2xl bg-surface border border-border overflow-hidden relative flex items-center justify-center">
                {profileData.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profileData.avatarUrl} alt={profileData.fullName} className="object-cover w-full h-full" />
                ) : (
                  <div className="text-6xl text-primary-light font-bold">
                    {profileData.fullName.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <div className="flex gap-4 justify-center md:justify-start">
                <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-accent-cyan transition-colors">
                  <LinkedInIcon size={20} />
                </a>
                <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-accent-cyan transition-colors">
                  <GitHubIcon size={20} />
                </a>
                <a href={profileData.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-accent-cyan transition-colors">
                  <WhatsAppIcon size={20} />
                </a>
                <a href={`mailto:${profileData.socialLinks.email}`} className="p-3 glass rounded-full hover:text-accent-cyan transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{profileData.fullName}</h1>
              <p className="text-gradient text-xl md:text-2xl font-medium mb-6">{profileData.title}</p>
              <div className="prose prose-invert prose-p:text-text-muted prose-headings:text-text-primary max-w-none">
                {/* For MVP, rendering plain text extended bio. Future: use React Markdown */}
                <div className="text-text-muted text-lg leading-relaxed space-y-4 whitespace-pre-wrap">
                  {profileData.bioExtended.replace(/##/g, '').replace(/>/g, '')}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <AnimatedSection direction="up" delay={0.1}>
            <SectionHeading title="Experiencia" alignment="left" className="mb-8" />
            <div className="flex flex-col gap-6">
              {profileData.experience.map((exp, index) => (
                <GlassCard key={index} className="relative pl-8">
                  <div className="absolute left-0 top-6 bottom-0 w-px bg-border ml-[11px]"></div>
                  <div className="absolute left-0 top-6 w-[24px] h-[24px] rounded-full bg-surface border-2 border-accent-cyan flex items-center justify-center -translate-x-0">
                    <div className="w-2 h-2 rounded-full bg-accent-cyan"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                    <p className="text-accent-violet font-medium">{exp.organization}</p>
                    <p className="text-sm text-text-dim mb-3">{exp.period}</p>
                    {exp.description && <p className="text-text-muted">{exp.description}</p>}
                  </div>
                </GlassCard>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <SectionHeading title="Educación" alignment="left" className="mb-8" />
            <div className="flex flex-col gap-6">
              {profileData.education.map((edu, index) => (
                <GlassCard key={index} className="relative pl-8">
                  <div className="absolute left-0 top-6 bottom-0 w-px bg-border ml-[11px]"></div>
                  <div className="absolute left-0 top-6 w-[24px] h-[24px] rounded-full bg-surface border-2 border-accent-violet flex items-center justify-center -translate-x-0">
                    <div className="w-2 h-2 rounded-full bg-accent-violet"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-text-primary">{edu.degree}</h3>
                    <p className="text-accent-cyan font-medium">{edu.institution}</p>
                    <p className="text-sm text-text-dim mb-3">{edu.year}</p>
                    {edu.description && <p className="text-text-muted">{edu.description}</p>}
                  </div>
                </GlassCard>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Skills */}
        <AnimatedSection direction="up" className="mb-20">
          <SectionHeading title="Competencias y Habilidades" alignment="center" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileData.skills.map((skillGroup, index) => (
              <GlassCard key={index} hover>
                <h3 className="text-lg font-bold text-text-primary mb-4 text-center">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.items.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
