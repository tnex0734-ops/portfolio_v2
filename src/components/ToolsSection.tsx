"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { BrandIcon } from "@/components/BrandIcon";
import { Laptop, PenTool, Terminal, Sparkles } from "lucide-react";

interface ToolBadge {
  name: string;
  category: string;
  color: string;
  bgColor: string;
  // Position offsets around the central laptop
  x: number;
  y: number;
  rotation: number;
}

const TOOLS_DATA: ToolBadge[] = [
  {
    name: "Figma",
    category: "Interface Design",
    color: "#0ACF83",
    bgColor: "#ffffff",
    x: -280,
    y: -60,
    rotation: -9,
  },
  {
    name: "Next.js",
    category: "App Router & SSR",
    color: "#141416",
    bgColor: "#ffffff",
    x: 280,
    y: -60,
    rotation: 8,
  },
  {
    name: "Lovable",
    category: "Vibe Coding",
    color: "#e52424",
    bgColor: "#ffffff",
    x: -330,
    y: 50,
    rotation: -12,
  },
  {
    name: "Claude",
    category: "Design Intelligence",
    color: "#d97706",
    bgColor: "#ffffff",
    x: 330,
    y: 50,
    rotation: 11,
  },
  {
    name: "GPT",
    category: "Prompt Systems",
    color: "#10a37f",
    bgColor: "#ffffff",
    x: -290,
    y: 160,
    rotation: -6,
  },
  {
    name: "Canva",
    category: "Visual Graphics",
    color: "#00c4cc",
    bgColor: "#ffffff",
    x: 290,
    y: 160,
    rotation: 7,
  },
  {
    name: "Miro",
    category: "Workshops & Maps",
    color: "#eab308",
    bgColor: "#ffffff",
    x: -140,
    y: 220,
    rotation: -8,
  },
  {
    name: "Antigravity",
    category: "Agentic Engineering",
    color: "#8b5cf6",
    bgColor: "#ffffff",
    x: 140,
    y: 220,
    rotation: 10,
  },
];

