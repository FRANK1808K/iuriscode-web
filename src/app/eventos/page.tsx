import { eventsData } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { Calendar, MapPin, ExternalLink, Presentation, Users, Video } from "lucide-react";

export default function EventsPage() {
  const publishedEvents = eventsData
    .filter(e => e.published)
    .sort((a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime());

  const getEventIcon = (type: string) => {
    switch (type) {
      case "congress":
      case "conference": return <Presentation size={24} className="text-accent-cyan" />;
      case "seminar":
      case "workshop": return <Users size={24} className="text-accent-violet" />;
      case "webinar": return <Video size={24} className="text-success" />;
      default: return <Calendar size={24} />;
    }
  };

  const getEventTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      congress: "Congreso",
      conference: "Conferencia",
      seminar: "Seminario",
      workshop: "Taller",
      webinar: "Webinar",
    };
    return types[type] || type;
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="mb-16">
          <SectionHeading 
            title="Eventos y Participaciones" 
            subtitle="Congresos, seminarios, conferencias y talleres donde he tenido el privilegio de compartir y debatir ideas."
            accentText="ACTIVIDAD ACADÉMICA"
          />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline central line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-[0.5px] ml-6 md:ml-0 hidden sm:block"></div>
          
          <div className="flex flex-col gap-12 sm:gap-24">
            {publishedEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <AnimatedSection key={event.id} delay={0.1} direction={isEven ? "right" : "left"}>
                  <div className={`relative flex flex-col sm:flex-row items-start sm:items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                    
                    {/* Timeline Node */}
                    <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-background border-4 border-surface shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 flex items-center justify-center -translate-x-[0.5px] sm:-translate-x-1/2 ml-0 md:ml-0 hidden sm:flex">
                      {getEventIcon(event.type)}
                    </div>

                    {/* Content Card */}
                    <div className={`w-full sm:w-[calc(50%-3rem)] ${isEven ? 'sm:text-right' : 'sm:text-left'} pt-16 sm:pt-0`}>
                      <GlassCard hover className="p-6 sm:p-8">
                        <div className={`flex flex-wrap items-center gap-3 mb-4 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                          <Badge variant="outline">{getEventTypeLabel(event.type)}</Badge>
                          <Badge variant="violet">{event.role}</Badge>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                          {event.title}
                        </h3>
                        
                        <div className={`flex flex-col gap-2 mb-4 text-sm text-text-dim ${isEven ? 'sm:items-end' : 'sm:items-start'}`}>
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>
                              {formatDate(event.eventDate)} 
                              {event.eventEndDate && event.eventEndDate !== event.eventDate ? ` - ${formatDate(event.eventEndDate)}` : ''}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-text-muted mb-6">
                          {event.description}
                        </p>
                        
                        {event.externalUrl && (
                          <a 
                            href={event.externalUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`inline-flex items-center text-accent-cyan hover:text-accent-violet transition-colors text-sm font-medium ${isEven ? 'sm:flex-row-reverse sm:text-right' : ''}`}
                          >
                            Ver más detalles <ExternalLink size={14} className={isEven ? "mr-1" : "ml-1"} />
                          </a>
                        )}
                      </GlassCard>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
