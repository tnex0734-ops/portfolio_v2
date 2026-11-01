"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkle, ExternalLink } from "lucide-react";
import { uxUiProjects, type UxUiProject } from "@/lib/content";
import { BrandIcon } from "@/components/BrandIcon";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Interactive Black Desk Lamp & Spotlight Showcase                  */
/*  Faithfully designed after the reference video:                     */
/*  - Clean white canvas with Hairline minimalist precision           */
/*  - Elegant serif list on the left with organic highlight capsule    */
/*  - Majestic, fully articulated Black Architect Desk Lamp on mound  */
/*  - Continuous spotlight beam shining across the whole stage        */
/*  - Sleek single-card preview illuminated right inside the beam     */
/*  - Full click interaction (Nexus Miro/Stitch modal + Figma files)   */
/* ------------------------------------------------------------------ */

interface UxUiLampShowcaseProps {
  onOpenModal?: (project: UxUiProject) => void;
}

export function UxUiLampShowcase({ onOpenModal }: UxUiLampShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = uxUiProjects[activeIndex] || uxUiProjects[0];
  const isNexus = Boolean(activeProject.hasModal);

  // ------------------------------------------------------------------
  // Forward Kinematics Angles for the 3 Project Targets:
  // Base pivot at (810, 420), Elbow at (740, 275), Head at (660, 175)
  // 0 (Top - Nexus GG): Lamp stands tall, head points up-left
  // 1 (Mid - Palmist.io): Balanced poise, head points mid-left
  // 2 (Bot - Equifiz): Lamp bends down & forward, head tilts down-left
  // ------------------------------------------------------------------
  const lampPoses = [
    {
      baseAngle: -14,
      elbowAngle: -22,
      headAngle: -20,
      bulbWorld: { x: 575, y: 155 },
      beamTop: 70,
      beamBottom: 160,
    },
    {
      baseAngle: -24,
      elbowAngle: -10,
      headAngle: -4,
      bulbWorld: { x: 550, y: 220 },
      beamTop: 180,
      beamBottom: 270,
    },
    {
      baseAngle: -34,
      elbowAngle: 12,
      headAngle: 18,
      bulbWorld: { x: 535, y: 295 },
      beamTop: 290,
      beamBottom: 380,
    },
  ];

  const currentPose = lampPoses[activeIndex] ?? lampPoses[0];

  const handleProjectClick = (project: UxUiProject) => {
    if (project.hasModal) {
      onOpenModal?.(project);
    } else if (project.link) {
      if (typeof window !== "undefined") {
        window.open(project.link, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <div className="relative w-full rounded-3xl border-2 border-[var(--ink)] bg-white shadow-[10px_10px_0_#220608] overflow-hidden select-none">
      {/* ── Top Stage Navigation & Context (replacing bottom progress) ── */}
      <div className="relative z-30 flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-[var(--ink)]/10 bg-white/90 backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e52424] animate-pulse" />
          <span className="font-serif italic text-xs sm:text-sm text-[var(--muted)]">
            taushik / selected works
          </span>
          <span className="text-[var(--ink)]/20 hidden sm:inline">•</span>
          <span className="hidden sm:inline-block font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--ink)]/60">
            Interactive Spotlight Lamp
          </span>
        </div>

        {/* Step indicator at top right */}
        <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[var(--ink)]">
          <span className="text-[#e52424]">0{activeIndex + 1}</span>
          <span className="text-[var(--ink)]/30">/</span>
          <span className="text-[var(--muted)]">0{uxUiProjects.length}</span>
        </div>
      </div>

      {/* ── Main Unified Showcase Stage ── */}
      <div className="relative min-h-[580px] lg:min-h-[620px] p-4 sm:p-8 flex flex-col justify-between overflow-hidden">
        {/* Subtle grid background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"
        />

        {/* ── FULL-STAGE SVG: The Spotlight Cone & Articulated Lamp ── */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
          viewBox="0 0 1000 580"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Luminous Warm Spotlight Beam Gradient */}
            <linearGradient
              id="stageSpotlightBeam"
              x1="100%"
              y1="50%"
              x2="0%"
              y2="50%"
            >
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.88" />
              <stop offset="25%" stopColor="#fef08a" stopOpacity="0.55" />
              <stop offset="65%" stopColor="#fef9c3" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
            </linearGradient>

            {/* Glowing Bulb Aura */}
            <radialGradient id="lampBulbAura">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="35%" stopColor="#fef08a" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#fef08a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ── 1. The Dynamic Spotlight Beam (spans across the entire stage) ── */}
          <motion.polygon
            points={`0,${currentPose.beamTop} 0,${currentPose.beamBottom} ${currentPose.bulbWorld.x},${currentPose.bulbWorld.y}`}
            fill="url(#stageSpotlightBeam)"
            initial={false}
            animate={{
              points: `0,${currentPose.beamTop} 0,${currentPose.beamBottom} ${currentPose.bulbWorld.x},${currentPose.bulbWorld.y}`,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 24,
            }}
          />

          {/* ── 2. Top-Right Oxford Celestial Motif (Moon & Star from video) ── */}
          <g className="opacity-80">
            {/* Moon with subtle crescent fill */}
            <circle
              cx="875"
              cy="80"
              r="24"
              fill="#18181b"
              stroke="#09090b"
              strokeWidth="1.5"
            />
            <path
              d="M 875 56 A 24 24 0 0 1 899 80 A 24 24 0 0 1 875 104 A 20 20 0 0 0 875 56 Z"
              fill="#ffffff"
            />
            {/* Hairline 4-point star (+) */}
            <line
              x1="785"
              y1="40"
              x2="785"
              y2="56"
              stroke="#18181b"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="777"
              y1="48"
              x2="793"
              y2="48"
              stroke="#18181b"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Secondary tiny star */}
            <circle cx="830" cy="115" r="2" fill="#e52424" />
          </g>

          {/* ── 3. Bottom-Right Curved Mound (stationary ground) ── */}
          <path
            d="M 520 580 Q 730 430 1000 450 L 1000 580 Z"
            fill="#ffffff"
            stroke="#18181b"
            strokeWidth="2.5"
          />
          {/* Sketch contour hatching strokes */}
          <path
            d="M 590 550 Q 760 455 940 470"
            stroke="#18181b"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.35"
          />
          <path
            d="M 660 568 Q 810 478 980 490"
            stroke="#18181b"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            opacity="0.25"
          />

          {/* ── 4. Stationary Weighted Base Plate ── */}
          <ellipse
            cx="810"
            cy="442"
            rx="56"
            ry="18"
            fill="#18181b"
            stroke="#09090b"
            strokeWidth="2.5"
          />
          <ellipse cx="810" cy="437" rx="49" ry="14" fill="#27272a" />
          <ellipse cx="810" cy="432" rx="38" ry="10" fill="#3f3f46" />
          <rect
            x="803"
            y="412"
            width="14"
            height="22"
            rx="2.5"
            fill="#18181b"
            stroke="#09090b"
            strokeWidth="2"
          />

          {/* ── 5. THE MOVABLE ARTICULATED DESK LAMP (Forward Kinematics) ── */}
          {/* BASE JOINT: Pivots on Base Socket (810, 420) */}
          <motion.g
            style={{ originX: "810px", originY: "420px" }}
            animate={{ rotate: currentPose.baseAngle }}
            transition={{ type: "spring", stiffness: 190, damping: 21 }}
          >
            {/* Bottom Pivot Disc Pin */}
            <circle
              cx="810"
              cy="420"
              r="9"
              fill="#27272a"
              stroke="#09090b"
              strokeWidth="2"
            />
            <circle cx="810" cy="420" r="4" fill="#e52424" />

            {/* Lower Twin Tubular Struts (from base 810, 420 to elbow 740, 275) */}
            <line
              x1="806"
              y1="420"
              x2="736"
              y2="275"
              stroke="#18181b"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="814"
              y1="420"
              x2="744"
              y2="275"
              stroke="#18181b"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Lower cross bracing */}
            <line
              x1="786"
              y1="380"
              x2="794"
              y2="390"
              stroke="#3f3f46"
              strokeWidth="2"
            />
            <line
              x1="758"
              y1="322"
              x2="766"
              y2="332"
              stroke="#3f3f46"
              strokeWidth="2"
            />
            {/* Lower Coiled Tension Spring */}
            <path
              d="M 808 406 Q 795 392 802 382 Q 782 367 789 357 Q 769 342 776 332 Q 756 317 763 307 L 741 280"
              stroke="#71717a"
              strokeWidth="2"
              fill="none"
            />

            {/* ELBOW JOINT: Nested in Lower Arm, Pivots at (740, 275) */}
            <motion.g
              style={{ originX: "740px", originY: "275px" }}
              animate={{ rotate: currentPose.elbowAngle }}
              transition={{ type: "spring", stiffness: 190, damping: 21 }}
            >
              {/* Elbow Hinge Disc */}
              <circle
                cx="740"
                cy="275"
                r="14"
                fill="#18181b"
                stroke="#09090b"
                strokeWidth="2.5"
              />
              <circle cx="740" cy="275" r="6" fill="#3f3f46" />
              {/* Tension adjustment thumbscrew */}
              <rect
                x="732"
                y="260"
                width="16"
                height="8"
                rx="2"
                fill="#e52424"
                stroke="#09090b"
                strokeWidth="1.5"
              />

              {/* Upper Twin Tubular Struts (from elbow 740, 275 to head 660, 175) */}
              <line
                x1="737"
                y1="272"
                x2="657"
                y2="172"
                stroke="#18181b"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="743"
                y1="278"
                x2="663"
                y2="178"
                stroke="#18181b"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Upper cross bracing */}
              <line
                x1="712"
                y1="242"
                x2="717"
                y2="252"
                stroke="#3f3f46"
                strokeWidth="2"
              />
              <line
                x1="685"
                y1="208"
                x2="690"
                y2="218"
                stroke="#3f3f46"
                strokeWidth="2"
              />
              {/* Upper Coiled Tension Spring */}
              <path
                d="M 733 266 Q 720 256 725 246 Q 700 241 705 231 Q 680 226 685 216 L 661 176"
                stroke="#71717a"
                strokeWidth="2"
                fill="none"
              />

              {/* HEAD JOINT: Nested in Upper Arm, Pivots at (660, 175) */}
              <motion.g
                style={{ originX: "660px", originY: "175px" }}
                animate={{ rotate: currentPose.headAngle }}
                transition={{ type: "spring", stiffness: 210, damping: 21 }}
              >
                {/* Head Swivel Pin */}
                <circle
                  cx="660"
                  cy="175"
                  r="9"
                  fill="#27272a"
                  stroke="#09090b"
                  strokeWidth="2"
                />

                {/* Neck bracket */}
                <line
                  x1="660"
                  y1="175"
                  x2="632"
                  y2="175"
                  stroke="#18181b"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Back Dome Cap */}
                <path
                  d="M 632 153 C 646 160, 646 190, 632 197 Z"
                  fill="#09090b"
                  stroke="#09090b"
                  strokeWidth="2"
                />
                {/* Rotary turn switch */}
                <rect
                  x="634"
                  y="144"
                  width="4"
                  height="9"
                  rx="1.5"
                  fill="#e52424"
                  stroke="#09090b"
                  strokeWidth="1"
                />

                {/* Flared Conical Lampshade Body (pointing left) */}
                <path
                  d="M 632 153 L 560 120 C 540 155, 540 195, 560 230 L 632 197 Z"
                  fill="#18181b"
                  stroke="#09090b"
                  strokeWidth="3"
                />

                {/* Outer Shade Rim Ellipse */}
                <ellipse
                  cx="560"
                  cy="175"
                  rx="16"
                  ry="55"
                  fill="#27272a"
                  stroke="#09090b"
                  strokeWidth="2.5"
                />

                {/* Inner Shade Reflector (glowing warm interior) */}
                <path
                  d="M 560 127 C 572 155, 572 195, 560 223 Z"
                  fill="#fef08a"
                />

                {/* Glowing Incandescent Bulb */}
                <circle
                  cx="572"
                  cy="175"
                  r="21"
                  fill="#ffffff"
                  stroke="#fde047"
                  strokeWidth="2.5"
                />
                <circle cx="572" cy="175" r="32" fill="url(#lampBulbAura)" />
              </motion.g>
            </motion.g>
          </motion.g>
        </svg>

        {/* ── Interactive Content Layer ── */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px]">
          {/* ── LEFT COLUMN (cols 1-5): The Pure Editorial Project List ── */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4 max-w-md">
            {uxUiProjects.map((project, idx) => {
              const isSelected = activeIndex === idx;
              const romanNums = ["(i)", "(ii)", "(iii)"];

              return (
                <div
                  key={project.number}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => handleProjectClick(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleProjectClick(project);
                    }
                  }}
                  className={cn(
                    "relative group cursor-pointer py-3.5 px-4 sm:px-5 rounded-full transition-all duration-200"
                  )}
                  aria-label={`Select and inspect ${project.title}`}
                >
                  {/* Organic Spotlight Capsule (Directly on the active row as in video) */}
                  {isSelected && (
                    <motion.div
                      layoutId="organic-lamp-capsule"
                      className="absolute inset-0 rounded-full bg-[#18181b] shadow-[0_6px_28px_rgba(24,24,27,0.35)] z-0"
                      transition={{
                        type: "spring",
                        stiffness: 340,
                        damping: 27,
                      }}
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      {/* Roman Numeral */}
                      <span
                        className={cn(
                          "font-serif text-base sm:text-lg font-bold transition-colors shrink-0",
                          isSelected ? "text-[#e52424]" : "text-[var(--muted)]"
                        )}
                      >
                        {romanNums[idx]}
                      </span>

                      {/* Project Title */}
                      <span
                        className={cn(
                          "font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight truncate transition-colors",
                          isSelected
                            ? "text-white"
                            : "text-[var(--ink)] group-hover:text-[#e52424]"
                        )}
                      >
                        {project.title}
                      </span>
                    </div>

                    {/* Arrow CTA */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={cn(
                          "font-mono text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full transition-colors hidden sm:inline-block",
                          isSelected
                            ? "bg-white/15 text-white"
                            : "bg-[var(--paper)] text-[var(--muted)] border border-[var(--line)]"
                        )}
                      >
                        {project.category}
                      </span>
                      <ArrowUpRight
                        size={19}
                        className={cn(
                          "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                          isSelected ? "text-[#e52424]" : "text-[var(--muted)]"
                        )}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── CENTER COLUMN (cols 6-8): Sleek Single-Card Preview Illuminated in Spotlight ── */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                onClick={() => handleProjectClick(activeProject)}
                className="group cursor-pointer w-full max-w-[340px] rounded-2xl border-2 border-[var(--ink)] bg-white/95 backdrop-blur-md p-3.5 sm:p-4 shadow-[6px_6px_0_#220608] hover:shadow-[8px_8px_0_#e52424] transition-all"
              >
                {/* Resized Inside Cover Image */}
                <div className="relative w-full h-[155px] sm:h-[175px] rounded-xl border border-[var(--ink)]/15 overflow-hidden bg-neutral-50 flex items-center justify-center p-2">
                  <img
                    src={activeProject.coverImage}
                    alt={activeProject.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute top-2 left-2 font-mono text-[9px] font-black text-white bg-[#e52424] px-1.5 py-0.5 rounded shadow-2xs">
                    {activeProject.number}
                  </div>
                </div>

                {/* Metadata & Subtitle */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[var(--muted)] uppercase tracking-wider mb-1">
                    <span>{activeProject.category}</span>
                    <span className="text-[#e52424] font-black flex items-center gap-1">
                      <Sparkle size={10} /> Active
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[var(--ink)] tracking-tight group-hover:text-[#e52424] transition-colors truncate">
                    {activeProject.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-[var(--muted)] line-clamp-2 leading-relaxed">
                    {activeProject.subtitle}
                  </p>
                </div>

                {/* Action CTA Bar */}
                <div className="mt-3 pt-2.5 border-t border-[var(--line)] flex items-center justify-between">
                  {isNexus ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenModal?.(activeProject);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--ink)] bg-[#e52424] px-3 py-1.5 font-black text-[11px] uppercase tracking-wider text-white shadow-[2px_2px_0_#220608] hover:bg-[var(--ink)] hover:border-[var(--ink)] transition-all"
                    >
                      <Sparkle size={12} />
                      <span>Explore Prototype</span>
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--ink)] bg-[#fff8f8] px-3 py-1.5 font-black text-[11px] uppercase tracking-wider text-[var(--ink)] shadow-[2px_2px_0_#220608] group-hover:bg-[#e52424] group-hover:text-white transition-all">
                      <BrandIcon name="Figma" className="h-3 w-3" />
                      <span>Open Figma File</span>
                      <ExternalLink size={11} />
                    </span>
                  )}

                  <span className="text-[10px] font-mono font-bold text-[var(--muted)] group-hover:text-[#e52424] transition-colors">
                    Click to launch ↗
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT COLUMN (cols 9-12): Spacing for the Majestic Lamp ── */}
          <div className="lg:col-span-3 hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
