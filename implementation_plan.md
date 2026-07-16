# 🌸 Portfolio Rebuild — Full Implementation Plan

## Overview

| Key | Value |
|-----|-------|
| **Theme** | Neo Tokyo / Anime Aesthetic — dark/light toggle |
| **Stack** | React 19 · Vite 7 · TypeScript · Tailwind CSS v4 · Framer Motion · GSAP · tsParticles · lucide-react |
| **Sections** | Hero → About → Education → Skills → Projects → Research → Experience → Contact → Footer |
| **Deploy** | **Vercel** (recommended — zero-config, instant preview deploys, already used for your projects) |
| **Profile Art** | Ghibli sticker (`rakin-ghibli-sticker-r2.png`) |
| **Contact Form** | Visual only |
| **Certificates** | None |

---

## Phase 0 — Scaffold & Backup

### 0.1 Backup Current Site
```
# In e:\My-Projects\PortFolio
mkdir _backup
copy index.html _backup\
xcopy src _backup\src\ /E
xcopy assets _backup\assets\ /E
copy package.json _backup\
copy tailwind.config.js _backup\
```

### 0.2 Scaffold Vite + React + TypeScript
```
# Clean the root (keep assets/, new/, _backup/, .git/)
# Then scaffold:
npx -y create-vite@latest ./ --template react-ts
```

### 0.3 Install Dependencies
```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.3.0",
    "@tsparticles/engine": "^4.1.3",
    "@tsparticles/react": "^4.1.3",
    "@tsparticles/slim": "^4.1.3",
    "framer-motion": "^12.40.0",
    "gsap": "^3.15.0",
    "lucide-react": "^1.17.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "tailwindcss": "^4.3.0"
  }
}
```
```bash
npm install tailwindcss @tailwindcss/vite framer-motion gsap lucide-react @tsparticles/engine @tsparticles/react @tsparticles/slim
```

### 0.4 Vite Config
```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // For Vercel: base defaults to "/" which is correct
  // For GitHub Pages: set base: "/PortFolio/"
});
```

### 0.5 Move Assets
```
# Move existing assets into public/
mv assets/ public/assets/
# Move resume PDF
cp new/Raiyen\ Zayed\ Rakin.pdf public/resume.pdf
```

---

## Phase 1 — Design System

### 1.1 Color Palette — Neo Tokyo

#### Dark Mode (default)
| Token | Hex | Usage |
|-------|-----|-------|
| `--nt-bg` | `#1a1a2e` | Page background |
| `--nt-surface` | `#16213e` | Card/panel background |
| `--nt-surface-alt` | `#0f3460` | Elevated surface |
| `--nt-sakura` | `#e879a0` | Primary accent (sakura pink) |
| `--nt-sakura-bright` | `#f0a0bc` | Glow/hover pink |
| `--nt-electric` | `#4cc9f0` | Secondary accent (electric blue) |
| `--nt-neon` | `#b14aed` | Tertiary (neon violet) |
| `--nt-text` | `#e8e6f0` | Body text |
| `--nt-text-muted` | `#9ca3af` | Muted text |
| `--nt-gold` | `#fbbf24` | S-rank / highlight |

#### Light Mode
| Token | Hex | Usage |
|-------|-----|-------|
| `--nt-bg` | `#faf8ff` | Page background |
| `--nt-surface` | `#ffffff` | Card background |
| `--nt-surface-alt` | `#f0ecf8` | Elevated surface |
| `--nt-sakura` | `#d44d78` | Primary accent (deeper pink) |
| `--nt-electric` | `#2196c4` | Secondary blue |
| `--nt-neon` | `#8b2fc6` | Tertiary violet |
| `--nt-text` | `#1a1a2e` | Body text |
| `--nt-text-muted` | `#6b7280` | Muted text |

### 1.2 Typography
- **Display font**: `"Cinzel"` (serif) — section headings, hero name
- **Body font**: `"Rajdhani"` (sans-serif) — body, nav, cards
- Both loaded from Google Fonts via `<link>` in `index.html`

