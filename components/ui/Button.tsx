"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const variants = {
  primary:
    "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/45 hover:brightness-105 dark:shadow-violet-500/25",
  secondary:
    "border border-indigo-200 bg-indigo-50 text-indigo-950 shadow-sm hover:border-indigo-300 hover:bg-indigo-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
  ghost:
    "text-slate-700 hover:bg-indigo-50 hover:text-indigo-900 dark:text-slate-300 dark:hover:bg-white/10",
  outline:
    "border-2 border-violet-300 bg-white text-slate-900 shadow-sm hover:border-violet-500 hover:bg-violet-50 hover:text-violet-900 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-violet-400 dark:hover:bg-transparent",
};

const sizes = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-12 px-8 text-base gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  loading,
  icon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      ) : (
        icon
      )}
      {children}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}
