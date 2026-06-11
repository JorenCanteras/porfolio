"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-0 items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-400/40 blur-[120px] dark:bg-violet-500/30" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-cyan-400/35 blur-[120px] dark:bg-cyan-500/25" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-300/25 blur-[100px] dark:bg-fuchsia-500/10" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-800 shadow-sm dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300 dark:shadow-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              John Rendell
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-4 text-lg font-medium text-violet-600 dark:text-violet-400 sm:text-xl"
          >
            {siteConfig.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-800 dark:text-slate-400 lg:mx-0 mx-auto"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={siteConfig.resumePath}
              external
              icon={<Download className="h-4 w-4" aria-hidden />}
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socialLinks.map((link) => (
              <SocialIcon key={link.name} link={link} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 blur-2xl opacity-50 dark:opacity-40" />
            <div className="relative rounded-full border-4 border-white bg-gradient-to-br from-violet-100 to-cyan-100 p-2 shadow-[0_20px_50px_-12px_rgba(124,58,237,0.4)] ring-4 ring-violet-200/80 dark:border-white/10 dark:from-violet-500/20 dark:to-cyan-500/20 dark:shadow-2xl dark:ring-0">
              <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80">
                <Image
                  src="/images/profile.jpg"
                  alt={`${siteConfig.name}, Full-Stack Developer`}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover object-[50%_28%] scale-[1.08]"
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 rounded-2xl border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg dark:border-white/20 dark:bg-slate-900/80 dark:text-white"
            >
              📍 {siteConfig.location}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollToSection("#about")}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-indigo-400 transition-colors hover:text-violet-600 dark:text-slate-500 dark:hover:text-violet-500"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
