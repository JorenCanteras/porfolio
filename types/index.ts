export interface SocialLink {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl: string;
}

export interface LiveWebsite {
  id: string;
  title: string;
  client: string;
  description: string;
  highlights: string[];
  image: string;
  liveUrl: string;
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company?: string;
  period: string;
  location?: string;
  highlights: string[];
  current?: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  resumePath: string;
}
