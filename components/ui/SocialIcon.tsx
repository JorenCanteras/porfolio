"use client";

import { Code2, Link2, Mail } from "lucide-react";
import type { SocialLink } from "@/types";
import { cn } from "@/lib/utils";

const icons = {
  github: Code2,
  linkedin: Link2,
  email: Mail,
};

interface SocialIconProps {
  link: SocialLink;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-9 w-9 [&_svg]:h-4 [&_svg]:w-4",
  md: "h-11 w-11 [&_svg]:h-5 [&_svg]:w-5",
  lg: "h-12 w-12 [&_svg]:h-5 [&_svg]:w-5",
};

export function SocialIcon({ link, size = "md", className }: SocialIconProps) {
  const Icon = icons[link.icon];

  return (
    <a
      href={link.href}
      target={link.icon === "email" ? undefined : "_blank"}
      rel={link.icon === "email" ? undefined : "noopener noreferrer"}
      aria-label={link.name}
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-white text-indigo-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:shadow-none dark:hover:text-violet-400",
        sizeMap[size],
        className
      )}
    >
      <Icon aria-hidden />
    </a>
  );
}
