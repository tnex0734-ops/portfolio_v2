"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bookmark as BookmarkIcon, Sparkle, Star } from "lucide-react";
import { experience } from "@/lib/content";

export function ExperienceBooksSection({ defaultActiveIndex = null }: { defaultActiveIndex?: number | null } = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [mounted, setMounted] = useState(false);
  const [activeBookmarkIndex, setActiveBookmarkIndex] = useState<number | null>(defaultActiveIndex);

  useEffect(() => {
    setMounted(true);
  }, []);

  const showBooks = isInView || mounted;

  // 4 authentic books styled with premium leather/cloth spine tones & randomized physical dimensions
  // Chronological order:
  // 1. Ram Script Private Limited (Jan - Feb 2026)
  // 2. Acquiq (May - Jul 2026)
  // 3. The Regiment (Jun - Sep 2026)
  // 4. UI/UX Hyderabad (May 2026 - Present)
  const bookStyles = [
    {
      spineBg: "linear-gradient(90deg, #18181b 0%, #27272a 40%, #18181b 100%)",
      topCoverBg: "#27272a",
      textColor: "#f4f4f5",
      ribbonBg: "#e52424",
      ribbonText: "#ffffff",
      dotColor: "#ffffff",
      subText: "Product Interface & Prototyping",
      maxWidth: "max-w-[800px]",
      height: "min-h-[92px] sm:min-h-[102px]",
    },
    {
      spineBg: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 40%, #1e3a8a 100%)",
      topCoverBg: "#1e40af",
      textColor: "#eff6ff",
      ribbonBg: "#ffffff",
      ribbonText: "#1e3a8a",
      dotColor: "#1e40af",
      subText: "AI Hiring Infrastructure",
      maxWidth: "max-w-[880px]",
      height: "min-h-[108px] sm:min-h-[118px]",
    },
    {
      spineBg: "linear-gradient(90deg, #7c2d12 0%, #9a3412 40%, #7c2d12 100%)",
      topCoverBg: "#9a3412",
      textColor: "#fff7ed",
      ribbonBg: "#fed7aa",
      ribbonText: "#7c2d12",
      dotColor: "#7c2d12",
      subText: "Design Operations & Product",
      maxWidth: "max-w-[760px]",
      height: "min-h-[88px] sm:min-h-[98px]",
    },
    {
      spineBg: "linear-gradient(90deg, #b91c1c 0%, #dc2626 40%, #b91c1c 100%)",
      topCoverBg: "#ef4444",
      textColor: "#ffffff",
      ribbonBg: "#18181b",
      ribbonText: "#ffffff",
      dotColor: "#ffffff",
      subText: "Design Guild & Community Leadership",
      maxWidth: "max-w-[840px]",
      height: "min-h-[112px] sm:min-h-[122px]",
    },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-14 sm:py-20 lg:py-24 bg-[var(--paper)] select-none border-b border-[var(--line)] overflow-hidden scroll-mt-16"
    >
      {/* ── BOLD CORNER EDGE JUNCTIONS & GEOMETRICAL SHAPES ── */}
      <div className="pointer-events-none absolute top-8 left-6 sm:left-10 z-0 opacity-40 hidden sm:block" aria-hidden="true">
        <div className="relative w-14 h-14 border-2 border-[#141416]">
          <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 bg-[#e52424]" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-[#141416]" />
          <div className="absolute inset-1.5 border border-dashed border-[#e52424]" />
        </div>
      </div>
      <div className="pointer-events-none absolute top-8 right-6 sm:right-10 z-0 opacity-40 hidden sm:block" aria-hidden="true">
        <div className="relative w-14 h-14 border-2 border-[#141416]">
          <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#e52424]" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 bg-[#141416]" />
          <div className="absolute inset-1.5 border border-dashed border-[#e52424]" />
        </div>
      </div>

      {/* Decorative ambient background accents with continuous rotation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-8 top-12 text-[#e52424]/10"
        aria-hidden="true"
      >
        <Sparkle size={64} />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute right-12 bottom-12 text-[#e52424]/10"
        aria-hidden="true"
      >
        <Star size={72} fill="currentColor" />
      </motion.div>

      <div className="section-shell relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: Eyebrow label removed, clean bold heading */}
        <div className="mb-10 sm:mb-14 border-b-2 border-[var(--ink)] pb-4">
          <h2 className="display-font text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.9] text-[var(--ink)]">
            Experience
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] font-medium max-w-xl">
            Stacked chronologically from earliest role to current leadership. Hover over the bookmarks hanging on the right to reveal role details.
          </p>
        </div>

        {/* ── FRONT-FACING STACK OF BOOKS WITH RANDOMIZED SIZES ── */}
        <div className="relative flex flex-col items-center gap-4 sm:gap-5 w-full max-w-4xl mx-auto py-6">
          {experience.map((item, index) => {
            const style = bookStyles[index % bookStyles.length];
            const isHovered = activeBookmarkIndex === index;

            return (
              <motion.article
                key={item.company}
                initial={false}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 14,
                  bounce: 0.25,
                  delay: index * 0.08,
                }}
                onMouseEnter={() => setActiveBookmarkIndex(index)}
                onMouseLeave={() => setActiveBookmarkIndex(null)}
                className={`group relative cursor-pointer w-full ${style.maxWidth} ${style.height} rounded-2xl border-2 border-[var(--ink)] shadow-[6px_6px_0_#141416] flex items-center justify-between transition-all duration-200 overflow-visible`}
                style={{
                  background: style.spineBg,
                  color: style.textColor,
                  zIndex: isHovered ? 40 : 20 - index,
                }}
              >
                {/* Top Book Edge Bevel Rim */}
                <div
                  className="absolute top-0 inset-x-2 h-1 rounded-t-md opacity-30"
                  style={{ backgroundColor: style.topCoverBg }}
                />

                {/* ── Left Spine Details: Spine Ribs & Embossed Typo ── */}
                <div className="flex items-center gap-3 sm:gap-5 min-w-0 z-10 pl-4 sm:pl-6 py-3">
                  {/* Spine Ribs (Raised bands on leather spine) */}
                  <div className="flex flex-col items-center justify-center gap-1.5 pr-2.5 border-r-2 border-white/20 shrink-0">
                    <span className="w-1.5 h-3 sm:h-3.5 rounded-full bg-white/40 block" />
                    <span className="w-1.5 h-3 sm:h-3.5 rounded-full bg-white/40 block" />
                  </div>

                  {/* Company Name, Dates & Sub-Text */}
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-base sm:text-xl md:text-2xl uppercase tracking-wider text-white truncate drop-shadow-sm">
                      {item.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white/95 bg-black/30 px-2 py-0.5 rounded">
                        {item.date}
                      </span>
                      <span className="text-white/40 text-xs hidden sm:inline">&bull;</span>
                      <span className="hidden sm:inline font-mono text-xs text-white/80 font-medium truncate">
                        {style.subText}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── 3D Paper Page Block on the Right (Creamy paper deck lines) ── */}
                <div className="relative h-full flex items-center pr-3 sm:pr-4 shrink-0">
                  <div
                    className="h-[78%] w-14 sm:w-24 rounded-r-xl border-l-2 border-r border-[#141416]/40 bg-[#fdfaf3] flex flex-col justify-center px-1.5 shadow-inner"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(180deg, #fdfaf3, #fdfaf3 3px, #ece4d2 4px, #ece4d2 5px)",
                    }}
                  />
                </div>

                {/* ── HANGING BOOKMARK RIBBON ON THE RIGHT SIDE ── */}
                <div
                  className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-30 flex items-center pointer-events-auto"
                  onMouseEnter={() => setActiveBookmarkIndex(index)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveBookmarkIndex(isHovered ? null : index);
                  }}
                >
                  <motion.div
                    animate={{
                      x: isHovered ? 6 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    }}
                    className="relative flex items-center filter drop-shadow-[3px_3px_0_#141416]"
                  >
                    {/* Expandable Body of Ribbon (slides open on hover to reveal role) */}
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{
                        width: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 24,
                      }}
                      className="h-11 sm:h-12 overflow-hidden flex items-center border-2 border-r-0 border-[#141416] rounded-l-xl"
                      style={{
                        backgroundColor: style.ribbonBg,
                        color: style.ribbonText,
                      }}
                    >
                      <div className="flex items-center gap-2.5 px-3.5 whitespace-nowrap min-w-0">
                        <BookmarkIcon
                          size={16}
                          className="shrink-0 rotate-12"
                          style={{ color: style.ribbonText }}
                        />
                        <div className="flex flex-col min-w-0 pr-1">
                          <span className="font-mono text-[9px] font-black uppercase tracking-wider opacity-75 leading-none">
                            ROLE
                          </span>
                          <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-tight leading-tight mt-0.5">
                            {item.role}
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Hanging Ribbon Tip (Always visible peeking out a little with notch) */}
                    <div className="relative h-11 sm:h-12 flex items-center">
                      <div
                        className={`h-full flex items-center justify-center transition-all duration-200 border-2 border-r-0 border-[#141416] ${
                          isHovered
                            ? "w-0 border-l-0 overflow-hidden"
                            : "w-4 rounded-l-sm pl-0.5"
                        }`}
                        style={{
                          backgroundColor: style.ribbonBg,
                        }}
                      >
                        {!isHovered && (
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: style.dotColor }}
                          />
                        )}
                      </div>

                      {/* Swallowtail Notch facing right */}
                      <svg
                        className="h-full w-5 sm:w-6 shrink-0 overflow-visible block"
                        viewBox="0 0 24 48"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,0 L24,0 L12,24 L24,48 L0,48 Z"
                          fill={style.ribbonBg}
                        />
                        <path
                          d="M0,1 L24,1 L12,24 L24,47 L0,47"
                          fill="none"
                          stroke="#141416"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
