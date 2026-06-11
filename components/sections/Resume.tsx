"use client";

import { Download, FileText } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { AnimatedSection, FadeIn } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const resumeHighlights = [
  "Full-Stack Development (Laravel & React)",
  "REST API & Database Design",
  "QA & Software Testing Experience",
  "AI & Workflow Automation",
  "Certifications: React 18 + TS, PHP, Make, ClickUp",
];

export function Resume() {
  return (
    <AnimatedSection id="resume" className="section-alt">
      <SectionHeading title="Resume" subtitle="Download" />

      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <GlassCard className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 text-white shadow-xl shadow-violet-500/25">
              <FileText className="h-10 w-10" aria-hidden />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {siteConfig.name}
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Full-Stack Developer · Laravel · React · Automation
            </p>

            <ul className="mt-8 space-y-3 text-left">
              {resumeHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                href={siteConfig.resumePath}
                external
                icon={<Download className="h-4 w-4" aria-hidden />}
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={siteConfig.resumePath}
                external
              >
                Preview PDF
              </Button>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}
