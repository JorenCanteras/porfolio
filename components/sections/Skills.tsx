"use client";

import {
  Database,
  Layout,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const categoryIcons: Record<string, React.ElementType> = {
  layout: Layout,
  server: Server,
  database: Database,
  wrench: Wrench,
  sparkles: Sparkles,
};

export function Skills() {
  return (
    <AnimatedSection id="skills">
      <SectionHeading title="Skills & Expertise" subtitle="Tech Stack" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[category.icon] ?? Layout;
          return (
            <GlassCard key={category.title} delay={index * 0.06}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/20">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
