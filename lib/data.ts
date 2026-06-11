import type {
  ExperienceItem,
  LiveWebsite,
  NavItem,
  Project,
  SiteConfig,
  SkillCategory,
  SocialLink,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "John Rendell Canteras",
  role: "Full-Stack Developer | Automation & AI Enthusiast",
  tagline:
    "IT graduate passionate about building scalable web applications, automation solutions, and AI-powered tools. Ready to learn, contribute, and innovate.",
  email: "joren.canteras@gmail.com",
  github: "https://github.com/JorenCanteras",
  linkedin: "https://www.linkedin.com/in/john-rendell-canteras-1237162b6/",
  location: "Quezon City, Philippines",
  resumePath: "/resume.pdf",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Live Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: siteConfig.github, icon: "github" },
  { name: "LinkedIn", href: siteConfig.linkedin, icon: "linkedin" },
  { name: "Email", href: `mailto:${siteConfig.email}`, icon: "email" },
];

export const aboutSummary =
  "BSIT graduate with experience in Software Engineering and Quality Assurance. Skilled in Laravel, PHP, JavaScript, React, Next.js, SQL, Git, and modern web technologies. Passionate about building scalable web applications, automation solutions, and AI-powered tools. Continuously learning and improving backend and full-stack development skills.";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["PHP", "Laravel", "REST API Development"],
  },
  {
    title: "Database",
    icon: "database",
    skills: ["MySQL", "SQL"],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "Postman"],
  },
  {
    title: "Automation & AI",
    icon: "sparkles",
    skills: ["OpenAI API", "No-Code Automation", "Workflow Automation"],
  },
];

