export const navItems = [
  { label: "About", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "Products", href: "#products" },
  { label: "UX / UI", href: "#ux-ui" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const tools = [
  "Canva",
  "GPT",
  "Codex",
  "Claude",
  "Gemini",
  "Antigravity",
  "Miro",
  "Lovable",
  "Stitch",
  "Replit",
];

export interface AiProject {
  id: string;
  title: string;
  dockLabel: string;
  tagline: string;
  category: string;
  description: string;
  tools: string[];
  link: string;
  icon: string;
  screenshot: string;
  status?: string;
  highlights: string[];
}

export const aiProjects: AiProject[] = [
  {
    id: "devatlas",
    title: "Dev Atlas",
    dockLabel: "Dev Atlas",
    tagline: "Developer OS & Second Brain",
    category: "Developer Workspace",
    description:
      "Second-brain operating system and workspace for developers with role-based dashboard, progress tracking, and curated roadmaps.",
    tools: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    link: "https://devatlas-lake.vercel.app/?role=all&section=overview",
    icon: "/projects/devatlas.png",
    screenshot: "/projects/devatlas_screenshot.jpg",
    status: "Live Project",
    highlights: [
      "Role-based developer dashboard",
      "Interactive curated learning roadmaps",
      "Real-time progress milestone tracking",
      "Vercel edge performance pipeline",
    ],
  },
  {
    id: "abtalks",
    title: "Abtalks Landing Redesign",
    dockLabel: "AB Talks",
    tagline: "High-Impact Brutalist Editorial",
    category: "Landing Page Redesign",
    description:
      "Editorial landing page redesign for Abtalks featuring bold brutalist typography, dynamic motion, and conversion-focused layout.",
    tools: ["React", "Motion", "Tailwind", "Vercel"],
    link: "https://abtalks-redesign-rust.vercel.app/",
    icon: "/projects/abtalks.png",
    screenshot: "/projects/abtalks_screenshot.jpg",
    status: "Live Project",
    highlights: [
      "Custom fluid brutalist typography",
      "Kinetic Framer Motion scroll choreography",
      "Conversion-optimized responsive layout",
      "Zero-latency edge distribution",
    ],
  },
  {
    id: "creonix",
    title: "Creonix",
    dockLabel: "Creonix",
    tagline: "AI Illustration Studio for Designers",
    category: "Generative AI Platform",
    description:
      "AI illustration generator that creates styled visuals for designers using Gemini API.",
    tools: ["Lovable", "Gemini API"],
    link: "https://creonix-art-creator.lovable.app",
    icon: "/projects/creonix.png",
    screenshot: "/projects/creonix_screenshot.jpg",
    status: "Under Progress",
    highlights: [
      "Gemini API multimodal image synthesis",
      "Custom-tailored illustration style presets",
      "Designer workflow prompt engineering",
      "Rapid export pipeline in SVG/PNG",
    ],
  },
  {
    id: "prepblitz",
    title: "PrepBlitz",
    dockLabel: "PrepBlitz",
    tagline: "Gen Z Exam Prep & Revision Experience",
    category: "EdTech Mobile Web App",
    description:
      "Cross-platform exam preparation experience for Gen Z students with progress tracking.",
    tools: ["Lovable"],
    link: "https://id-preview--c1e34932-22ce-4676-86af-7f1ab15467b7.lovable.app",
    icon: "/projects/prepblitz.png",
    screenshot: "/projects/prepblitz_screenshot.png",
    status: "Under Progress",
    highlights: [
      "Bite-sized micro-learning test modules",
      "Gamified progress tracking & streaks",
      "Adaptive question revision flows",
      "Mobile-first responsive UX architecture",
    ],
  },
];

export interface SubProjectPart {
  type: "ux" | "ui";
  title: string;
  badge: string;
  tag: string;
  description: string;
  link: string;
  coverImage: string;
  actionLabel: string;
}

export interface UxUiProject {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  link?: string;
  accent: string;
  coverImage: string;
  hasModal?: boolean;
  subProjects?: SubProjectPart[];
}

export const uxUiProjects: UxUiProject[] = [
  {
    number: "01",
    title: "Nexus GG",
    subtitle: "Gaming ecosystem — UX research & interactive UI prototype",
    category: "Gaming Ecosystem",
    accent: "#E63946",
    coverImage: "/projects/nexus_cover.png",
    hasModal: true,
    subProjects: [
      {
        type: "ux",
        title: "Nexus GG UX Research",
        badge: "UX Research • Miro",
        tag: "User Research & Architecture",
        description:
          "Comprehensive UX research, player personas, gaming ecosystem information architecture, and core journey maps documented on Miro.",
        link: "https://miro.com/app/board/uXjVHVlMcO0=/?share_link_id=153443925322",
        coverImage: "/projects/nexus_ux.png",
        actionLabel: "Open Miro Board ↗",
      },
      {
        type: "ui",
        title: "Nexus GG UI Prototype",
        badge: "UI Prototype • Stitch",
        tag: "Interactive Design System",
        description:
          "High-fidelity interactive prototype, gaming UI component system, and responsive screen flows built in Stitch with Google.",
        link: "https://stitch.withgoogle.com/preview/12763680542864368951?node-id=ef27dedf2bc040128be786c6e39caede",
        coverImage: "/projects/nexus_ui.png",
        actionLabel: "Launch Stitch Prototype ↗",
      },
    ],
  },
  {
    number: "02",
    title: "Palmist.io Website Redesign",
    subtitle:
      "Redesign from AI slop to human touch, design decisions inside Figma file",
    category: "Website Redesign",
    link: "https://www.figma.com/design/RNsq1KmSm8tEiNfECWmwNd/projects-base?node-id=482-4&t=PDYGEryUjHA6bl1Y-1",
    accent: "#E63946",
    coverImage: "/projects/palmist.png",
  },
  {
    number: "03",
    title: "Equifiz",
    subtitle:
      "Fintech project (internship project) — shipped in production",
    category: "Fintech Project",
    link: "https://www.figma.com/design/9RfatmO6DzUdI2d2Hm5yGW/Equifiz?node-id=0-1&t=VDkRwSrOdSUBcECw-1",
    accent: "#B7094C",
    coverImage: "/projects/equifiz.png",
  },
];

export const figmaProjects = uxUiProjects;

export interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  tagline?: string;
  focus?: string;
  color: string;
  textColor: string;
  strapColor: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "RamScript Private Limited",
    role: "UI/UX Intern",
    date: "Jan 2026 - Feb 2026",
    tagline: "Product Interface & Prototyping",
    focus: "Design Systems & User Flows",
    color: "#18181b",
    textColor: "#f4f4f5",
    strapColor: "#e52424",
  },
  {
    company: "Acquiq",
    role: "User Experience Designer",
    date: "May 2026 - Jul 2026",
    tagline: "AI Hiring Infrastructure",
    focus: "Recruiter Experience & Heuristics",
    color: "#1e3a8a",
    textColor: "#eff6ff",
    strapColor: "#ffffff",
  },
  {
    company: "The Regiment",
    role: "UI/UX Design Intern",
    date: "Jun 2026 - Sep 2026",
    tagline: "Design Operations & Product",
    focus: "Mobile & Web Interface Architecture",
    color: "#7c2d12",
    textColor: "#fff7ed",
    strapColor: "#fed7aa",
  },
  {
    company: "UI/UX Hyderabad",
    role: "Core Member",
    date: "May 2026 - Present",
    tagline: "Design Guild & Community Leadership",
    focus: "Curating Meetups, Sprints & Mentorship",
    color: "#e52424",
    textColor: "#ffffff",
    strapColor: "#111111",
  },
];

