"use client";

import { Code2, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { aboutSummary, siteConfig } from "@/lib/data";
import { AnimatedSection, FadeIn } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: GraduationCap,
    title: "BSIT Graduate",
    description: "Colegio de Montalban · Information Technology",
  },
  {
    icon: Code2,
    title: "Full-Stack Focus",
    description: "Laravel, React, Next.js & modern web stack",
  },
  {
    icon: Sparkles,
    title: "Automation & AI",
    description: "Workflow automation & OpenAI integrations",
  },
  {
    icon: MapPin,
    title: "Based in PH",
    description: siteConfig.location,
  },
];

export function About() {
  return (
    <AnimatedSection id="about" className="section-alt">
      <SectionHeading title="About Me" subtitle="Introduction" />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        <FadeIn className="lg:col-span-3">
          <GlassCard hover={false} className="h-full">
            <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-300">
              {aboutSummary}
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-700 dark:text-slate-400">
              Currently working as a Junior Fullstack Developer, I bring hands-on
              experience from MERN/Next.js development, AI automation, and quality
              assurance. I thrive in collaborative teams where I can ship reliable
              software and continuously grow my craft.
            </p>
          </GlassCard>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {highlights.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.08}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-500/25 dark:from-violet-500/20 dark:to-cyan-500/20 dark:text-violet-400 dark:shadow-none">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
