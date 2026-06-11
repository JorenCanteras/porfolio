"use client";

import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="section-alt">
      <SectionHeading title="Featured Projects" subtitle="Portfolio" />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <GlassCard key={project.id} delay={index * 0.08} className="overflow-hidden p-0">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={project.githubUrl}
                    external
                    icon={<Code2 className="h-4 w-4" aria-hidden />}
                  >
                    GitHub
                  </Button>
                )}
                {project.liveUrl !== "#" && (
                  <Button
                    variant="outline"
                    size="sm"
                    href={project.liveUrl}
                    external
                    icon={<ExternalLink className="h-4 w-4" aria-hidden />}
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </AnimatedSection>
  );
}
