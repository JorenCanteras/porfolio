# John Rendell Canteras — Portfolio

A modern, premium personal portfolio built with **Next.js** (App Router), **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Features

- Responsive mobile-first design with glassmorphism UI
- Dark / light mode toggle (`next-themes`)
- Smooth scrolling navigation with active section highlighting
- Framer Motion scroll and hover animations
- SEO-optimized metadata (Open Graph, Twitter cards)
- Contact form with React Hook Form validation
- Accessible, reusable component architecture

## Folder Structure

```
portfolio/
├── app/
│   ├── api/contact/route.ts   # Contact form API
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   └── page.tsx
├── components/
│   ├── layout/                # Navbar, Footer, BackToTop
│   ├── providers/             # ThemeProvider
│   ├── sections/              # Hero, About, Skills, etc.
│   └── ui/                    # Reusable UI primitives
├── hooks/
│   └── useActiveSection.ts
├── lib/
│   ├── data.ts                # Portfolio content
│   └── utils.ts
├── types/
│   └── index.ts
└── public/
    ├── images/
    └── resume.pdf
```

## Installation

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, or pnpm

### Steps

1. **Clone or navigate to the project**

   ```bash
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

| Item | File / Path |
|------|-------------|
| Personal info, links, projects | `lib/data.ts` |
| Profile photo | `public/images/profile.jpg` |
| Project screenshots | `public/images/projects/` |
| Resume PDF | `public/resume.pdf` |
| Site URL (SEO) | `.env.local` → `NEXT_PUBLIC_SITE_URL` |

### Environment Variables (optional)

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

Contact form emails are sent via [Mailtrap](https://mailtrap.io/). Add `MAILTRAP_API_TOKEN` and `MAILTRAP_FROM_EMAIL` to `.env.local` (see `.env.example`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deploy to Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Add personal portfolio"
   git push origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click **Add New Project**
   - Import your GitHub repository
   - Framework preset: **Next.js** (auto-detected)
   - Add environment variable: `NEXT_PUBLIC_SITE_URL` = your Vercel URL
   - Click **Deploy**

3. **Custom domain (optional)**
   - In Vercel project settings → **Domains**
   - Add your domain and follow DNS instructions

4. **Post-deploy checklist**
   - Replace `public/resume.pdf` with your real resume
   - Update `public/images/profile.jpg` with your photo
   - Set real GitHub and project URLs in `lib/data.ts`
   - Add Mailtrap env vars and verify contact form delivery

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## License

Private portfolio project — © John Rendell Canteras.
# porfolio
