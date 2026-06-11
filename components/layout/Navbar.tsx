"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/data";
import { cn, scrollToSection } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-indigo-100 bg-[var(--nav-bg)] shadow-[0_4px_24px_-6px_rgba(79,70,229,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 dark:shadow-none"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="text-lg font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
            JR
          </span>
          <span className="hidden text-slate-800 dark:text-white sm:inline">
            .dev
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-violet-100 text-violet-800 shadow-sm dark:bg-violet-500/15 dark:text-violet-400"
                      : "text-slate-600 hover:bg-indigo-50 hover:text-violet-700 dark:text-slate-400 dark:hover:bg-transparent dark:hover:text-violet-400"
                  )}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-200 bg-white text-indigo-800 shadow-sm md:hidden dark:border-white/10 dark:bg-white/5 dark:text-inherit dark:shadow-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-indigo-100 bg-white/98 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-slate-950/95"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "w-full rounded-xl px-4 py-3 text-left text-sm font-medium",
                        isActive
                          ? "bg-violet-100 text-violet-800 dark:bg-violet-500/15 dark:text-violet-400"
                          : "text-slate-700 dark:text-slate-300"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  Hire {siteConfig.name.split(" ")[0]}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