### 1.3 CSS Architecture (`src/index.css`)
```css
@import "tailwindcss";

@theme {
  --color-bg: var(--nt-bg);
  --color-surface: var(--nt-surface);
  --color-surface-alt: var(--nt-surface-alt);
  --color-sakura: var(--nt-sakura);
  --color-sakura-bright: var(--nt-sakura-bright);
  --color-electric: var(--nt-electric);
  --color-neon: var(--nt-neon);
  --color-gold: var(--nt-gold);
  --font-display: "Cinzel", serif;
  --font-body: "Rajdhani", sans-serif;
}

/* Dark mode (default) */
:root, [data-theme="dark"] {
  --nt-bg: #1a1a2e;
  --nt-surface: #16213e;
  /* ... all dark tokens ... */
}

/* Light mode */
[data-theme="light"] {
  --nt-bg: #faf8ff;
  --nt-surface: #ffffff;
  /* ... all light tokens ... */
}
```

---

## Phase 2 — Project Structure

```
src/
├── App.tsx                    # Root — assembles all sections
├── main.tsx                   # Entry — React root + providers
├── index.css                  # Tailwind + theme tokens + utilities
├── data/
│   └── content.ts             # ALL editable content in one file
├── theme/
│   ├── ThemeContext.tsx        # Dark/light context + provider
│   └── palette.ts             # JS-side color references
├── components/
│   ├── Navbar.tsx             # Fixed nav with theme toggle
│   ├── ThemeToggle.tsx        # Sun/Moon icon toggle
│   ├── SectionHeading.tsx     # Reusable animated heading
│   ├── ProjectCard.tsx        # Project card with hover effects
│   ├── SkillBar.tsx           # Animated skill bar with rank badge
│   ├── TimelineItem.tsx       # Vertical timeline entry
│   ├── ResearchCard.tsx       # Publication card
│   ├── ContactForm.tsx        # Visual-only form
│   ├── ParticlesBackground.tsx# tsParticles wrapper
│   └── BrandIcons.tsx         # Custom SVG social icons
├── sections/
│   ├── Hero.tsx               # Full-viewport hero
│   ├── About.tsx              # Bio + stat panel
│   ├── Education.tsx          # Education timeline
│   ├── Skills.tsx             # Categorized skill bars
│   ├── Projects.tsx           # Project grid
│   ├── Research.tsx           # Publications
│   ├── Experience.tsx         # Work timeline
│   ├── Contact.tsx            # Contact info + form
│   └── Footer.tsx             # Social links + copyright
├── lib/
│   ├── rank.ts                # Rank color/label helpers (E→S)
│   └── animations.ts          # Shared Framer Motion variants
└── assets/                    # (imported images if needed)
```

---

## Phase 3 — Content Data (`src/data/content.ts`)

### 3.1 Identity
```ts
export const identity = {
  name: "RAKIN",
  fullName: "Raiyen Zayed Rakin",
  tagline: "ラキン — Software Engineer",
  roles: ["FULL-STACK DEVELOPER", "AI ENTHUSIAST", "RESEARCHER"],
  intro: "Final-year CSE student crafting digital experiences with clean code and AI-driven solutions.",
  email: "raiyenzayedrakin@gmail.com",
  phone: "+8801973389048",
  location: "Dhaka, Bangladesh",
  cvPath: "/resume.pdf",
};
```

