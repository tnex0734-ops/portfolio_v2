"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import {
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { aiProjects, type AiProject } from "@/lib/content";
import { BrandIcon } from "@/components/BrandIcon";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Dock Item — Smooth Magnification & Hover Label                    */
/* ------------------------------------------------------------------ */

interface DockItemProps {
  project: AiProject;
  isActive: boolean;
  onSelect: (id: string) => void;
  mouseX: any;
}

function DockItem({ project, isActive, onSelect, mouseX }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseDistance = useTransform(mouseX, (val: number) => {
    if (!ref.current || val === Infinity) return 200;
    const rect = ref.current.getBoundingClientRect();
    return val - rect.x - rect.width / 2;
  });

  const widthTransform = useTransform(
    mouseDistance,
    [-100, 0, 100],
    [46, 52, 46]
  );
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 240,
    damping: 22,
  });

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center px-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        type="button"
        onClick={() => onSelect(project.id)}
        style={{ width, height: width }}
        whileTap={{ scale: 0.96 }}
        className={cn(
          "relative flex items-center justify-center rounded-[12px] overflow-hidden select-none transition-shadow duration-150 cursor-pointer",
          isActive
            ? "ring-2 ring-[#e52424] ring-offset-1 ring-offset-white shadow-[0_2px_8px_rgba(229,36,36,0.25)]"
            : "shadow-xs hover:shadow-sm opacity-85 hover:opacity-100"
        )}
        aria-label={`Select ${project.title}`}
      >
        <img
          src={project.icon}
          alt={project.title}
          className="w-full h-full object-cover pointer-events-none"
          loading="eager"
        />
        <div className="absolute inset-0 pointer-events-none rounded-[12px] bg-gradient-to-br from-white/20 via-transparent to-transparent" />
      </motion.button>

      {/* Label displayed BELOW the icon */}
      <div className="h-4 flex items-center justify-center mt-1">
        <span
          className={cn(
            "text-[10px] font-bold text-center whitespace-nowrap select-none leading-none tracking-tight transition-opacity duration-150",
            isHovered || isActive ? "opacity-100" : "opacity-0",
            isActive ? "text-[#e52424]" : "text-[var(--ink)]"
          )}
        >
          {project.dockLabel}
        </span>
      </div>

      {/* Active Dot indicator below the label */}
      <div className="h-1.5 flex items-center justify-center mt-0.5">
        {isActive && (
          <div
            className="w-1.5 h-1.5 rounded-full bg-[#e52424] shadow-[0_0_4px_#e52424]"
          />
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Showcase Component                                            */
/*  Rock-solid zero layout-shift, zero-flicker architecture            */
/* ------------------------------------------------------------------ */

export function AiProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });
  const [activeId, setActiveId] = useState<string>(aiProjects[0].id);
  const [copied, setCopied] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const userPauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mouseX = useMotionValue(Infinity);

  const activeProject =
    aiProjects.find((p) => p.id === activeId) || aiProjects[0];
  const activeIndex = aiProjects.findIndex((p) => p.id === activeId);

  // Preload all project screenshots into browser cache on mount to prevent any blank repaint
  useEffect(() => {
    aiProjects.forEach((p) => {
      const img = new Image();
      img.src = p.screenshot;
      const icon = new Image();
      icon.src = p.icon;
    });
  }, []);

  // Manual selection pauses auto-switch for 6 seconds
  const handleSelect = (id: string) => {
    setActiveId(id);
    setIsUserPaused(true);

    if (userPauseTimeoutRef.current) {
      clearTimeout(userPauseTimeoutRef.current);
    }

    userPauseTimeoutRef.current = setTimeout(() => {
      setIsUserPaused(false);
    }, 6000);
  };

  // Auto switch ONLY when section is actively in the viewport (prevents background shifts)
  useEffect(() => {
    if (!isInView || isUserPaused) return;

    const interval = setInterval(() => {
      setActiveId((prevId) => {
        const currentIndex = aiProjects.findIndex((p) => p.id === prevId);
        const nextIndex = (currentIndex + 1) % aiProjects.length;
        return aiProjects[nextIndex].id;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isInView, isUserPaused]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (userPauseTimeoutRef.current) {
        clearTimeout(userPauseTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && navigator?.clipboard) {
      navigator.clipboard.writeText(activeProject.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div ref={containerRef} className="flex flex-col items-center w-full max-w-5xl mx-auto">
      {/* ── 1. STABLE PROJECT DOSSIER CARD (Fixed Min-Height: Zero Layout Shift) ── */}
      <div className="w-full max-w-3xl mx-auto px-2 sm:px-4 mb-5 sm:mb-7">
        <div className="relative rounded-2xl border border-[var(--ink)]/15 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08),_0_2px_6px_rgba(0,0,0,0.04)] overflow-hidden min-h-[195px] sm:min-h-[180px] flex flex-col justify-between">
          
          {/* Top Meta Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-[var(--ink)]/10 text-[10px] sm:text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="font-mono font-black text-white bg-[#e52424] px-2 py-0.5 rounded text-[10px] shadow-2xs">
                0{activeIndex + 1} / 0{aiProjects.length}
              </span>
              <span className="font-bold uppercase tracking-wider text-[var(--muted)]">
                {activeProject.category}
              </span>
            </div>

            {/* Status indicator */}
            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[9px] border transition-colors duration-200",
                activeProject.status === "Under Progress"
                  ? "border-amber-300 bg-amber-50 text-amber-700"
                  : "border-emerald-300 bg-emerald-50 text-emerald-700"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  activeProject.status === "Under Progress"
                    ? "bg-amber-500 animate-pulse"
                    : "bg-emerald-500 animate-pulse"
                )}
              />
              {activeProject.status || "Live Project"}
            </span>
          </div>

          {/* Main Project Identity (Smooth Crossfade Inside Stable Card Shell) */}
          <div className="relative pt-3.5 pb-3">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-black text-[var(--ink)] tracking-tight">
                  {activeProject.title}
                </h3>
                <span className="text-xs font-mono font-semibold text-[#e52424] tracking-wide flex items-center gap-1">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                  >
                    ✦
                  </motion.span>
                  {activeProject.tagline}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] font-medium leading-relaxed">
                {activeProject.description}
              </p>
            </motion.div>
          </div>

          {/* Bottom Actions & Tech Stack */}
          <div className="pt-3 border-t border-[var(--ink)]/10 flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex flex-wrap items-center gap-1.5">
              {activeProject.tools.map((tool) => (
                <span
                  key={`${activeProject.id}-${tool}`}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md border border-[var(--ink)]/10 bg-[var(--paper)] text-[10px] font-mono font-bold text-[var(--ink)]"
                >
                  <BrandIcon name={tool} className="w-2.5 h-2.5 text-[#e52424]" />
                  <span>{tool}</span>
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button
                type="button"
                onClick={handleCopyLink}
                className="p-1.5 rounded-lg border border-[var(--ink)]/15 bg-white hover:bg-neutral-50 text-[var(--ink)] transition-colors shadow-2xs cursor-pointer"
                title="Copy link"
                aria-label="Copy link"
              >
                {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
              </button>

              <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#e52424] text-white font-mono text-[11px] font-black uppercase tracking-wider shadow-sm hover:bg-[#c91818] transition-all cursor-pointer"
              >
                <span>Launch App</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. ROCK-SOLID 3D PERSPECTIVE PLANE (Zero Unmounting, Absolute Crossfading Images) ── */}
      <div
        style={{ perspective: "1200px" }}
        className="relative w-full max-w-4xl px-2 sm:px-4 flex items-center justify-center py-2 overflow-visible"
      >
        <motion.div
          animate={{ rotateX: 22, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 25 }}
          whileHover={{ rotateX: 10, scale: 1.015, y: -4 }}
          className="relative w-full h-[260px] xs:h-[320px] sm:h-[400px] md:h-[460px] lg:h-[490px] rounded-2xl md:rounded-3xl border border-black/10 bg-[#0d0405] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.22),_0_12px_28px_-8px_rgba(229,36,36,0.12)] overflow-hidden cursor-pointer group"
          onClick={() => window.open(activeProject.link, "_blank")}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Stacked Crossfading Project Images: Container NEVER shrinks, zero flicker! */}
          {aiProjects.map((project) => {
            const isCurrent = project.id === activeId;

            return (
              <motion.img
                key={project.id}
                src={project.screenshot}
                alt={`${project.title} project interface`}
                initial={false}
                animate={{
                  opacity: isCurrent ? 1 : 0,
                  scale: isCurrent ? 1 : 1.02,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none"
                style={{
                  zIndex: isCurrent ? 10 : 1,
                  visibility: isCurrent ? "visible" : "hidden",
                  transition: "visibility 0.35s",
                }}
                loading="eager"
              />
            );
          })}

          {/* Soft bottom ground reflection & fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--paper)] via-[var(--paper)]/40 to-transparent pointer-events-none z-20" />

          {/* Modern floating hover badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e52424] text-white font-mono text-[10px] font-black uppercase tracking-wider shadow-md">
              <span>View Live</span>
              <ArrowUpRight size={12} />
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── 3. Bottom Icons Dock & Auto-Cycling Controller ── */}
      <div className="relative mt-6 sm:mt-8 flex flex-col items-center">
        {/* Floating Liquid Glass Dock */}
        <div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          role="toolbar"
          aria-label="AI Projects Dock"
          className="relative flex items-end gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-2xl liquid-glass-dock border border-[var(--ink)]/15 shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-w-full overflow-x-auto hide-scrollbar z-20"
        >
          {aiProjects.map((project) => (
            <DockItem
              key={project.id}
              project={project}
              isActive={activeId === project.id}
              onSelect={handleSelect}
              mouseX={mouseX}
            />
          ))}
        </div>

        {/* Visual "Click to see" Below Icons */}
        <div className="flex items-center gap-1.5 text-[#e52424] mt-2 select-none pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-4 text-[#e52424] overflow-visible -rotate-12"
            viewBox="0 0 50 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M12 30 Q 22 28, 28 14 M 20 16 L 29 11 L 34 20" />
          </svg>
          <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[var(--ink)]">
            Click to see
          </span>
        </div>
      </div>
    </div>
  );
}
