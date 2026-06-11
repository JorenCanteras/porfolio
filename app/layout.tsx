import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://johnrendell.dev"
  ),
  title: {
    default: `${siteConfig.name} | Full-Stack Developer Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Portfolio of John Rendell Canteras — Full-Stack Developer specializing in Laravel, React, Next.js, and AI automation. Based in Quezon City, Philippines.",
  keywords: [
    "John Rendell Canteras",
    "Full-Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js",
    "PHP",
    "Portfolio",
    "Philippines Developer",
    "Automation",
    "AI",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${siteConfig.name} | Full-Stack Developer`,
    description: siteConfig.tagline,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/profile.jpg",
        width: 2047,
        height: 2048,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Full-Stack Developer`,
    description: siteConfig.tagline,
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement,t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${jetbrains.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <div className="bg-grid relative min-h-screen">
            <div
              className="ambient-mesh pointer-events-none fixed inset-0 -z-10"
              aria-hidden
            />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
