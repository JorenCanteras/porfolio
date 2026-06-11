"use client";

import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import { liveWebsites } from "@/lib/data";
import { AnimatedSection, FadeIn } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function LiveWork() {
  return (
    <AnimatedSection id="work">
      <SectionHeading
        title="Live Websites I've Built"
        subtitle="Deployed Work"
      />

      <p className="-mt-8 mb-10 text-center text-base text-slate-700 dark:text-slate-400">
        Production websites currently live — built while working with{" "}
        <span className="font-semibold text-violet-700 dark:text-violet-400">
          Unified Products & Services
        </span>{" "}
        and partner brands.
      </p>

      <div className="space-y-10">
        {liveWebsites.map((site, index) => (
          <FadeIn key={site.id} delay={index * 0.08}>
            <article className="card-surface card-surface-hover overflow-hidden rounded-2xl">
              <div
                className={cn(
                  "grid lg:grid-cols-2",
                  index % 2 === 1 && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px]">
                  <Image
                    src={site.image}
                    alt={`${site.title} website preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-slate-950/40" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/80 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-500/15 dark:text-emerald-300">
                    <Globe className="h-3.5 w-3.5" aria-hidden />
                    Live on the web
                  </span>
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="text-sm font-semibold text-violet-600 dark:text-violet-400">
                    {site.client}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
                    {site.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-400">
                    {site.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {site.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-slate-700 dark:text-slate-400"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {site.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button
                      size="lg"
                      href={site.liveUrl}
                      external
                      icon={<ExternalLink className="h-4 w-4" aria-hidden />}
                    >
                      Visit Live Website
                    </Button>
                    <p
                      className={cn(
                        "mt-3 truncate text-sm text-slate-500 dark:text-slate-500"
                      )}
                    >
                      {site.liveUrl.replace(/^https?:\/\//, "")}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </AnimatedSection>
  );
}
