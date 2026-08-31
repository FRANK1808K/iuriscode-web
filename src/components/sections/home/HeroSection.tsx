'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/lib/data';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background with animated grid */}
      <div className="absolute inset-0 bg-background bg-grid opacity-20 pointer-events-none" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-cyan/20 rounded-full blur-[100px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/20 rounded-full blur-[120px] animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-light/30 rounded-full blur-[100px] animate-float pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          {/* IURISCODE Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
            <span className="text-sm font-mono tracking-[0.3em] text-accent-cyan uppercase">
              IurisCode
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 tracking-tight">
            {profileData.fullName}
          </motion.h1>

          {/* Title */}
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-medium text-gradient mb-4">
            {profileData.title}
          </motion.h2>

          {/* Motto */}
          <motion.p variants={itemVariants} className="text-sm font-mono italic text-text-muted mb-8">
            &quot;It is never too late | The sky&apos;s the limit | Fly and never tire&quot;
          </motion.p>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-lg text-text-muted max-w-2xl mb-10 leading-relaxed">
            {profileData.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/investigacion">
              <Button variant="primary" size="lg">
                Explorar Investigación
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" size="lg">
                Contactar
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-text-muted"
      >
        <ChevronDown className="w-6 h-6 animate-pulse" />
      </motion.div>
    </section>
  );
}