### 3.2 Skills (with Rank System)
```ts
export const skills = [
  // Languages
  { name: "JavaScript", rank: "S", value: 92, category: "Languages" },
  { name: "TypeScript", rank: "A", value: 85, category: "Languages" },
  { name: "Python", rank: "A", value: 85, category: "Languages" },
  { name: "C++", rank: "B", value: 75, category: "Languages" },
  { name: "Java", rank: "B", value: 72, category: "Languages" },
  { name: "SQL", rank: "A", value: 80, category: "Languages" },
  // Frontend
  { name: "React", rank: "S", value: 90, category: "Frontend" },
  { name: "Vite", rank: "A", value: 85, category: "Frontend" },
  { name: "Tailwind CSS", rank: "S", value: 92, category: "Frontend" },
  { name: "shadcn/ui", rank: "A", value: 82, category: "Frontend" },
  { name: "HTML/CSS", rank: "S", value: 93, category: "Frontend" },
  // Backend
  { name: "FastAPI", rank: "A", value: 80, category: "Backend" },
  { name: "Node.js", rank: "A", value: 82, category: "Backend" },
  { name: "MongoDB", rank: "A", value: 80, category: "Backend" },
  { name: "MySQL", rank: "A", value: 78, category: "Backend" },
  // AI/ML
  { name: "PyTorch", rank: "B", value: 70, category: "AI/ML" },
  { name: "OpenCV", rank: "B", value: 72, category: "AI/ML" },
  // Tools
  { name: "Git/GitHub", rank: "S", value: 90, category: "Tools" },
  { name: "Vercel", rank: "A", value: 85, category: "Tools" },
  { name: "GitHub Actions", rank: "B", value: 70, category: "Tools" },
  { name: "Figma", rank: "B", value: 68, category: "Tools" },
];
```

### 3.3 Projects
```ts
export const projects = [
  {
    title: "RecruitBD-AI",
    label: "AI-Powered Platform",
    difficulty: "S" as Rank,
    blurb: "AI-powered CV parsing and job matching platform. FastAPI backend with Gemini API integration extracts structured data from CVs and matches candidates using SentenceTransformers.",
    tech: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "FastAPI", "Gemini API", "SentenceTransformers"],
    link: "https://recruit-bd-ai.vercel.app/",
    repoLink: "https://github.com/raiyen-zayed-rakin/RecruitBD-AI",
    preview: null, // placeholder
  },
  {
    title: "Ledger-AI",
    label: "Business Intelligence",
    difficulty: "S" as Rank,
    blurb: "AI-powered business intelligence dashboard for SME owners. Uses Groq LLaMA models for sentiment tagging, report generation, and a multi-agent AI CFO orchestrator.",
    tech: ["React 18", "TypeScript", "Tailwind CSS", "Next.js", "Groq LLaMA", "Supabase"],
    link: "https://ledgerai.mrudoy.me/",
    repoLink: "https://github.com/raiyen-zayed-rakin/Ledger-Ai",
    preview: null,
  },
  {
    title: "Pathfinder 24/7",
    label: "Client Landing Page",
    difficulty: "A" as Rank,
    blurb: "Premium landing page for a Bangladesh-based travel and immigration agency. Showcasing visa processing, work permits, and immigration consulting.",
    tech: ["React", "Vite", "Tailwind CSS", "shadcn/ui"],
    link: "https://pathfinder24seven.vercel.app/",
    preview: null,
  },
  {
    title: "AIUB CGPA Calculator",
    label: "Web Tool",
    difficulty: "B" as Rank,
    blurb: "Responsive web-based CGPA calculator for AIUB students with grade input and cumulative GPA calculation.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://aiub-cgpa-calculator.vercel.app/",
    repoLink: "https://github.com/raiyen-zayed-rakin/AIUB-CGPA-Calculator",
    preview: "/assets/aiub-cgpa-cal.png",
  },
  {
    title: "AIUB Fitness Zone",
    label: "Desktop App",
    difficulty: "B" as Rank,
    blurb: "Fitness management platform for AIUB students with workout plans, health resources and challenges.",
    tech: ["Java", "Swing GUI"],
    repoLink: "https://github.com/AIUBCodeArchives/AIUB-FITNESS-ZONE",
    preview: "/assets/aiub-fitness-zone.png",
  },
  {
    title: "StudentDash 2.0",
    label: "Desktop App",
    difficulty: "B" as Rank,
    blurb: "Ride-sharing application for the student community with affordable, safe transportation and real-time tracking.",
    tech: ["C#", "WinForms", "SQL"],
    repoLink: "https://github.com/AIUBCodeArchives/StudentDash-2.0",
    preview: "/assets/studentdash20.png",
  },
];
```

