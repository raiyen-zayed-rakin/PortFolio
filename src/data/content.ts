/* ============================================================
   ✦ SINGLE SOURCE OF TRUTH ✦
   Edit THIS file to update all content on the site.
   ============================================================ */

import type { Rank } from "../lib/rank";

/* -------------------------------- IDENTITY ------------------------------- */
export const identity = {
  name: "RAKIN",
  fullName: "Raiyen Zayed Rakin",
  tagline: "ラキン — Software Engineer",
  japaneseSub: "ソフトウェアエンジニア",
  roles: ["FULL-STACK DEVELOPER", "AI ENTHUSIAST", "RESEARCHER"],
  intro:
    "Final-year CSE student with full-stack development and applied-AI project experience. Crafting digital experiences with clean code and creative solutions.",
  email: "raiyenzayedrakin@gmail.com",
  phone: "+8801973389048",
  location: "Dhaka, Bangladesh",
  cvPath: "Raiyen_Zayed_Rakin_Resume.pdf",
  heroImage: "assets/rakin-ghibli-sticker-r2.png",
  profileImage: "assets/profile-image.png",
};

/* --------------------------- HEADLINE STATS ------------------------------ */
export const headlineStats = [
  { value: "6+", label: "PROJECTS" },
  { value: "3", label: "PUBLICATIONS" },
  { value: "3.86", label: "CGPA" },
];

/* ---------------------------------- ABOUT -------------------------------- */
export const about = {
  title: "ABOUT ME",
  paragraphs: [
    "I'm a final-year Computer Science and Engineering student at AIUB with a passion for building things that matter — from AI-powered platforms to polished web experiences. My work spans full-stack web development, applied machine learning, and academic research. I believe in writing clean, maintainable code that solves real problems.",
  ],
  panel: [
    { icon: "⚔️", k: "Class", v: "Full-Stack Developer" },
    { icon: "🎖️", k: "Rank", v: "S-Class Student" },
    { icon: "🏛️", k: "Guild", v: "AIUB" },
    { icon: "🔬", k: "Specialty", v: "Web · AI · Research" },
    { icon: "📍", k: "Location", v: "Dhaka, Bangladesh" },
    { icon: "📧", k: "Email", v: "raiyenzayedrakin@gmail.com" },
  ],
};

/* --------------------------------- SKILLS -------------------------------- */
export const skills: { name: string; rank: Rank; value: number; category: string }[] = [
  // Languages
  { name: "JavaScript", rank: "S", value: 92, category: "Languages" },
  { name: "TypeScript", rank: "A", value: 85, category: "Languages" },
  { name: "Python", rank: "A", value: 85, category: "Languages" },
  { name: "HTML / CSS", rank: "S", value: 93, category: "Languages" },
  { name: "SQL", rank: "A", value: 80, category: "Languages" },
  { name: "C++", rank: "B", value: 75, category: "Languages" },
  // Frontend
  { name: "React", rank: "S", value: 90, category: "Frontend" },
  { name: "Next.js", rank: "A", value: 85, category: "Frontend" },
  { name: "Tailwind CSS", rank: "S", value: 92, category: "Frontend" },
  // Backend
  { name: "FastAPI", rank: "A", value: 80, category: "Backend" },
  { name: "Node.js", rank: "A", value: 78, category: "Backend" },
  { name: "MongoDB", rank: "A", value: 80, category: "Backend" },
  // AI/ML
  { name: "PyTorch", rank: "B", value: 70, category: "AI/ML" },
  { name: "OpenCV", rank: "B", value: 72, category: "AI/ML" },
  // Tools
  { name: "Git / GitHub", rank: "S", value: 90, category: "Tools" },
];

