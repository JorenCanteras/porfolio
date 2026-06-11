"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <span className="mb-3 inline-block rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-400">
        {subtitle ?? "Section"}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-sm shadow-violet-500/30",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
