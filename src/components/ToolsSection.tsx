"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { BrandIcon } from "@/components/BrandIcon";
import { Laptop, PenTool } from "lucide-react";

interface SpilledTool {
  name: string;
  category: string;
  color: string;
  bgTint: string;
  // Precise desktop cascade coordinates relative to laptop base center
  x: number;
  y: number;
  rotation: number;
  zIndex: number;
  // Responsive mobile scaling coordinates
  mobileX: number;
  mobileY: number;
  mobileRotate: number;
}

// Exactly matches Attachment 2 ("WORKSTATION SPILL / 10+ CREATIVE ENGINES LOADED")
const TOOLS_CASCADE: SpilledTool[] = [
  {
    name: "FIGMA",
    category: "INTERFACE & PROTOTYPING",
    color: "#0ACF83",
    bgTint: "#f6fffb",
    x: -160,
    y: 50,
    rotation: -9,
    zIndex: 6,
    mobileX: -85,
    mobileY: 35,
    mobileRotate: -8,
  },
  {
    name: "NEXT.JS",
    category: "APP ROUTER & SSR",
    color: "#141416",
    bgTint: "#fafafa",
    x: 145,
    y: 55,
    rotation: 5,
    zIndex: 6,
    mobileX: 80,
    mobileY: 38,
    mobileRotate: 6,
  },
  {
    name: "GPT",
    category: "REASONING & PROMPTING",
    color: "#10a37f",
    bgTint: "#f3fbf7",
    x: -95,
    y: 105,
    rotation: -5,
    zIndex: 8,
    mobileX: -55,
    mobileY: 80,
    mobileRotate: -5,
  },
  {
    name: "CLAUDE",
    category: "DESIGN INTELLIGENCE",
    color: "#d97706",
    bgTint: "#fffdf9",
    x: 80,
    y: 115,
    rotation: 4,
    zIndex: 9,
    mobileX: 55,
    mobileY: 88,
    mobileRotate: 4,
  },
  {
    name: "LOVABLE",
    category: "VIBE CODING & FULLSTACK",
    color: "#e52424",
    bgTint: "#fff9f9",
    x: -155,
    y: 165,
    rotation: -12,
    zIndex: 11,
    mobileX: -80,
    mobileY: 130,
    mobileRotate: -10,
  },
  {
    name: "CANVA",
    category: "VISUALS & SOCIAL",
    color: "#00c4cc",
    bgTint: "#f5fdfd",
    x: 155,
    y: 175,
    rotation: 8,
    zIndex: 10,
    mobileX: 80,
    mobileY: 138,
    mobileRotate: 8,
  },
  {
    name: "MIRO",
    category: "WORKSHOPS & MAPPING",
    color: "#eab308",
    bgTint: "#fffdf0",
    x: -50,
    y: 225,
    rotation: 6,
    zIndex: 14,
    mobileX: -35,
    mobileY: 180,
    mobileRotate: 5,
  },
  {
    name: "ANTIGRAVITY",
    category: "AGENTIC ENGINEERING",
    color: "#8b5cf6",
    bgTint: "#fbf9ff",
    x: 85,
    y: 240,
    rotation: -7,
    zIndex: 15,
    mobileX: 50,
    mobileY: 195,
    mobileRotate: -6,
  },
];

