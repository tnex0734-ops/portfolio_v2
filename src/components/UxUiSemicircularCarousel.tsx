"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkle, ExternalLink } from "lucide-react";
import { uxUiProjects, type UxUiProject } from "@/lib/content";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  UI/UX Clean 3-Project Showcase                                    */
/*  Faithfully designed after the reference screenshot:               */
/*  - Exactly the 3 core projects from the website                    */
/*  - Proper, uniform spacing between cards                           */
/*  - Clean dark-bezel card UI with inside artwork preview            */
/*  - No geometric shapes inside the card                             */
/*  - Clean hover elevation & straighten effect                       */
/*  - Direct redirect/open on click (Miro/Stitch modal or Figma link) */
/* ------------------------------------------------------------------ */

interface UxUiShowcaseProps {
  onOpenModal?: (project: UxUiProject) => void;
}

export function UxUiSemicircularCarousel({ onOpenModal }: UxUiShowcaseProps) {
  // Only the 3 projects from the current website
  const projects = uxUiProjects.slice(0, 3);

  const handleProjectClick = (project: UxUiProject) => {
    if (project.hasModal) {
      onOpenModal?.(project);
    } else if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative w-full rounded-3xl border-2 border-[var(--ink)] bg-[#ffffff] shadow-[8px_8px_0_#220608] overflow-hidden select-none py-10 sm:py-16 px-4 sm:px-8">
      {/* ── Section Header (Dev Toolkit • Built to Flex Aesthetic) ── */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--paper)] border border-[var(--line)] text-[#e52424] font-mono text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
          <Sparkle size={12} className="animate-spin-slow" />
          <span>Core Works // Case Studies</span>
        </div>

        <h3 className="display-font text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[var(--ink)] tracking-tight leading-[1.05]">
          UX / UI Projects <span className="text-[#e52424]">✦</span> Built to Ship
        </h3>

        <p className="mt-3 text-xs sm:text-sm text-[var(--muted)] font-medium max-w-xl mx-auto">
          Comprehensive user research, interactive component prototypes, production design systems, and Figma files.
        </p>

        {/* Feature Pill Badges (Matching Reference Screenshot) */}
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

      {/* ── 3 Projects Layout with Generous Proper Spacing ── */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {projects.map((project, idx) => {
            // Subtle stationary fan tilt on desktop matching reference
            // Left card -3 deg, Center card 0 deg (elevated), Right card +3 deg
            const tiltClasses =
              idx === 0
                ? "md:-rotate-3 md:translate-y-2 hover:md:rotate-0 hover:md:translate-y-0"
                : idx === 1
                ? "md:rotate-0 md:-translate-y-2 hover:md:-translate-y-4"
                : "md:rotate-3 md:translate-y-2 hover:md:rotate-0 hover:md:translate-y-0";

            return (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => handleProjectClick(project)}
                className={cn(
                  "relative w-full group cursor-pointer transition-all duration-300",
                  tiltClasses
                )}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleProjectClick(project);
                  }
                }}
                aria-label={`Open ${project.title}`}
              >
                {/* ── Dark Bezel Card Shell (Matching Reference Screenshot) ── */}
                <div className="relative rounded-[22px] bg-[#141416] p-2.5 sm:p-3 border-2 border-[var(--ink)] shadow-[6px_6px_0_#220608] group-hover:shadow-[8px_8px_0_#e52424] group-hover:border-[#e52424] transition-all duration-300 flex flex-col overflow-hidden">
                  {/* Inside Artwork Preview Area (Clean, NO geometric shapes) */}
                  <div className="relative w-full h-[220px] xs:h-[240px] sm:h-[250px] md:h-[260px] lg:h-[275px] rounded-[16px] overflow-hidden bg-[#0a0304] flex items-center justify-center p-2">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
                    />

                    {/* Subtle Launch Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#e52424] text-white font-mono text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0_#220608]">
                        <span>
                          {project.hasModal ? "Explore Prototype ✦" : "Open Project ↗"}
                        </span>
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>

                  {/* Solid Dark Bottom Bar (Matching Reference Screenshot) */}
                  <div className="pt-3 pb-1 px-1.5 flex items-center justify-between">
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] font-black text-[#e52424] uppercase">
                          0{idx + 1}
                        </span>
                        <h4 className="font-sans font-bold text-sm sm:text-base text-white tracking-tight truncate group-hover:text-[#ff6b6b] transition-colors">
                          {project.title}
                        </h4>
                      </div>
                      <p className="text-[11px] font-mono text-neutral-400 mt-0.5 truncate">
                        {project.category}
                      </p>
                    </div>

                    <div className="shrink-0 p-1.5 rounded-lg bg-white/10 text-white group-hover:bg-[#e52424] group-hover:text-white transition-all">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Subtitle Instruction ── */}
      <div className="mt-10 text-center font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--muted)]">
        Click any card to launch prototype or open Figma file ↗
      </div>
    </div>
  );
}