### 3.4 Experience
```ts
export const experience = [
  {
    role: "Freelance Web Developer",
    org: "Remote — Client: Pathfinder 24/7",
    period: "2026",
    rank: "A" as Rank,
    points: [
      "Built and deployed a React + Vite + Tailwind + shadcn/ui landing page for a travel & immigration consultancy.",
      "Configured production deployment on Vercel.",
    ],
  },
  {
    role: "Research Intern",
    org: "ELITE Research Lab LLC (Remote)",
    period: "January 2026 – April 2026",
    rank: "B" as Rank,
    points: [
      "Authored 6 research papers spanning medical imaging, ML-based diagnosis, and AI workflow support.",
      "Produced literature reviews, experimental design, and manuscript writing across multiple formats.",
    ],
  },
];
```

### 3.5 Publications
```ts
export const publications = [
  {
    title: "Towards Safer Cities: AI-Powered Infrastructure Fault Detection Using YOLOv11",
    journal: "Future Internet",
    year: 2025,
    doi: "https://doi.org/10.3390/fi17050187",
    type: "Article",
  },
  {
    title: "Combination of Bangla and English Sign Language Detection Model Using YOLOv11",
    journal: "Journal of Imaging",
    year: 2025,
    doi: "https://doi.org/10.3390/jimaging11050134",
    type: "Article",
  },
  {
    title: "Anemia Detection via Eye Conjunctiva Features",
    journal: "Under Review",
    year: 2025,
    doi: null,
    type: "Co-authored",
  },
];
```

### 3.6 Education
```ts
export const education = [
  {
    institution: "American International University-Bangladesh",
    degree: "B.Sc. in Computer Science and Engineering",
    period: "January 2023 – Expected September 2026",
    cgpa: "3.86/4.00",
    image: "/assets/aiub.png",
    link: "https://www.aiub.edu",
    coursework: ["Web Technologies", "OOP", "Machine Learning", "Computer Vision", "NLP", "Software Engineering"],
  },
  {
    institution: "Dhaka Imperial College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2019 – 2021",
    image: "/assets/dhaka_imperiel.png",
    link: "https://imperialcollege.edu.bd/",
  },
];
```

### 3.7 Socials & Nav
```ts
export const socials = [
  { label: "GitHub", href: "https://github.com/raiyen-zayed-rakin", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raiyen-zayed-rakin-948100265/", icon: LinkedinIcon },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Raiyen-Rakin", icon: ResearchGateIcon },
  { label: "Instagram", href: "https://www.instagram.com/rakin_sama_/", icon: InstagramIcon },
  { label: "Email", href: "mailto:raiyenzayedrakin@gmail.com", icon: Mail },
];

export const navLinks = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "education", label: "EDUCATION" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "research", label: "RESEARCH" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contact", label: "CONTACT" },
];
```

---

## Phase 4 — Section-by-Section Build

### 4.1 Hero (`src/sections/Hero.tsx`)

**Layout**: Full viewport height, centered content

**Elements**:
- tsParticles background (floating sakura petals/orbs)
- Ghibli sticker image (animated float)
- Name in `Cinzel` display font with glitch/glow text effect
- Japanese subtitle `ラキン` with sakura accent
- Animated role text cycling through roles array
- Headline stats row: `6+ Projects | 3 Publications | 3.86 CGPA`
- Two CTA buttons: `Download CV` (btn-sakura) + `Contact Me` (btn-ghost)
- Social icons row
- Scroll-down indicator arrow

**Animations**:
- Framer Motion `staggerChildren` for content entrance
- GSAP for the name glitch effect
- `animate-float` CSS for the profile image
- Particles drift slowly across the background

### 4.2 About (`src/sections/About.tsx`)

**Layout**: Two columns (text + stat panel)

**Left column**:
- Section heading with animated underline
- Bio paragraphs from `content.ts`
- Summary from resume

**Right column** — "Status Window" panel:
- Styled as an anime character stat sheet
- Fields: `Class: Full-Stack Developer`, `Rank: S-Class Student`, `Guild: AIUB`, `Specialty: Web · AI · Research`
- Glassmorphism panel with sakura-colored border glow