/* -------------------------------- PROJECTS ------------------------------- */
export const projects: {
  title: string;
  label: string;
  difficulty: Rank;
  blurb: string;
  tech: string[];
  link?: string;
  repoLink?: string;
  preview: string | null;
}[] = [
    {
      title: "RecruitBD-AI",
      label: "AI-Powered Platform",
      difficulty: "S",
      blurb:
        "AI-powered CV parsing and job matching platform. FastAPI backend with Gemini API integration extracts structured data from CVs (PDF/DOCX) and matches candidates using SentenceTransformers.",
      tech: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "FastAPI", "Gemini API", "SentenceTransformers"],
      link: "https://recruit-bd-ai.vercel.app/",
      repoLink: "https://github.com/raiyen-zayed-rakin/RecruitBD-AI",
      preview: "assets/recruitbd.png",
    },
    {
      title: "Ledger-AI",
      label: "Business Intelligence",
      difficulty: "S",
      blurb:
        "AI-powered business intelligence dashboard for SME owners. Next.js + Groq LLaMA for sentiment tagging and report generation, with a multi-agent AI CFO orchestrator producing strategic recommendations.",
      tech: ["React 18", "TypeScript", "Tailwind CSS", "Next.js", "Groq LLaMA", "Supabase Auth"],
      link: "https://ledgerai.mrudoy.me/",
      repoLink: "https://github.com/raiyen-zayed-rakin/Ledger-Ai",
      preview: "assets/ledger.png",
    },
    {
      title: "Pathfinder 24/7",
      label: "Client Landing Page",
      difficulty: "A",
      blurb:
        "Premium landing page for a Bangladesh-based travel and immigration consultancy. Showcasing visa processing, work permits, student visas, and immigration consulting services.",
      tech: ["React", "Vite", "Tailwind CSS", "shadcn/ui"],
      link: "https://pathfinder24seven.vercel.app/",
      preview: "assets/pathfinder.png",
    },
    {
      title: "AIUB CGPA Calculator",
      label: "Web Tool",
      difficulty: "B",
      blurb:
        "Responsive web-based CGPA calculator for AIUB students. Input grades (A+ to F) and credit counts to calculate cumulative GPA — slick, mobile-friendly design.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://aiub-cgpa-calculator.vercel.app/",
      repoLink: "https://github.com/raiyen-zayed-rakin/AIUB-CGPA-Calculator",
      preview: "assets/aiub-cgpa-cal.png",
    },
    {
      title: "AIUB Fitness Zone",
      label: "Desktop App",
      difficulty: "B",
      blurb:
        "Comprehensive fitness management platform for AIUB students and faculty with workout plans, health resources, and challenges to promote physical well-being.",
      tech: ["Java", "Swing GUI"],
      repoLink: "https://github.com/AIUBCodeArchives/AIUB-FITNESS-ZONE",
      preview: "assets/aiub-fitness-zone.png",
    },
    {
      title: "StudentDash 2.0",
      label: "Desktop App",
      difficulty: "B",
      blurb:
        "Ride-sharing application for the student community offering affordable, safe transportation options with real-time tracking and effortless management.",
      tech: ["C#", "WinForms", "SQL"],
      repoLink: "https://github.com/AIUBCodeArchives/StudentDash-2.0",
      preview: "assets/studentdash20.png",
    },
  ];

/* ------------------------------- EXPERIENCE ------------------------------ */
export const experience: {
  role: string;
  org: string;
  period: string;
  rank: Rank;
  points: string[];
}[] = [
    {
      role: "Freelance Web Developer",
      org: "Remote — Client: Pathfinder 24/7",
      period: "2026",
      rank: "A",
      points: [
        "Built and deployed a React + Vite + Tailwind + shadcn/ui landing page for a travel & immigration consultancy.",
        "Configured production deployment on Vercel with custom domain and performance optimization.",
      ],
    },
    {
      role: "Research Intern",
      org: "ELITE Research Lab LLC (Remote)",
      period: "January 2026 – April 2026",
      rank: "B",
      points: [
        "Authored 6 research papers spanning medical imaging, ML-based diagnosis, and AI workflow support.",
        "Produced literature reviews, experimental design, and manuscript writing for chest X-ray analysis, glaucoma diagnosis, RTI classification, and radiology report generation.",
        "Prepared publication-ready manuscript drafts across multiple formats.",
      ],
    },
  ];

/* -------------------------------- PUBLICATIONS --------------------------- */
export const publications: {
  title: string;
  journal: string;
  year: number;
  doi: string | null;
  type: string;
}[] = [
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

/* ------------------------------- EDUCATION ------------------------------- */
export const education: {
  institution: string;
  degree: string;
  period: string;
  cgpa?: string;
  image: string;
  link: string;
  coursework?: string[];
}[] = [
    {
      institution: "American International University-Bangladesh (AIUB)",
      degree: "B.Sc. in Computer Science and Engineering",
      period: "January 2023 – Expected September 2026",
      cgpa: "3.86 / 4.00",
      image: "assets/aiub.png",
      link: "https://www.aiub.edu",
      coursework: [
        "Web Technologies",
        "Object Oriented Programming",
        "Machine Learning",
        "Computer Vision & Pattern Recognition",
        "Natural Language Processing",
        "Software Engineering",
        "Research Methodology",
      ],
    },
    {
      institution: "Dhaka Imperial College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2019 – 2021",
      image: "assets/dhaka_imperiel.png",
      link: "https://imperialcollege.edu.bd/",
    },
    {
      institution: "Motijheel Model High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2017 – 2019",
      image: "assets/motijheel.png",
      link: "http://www.mmodel.edu.bd/",
    },
  ];

/* --------------------------------- SOCIAL -------------------------------- */
export const socials = [
  { label: "GitHub", href: "https://github.com/raiyen-zayed-rakin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raiyen-zayed-rakin-948100265/" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Raiyen-Rakin" },
  { label: "Instagram", href: "https://www.instagram.com/rakin_sama_/" },
  { label: "Email", href: "mailto:raiyenzayedrakin@gmail.com" },
];

/* --------------------------------- NAV ----------------------------------- */
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