export const contactLinks = [
  {
    label: "LinkedIn",
    value: "taushik-chandana",
    href: "https://www.linkedin.com/in/taushik-chandana-16ba14378",
  },
  {
    label: "Email",
    value: "taushikok@gmail.com",
    href: "mailto:taushikok@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 8919237170",
    href: "tel:+918919237170",
  },
];


export interface AchievementMetric {
  value: string;
  label: string;
}

export interface Achievement {
  id: string;
  tag: string;
  host: string;
  title: string;
  headline: string;
  award: string;
  metrics: AchievementMetric[];
  description: string;
  image: string;
  ctaText: string;
  date?: string;
  badge?: string;
  accentColor: string;
}

export const achievements: Achievement[] = [
  {
    id: "uxplosion",
    tag: "UXPLOSION 3.0 // SDC",
    host: "Student Developers Community",
    title: "Uxplosion 3.0",
    headline: "1st Prize Winner at Uxplosion 3.0 Designathon",
    award: "1st Prize Winner • Hackathon Champion",
    metrics: [
      { value: "30+", label: "Screens covered" },
      { value: "8+", label: "Edge cases mapped" },
    ],
    description:
      "Crafted comprehensive end-to-end design flows and systematic edge-case resolution under intensive hackathon time constraints, earning the 1st prize championship.",
    image: "/achievements/uxplosion.png",
    ctaText: "View Certificate ↗",
    date: "Sep 2026",
    badge: "1st Prize Champion",
    accentColor: "#e52424",
  },
  {
    id: "cvr",
    tag: "CVR COLLEGE // UI/UX CONTEST",
    host: "CVR College of Engineering",
    title: "UI/UX Contest at CVR College",
    headline: "1st Prize at CVR College UI/UX Contest",
    award: "1st Prize Awarded to Taushik",
    metrics: [
      { value: "10+", label: "Core design flows" },
      { value: "1st", label: "Place Award" },
    ],
    description:
      "Architected intuitive user journeys, interactive Figma design systems, and cohesive micro-interactions evaluated against design heuristics and usability criteria.",
    image: "/achievements/cvr.png",
    ctaText: "View Certificate ↗",
    date: "2026",
    badge: "1st Prize Champion",
    accentColor: "#e52424",
  },
  {
    id: "signallabs",
    tag: "SIGNAL LABS // AI HACK DAY",
    host: "Signal Labs",
    title: "Signal Labs AI Hackathon",
    headline: "AI Workspace for Multiple Roles at Signal Labs",
    award: "1st Prize Winner at Signal Labs",
    metrics: [
      { value: "AI", label: "Workspace for multiple roles" },
      { value: "1st", label: "Prize at Signal Labs" },
    ],
    description:
      "Engineered an agentic AI workspace tailored for specialized roles at Signal Labs, integrating ergonomic frontend layouts with intelligent model execution.",
    image: "/achievements/signallabs.png",
    ctaText: "View Certificate ↗",
    date: "2026",
    badge: "1st Prize Winner",
    accentColor: "#e52424",
  },
  {
    id: "scientclg",
    tag: "SCIENT ENG COLLEGE // QUANTUM LEAP",
    host: "SCIENT Institute of Technology",
    title: "UI/UX Designathon at Scient Engineering College",
    headline: "AI-Powered Projects with Frontend and Backend",
    award: "Quantum Leap Runner Up Trophy",
    metrics: [
      { value: "Full-Stack", label: "Frontend and backend code" },
      { value: "Runner", label: "Quantum Leap Trophy" },
    ],
    description:
      "Shipped AI-powered projects with full-stack execution, seamless frontend interactions, and robust backend pipelines under rapid hackathon execution.",
    image: "/achievements/scientclg.png",
    ctaText: "View Trophy & Award ↗",
    date: "2026",
    badge: "Quantum Leap Runner",
    accentColor: "#e52424",
  },
];