### 4.3 Education (`src/sections/Education.tsx`)

**Layout**: Vertical timeline (2 entries)

- Each entry: institution image, degree, period, CGPA (for AIUB), relevant coursework tags
- Hover: card lifts with sakura glow
- Uses `TimelineItem.tsx` component

### 4.4 Skills (`src/sections/Skills.tsx`)

**Layout**: Categorized groups with animated bars

- Categories: Languages, Frontend, Backend, AI/ML, Tools
- Each skill: name + animated fill bar + rank badge (E→S color-coded)
- Rank badge colors: `S=gold, A=sakura-pink, B=electric-blue, C=neon-violet, D/E=muted`
- `whileInView` animation: bars fill from 0 → value% with stagger
- Skill scan line animation sweeps across on first view

### 4.5 Projects (`src/sections/Projects.tsx`)

**Layout**: Responsive grid (3 columns on lg, 2 on md, 1 on sm)

- Each card: preview image (or generated placeholder), title, rank badge, description, tech tags, action buttons (Live/GitHub)
- Hover: card lifts, sakura border glow, shimmer sweep effect
- Uses `ProjectCard.tsx` — adapted `gate-card` style from reference
- Featured projects (RecruitBD-AI, Ledger-AI) get larger "featured" treatment

### 4.6 Research (`src/sections/Research.tsx`)

**Layout**: Stacked cards

- Each publication: type badge (Article/Co-authored), title, journal, year, DOI link button
- Styled distinctly from projects — more academic, clean lines
- Uses `ResearchCard.tsx`
- DOI links open in new tab

### 4.7 Experience (`src/sections/Experience.tsx`)

**Layout**: Vertical timeline

- Each entry: role, organization, period, rank badge, bullet points
- Timeline line with pulsing sakura dots at each node
- Uses `TimelineItem.tsx` (shared with Education)

### 4.8 Contact (`src/sections/Contact.tsx`)

**Layout**: Two columns (info + form)

**Left**: Location, email, LinkedIn, phone — with icons

**Right**: Visual-only form (Name, Email, Message, Send button)
- Form styled with glassmorphism inputs
- Send button with sakura gradient
- No backend — purely decorative

### 4.9 Footer (`src/sections/Footer.tsx`)

- Profile image + copyright text
- Social icons row
- "Back to top" button with smooth scroll
- Wave/mountain silhouette divider (Ghibli-inspired) above footer

---

## Phase 5 — Key Components

### 5.1 Navbar (`src/components/Navbar.tsx`)
- Fixed top, glassmorphism backdrop blur
- Logo (profile image + name)
- Nav links with active section highlight (IntersectionObserver)
- Theme toggle (sun/moon)
- Mobile hamburger → slide-down menu
- Hide on scroll down, show on scroll up

### 5.2 ThemeToggle (`src/components/ThemeToggle.tsx`)
- Sun icon (light) ↔ Moon icon (dark)
- Persists to `localStorage`
- Sets `data-theme` on `<html>`
- Smooth icon rotation animation on toggle

### 5.3 ParticlesBackground (`src/components/ParticlesBackground.tsx`)
- tsParticles slim preset
- Dark mode: floating pink/violet orbs like city lights
- Light mode: subtle floating sakura petal shapes
- FPS-capped, pauses when not visible

---

## Phase 6 — Animations & Effects

### 6.1 Framer Motion Variants (`src/lib/animations.ts`)
```ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
```

### 6.2 CSS Effects in `index.css`
- `.text-glow` — sakura text shadow
- `.text-glow-blue` — electric blue gradient text
- `.gate-card` — project card with shimmer sweep
- `.system-panel` — stat window with corner brackets
- `.glitch` — hero name glitch effect
- `.scanlines` — subtle CRT overlay (optional)
- Body `::before` — faint grid overlay
- Custom scrollbar themed to sakura/electric gradients
- `@media (prefers-reduced-motion: reduce)` — kill all animations

### 6.3 GSAP Usage
- Hero entrance: name reveal with glitch stagger
- Section heading underline draw animation
- Parallax on hero background elements

