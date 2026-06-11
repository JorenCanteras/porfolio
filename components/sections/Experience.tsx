"use client";

import { Briefcase } from "lucide-react";
import { experienceItems } from "@/lib/data";
import { AnimatedSection, FadeIn } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <AnimatedSection id="experience">
      <SectionHeading title="Experience" subtitle="Career Journey" />

      <div className="relative mx-auto max-w-3xl">
        <div
          className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent md:left-1/2 md:block md:-translate-x-px"
          aria-hidden
        />

        <div className="space-y-8">
          {experienceItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08}>
              <article
                className={cn(
                  "card-surface card-surface-hover relative rounded-2xl p-6 md:w-[calc(50%-2rem)]",
                  index % 2 === 0
                    ? "md:mr-auto md:pr-12"
                    : "md:ml-auto md:pl-12"
                )}
              >
                <div
                  className={cn(
                    "absolute top-6 hidden h-4 w-4 rounded-full border-4 border-indigo-50 bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg md:block dark:border-slate-950",
                    index % 2 === 0
                      ? "right-0 translate-x-[calc(100%+1.45rem)] md:right-0"
                      : "left-0 -translate-x-[calc(100%+1.45rem)] md:left-0"
                  )}
                  aria-hidden
                />

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400">
                    <Briefcase className="h-5 w-5" aria-hidden />
                  </div>
                  {item.current && (
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                {item.company && (
                  <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                    {item.company}
                  </p>
                )}
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {item.period}
                  {item.location && ` · ${item.location}`}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
