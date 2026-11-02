"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Laptop, PenTool } from "lucide-react";

interface OrbitTool {
  name: string;
  category: string;
  color: string;
  bgTint: string;
  // Exact orbital coordinates around the central laptop (origin = center of laptop)
  x: number;
  y: number;
  rotation: number;
}

// Stylized double-triangle delta glyph matching user reference screenshot
function DeltaGlyph({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12,3 2,21 22,21" />
      <polygon points="12,10 7,18 17,18" />
    </svg>
  );
}

// All 8 tools arranged AROUND the laptop in the center — 100% visible, ZERO obstruction
const TOOLS_ORBIT: OrbitTool[] = [
  {
    name: "FIGMA",
    category: "INTERFACE & PROTOTYPING",
    color: "#10b981",
    bgTint: "#f6fffb",
    x: -285,
    y: -75,
    rotation: -8,
  },
  {
    name: "NEXT.JS",
    category: "APP ROUTER & SSR",
    color: "#141416",
    bgTint: "#fafafa",
    x: 285,
    y: -75,
    rotation: 7,
  },
  {
    name: "GPT",
    category: "REASONING & PROMPTING",
    color: "#10a37f",
    bgTint: "#f3fbf7",
    x: -325,
    y: 20,
    rotation: -5,
  },
  {
    name: "CLAUDE",
    category: "DESIGN INTELLIGENCE",
    color: "#ea580c",
    bgTint: "#fffdf9",
    x: 325,
    y: 20,
    rotation: 5,
  },
  {
    name: "LOVABLE",
    category: "VIBE CODING & FULLSTACK",
    color: "#e52424",
    bgTint: "#fff9f9",
    x: -280,
    y: 120,
    rotation: -9,
  },
  {
    name: "CANVA",
    category: "VISUALS & SOCIAL",
    color: "#06b6d4",
    bgTint: "#f5fdfd",
    x: 280,
    y: 120,
    rotation: 8,
  },
  {
    name: "MIRO",
    category: "WORKSHOPS & MAPPING",
    color: "#eab308",
    bgTint: "#fffdf0",
    x: -125,
    y: 175,
    rotation: 4,
  },
  {
    name: "ANTIGRAVITY",
    category: "AGENTIC ENGINEERING",
    color: "#8b5cf6",
    bgTint: "#fbf9ff",
    x: 125,
    y: 175,
    rotation: -4,
  },
];