export function ToolsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  // once: true prevents unmounting / scroll-flicker
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [mounted, setMounted] = useState(false);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const showSpill = isInView || mounted;

  return (
    <section
      id="tools"
      ref={containerRef}
      className="relative w-full py-16 sm:py-24 bg-[#fdfdfd] overflow-hidden select-none border-b border-[var(--line)] scroll-mt-16"
    >
      {/* Background Architectural Dot Grid Pattern (matching reference Attachment 2) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(#d1d1d6 1.2px, transparent 1.2px), radial-gradient(#e52424 0.6px, #fdfdfd 0.6px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
      />

      {/* Signature Red Dot Marker in upper left (exact detail from Attachment 2) */}
      <div
        className="absolute top-10 left-8 sm:top-14 sm:left-14 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#e52424] pointer-events-none select-none z-0 shadow-sm"
        aria-hidden="true"
      />

      {/* ── BOLD CORNER EDGE JUNCTIONS & GEOMETRICAL SHAPES ── */}
      <div className="pointer-events-none absolute top-8 right-6 sm:right-10 z-0 opacity-40 hidden sm:block" aria-hidden="true">
        <div className="relative w-14 h-14 border-2 border-[#141416]">
          <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#e52424]" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 bg-[#141416]" />
          <div className="absolute inset-1.5 border border-dashed border-[#e52424]" />
        </div>
      </div>

      <div className="section-shell max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header: Clean bold heading (NO monospace eyebrow labels) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
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
            As you reach this workstation, my core tools spill out from inside the laptop and cascade across the deck.
          </p>
        </div>

        {/* ── THE WORKSTATION SPILL STAGE (Exact replica of Attachment 2 reference) ── */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center min-h-[580px] sm:min-h-[640px] pt-4">
          
          {/* 1. Tilted Isometric Stylized Laptop */}
          <div className="relative z-10 pointer-events-auto">
            <motion.div
              initial={false}
              animate={{
                rotateX: 18,
                rotateZ: -4,
                rotateY: 3,
                scale: 1,
              }}
              transition={{
                rotateX: { type: "spring", stiffness: 85, damping: 15 },
                rotateZ: { type: "spring", stiffness: 85, damping: 15 },
              }}
              style={{
                perspective: 1200,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[300px] xs:w-[340px] sm:w-[420px] shadow-2xl cursor-default"
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
                  <div className="w-2 h-2 rounded-full bg-[#e52424]" />
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
                  <Laptop size={32} className="text-[#e52424] mb-2" strokeWidth={1.8} />
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

              {/* Laptop Keyboard Base (Chassis lip) */}
              <div className="w-[108%] -ml-[4%] h-5 bg-[#252528] rounded-b-xl border-t-2 border-[#38383e] shadow-[0_18px_32px_rgba(0,0,0,0.4)] flex items-center justify-center">
                <div className="w-24 h-1 bg-[#141416] rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* 2. THE 8 TOOL PILLS SPILLING OUT AND CASCADING UNDERNEATH THE LAPTOP */}
          {/* DESKTOP CASCADE VIEW (sm and up) */}
          <div className="hidden sm:block absolute top-[230px] left-1/2 -translate-x-1/2 w-0 h-0 pointer-events-none">
            {TOOLS_CASCADE.map((tool, index) => {
              const isHovered = hoveredTool === tool.name;

              return (
                <motion.div
                  key={tool.name}
                  initial={false}
                  animate={{
                    x: tool.x,
                    y: tool.y,
                    scale: isHovered ? 1.08 : 1,
                    opacity: 1,
                    rotate: isHovered ? 0 : tool.rotation,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 110,
                    damping: 14,
                    delay: index * 0.03,
                  }}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  style={{
                    zIndex: isHovered ? 50 : tool.zIndex,
                  }}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                >
                  <div
                    className="flex items-center gap-3 px-4 py-2.5 rounded-2xl border-2 border-[#141416] shadow-[4px_4px_0_#141416] hover:shadow-[6px_6px_0_#e52424] hover:border-[#e52424] transition-all duration-200 select-none whitespace-nowrap"
                    style={{
                      backgroundColor: tool.bgTint,
                      transform: isHovered ? "translateY(-4px)" : "none",
                    }}
                  >
                    {/* Brand Icon Box */}
                    <div
                      className="grid h-8 w-8 place-items-center rounded-xl border border-[#141416]/15 bg-white shrink-0 shadow-2xs"
                      style={{ color: tool.color }}
                    >
                      <BrandIcon name={tool.name} className="h-4 w-4" />
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
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* MOBILE CASCADE VIEW (< sm, tailored responsive scale) */}
          <div className="sm:hidden absolute top-[190px] left-1/2 -translate-x-1/2 w-0 h-0 pointer-events-none">
            {TOOLS_CASCADE.map((tool, index) => {
              const isHovered = hoveredTool === tool.name;

              return (
                <motion.div
                  key={`mobile-${tool.name}`}
                  initial={false}
                  animate={{
                    x: tool.mobileX,
                    y: tool.mobileY,
                    scale: isHovered ? 1.05 : 0.9,
                    opacity: 1,
                    rotate: isHovered ? 0 : tool.mobileRotate,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 110,
                    damping: 14,
                    delay: index * 0.03,
                  }}
                  onTouchStart={() => setHoveredTool(tool.name)}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  style={{
                    zIndex: isHovered ? 50 : tool.zIndex,
                  }}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                >
                  <div
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl border-2 border-[#141416] shadow-[3px_3px_0_#141416] select-none whitespace-nowrap"
                    style={{
                      backgroundColor: tool.bgTint,
                    }}
                  >
                    <div
                      className="grid h-6 w-6 place-items-center rounded-lg border border-[#141416]/15 bg-white shrink-0"
                      style={{ color: tool.color }}
                    >
                      <BrandIcon name={tool.name} className="h-3 w-3" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-black text-[10px] uppercase tracking-tight text-[#141416]">
                        {tool.name}
                      </span>
                      <span className="font-mono text-[7.5px] font-bold text-[#686872] uppercase tracking-wider">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