export function ToolsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });
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
      className="relative w-full py-14 sm:py-20 lg:py-24 bg-[#fdfdfd] overflow-hidden select-none border-b border-[var(--line)] scroll-mt-16"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#e52424 0.75px, transparent 0.75px), radial-gradient(#d1d1d6 0.5px, #fdfdfd 0.5px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
      />

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

      <div className="section-shell max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header: Clean bold heading (Eyebrow label removed) */}
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
            As you reach this workstation, my core tools spill out from inside the laptop and orbit around the deck.
          </p>
        </div>

        {/* ── DESKTOP STAGE: LAPTOP IN CENTER, TOOLS SPILLED ALL AROUND IT ── */}
        <div className="hidden md:block relative min-h-[500px] w-full max-w-5xl mx-auto">
          
          {/* Centered Tilted 3D Stylized Laptop */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto">
            <motion.div
              initial={false}
              animate={{
                rotateX: 20,
                rotateZ: -5,
                rotateY: 4,
                scale: 1,
              }}
              transition={{
                rotateX: { type: "spring", stiffness: 80, damping: 14 },
                rotateZ: { type: "spring", stiffness: 80, damping: 14 },
              }}
              style={{
                perspective: 1200,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[340px] lg:w-[380px] shadow-2xl cursor-default"
            >
              {/* Laptop Screen Assembly */}
              <div className="relative w-full aspect-[16/10] bg-[#141416] rounded-t-2xl border-4 border-[#252528] p-3 shadow-[0_24px_50px_rgba(0,0,0,0.25)] flex flex-col justify-between">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px] font-mono text-white/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                    <span className="w-2 h-2 rounded-full bg-[#eab308]" />
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  </div>
                  <span>macbook-pro // taushik.space</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e52424] animate-ping" />
                </div>

                {/* Screen Inner Display Area */}
                <div
                  className="flex-1 rounded-lg my-1.5 p-3 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-[#1c1c20] to-[#121214]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(229, 36, 36, 0.15) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(229, 36, 36, 0.15) 0.5px, transparent 0.5px)",
                    backgroundSize: "16px 16px",
                  }}
                >
                  <Laptop size={30} className="text-[#e52424] mb-1.5 animate-bounce" />
                  <span className="font-mono text-xs font-black tracking-wider text-white uppercase">
                    WORKSTATION SPILL
                  </span>
                  <span className="font-mono text-[9px] text-[#e52424] uppercase tracking-widest mt-0.5 font-bold">
                    8 TOOLS ORBITING
                  </span>
                </div>

                {/* Base Hinge Indicator */}
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-[#404046] rounded-full" />
                </div>
              </div>

              {/* Laptop Keyboard Base (3D deck lip) */}
              <div className="w-[108%] -ml-[4%] h-5 bg-[#252528] rounded-b-xl border-t-2 border-[#38383e] shadow-[0_16px_30px_rgba(0,0,0,0.35)] flex items-center justify-center">
                <div className="w-20 h-1 bg-[#141416] rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* ── THE 8 TOOL PILLS SPILLING OUT AROUND THE LAPTOP ── */}
          <div className="absolute inset-0 pointer-events-none">
            {TOOLS_DATA.map((tool, index) => {
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
                    stiffness: 95,
                    damping: 14,
                    mass: 0.8,
                    delay: index * 0.04,
                  }}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  style={{
                    zIndex: isHovered ? 60 : 30,
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                >
                  <div
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border-2 border-[#141416] bg-white shadow-[4px_4px_0_#141416] transition-all duration-200 hover:shadow-[6px_6px_0_#e52424] hover:border-[#e52424] whitespace-nowrap"
                    style={{
                      transform: isHovered ? "translateY(-3px)" : "none",
                    }}
                  >
                    {/* Tool Brand Icon */}
                    <div
                      className="grid h-7 w-7 place-items-center rounded-xl border border-[#141416]/15 bg-[#fcfcfc] shrink-0"
                      style={{ color: tool.color }}
                    >
                      <BrandIcon name={tool.name} className="h-4 w-4" />
                    </div>

                    {/* Tool Name & Category */}
                    <div className="flex flex-col text-left pr-1">
                      <span className="font-extrabold text-xs uppercase tracking-tight text-[#141416]">
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

        </div>

        {/* ── MOBILE RESPONSIVE ADAPTATION (xs to md) ── */}
        <div className="md:hidden flex flex-col items-center">
          
          {/* Compact Tilted Laptop */}
          <motion.div
            initial={{ rotateX: 10, scale: 0.95 }}
            whileInView={{ rotateX: 16, rotateZ: -4, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="w-full max-w-[280px] bg-[#141416] rounded-t-xl border-2 border-[#28282c] p-2.5 shadow-xl mb-6"
          >
            <div className="flex items-center justify-between pb-1 border-b border-white/10 text-[8px] font-mono text-white/50">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              </div>
              <span>TAUSHIK WORKSTATION</span>
            </div>
            <div className="p-2.5 my-1 rounded bg-[#1c1c20] text-center">
              <Laptop size={22} className="text-[#e52424] mx-auto mb-1" />
              <span className="font-mono text-[10px] font-bold text-white uppercase block">
                Tools Spilling Out
              </span>
            </div>
            <div className="w-[106%] -ml-[3%] h-3 bg-[#28282c] rounded-b-lg" />
          </motion.div>

          {/* Clean 2-column mobile grid: zero overflow, perfectly readable */}
          <div className="grid grid-cols-2 gap-2.5 w-full max-w-sm">
            {TOOLS_DATA.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-2 rounded-xl border-2 border-[#141416] bg-white shadow-[2px_2px_0_#141416]"
              >
                <div
                  className="grid h-7 w-7 place-items-center rounded-lg border border-[#141416]/10 bg-[#f9f9fa] shrink-0"
                  style={{ color: tool.color }}
                >
                  <BrandIcon name={tool.name} className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-xs text-[#141416] truncate">{tool.name}</span>
                  <span className="font-mono text-[8px] text-[#707078] truncate">{tool.category}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
