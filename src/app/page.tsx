import HeroSection from '@/components/sections/home/HeroSection';
import ValueProposition from '@/components/sections/home/ValueProposition';
import FeaturedWork from '@/components/sections/home/FeaturedWork';
import StatsSection from '@/components/sections/home/StatsSection';
import CTASection from '@/components/sections/home/CTASection';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <HeroSection />
      <ValueProposition />
      <FeaturedWork />
      <StatsSection />
      <CTASection />
    </main>
  );
}