---

## Phase 7 — Responsive Design

| Breakpoint | Layout Changes |
|-----------|---------------|
| `<640px` (sm) | Single column, hamburger nav, smaller fonts, stat panel stacks |
| `640-768px` (md) | 2-column grids, desktop nav appears |
| `768-1024px` (lg) | 3-column project grid |
| `>1024px` (xl) | Max-width container `1200px`, comfortable spacing |

---

## Phase 8 — Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo to Vercel dashboard for auto-deploys
```

**Why Vercel over GitHub Pages:**
- Zero config for Vite/React
- Instant preview deploys on every PR
- Custom domain support (free)
- You already use Vercel for RecruitBD-AI and Pathfinder 24/7
- No need for `base` path configuration

### GitHub Pages (Alternative)
```bash
npm install -D gh-pages
```
```json
// package.json
"homepage": "https://raiyen-zayed-rakin.github.io/PortFolio/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
```ts
// vite.config.ts — add base
base: "/PortFolio/",
```

---

## Phase 9 — Build Order (Step-by-Step)

> [!IMPORTANT]
> This is the exact order I will build each piece:

| Step | What | Files |
|------|------|-------|
| 1 | Scaffold Vite + install deps | `package.json`, `vite.config.ts`, `tsconfig.json` |
| 2 | Setup `index.html` (fonts, meta, favicon) | `index.html` |
| 3 | Design system + theme CSS | `src/index.css` |
| 4 | Theme context + toggle | `src/theme/ThemeContext.tsx`, `palette.ts` |
| 5 | Content data file | `src/data/content.ts` |
| 6 | Animation variants + rank helpers | `src/lib/animations.ts`, `rank.ts` |
| 7 | Shared components | `Navbar`, `ThemeToggle`, `SectionHeading`, `BrandIcons` |
| 8 | Particles background | `ParticlesBackground.tsx` |
| 9 | Hero section | `src/sections/Hero.tsx` |
| 10 | About section | `src/sections/About.tsx` |
| 11 | Education section + TimelineItem | `Education.tsx`, `TimelineItem.tsx` |
| 12 | Skills section + SkillBar | `Skills.tsx`, `SkillBar.tsx` |
| 13 | Projects section + ProjectCard | `Projects.tsx`, `ProjectCard.tsx` |
| 14 | Research section + ResearchCard | `Research.tsx`, `ResearchCard.tsx` |
| 15 | Experience section | `Experience.tsx` |
| 16 | Contact section + ContactForm | `Contact.tsx`, `ContactForm.tsx` |
| 17 | Footer section | `Footer.tsx` |
| 18 | App.tsx assembly | `App.tsx`, `main.tsx` |
| 19 | Polish, responsive fixes, a11y | All files |
| 20 | Test + Deploy | Vercel |

---

## SEO & Meta

```html
<title>Raiyen Zayed Rakin — Software Engineer & Researcher</title>
<meta name="description" content="Portfolio of Raiyen Zayed Rakin — Full-stack developer, AI enthusiast, and published researcher. Building digital experiences with React, TypeScript, and Python." />
<meta name="keywords" content="Raiyen Zayed Rakin, portfolio, software engineer, AIUB, React, TypeScript, AI, researcher" />
<meta property="og:title" content="Raiyen Zayed Rakin — Portfolio" />
<meta property="og:description" content="Full-stack developer & AI researcher crafting digital experiences." />
<meta property="og:image" content="/assets/profile-image.png" />
<link rel="icon" href="/assets/favicon.ico" />
```

---

## Accessibility

- `prefers-reduced-motion` kills all animations
- All images have descriptive `alt` text
- Proper heading hierarchy (`h1` only in Hero, `h2` per section)
- Keyboard-navigable nav with focus indicators
- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- Color contrast ratios meet WCAG AA on both themes
- Interactive elements have unique IDs

---

> [!TIP]
> **Estimated total files**: ~25 TypeScript/TSX files + 1 CSS file + 1 HTML file
> **Estimated build time**: I'll build this incrementally, section by section, testing in browser as we go.
