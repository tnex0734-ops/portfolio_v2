"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkle,
  RotateCw,
  ExternalLink,
  Layers,
  FileText,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { uxUiProjects, type UxUiProject } from "@/lib/content";
import { cn } from "@/lib/utils";

interface UxUiIdCardsSectionProps {
  onOpenModal?: (project: UxUiProject) => void;
}

interface SingleIdCardProps {
  project: UxUiProject;
  index: number;
  onLaunch: (project: UxUiProject) => void;
}

function SingleIdCard({ project, index, onLaunch }: SingleIdCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Natural idle rotation angle hanging on the lanyard wire (matching vid2)
  // Card 1: -2.5°, Card 2: 0°, Card 3: +2.5°
  const idleRotate = index === 0 ? -2.5 : index === 1 ? 0 : 2.5;

  const handleLaunchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLaunch(project);
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  // Detailed description text tailored for the ID dossier back face
  const projectDetails: Record<
    string,
    {
      role: string;
      description: string;
      deliverables: string[];
      badgeId: string;
      ctaText: string;
    }
  > = {
    "01": {
      role: "UX Research & Interactive Prototype",
      description:
        "Comprehensive gaming ecosystem designed from ground zero. Synthesized player personas and user journey maps on Miro, followed by an interactive design system and responsive prototype built in Stitch with Google.",
      deliverables: [
        "Miro Journey Maps",
        "Stitch Prototype",
        "Gaming UI System",
        "Edge-Case Usability",
      ],
      badgeId: "ID-01 // NEXUS-GG",
      ctaText: "Launch Dual Prototype ✦",
    },
    "02": {
      role: "Lead UI/UX Redesign",
      description:
        "Complete aesthetic and architectural overhaul eliminating repetitive AI slop. Re-engineered information hierarchy, crafted human-centric typography tokens, and documented transparent design decisions directly in Figma.",
      deliverables: [
        "Figma Master File",
        "Anti-Slop Art Direction",
        "Design Tokens",
        "Responsive Flow",
      ],
      badgeId: "ID-02 // PALMIST-REDESIGN",
      ctaText: "Open Figma Project ↗",
    },
    "03": {
      role: "Product Design Intern (Production)",
      description:
        "End-to-end fintech interface shipped into live production. Architected transaction monitoring workflows, high-density data tables, and an accessible component library under stringent fintech compliance.",
      deliverables: [
        "Shipped in Production",
        "Transaction Dashboard",
        "Figma Component System",
        "Design Specs",
      ],
      badgeId: "ID-03 // EQUIFIZ-FINTECH",
      ctaText: "Open Production Case ↗",
    },
  };

  const details = projectDetails[project.number] || {
    role: "Product & UX/UI Designer",
    description: project.subtitle,
    deliverables: ["Figma Design", "Prototype", "Architecture"],
    badgeId: `ID-0${index + 1} // CASE-STUDY`,
    ctaText: "View Project ↗",
  };

  return (
    <div
      className="relative flex flex-col items-center w-[290px] xs:w-[310px] sm:w-[320px] lg:w-[330px] shrink-0"
      style={{ perspective: "1400px" }}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsFlipped(true); // Hover triggers flip to back (as user requested)
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsFlipped(false); // Mouse leave returns to front face
      }}
    >
      {/* ── 1. Metallic Lanyard Clip Clasp (Hanging from top wire) ── */}
      <div className="relative flex flex-col items-center z-30 -mb-3 pointer-events-none">
        {/* Vertical Lanyard Cord Ribbon */}
        <div className="w-[3px] h-8 sm:h-12 bg-gradient-to-b from-neutral-400 via-neutral-300 to-neutral-500 shadow-xs" />

        {/* Realistic Metallic Carabiner Clasp */}
        <div className="relative -mt-1 flex flex-col items-center">
          {/* Swivel Ring */}
          <div className="w-3.5 h-3.5 rounded-full border-2 border-neutral-400 bg-neutral-200 shadow-inner" />
          {/* Metal Spring Claw (snapped through the badge hole) */}
          <div className="w-4 h-4 -mt-1.5 rounded-xs border-2 border-neutral-700 bg-gradient-to-b from-neutral-300 via-neutral-100 to-neutral-400 shadow-[0_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center">
            <div className="w-1.5 h-2 bg-neutral-800 rounded-2xs" />
          </div>
        </div>
      </div>

      {/* ── 2. The 3D Flipping ID Card Container with Natural Pendulum Sway ── */}
      <motion.div
        animate={{
          rotateZ: isHovered
            ? 0
            : [idleRotate - 0.75, idleRotate + 0.75, idleRotate - 0.75],
          y: isHovered ? -8 : [0, -3, 0],
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          rotateZ: isHovered
            ? { type: "spring", stiffness: 240, damping: 22 }
            : { duration: 4.8 + index * 0.6, repeat: Infinity, ease: "easeInOut" },
          y: isHovered
            ? { type: "spring", stiffness: 240, damping: 22 }
            : { duration: 3.6 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-full h-[480px] sm:h-[510px] cursor-pointer origin-top"
        onClick={toggleFlip}
      >
        {/* 3D Flipping Flipper */}
        <motion.div
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{
            duration: 0.65,
            ease: [0.34, 1.4, 0.64, 1], // Emil Kowalski crisp spring flip
          }}
          style={{
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
          }}
          className="relative rounded-[26px] shadow-[6px_8px_0_#220608] hover:shadow-[8px_10px_0_#e52424] transition-shadow duration-300"
        >
          {/* ════════════════════════════════════════════════════════════════ */}
          {/* ── FRONT FACE: Authentic Physical ID Card ──                     */}
          {/* ════════════════════════════════════════════════════════════════ */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            className="absolute inset-0 rounded-[26px] border-2 border-[var(--ink)] bg-white p-3 sm:p-3.5 flex flex-col justify-between overflow-hidden select-none"
          >
            {/* Top Lanyard Slot Cutout */}
            <div className="relative flex items-center justify-between pb-2 border-b border-neutral-200">
              <span className="font-mono text-[9px] font-black uppercase tracking-wider text-[#e52424]">
                PASS // 0{index + 1}
              </span>

              {/* Physical Oval Badge Slot */}
              <div className="w-10 h-2.5 rounded-full bg-neutral-900 border border-neutral-300 shadow-inner" />

              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-500">
                TAUSHIK &apos;26
              </span>
            </div>

            {/* High-Resolution Project Visual Showcase Bezel */}
            <div className="relative w-full h-[220px] sm:h-[240px] rounded-xl overflow-hidden bg-[#0a0304] border border-neutral-200 shadow-xs flex items-center justify-center p-2 group-hover:border-[#e52424] transition-colors">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-contain pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle Holographic / Security Pass Watermark Badge */}
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs border border-neutral-300 text-[8px] font-mono font-black uppercase text-neutral-800 tracking-wider shadow-2xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e52424] animate-pulse" />
                <span>CASE STUDY</span>
              </div>
            </div>

            {/* Lower Information & Title Plate */}
            <div className="pt-2 px-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] font-black uppercase text-[#e52424] tracking-widest">
                  {project.category}
                </span>
                <span className="font-mono text-[9px] text-neutral-400 font-bold">
                  {details.badgeId}
                </span>
              </div>

              <h4 className="font-sans text-xl sm:text-2xl font-black text-[var(--ink)] tracking-tight leading-tight mt-0.5">
                {project.title}
              </h4>

              <p className="mt-1 text-[11px] sm:text-xs text-[var(--muted)] font-medium leading-relaxed line-clamp-2">
                {project.subtitle}
              </p>
            </div>

            {/* Bottom ID Bar: Flip Indicator + Launch Pill */}
            <div className="pt-2.5 border-t border-neutral-200 flex items-center justify-between">
              {/* Flip Cue */}
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-black text-neutral-500 uppercase tracking-wider">
                <RotateCw size={11} className="text-[#e52424] animate-spin-slow" />
                <span>Hover to flip ✦</span>
              </div>

              {/* Direct Launch Button */}
              <button
                type="button"
                onClick={handleLaunchClick}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e52424] hover:bg-[#c91818] text-white font-mono text-[10px] font-black uppercase tracking-wider shadow-xs transition-colors"
                aria-label={`Open ${project.title}`}
              >
                <span>Launch</span>
                <ArrowUpRight size={11} />
              </button>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* ── BACK FACE: Dossier, Specifications & Direct Launch ──         */}
          {/* (White + Signature Red Contrast, NOT All Black)                  */}
          {/* ════════════════════════════════════════════════════════════════ */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
            className="absolute inset-0 rounded-[26px] border-2 border-[var(--ink)] bg-gradient-to-b from-[#ffffff] via-[#fffbfb] to-[#fff3f3] p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden select-none"
          >
            {/* Subtle Security Dot Grid Watermark */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #e52424 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
              aria-hidden="true"
            />

            {/* Top Lanyard Slot & Dossier Header */}
            <div className="relative z-10 flex items-center justify-between pb-2 border-b border-[var(--ink)]/15">
              <span className="font-mono text-[9px] font-black uppercase tracking-wider text-[#e52424] flex items-center gap-1">
                <ShieldCheck size={11} />
                <span>DOSSIER // 0{index + 1}</span>
              </span>

              {/* Physical Oval Badge Slot */}
              <div className="w-10 h-2.5 rounded-full bg-neutral-900 border border-neutral-300 shadow-inner" />

              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-500">
                VERIFIED SPEC
              </span>
            </div>

            {/* Core Project Dossier Content */}
            <div className="relative z-10 py-1 flex-1 flex flex-col justify-around">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-md bg-[#e52424]/10 text-[#e52424] font-mono text-[9px] font-black uppercase tracking-wider border border-[#e52424]/20">
                  {details.role}
                </span>

                <h4 className="font-sans text-xl sm:text-2xl font-black text-[var(--ink)] tracking-tight leading-tight mt-1">
                  {project.title}
                </h4>
              </div>

              {/* Detailed Description */}
              <p className="text-[11px] sm:text-xs text-[var(--ink)]/85 font-medium leading-relaxed my-1">
                {details.description}
              </p>

              {/* Key Deliverables & Chips */}
              <div>
                <p className="font-mono text-[9px] font-black uppercase text-neutral-500 tracking-wider mb-1.5">
                  // SCOPE &amp; ARTIFACTS
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {details.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white border border-[var(--ink)]/10 text-[10px] font-mono font-bold text-[var(--ink)] shadow-2xs"
                    >
                      <CheckCircle2 size={10} className="text-[#e52424] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Security Barcode Graphic + Primary Launch Button */}
            <div className="relative z-10 pt-2.5 border-t border-[var(--ink)]/15 flex flex-col gap-2">
              {/* Decorative ID Barcode Graphic */}
              <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400">
                {/* SVG Barcode Accent */}
                <svg
                  className="h-4 w-32 text-neutral-800"
                  viewBox="0 0 120 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <rect x="0" y="0" width="2" height="16" />
                  <rect x="4" y="0" width="1" height="16" />
                  <rect x="7" y="0" width="3" height="16" />
                  <rect x="12" y="0" width="1" height="16" />
                  <rect x="15" y="0" width="2" height="16" />
                  <rect x="19" y="0" width="4" height="16" />
                  <rect x="25" y="0" width="1" height="16" />
                  <rect x="28" y="0" width="2" height="16" />
                  <rect x="32" y="0" width="1" height="16" />
                  <rect x="35" y="0" width="3" height="16" />
                  <rect x="40" y="0" width="2" height="16" />
                  <rect x="44" y="0" width="4" height="16" />
                  <rect x="50" y="0" width="1" height="16" />
                  <rect x="53" y="0" width="2" height="16" />
                  <rect x="57" y="0" width="3" height="16" />
                  <rect x="62" y="0" width="1" height="16" />
                  <rect x="65" y="0" width="2" height="16" />
                  <rect x="69" y="0" width="1" height="16" />
                  <rect x="72" y="0" width="4" height="16" />
                  <rect x="78" y="0" width="2" height="16" />
                  <rect x="82" y="0" width="1" height="16" />
                  <rect x="85" y="0" width="3" height="16" />
                  <rect x="90" y="0" width="1" height="16" />
                  <rect x="93" y="0" width="2" height="16" />
                  <rect x="97" y="0" width="4" height="16" />
                  <rect x="103" y="0" width="1" height="16" />
                  <rect x="106" y="0" width="2" height="16" />
                  <rect x="110" y="0" width="3" height="16" />
                  <rect x="115" y="0" width="1" height="16" />
                  <rect x="118" y="0" width="2" height="16" />
                </svg>
                <span className="font-bold tracking-widest">{details.badgeId}</span>
              </div>

              {/* The Bold Launch Button */}
              <button
                type="button"
                onClick={handleLaunchClick}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#e52424] hover:bg-[#c91818] active:translate-x-0.5 active:translate-y-0.5 text-white font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_#220608] transition-all cursor-pointer"
                aria-label={details.ctaText}
              >
                <span>{details.ctaText}</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function UxUiIdCardsSection({ onOpenModal }: UxUiIdCardsSectionProps) {
  const projects = uxUiProjects.slice(0, 3);

  const handleLaunch = (project: UxUiProject) => {
    if (project.hasModal) {
      onOpenModal?.(project);
    } else if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative w-full rounded-3xl border-2 border-[var(--ink)] bg-[#ffffff] shadow-[8px_8px_0_#220608] overflow-hidden select-none py-10 sm:py-16 px-4 sm:px-8">
      {/* ── Section Header ── */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <h3 className="display-font text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[var(--ink)] tracking-tight leading-[1.05]">
          UX / UI Projects <motion.span animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="inline-block text-[#e52424] origin-center">✦</motion.span> Built to Ship
        </h3>

        <p className="mt-3 text-xs sm:text-sm text-[var(--muted)] font-medium max-w-xl mx-auto">
          Comprehensive user research, interactive component prototypes, production design systems, and Figma files.
        </p>

        {/* Feature Pill Badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {[
            "UX Research",
            "Interactive Prototypes",
            "Design Systems",
            "Figma Component Architecture",
            "Production Ready",
          ].map((pill) => (
            <span
              key={pill}
              className="inline-block px-3 py-1 rounded-full bg-white border border-[var(--ink)]/15 text-[10px] sm:text-[11px] font-mono font-bold text-[var(--ink)] shadow-2xs hover:border-[#e52424] hover:text-[#e52424] transition-colors"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* ── Lanyard Hanging Wire Architecture (Reference: vid2) ── */}
      <div className="relative z-10 max-w-5xl mx-auto mt-4 sm:mt-6">
        {/* Horizontal Hanging Wire SVG (Slight catenary curve across cards) */}
        <div className="relative w-full h-6 pointer-events-none overflow-visible">
          <svg
            className="w-full h-8 text-neutral-400"
            viewBox="0 0 1000 30"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 0,6 Q 500,24 1000,6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ── The 3 Hanging ID Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 items-start justify-items-center -mt-3">
          {projects.map((project, idx) => (
            <SingleIdCard
              key={project.number}
              project={project}
              index={idx}
              onLaunch={handleLaunch}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom Interactive Instruction Cue ── */}
      <div className="mt-12 text-center flex flex-col items-center gap-1.5">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fcf8f8] border border-neutral-300 text-neutral-600 font-mono text-[11px] font-bold uppercase tracking-wider">
          <RotateCw size={12} className="text-[#e52424]" />
          <span>Hover / Tap any ID card to flip over &bull; Click Launch to inspect project</span>
        </div>
      </div>
    </div>
  );
}
