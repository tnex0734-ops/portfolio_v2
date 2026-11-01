"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Mail,
  Phone,
  Sparkle,
  Star,
  X,
} from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import { CustomCursor } from "@/components/CustomCursor";
import { LazyImage } from "@/components/lazy-image";
import { SectionHeading } from "@/components/SectionHeading";
import { AiProjectShowcase } from "@/components/AiProjectShowcase";
import { AsciiHandLeft, AsciiHandRight } from "@/components/AsciiHands";
import { UxUiIdCardsSection } from "@/components/UxUiIdCardsSection";
import { AboutRedSection } from "@/components/AboutRedSection";
import { ResumeDownloadButton } from "@/components/ResumeDownloadButton";

import { AchievementsSection } from "@/components/AchievementsSection";

import { ContactLetterSection } from "@/components/ContactLetterSection";

import { ExperienceBooksSection } from "@/components/ExperienceBooksSection";
import { EditorialPreloader } from "@/components/EditorialPreloader";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import { ToolsSection } from "@/components/ToolsSection";

import {
  aiProjects,
  contactLinks,
  experience,
  navItems,
  tools,
  uxUiProjects,
  type UxUiProject,
} from "@/lib/content";

const softEase = [0.22, 1, 0.36, 1] as const;

const fadeIn = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.55, ease: softEase },
};

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      const params = new URLSearchParams(window.location.search);
      const scrollTarget = params.get("scroll");
      if (scrollTarget) {
        const el = document.getElementById(scrollTarget);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "instant" }), 100);
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      if (window.location.hash && !scrollTarget) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, []);
  return (
    <>
      <CustomCursor />
      <div className="grain" />

      <EditorialPreloader />
      <FloatingNavbar />

      <main className="relative z-10 overflow-x-clip">
        <HeroSection />
        <AboutRedSection />
        <ToolsSection />
        <AiProductsSection />
        <UxUiProjectsSection />
        <AchievementsSection />
        <ExperienceBooksSection />
        

        <ContactLetterSection />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] pt-16 sm:pt-20 pb-8 sm:pb-12 flex items-center justify-center bg-[var(--paper)] select-none"
    >
      {/* Top Left Corner Red Accent Graphic */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 pointer-events-none">
        <div className="relative w-6 h-6 sm:w-20 sm:h-20 border-2 border-[#e52424]">
          <div className="absolute top-0 left-0 w-3 h-3 sm:w-12 sm:h-12 bg-[#e52424] flex items-center justify-center">
            <span className="w-1 h-1 sm:w-2.5 sm:h-2.5 rounded-full bg-white block" />
          </div>
          <div className="absolute bottom-0.5 right-0.5 w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424]" />
        </div>
      </div>

      {/* Top Right Corner Red Accent Graphic */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20 pointer-events-none">
        <div className="relative w-6 h-6 sm:w-20 sm:h-20 border-2 border-[#e52424]">
          <div className="absolute top-0 right-0 w-3 h-3 sm:w-12 sm:h-12 bg-[#e52424] flex items-center justify-center">
            <span className="w-1 h-1 sm:w-2.5 sm:h-2.5 rounded-full bg-white block" />
          </div>
          <div className="absolute bottom-0.5 left-0.5 w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424]" />
        </div>
      </div>

      {/* Bottom Left Corner Red Accent Graphic */}
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-20 pointer-events-none hidden sm:block">
        <div className="relative w-14 h-14 border-2 border-[#e52424]">
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-[#e52424] flex items-center justify-center">
            <span className="w-2 rounded-full bg-white block" />
          </div>
          <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#e52424]" />
        </div>
      </div>

      {/* Bottom Right Corner Red Accent Graphic */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 pointer-events-none hidden sm:block">
        <div className="relative w-14 h-14 border-2 border-[#e52424]">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#e52424] flex items-center justify-center">
            <span className="w-2 rounded-full bg-white block" />
          </div>
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full bg-[#e52424]" />
        </div>
      </div>

      <div className="section-shell relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-6">
        <div className="relative flex flex-col items-center justify-center">
          {/* Main Poster Typography Frame */}
          <motion.div
            className="relative w-full max-w-5xl py-2 sm:py-6"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: softEase }}
          >
            {/* Top Frame Bar */}
            <div className="relative flex items-center justify-between text-[#e52424] font-black text-[9px] xs:text-[10px] sm:text-xs md:text-sm tracking-wider uppercase mb-2 sm:mb-3 px-1 sm:px-2">
              <span className="flex items-center gap-1 sm:gap-2 font-bold">
                TAUSHIK CHANDANA
                <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424] inline-block" />
              </span>
              <div className="flex-1 mx-1.5 sm:mx-6 h-[1.5px] bg-[#e52424]" />
              <span className="flex items-center gap-1 sm:gap-2 font-bold">
                <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424] inline-block" />
                2026
              </span>
            </div>

            {/* DESKTOP HERO VIEW (md and up) */}
            <div className="hidden md:flex relative items-center justify-center min-h-[420px] lg:min-h-[480px]">
              {/* Left Side Typography: P O / F O */}
              <div className="z-10 flex flex-col justify-between items-end text-[#e52424] display-font select-none md:mr-[-40px] lg:mr-[-70px]">
                <div className="flex gap-2 text-[8rem] lg:text-[11rem] xl:text-[13rem] font-black leading-[0.78] tracking-tighter">
                  <span>P</span>
                  <span>O</span>
                </div>
                <div className="flex gap-2 text-[8rem] lg:text-[11rem] xl:text-[13rem] font-black leading-[0.78] tracking-tighter mt-2">
                  <span>F</span>
                  <span>O</span>
                </div>
              </div>

              {/* Center Column: Character Illustration */}
              <div className="relative z-20 flex flex-col items-center justify-center shrink-0 my-[-25px]">
                <motion.div
                  className="w-[280px] md:w-[340px] lg:w-[420px] shrink-0 mix-blend-multiply"
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: softEase }}
                  whileHover={{ scale: 1.04 }}
                >
                  <img
                    src="/character_straight.png"
                    alt="Taushik Chandana character illustration"
                    className="w-full h-auto object-contain mix-blend-multiply filter contrast-105"
                  />
                </motion.div>

                {/* TAUSHIK Stamp Badge */}
                <motion.div
                  className="relative cursor-pointer mt-3"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                >
                  <div className="px-5 py-2 rounded-full border-2 border-[#e52424] bg-[var(--paper)] text-[#e52424] font-black text-sm uppercase tracking-widest shadow-[3px_3px_0_#e52424]">
                    TAUSHIK
                  </div>
                  <span className="absolute -top-2 -right-2 text-[#e52424] font-black text-xs">
                    ✦
                  </span>
                </motion.div>
              </div>

              {/* Right Side Typography: R T / L I O */}
              <div className="z-10 flex flex-col justify-between items-start text-[#e52424] display-font select-none md:ml-[-40px] lg:ml-[-70px]">
                <div className="flex gap-2 text-[8rem] lg:text-[11rem] xl:text-[13rem] font-black leading-[0.78] tracking-tighter">
                  <span>R</span>
                  <span>T</span>
                </div>
                <div className="flex gap-2 text-[8rem] lg:text-[11rem] xl:text-[13rem] font-black leading-[0.78] tracking-tighter mt-2">
                  <span>L</span>
                  <span>I</span>
                  <span>O</span>
                </div>
              </div>
            </div>

            {/* MOBILE HERO VIEW (< md, applies to all mobile resolutions from 320px to 767px) */}
            <div className="flex md:hidden flex-col items-center justify-center py-4 xs:py-6 relative select-none w-full">
              {/* 1. TEXT ON TOP: Large, high-impact PORTFOLIO title */}
              <div className="text-center display-font text-[#e52424] font-black leading-[0.78] tracking-tighter text-[5.2rem] xs:text-[6.2rem] sm:text-[7.5rem]">
                <div className="tracking-tight">PORT</div>
                <div className="tracking-tight mt-1">FOLIO</div>
              </div>

              {/* 2. IMAGE BELOW TEXT: Large, prominent character illustration */}
              <motion.div
                className="relative z-10 w-[240px] xs:w-[270px] sm:w-[320px] max-w-[85%] mt-5 xs:mt-7 mix-blend-multiply"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/character_straight.png"
                  alt="Taushik Chandana character illustration"
                  className="w-full h-auto object-contain mix-blend-multiply filter contrast-105"
                />
              </motion.div>

              {/* 3. NAME STAMP DIRECTLY BELOW IMAGE */}
              <motion.div
                className="relative cursor-pointer z-20 mt-4 xs:mt-5"
                initial={{ scale: 0.9, rotate: -6 }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                <div className="px-6 py-2.5 rounded-full border-3 border-[#e52424] bg-[var(--paper)] text-[#e52424] font-black text-sm xs:text-base uppercase tracking-widest shadow-[4px_4px_0_#e52424]">
                  TAUSHIK ✦ UX
                </div>
              </motion.div>
            </div>

            {/* Bottom Frame Bar */}
            <div className="relative flex items-center justify-between text-[#e52424] font-black text-[9px] xs:text-[10px] sm:text-xs md:text-sm tracking-wider uppercase mt-4 sm:mt-6 px-1 sm:px-2">
              <span className="flex items-center gap-1 sm:gap-2 font-bold">
                UI/UX DESIGNER
                <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424] inline-block" />
              </span>
              <div className="flex-1 mx-1.5 sm:mx-6 h-[1.5px] bg-[#e52424]" />
              <span className="flex items-center gap-1 sm:gap-2 font-bold">
                <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#e52424] inline-block" />
                PRODUCT DESIGNER
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const FloatingShape = ({
  children,
  className,
  delay = 0,
  floatDuration = 4,
  spinDuration = 10,
  yOffset = -15,
}: {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  floatDuration?: number;
  spinDuration?: number;
  yOffset?: number;
}) => {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none z-0 ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 80 }}
    >
      <motion.div
        animate={{
          y: [0, yOffset, 0],
          rotate: spinDuration ? [0, 360] : 0,
        }}
        transition={{
          y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut" },
          rotate: spinDuration
            ? { duration: spinDuration, repeat: Infinity, ease: "linear" }
            : undefined,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

/* Punk-Collage Brutalism Helper Components */

function BrutalistSectionDivider({ variant = "zigzag", className = "" }: { variant?: "zigzag" | "ripped" | "spikes"; className?: string }) {
  if (variant === "ripped") {
    return (
      <div aria-hidden="true" className={`w-full overflow-hidden leading-none select-none my-6 ${className}`}>
        <svg className="relative block w-full h-8 sm:h-12 text-[#e52424]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,0 L30,40 L60,10 L100,50 L140,20 L180,60 L230,15 L280,55 L320,25 L370,65 L420,10 L480,50 L530,20 L580,70 L640,15 L690,60 L750,20 L810,65 L870,25 L920,55 L980,10 L1040,60 L1100,20 L1150,50 L1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    );
  }

  if (variant === "spikes") {
    return (
      <div aria-hidden="true" className={`w-full overflow-hidden leading-none select-none my-6 ${className}`}>
        <svg className="relative block w-full h-6 sm:h-10 text-[var(--ink)]" viewBox="0 0 1200 60" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,0 L40,60 L80,0 L120,60 L160,0 L200,60 L240,0 L280,60 L320,0 L360,60 L400,0 L440,60 L480,0 L520,60 L560,0 L600,60 L640,0 L680,60 L720,0 L760,60 L800,0 L840,60 L880,0 L920,60 L960,0 L1000,60 L1040,0 L1080,60 L1120,0 L1160,60 L1200,0 L1200,60 L0,60 Z" />
        </svg>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`w-full overflow-hidden leading-none select-none my-6 ${className}`}>
      <svg className="relative block w-full h-6 sm:h-10 text-[#e52424]" viewBox="0 0 1200 40" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M0,20 L50,5 L100,35 L150,10 L200,30 L250,5 L300,35 L350,15 L400,30 L450,5 L500,35 L550,10 L600,30 L650,5 L700,35 L750,15 L800,30 L850,5 L900,35 L950,10 L1000,30 L1050,5 L1100,35 L1150,15 L1200,20" />
      </svg>
    </div>
  );
}

function StarburstBadge({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.12, rotate: 12 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`relative inline-flex items-center justify-center p-3 text-center cursor-pointer ${className}`}
    >
      <div
        className="absolute inset-0 bg-[#e52424] shadow-[3px_3px_0_#220608]"
        style={{
          clipPath:
            "polygon(50% 0%, 63% 15%, 83% 4%, 81% 25%, 100% 35%, 88% 52%, 98% 72%, 78% 77%, 71% 98%, 53% 86%, 35% 97%, 30% 77%, 9% 74%, 18% 54%, 2% 38%, 21% 27%, 15% 7%, 37% 13%)",
        }}
      />
      <span className="relative z-10 font-mono text-[9px] sm:text-[10px] font-black uppercase text-white tracking-widest px-1">
        {text}
      </span>
    </motion.div>
  );
}

function HandDoodle({ type = "underline", className = "" }: { type?: "underline" | "arrow" | "squiggle" | "burst"; className?: string }) {
  if (type === "underline") {
    return (
      <svg aria-hidden="true" className={`w-full h-3 sm:h-4 text-[#e52424] overflow-visible ${className}`} viewBox="0 0 200 12" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <path d="M3 8 Q 50 2, 100 8 T 197 5" />
      </svg>
    );
  }

  if (type === "arrow") {
    return (
      <svg aria-hidden="true" className={`w-10 h-10 sm:w-12 sm:h-12 text-[#e52424] overflow-visible ${className}`} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <path d="M10 50 Q 25 15, 45 10 M 32 6 L 48 10 L 44 24" />
      </svg>
    );
  }

  if (type === "squiggle") {
    return (
      <svg aria-hidden="true" className={`w-12 h-12 text-[#e52424]/70 ${className}`} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M10 30 C 15 10, 30 10, 25 30 C 20 50, 40 50, 45 25 C 50 10, 55 40, 55 45" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={`w-8 h-8 text-[var(--ink)] ${className}`} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M20 2 L23 15 L36 8 L27 19 L40 25 L26 27 L30 40 L19 29 L10 38 L13 25 L1 22 L14 16 L5 5 L17 11 Z" />
    </svg>
  );
}





function UxUiProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<UxUiProject | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <BrutalistSectionDivider variant="zigzag" />
      <section id="ux-ui" className="relative overflow-hidden py-10 sm:py-16 scroll-mt-16 bg-[var(--paper)]">
        {/* Invisible anchor for backward compatibility with #figma */}
        <span id="figma" className="absolute -top-20" aria-hidden="true" />

        <div className="section-shell relative z-10 w-full max-w-6xl mx-auto">
          {/* Semicircular Rotational Carousel (Reference: Dev Toolkit • Built to Flex) */}
          <UxUiIdCardsSection onOpenModal={setSelectedProject} />
        </div>

        {/* NEXUS GG DUAL MODAL (UX & UI) */}
        <AnimatePresence>
          {selectedProject && selectedProject.subProjects && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.94, y: 24, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.94, y: 24, opacity: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 26 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border-3 border-[var(--ink)] bg-[var(--paper)] p-4 sm:p-8 shadow-[10px_10px_0_#e52424]"
              >
                {/* Modal Top Bar */}
                <div className="flex items-start justify-between border-b-2 border-[var(--ink)] pb-4 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs font-black text-white bg-[#e52424] px-2 py-0.5 rounded shadow-[2px_2px_0_#220608]">
                        {selectedProject.number}
                      </span>
                      <span className="font-mono text-xs font-black uppercase text-[var(--muted)]">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h2 className="display-font text-2xl sm:text-4xl font-black uppercase text-[var(--ink)]">
                      {selectedProject.title}
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-[var(--muted)] font-medium">
                      Select whether to explore the UX Research (Miro) or interactive UI Prototype (Stitch):
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-[var(--ink)] bg-white text-[var(--ink)] shadow-[3px_3px_0_#220608] hover:bg-[#e52424] hover:text-white hover:border-[#e52424] transition-all"
                    aria-label="Close dialog"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Dual Sub-projects Showcase Grid */}
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {selectedProject.subProjects.map((part) => (
                    <div
                      key={part.type}
                      className="flex flex-col justify-between rounded-xl border-2 border-[var(--ink)] bg-white p-4 sm:p-5 shadow-[5px_5px_0_#220608]"
                    >
                      <div>
                        {/* Artwork Cover depicting UX / UI */}
                        <div className="w-full flex items-center justify-center p-2 rounded-xl bg-[#fff5f5]/80 overflow-hidden">
                          <img
                            src={part.coverImage}
                            alt={part.title}
                            className="w-full max-h-[220px] object-contain"
                          />
                        </div>

                        <div className="mt-4">
                          <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#e52424]">
                            {part.badge}
                          </span>
                          <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--ink)] mt-1">
                            {part.title}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--muted)]">
                            {part.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t-2 border-[var(--line)]">
                        <a
                          href={part.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border-2 border-[var(--ink)] bg-[#e52424] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0_#220608] hover:bg-[var(--ink)] hover:border-[var(--ink)] transition-all"
                        >
                          <BrandIcon
                            name={part.type === "ux" ? "Miro" : "Stitch"}
                            className="h-4 w-4"
                          />
                          <span>{part.actionLabel}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t-2 border-[var(--line)] flex items-center justify-between text-xs font-bold text-[var(--muted)] uppercase">
                  <span>Nexus GG Ecosystem</span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="subtle-link text-[#e52424]"
                  >
                    Back to portfolio [ESC]
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

function AiProductsSection() {
  return (
    <>
      
      <section id="products" className="relative py-6 sm:py-10 overflow-hidden scroll-mt-16 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        <FloatingShape className="left-12 top-4 text-[var(--clay)] opacity-30" delay={0.1}>
          <Star size={20} fill="currentColor" />
        </FloatingShape>
        <FloatingShape className="right-12 top-6 text-[var(--coral)] opacity-30" delay={0.2}>
          <Sparkle size={24} />
        </FloatingShape>

        <div className="w-full relative z-10 px-2 sm:px-4">
          <motion.div {...fadeIn} className="text-center mb-3 sm:mb-4">
            <h2 className="display-font text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[var(--ink)] tracking-tight leading-tight">
              AI Powered Products / Side Projects
            </h2>
          </motion.div>

          {/* Symmetrical Flanking Layout: Hands emerge from screen edges and stop before the card */}
          <div className="relative w-full max-w-[1880px] mx-auto flex items-center justify-center">
            {/* Left Hand: Emerging from left screen edge pointing at the card */}
            <div className="hidden lg:flex flex-1 items-center justify-end pr-2 lg:pr-3 2xl:pr-6 pointer-events-none select-none overflow-hidden">
              <AsciiHandLeft />
            </div>

            {/* Central UI Showcase Card */}
            <div className="w-full max-w-4xl xl:max-w-5xl shrink-0 z-10 mx-auto">
              <AiProjectShowcase />
            </div>

            {/* Right Hand: Emerging from right screen edge pointing at the card */}
            <div className="hidden lg:flex flex-1 items-center justify-start pl-2 lg:pl-3 2xl:pl-6 pointer-events-none select-none overflow-hidden">
              <AsciiHandRight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

