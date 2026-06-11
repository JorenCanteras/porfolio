import { socialLinks, siteConfig } from "@/lib/data";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-indigo-100 bg-gradient-to-b from-white to-indigo-50/60 py-10 dark:border-white/10 dark:from-transparent dark:to-transparent dark:bg-slate-950/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          © {year}{" "}
          <span className="font-semibold text-slate-800 dark:text-white">
            {siteConfig.name}
          </span>
          . All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <SocialIcon key={link.name} link={link} size="sm" />
          ))}
        </div>
      </div>
    </footer>
  );
}
