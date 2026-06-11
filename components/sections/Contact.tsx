"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Code2, Link2, Mail, Send } from "lucide-react";
import type { ContactFormData } from "@/types";
import { siteConfig, socialLinks } from "@/lib/data";
import { AnimatedSection, FadeIn } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = cn(
    "input-surface w-full rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
  );

  return (
    <AnimatedSection id="contact">
      <SectionHeading title="Get In Touch" subtitle="Contact" />

      <div className="grid gap-8 lg:grid-cols-5">
        <FadeIn className="lg:col-span-2">
          <GlassCard hover={false} className="h-full">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Let&apos;s work together
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Open to full-time roles, freelance projects, and collaborations.
              Send a message and I&apos;ll get back to you as soon as possible.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
              >
                <Mail className="h-5 w-5 text-violet-500" aria-hidden />
                {siteConfig.email}
              </a>
              {socialLinks
                .filter((l) => l.icon !== "email")
                .map((link) => {
                  const Icon =
                    link.icon === "github" ? Code2 : Link2;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
                    >
                      <Icon className="h-5 w-5 text-violet-500" aria-hidden />
                      {link.name}
                    </a>
                  );
                })}
            </div>
          </GlassCard>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-3">
          <GlassCard hover={false}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className={inputClass}
                    placeholder="Your name"
                    aria-invalid={!!errors.fullName}
                    {...register("fullName", {
                      required: "Full name is required",
                      minLength: { value: 2, message: "Name is too short" },
                    })}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500" role="alert">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={inputClass}
                    placeholder="you@email.com"
                    aria-invalid={!!errors.email}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className={inputClass}
                  placeholder="Project inquiry"
                  aria-invalid={!!errors.subject}
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: { value: 3, message: "Subject is too short" },
                  })}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500" role="alert">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={cn(inputClass, "resize-y min-h-[120px]")}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {status === "success" && (
                <p
                  className="rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-400"
                  role="status"
                >
                  Message sent successfully! I&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p
                  className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                  role="alert"
                >
                  Could not send your message. Please email me directly at{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-semibold underline hover:text-red-700 dark:hover:text-red-300"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                loading={isSubmitting}
                icon={<Send className="h-4 w-4" aria-hidden />}
                className="w-full sm:w-auto"
              >
                Send Message
              </Button>
            </form>
          </GlassCard>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}