export const liveWebsites: LiveWebsite[] = [
  {
    id: "unified-products",
    title: "Unified Products & Services",
    client: "Unified Products & Services, Inc.",
    description:
      "Flagship fintech and business platform powering bills payment, remittance, e-loading, ticketing, hotels, insurance, and marketplace features — serving 129K+ investors and ₱2.9B+ in transactions.",
    highlights: [
      "App & web portal for payments, remittance, and bills",
      "Product catalog, franchise, and seller onboarding flows",
      "Mobile app promotion (iOS & Android) and partner ecosystem",
      "Affiliate network linking Ecashpay, Global Pinoy, Wealthy Lifestyle & more",
    ],
    image: "/images/projects/unified.jpg",
    liveUrl: "https://www.unifiedproducts.com/",
    technologies: ["React", "Next.js", "Tailwind CSS", "Responsive UI", "Forms"],
  },
  {
    id: "ecashpay",
    title: "Ecashpay",
    client: "Ecashpay — Unified Affiliate",
    description:
      "Fintech marketing website for secure card payments, mobile POS, and cross-border solutions — with demo request forms, partner showcases, and conversion-focused landing sections.",
    highlights: [
      "Payment solutions: card processing, POS, cross-border (coming soon)",
      "Lead capture demo form with company onboarding flow",
      "Testimonials, FAQ, and trust metrics (4.9/5 rating, 50K+ clients)",
      "App Store & Google Play download CTAs",
    ],
    image: "/images/projects/ecashpay.jpg",
    liveUrl: "https://www.ecashpay.com/",
    technologies: ["React", "Next.js", "Tailwind CSS", "Forms", "SEO"],
  },
  {
    id: "global-pinoy-travel",
    title: "Global Pinoy Travel and Tours",
    client: "Global Pinoy Travel and Tours — GPRS Inc.",
    description:
      "Travel agency website for flights, hotels, tour packages, visa assistance, and travel inquiries — serving domestic and international Filipino travelers from Quezon City.",
    highlights: [
      "Services: flights, hotels, DIY travel, insurance, tour packages, visa help",
      "Travel inquiry form and destination showcases",
      "Limited-offer tour promos (Cebu, Palawan, Bohol, Thailand, and more)",
      "Mobile-first responsive layout",
    ],
    image: "/images/projects/globalpinoy.jpg",
    liveUrl: "https://www.globalpinoytravel.com/",
    technologies: ["React", "Next.js", "Tailwind CSS", "Responsive UI", "Forms"],
  },
  {
    id: "gocab",
    title: "GoCab",
    client: "GoCab — Ride-Hailing Platform",
    description:
      "Ride-hailing brand site for safe, affordable city transportation — highlighting services, driver careers, customer testimonials, and 24/7 availability across Metro Manila.",
    highlights: [
      "City rides, airport transfer, corporate travel & delivery services",
      "How-it-works flow and driver recruitment (Careers) section",
      "Social proof: 50K+ customers, 1000+ drivers, 100K+ rides",
      "Contact hub at Pacific Century Tower, Quezon City",
    ],
    image: "/images/projects/gocab.jpg",
    liveUrl: "https://gocab.ph/",
    technologies: ["React", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    id: "wealthy-lifestyle",
    title: "Wealthy Lifestyle",
    client: "Wealthy Lifestyle — Unified Products Brand",
    description:
      "Wellness e-commerce and brand site for natural health products — featuring catalog browsing, mission/vision storytelling, and sign-up flows for the Unified product line.",
    highlights: [
      "Featured product grid with pricing (Acai, Glutathione, Barley, and more)",
      "Mission, vision, and core values brand storytelling",
      "Sign up / login and contact integration",
      "Quezon City headquarters and social media links",
    ],
    image: "/images/projects/wealthylifestyle.jpg",
    liveUrl: "https://www.wealthylifestyle.com.ph/",
    technologies: ["React", "Next.js", "Tailwind CSS", "E-commerce UI"],
  },
];

export const projects: Project[] = [
  {
    id: "laravel-crud",
    title: "Laravel CRUD System",
    description:
      "Full CRUD application with authentication, validation, database relationships, and role management.",
    image: "/images/projects/laravel.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "Blade"],
    githubUrl: "https://github.com/JorenCanteras",
    liveUrl: "#",
  },
  {
    id: "rest-api",
    title: "REST API Project",
    description:
      "Laravel RESTful API with authentication, pagination, filtering, and API resource responses.",
    image: "/images/projects/api.jpg",
    technologies: ["Laravel", "REST API", "Postman", "MySQL"],
    githubUrl: "https://github.com/JorenCanteras",
    liveUrl: "#",
  },
  {
    id: "automation-ai",
    title: "Automation & AI Project",
    description:
      "AI-powered workflow automation solution integrating APIs and automation tools.",
    image: "/images/projects/automation.jpg",
    technologies: ["OpenAI API", "Make", "JavaScript", "Webhooks"],
    githubUrl: "https://github.com/JorenCanteras",
    liveUrl: "#",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "unified-products",
    title: "Junior Fullstack Developer",
    company: "Unified Products & Services Official",
    period: "Jan 2025 – Present",
    location: "Quezon City, Philippines",
    current: true,
    highlights: [
      "Built and deployed live sites: Unified Products, Ecashpay, Global Pinoy Travel, GoCab, Wealthy Lifestyle",
      "Building and maintaining full-stack web applications",
      "Collaborating with cross-functional teams on product features",
      "Applying modern JavaScript and PHP frameworks in production",
    ],
  },
  {
    id: "syncra-ai",
    title: "AI & Automation Specialist (Freelance)",
    company: "Syncra AI",
    period: "Jul 2024 – Jan 2025",
    highlights: [
      "Designed AI-powered workflow automation solutions",
      "Integrated third-party APIs and no-code automation platforms",
      "Optimized business processes through intelligent automation",
    ],
  },
  {
    id: "blue-hive",
    title: "MERN Stack Developer (Internship)",
    company: "Blue Hive Inc.",
    period: "Nov 2023 – Apr 2024",
    location: "Quezon City, Philippines",
    highlights: [
      "Developed Next.js frontend for self-ordering kiosk applications",
      "Contributed to Hayabusa Philippines website revamp",
      "Collaborated on IVMS-MMDA platform bug fixes across web and mobile",
    ],
  },
];