export function ToolsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Emerges smoothly on scroll and remains rock-solid in place
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section
      id="tools"
      ref={containerRef}
      className="relative w-full py-16 sm:py-24 bg-[#fdfdfd] overflow-hidden select-none border-b border-[var(--line)] scroll-mt-16"
    >
      {/* Background Architectural Dot Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(#d1d1d6 1.2px, transparent 1.2px), radial-gradient(#e52424 0.6px, #fdfdfd 0.6px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
      />

      {/* Signature Red Dot Marker on the RIGHT (exact detail from user reference image) */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-6 sm:right-10 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#e52424] pointer-events-none select-none z-0 shadow-sm"
        aria-hidden="true"
      />

      {/* ── BOLD CORNER EDGE JUNCTION WITH CONTINUOUS ROTATION ── */}
      <div className="pointer-events-none absolute top-8 left-6 sm:left-10 z-0 opacity-40 hidden sm:block" aria-hidden="true">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="relative w-14 h-14 border-2 border-[#141416]"
        >
          <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 bg-[#e52424]" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-[#141416]" />
          <div className="absolute inset-1.5 border border-dashed border-[#e52424]" />
        </motion.div>
      </div>

      <div className="section-shell max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#141416] leading-[1.08]">
            <span className="font-editorial-italic font-normal block sm:inline">What </span>
            <span className="text-[#e52424] font-black italic relative inline-flex items-center gap-1 mx-1">
              Tools
              <PenTool size={22} className="inline-block text-[#e52424] -rotate-45" />
            </span>
            <span className="font-editorial-italic font-normal block sm:inline">are in my </span>
            <span className="underline decoration-[#e52424] decoration-4 underline-offset-8">
              Laptop?
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#606068] font-medium max-w-md mx-auto leading-relaxed">
            As you reach this workstation, my core tools emerge out from the center and fan around the laptop.
          </p>
        </div>

        {/* ── DESKTOP STAGE: LAPTOP IN CENTER, TOOLS EMERGE OUT & ORBIT AROUND IT ── */}
        <div className="hidden md:flex relative w-full max-w-5xl mx-auto items-center justify-center min-h-[520px] lg:min-h-[560px] py-6">
          
          {/* Centered Tilted Isometric 3D Laptop */}
          <div className="relative z-10 pointer-events-auto">
            <motion.div
              initial={{ rotateX: 28, y: -20, opacity: 0 }}
              animate={
                isInView
                  ? {
                      rotateX: 18,
                      rotateZ: -4,
                      rotateY: 3,
                      y: [0, -6, 0],
                      opacity: 1,
                    }
                  : { rotateX: 28, y: -20, opacity: 0 }
              }
              transition={{
                rotateX: { type: "spring", stiffness: 85, damping: 15 },
                rotateZ: { type: "spring", stiffness: 85, damping: 15 },
                opacity: { duration: 0.5 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{
                perspective: 1200,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[340px] lg:w-[380px] shadow-2xl cursor-default"
            >
              {/* Laptop Screen Assembly */}
              <div className="relative w-full aspect-[16/10] bg-[#141416] rounded-t-2xl border-4 border-[#252528] p-3 shadow-[0_24px_50px_rgba(0,0,0,0.35)] flex flex-col justify-between">
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px] sm:text-[10px] font-mono text-white/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                    <span className="w-2 h-2 rounded-full bg-[#eab308]" />
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  </div>
                  <span className="tracking-wide">macbook-pro // taushik.space</span>
                  <div className="w-2 h-2 rounded-full bg-[#e52424] animate-pulse" />
                </div>

                {/* Screen Display with Red Grid Lines */}
                <div
                  className="flex-1 rounded-lg my-1.5 p-4 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-[#1c1c20] to-[#0f0f11]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(229, 36, 36, 0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 36, 36, 0.22) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                >
                  <Laptop size={30} className="text-[#e52424] mb-1.5" strokeWidth={1.8} />
                  <span className="font-mono text-sm sm:text-base font-black tracking-wider text-white uppercase drop-shadow-sm">
                    WORKSTATION SPILL
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#e52424] uppercase tracking-widest mt-1 font-bold">
                    10+ CREATIVE ENGINES LOADED
                  </span>
                </div>

                {/* Base Hinge Notch */}
                <div className="flex justify-center">
                  <div className="w-20 h-1 bg-[#404046] rounded-full" />
                </div>
              </div>

              {/* Laptop Keyboard Base */}
              <div className="w-[108%] -ml-[4%] h-5 bg-[#252528] rounded-b-xl border-t-2 border-[#38383e] shadow-[0_18px_32px_rgba(0,0,0,0.4)] flex items-center justify-center">
                <div className="w-24 h-1 bg-[#141416] rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* ── THE 8 TOOL PILLS: EMERGE RADIAL OUTWARD FROM CENTER AND ORBIT AROUND THE LAPTOP ── */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {TOOLS_ORBIT.map((tool, index) => {
              const isHovered = hoveredTool === tool.name;

              return (
                <motion.div
                  key={tool.name}
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 0,
                    rotate: 0,
                  }}
                  animate={
                    isInView
                      ? {
                          x: tool.x,
                          y: tool.y,
                          scale: isHovered ? 1.08 : 1,
                          opacity: 1,
                          rotate: isHovered ? 0 : tool.rotation,
                        }
                      : {
                          x: 0,
                          y: 0,
                          scale: 0,
                          opacity: 0,
                          rotate: 0,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 85,
                    damping: 12,
                    mass: 0.75,
                    delay: 0.12 + index * 0.07, // Staggered radial emergence from center to orbit around the laptop!
                  }}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  style={{
                    zIndex: isHovered ? 50 : 25,
                  }}
                  className="absolute pointer-events-auto cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-2xl border-2 border-[#141416] shadow-[4px_4px_0_#141416] hover:shadow-[7px_7px_0_#e52424] hover:border-[#e52424] transition-all duration-200 select-none whitespace-nowrap"
                    style={{
                      backgroundColor: tool.bgTint,
                    }}
                  >
                    {/* Brand Delta Glyph Box */}
                    <div
                      className="grid h-8 w-8 place-items-center rounded-xl border border-[#141416]/15 bg-white shrink-0 shadow-2xs"
                    >
                      <DeltaGlyph color={tool.color} />
                    </div>

                    {/* Bold Name & Clean Uppercase Sub-category */}
                    <div className="flex flex-col text-left pr-1.5">
                      <span className="font-black text-xs uppercase tracking-tight text-[#141416]">
                        {tool.name}
                      </span>
                      <span className="font-mono text-[9px] font-bold text-[#686872] uppercase tracking-wider">
                        {tool.category}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ── MOBILE VIEW (< md): CENTERED LAPTOP WITH ALL 8 TOOLS PROMINENTLY FLANKING IN FULL VIEW ── */}
        <div className="md:hidden flex flex-col items-center py-2">
          
          {/* Centered Compact 3D Laptop */}
          <motion.div
            initial={{ rotateX: 20, opacity: 0 }}
            animate={
              isInView
                ? { rotateX: 16, rotateZ: -3, y: [0, -4, 0], opacity: 1 }
                : { rotateX: 20, opacity: 0 }
            }
            transition={{
              rotateX: { type: "spring", stiffness: 85, damping: 15 },
              opacity: { duration: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-full max-w-[270px] bg-[#141416] rounded-t-xl border-3 border-[#28282c] p-2.5 shadow-xl mb-6"
          >
            <div className="flex items-center justify-between pb-1 border-b border-white/10 text-[8px] font-mono text-white/50">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              </div>
              <span>macbook-pro // taushik.space</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#e52424] animate-pulse" />
            </div>
            <div className="p-2.5 my-1 rounded bg-[#1c1c20] text-center">
              <Laptop size={22} className="text-[#e52424] mx-auto mb-1" />
              <span className="font-mono text-[10px] font-bold text-white uppercase block">
                WORKSTATION SPILL
              </span>
              <span className="font-mono text-[7.5px] text-[#e52424] uppercase tracking-widest block font-bold">
                10+ CREATIVE ENGINES LOADED
              </span>
            </div>
            <div className="w-[106%] -ml-[3%] h-3 bg-[#28282c] rounded-b-lg" />
          </motion.div>

          {/* Clean 2-column mobile grid: 100% visible, zero obstruction, emerges with staggered springs */}
          <div className="grid grid-cols-2 gap-2.5 w-full max-w-sm px-1">
            {TOOLS_ORBIT.map((tool, idx) => (
              <motion.div
                key={`mobile-${tool.name}`}
                initial={{ opacity: 0, y: 25, scale: 0.85 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 25, scale: 0.85 }
                }
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 14,
                  delay: 0.1 + idx * 0.05,
                }}
                className="flex items-center gap-2 p-2 rounded-xl border-2 border-[#141416] shadow-[3px_3px_0_#141416] select-none"
                style={{ backgroundColor: tool.bgTint }}
              >
                <div
                  className="grid h-7 w-7 place-items-center rounded-lg border border-[#141416]/15 bg-white shrink-0"
                >
                  <DeltaGlyph color={tool.color} />
                </div>
                <div className="flex flex-col min-w-0 text-left">
                  <span className="font-black text-[11px] uppercase tracking-tight text-[#141416] truncate">
                    {tool.name}
                  </span>
                  <span className="font-mono text-[7.5px] font-bold text-[#686872] uppercase tracking-wider truncate">
                    {tool.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
