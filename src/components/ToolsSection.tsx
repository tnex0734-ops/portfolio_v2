"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PenTool } from "lucide-react";

interface OrbitTool {
  name: string;
  category: string;
  color: string;
  bgTint: string;
  side: "left" | "right";
  // Generous circular arc coordinates flanking the central laptop with wide breathing room
  x: number;
  y: number;
  rotation: number;
}

// ── HIGH-CRAFT ARCHITECTURAL MACBOOK WORKSTATION (FRONTEND TASTE + HAIRLINE PRECISION + TAUSHIK AVATAR) ──
function MacBookWorkstation({
  isMobile = false,
  className = "",
}: {
  isMobile?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative select-none ${
        isMobile
          ? "w-full max-w-[240px] xs:max-w-[270px]"
          : "w-[290px] sm:w-[320px] lg:w-[345px] xl:w-[365px]"
      } ${className}`}
      style={{
        filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.35))",
      }}
    >
      {/* ── 1. LAPTOP LID & LIQUID RETINA DISPLAY (CNC Space Gray Anodized Aluminum) ── */}
      <div className="relative w-full aspect-[16/10.2] bg-gradient-to-b from-[#2a2a30] via-[#1c1c20] to-[#131316] rounded-t-2xl sm:rounded-t-3xl border border-[#44444e] p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)_inset] flex flex-col justify-between overflow-hidden">
        
        {/* Subtle diagonal glass reflection across the screen */}
        <div
          className="pointer-events-none absolute inset-0 z-30 opacity-40"
          style={{
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 28%, transparent 45%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── Top Chrome & Camera Notch ── */}
        <div className="relative z-20 flex items-center justify-between pb-1.5 border-b border-white/[0.08] text-[8px] sm:text-[9.5px] font-mono">
          {/* macOS Traffic Lights */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5f56] shadow-[0_0_3px_#ff5f56]/40 block" />
            <span className="w-2 h-2 rounded-full bg-[#ffbd2e] shadow-[0_0_3px_#ffbd2e]/40 block" />
            <span className="w-2 h-2 rounded-full bg-[#27c93f] shadow-[0_0_3px_#27c93f]/40 block" />
          </div>

          {/* Centered Camera Notch */}
          <div className="absolute left-1/2 -top-2 -translate-x-1/2 w-12 sm:w-16 h-3 bg-[#0d0d10] rounded-b-md border-b border-x border-[#28282e] flex items-center justify-center gap-1.5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#161e2e] ring-1 ring-white/10 block" />
            <span className="w-0.5 h-0.5 rounded-full bg-[#22c55e] animate-pulse block" />
          </div>

          {/* Hairline Workspace Label & Live Status */}
          <div className="flex items-center gap-1.5 text-white/60">
            <span className="tracking-wide hidden xs:inline">taushik.space</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#e52424] animate-ping" />
          </div>
        </div>

        {/* ── Screen Display Area: Obsidian Canvas with Hairline Red Cartesian Grid ── */}
        <div
          className="relative z-10 flex-1 rounded-xl my-1 p-2 sm:p-2.5 flex flex-col items-center justify-between overflow-hidden bg-[#0d0d10]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(229, 36, 36, 0.16) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229, 36, 36, 0.16) 1px, transparent 1px)
            `,
            backgroundSize: "14px 14px",
          }}
        >
          {/* Hairline Corner Coordinates */}
          <div className="w-full flex items-center justify-between text-[7px] sm:text-[8px] font-mono text-[#e52424]/75 select-none font-bold">
            <span>+ [0, 0]</span>
            <span className="text-white/40 font-normal">v2.6 // PROD</span>
            <span>+ [1920, 1080]</span>
          </div>

          {/* ── CENTERPIECE: TAUSHIK'S MASCOT (HAIRLINE & PONYTAIL) + CREATIVE ENGINE MATRIX ── */}
          <div className="flex items-center gap-2.5 sm:gap-3 my-auto py-1">
            {/* Taushik Avatar Badge with Hairline Ring and Starburst Accent */}
            <div className="relative shrink-0">
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-[#e52424] bg-[#141416] p-0.5 shadow-[0_0_12px_rgba(229,36,36,0.4)] overflow-hidden">
                <img
                  src="/mascot_avatar.png"
                  alt="Taushik Chandana mascot with hairline and ponytail"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 text-[#ffd000] text-[10px] sm:text-xs leading-none drop-shadow-sm inline-block origin-center"
              >
                ✦
              </motion.span>
            </div>

            {/* Creative Engineering Micro-dossier */}
            <div className="flex flex-col text-left min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[9px] sm:text-[10.5px] font-black uppercase text-white tracking-wider truncate">
                  TAUSHIK CHANDANA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              </div>

              <span className="font-mono text-[7px] sm:text-[8.5px] font-bold text-[#e52424] uppercase tracking-widest mt-0.5">
                CREATIVE TECH &bull; VIBE CODING
              </span>

              {/* Hairline Code Status Capsule */}
              <div className="mt-1 px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 font-mono text-[6.5px] sm:text-[7.5px] text-white/80 tracking-tight whitespace-nowrap">
                <span className="text-[#e52424] font-bold">const</span> stack = [<span className="text-[#ffd000]">React</span>, <span className="text-[#38bdf8]">Next</span>, <span className="text-[#4ade80]">AI</span>];
              </div>
            </div>
          </div>

          {/* Bottom Hairline Status Bar */}
          <div className="w-full flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-mono text-white/50 pt-1 border-t border-white/[0.08]">
            <span className="text-[#22c55e] font-bold flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-[#22c55e] animate-ping" />
              10+ ENGINES LOADED
            </span>
            <span className="text-white/40">60 FPS &bull; HYD, IN</span>
          </div>
        </div>

        {/* Display Hinge Notch */}
        <div className="flex justify-center -mb-0.5">
          <div className="w-16 sm:w-20 h-1 bg-[#3a3a44] rounded-full" />
        </div>
      </div>

      {/* ── 2. LAPTOP KEYBOARD BASE CHASSIS (CNC Unibody with Thumb Notch) ── */}
      <div className="w-[108%] -ml-[4%] h-4 sm:h-5 bg-gradient-to-b from-[#32323a] via-[#24242a] to-[#18181c] rounded-b-xl sm:rounded-b-2xl border-t border-white/20 border-b-2 border-black/60 shadow-[0_16px_36px_rgba(0,0,0,0.5)] flex items-start justify-center">
        {/* CNC Precision Lid-opening Thumb Notch */}
        <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#0f0f12] rounded-b-md border-t border-black/80 shadow-inner" />
      </div>

      {/* Subtle Under-Chassis Drop Shadow */}
      <div className="w-[88%] mx-auto h-2 bg-black/40 blur-sm rounded-full -mt-1" />
    </div>
  );
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

// 8 tools arranged in an open CIRCULAR orbit flanking the laptop on LEFT and RIGHT sides
// Spacious breathing room between the laptop screen and cards (ZERO overlap, ZERO elements below)
// Vertically bounded to ensure the ENTIRE section fits in a single viewport across all screens
const TOOLS_ORBIT: OrbitTool[] = [
  // ── LEFT FLANK (Circular Arc: Elegant spacing & vertically contained) ──
  {
    name: "FIGMA",
    category: "INTERFACE & PROTOTYPING",
    color: "#10b981",
    bgTint: "#f6fffb",
    side: "left",
    x: -330,
    y: -82,
    rotation: -5,
  },
  {
    name: "GPT",
    category: "REASONING & PROMPTING",
    color: "#10a37f",
    bgTint: "#f3fbf7",
    side: "left",
    x: -355,
    y: -26,
    rotation: -2,
  },
  {
    name: "LOVABLE",
    category: "VIBE CODING & FULLSTACK",
    color: "#e52424",
    bgTint: "#fff9f9",
    side: "left",
    x: -355,
    y: +28,
    rotation: 2,
  },
  {
    name: "MIRO",
    category: "WORKSHOPS & MAPPING",
    color: "#eab308",
    bgTint: "#fffdf0",
    side: "left",
    x: -330,
    y: +84,
    rotation: 5,
  },

  // ── RIGHT FLANK (Circular Arc: Elegant spacing & vertically contained) ──
  {
    name: "NEXT.JS",
    category: "APP ROUTER & SSR",
    color: "#141416",
    bgTint: "#fafafa",
    side: "right",
    x: 330,
    y: -82,
    rotation: 5,
  },
  {
    name: "CLAUDE",
    category: "DESIGN INTELLIGENCE",
    color: "#ea580c",
    bgTint: "#fffdf9",
    side: "right",
    x: 355,
    y: -26,
    rotation: 2,
  },
  {
    name: "CANVA",
    category: "VISUALS & SOCIAL",
    color: "#06b6d4",
    bgTint: "#f5fdfd",
    side: "right",
    x: 355,
    y: +28,
    rotation: -2,
  },
  {
    name: "ANTIGRAVITY",
    category: "AGENTIC ENGINEERING",
    color: "#8b5cf6",
    bgTint: "#fbf9ff",
    side: "right",
    x: 330,
    y: +84,
    rotation: -5,
  },
];

export function ToolsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section
      id="tools"
      ref={containerRef}
      className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center items-center py-4 sm:py-6 bg-[#fdfdfd] overflow-hidden select-none border-b border-[var(--line)] scroll-mt-16"
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

      {/* Signature Red Dot Marker on the right flank */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#e52424] pointer-events-none select-none z-0 shadow-sm"
        aria-hidden="true"
      />

      {/* ── BOLD CORNER EDGE JUNCTION WITH CONTINUOUS ROTATION ── */}
      <div className="pointer-events-none absolute top-6 left-6 sm:left-10 z-0 opacity-40 hidden sm:block" aria-hidden="true">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="relative w-12 h-12 border-2 border-[#141416]"
        >
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#e52424]" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#141416]" />
          <div className="absolute inset-1 border border-dashed border-[#e52424]" />
        </motion.div>
      </div>

      <div className="section-shell max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center justify-center my-auto">
        
        {/* Section Header: Tight, perfectly proportioned for single-viewport fit */}
        <div className="text-center max-w-2xl mx-auto mb-2 sm:mb-3 lg:mb-4 shrink-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold tracking-tight text-[#141416] leading-[1.1]">
            <span className="font-editorial-italic font-normal block sm:inline">What </span>
            <span className="text-[#e52424] font-black italic relative inline-flex items-center gap-1 mx-1">
              Tools
              <PenTool size={20} className="inline-block text-[#e52424] -rotate-45" />
            </span>
            <span className="font-editorial-italic font-normal block sm:inline">are in my </span>
            <span className="underline decoration-[#e52424] decoration-4 underline-offset-8">
              Laptop?
            </span>
          </h2>
          <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-[#606068] font-medium max-w-md mx-auto leading-snug">
            As you reach this workstation, my core tools emerge in a circular orbit flanking the laptop on the left and right.
          </p>
        </div>

        {/* ── DESKTOP STAGE: LAPTOP IN CENTER, TOOLS ORBIT ON LEFT & RIGHT (FIT IN 1 VIEWPORT) ── */}
        <div className="hidden md:flex relative w-full max-w-5xl mx-auto items-center justify-center min-h-[300px] lg:min-h-[330px] xl:min-h-[350px] scale-[0.86] lg:scale-[0.94] xl:scale-100 origin-center transition-transform my-auto">
          
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
              className="cursor-default"
            >
              <MacBookWorkstation isMobile={false} />
            </motion.div>
          </div>

          {/* ── THE 8 TOOL PILLS: GENEROUS SPACING ON LEFT & RIGHT SIDES ── */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {TOOLS_ORBIT.map((tool, index) => {
              const isHovered = hoveredTool === tool.name;
              // Pair index for symmetrical bilateral emergence (top pair, mid-upper pair, mid-lower pair, bottom pair)
              const pairIndex = index % 4;

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
                    damping: 14,
                    mass: 0.75,
                    delay: 0.12 + pairIndex * 0.08,
                  }}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  style={{
                    zIndex: isHovered ? 50 : 25,
                  }}
                  className="absolute pointer-events-auto cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.06, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border-2 border-[#141416] shadow-[3px_3px_0_#141416] hover:shadow-[5px_5px_0_#e52424] hover:border-[#e52424] transition-all duration-200 select-none whitespace-nowrap"
                    style={{
                      backgroundColor: tool.bgTint,
                    }}
                  >
                    {/* Brand Delta Glyph Box */}
                    <div
                      className="grid h-7 w-7 place-items-center rounded-xl border border-[#141416]/15 bg-white shrink-0 shadow-2xs"
                    >
                      <DeltaGlyph color={tool.color} />
                    </div>

                    {/* Bold Name & Clean Uppercase Sub-category */}
                    <div className="flex flex-col text-left pr-1">
                      <span className="font-black text-[11px] sm:text-xs uppercase tracking-tight text-[#141416]">
                        {tool.name}
                      </span>
                      <span className="font-mono text-[8px] sm:text-[8.5px] font-bold text-[#686872] uppercase tracking-wider">
                        {tool.category}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ── MOBILE VIEW (< md): CENTERED LAPTOP WITH LEFT & RIGHT SIDES IN FULL VIEW ── */}
        <div className="md:hidden flex flex-col items-center justify-center w-full my-auto py-1">
          
          {/* Centered Compact 3D Laptop with Frontend Craft & Hairline Precision */}
          <motion.div
            initial={{ rotateX: 20, opacity: 0 }}
            animate={
              isInView
                ? { rotateX: 14, rotateZ: -3, y: [0, -4, 0], opacity: 1 }
                : { rotateX: 20, opacity: 0 }
            }
            transition={{
              rotateX: { type: "spring", stiffness: 85, damping: 15 },
              opacity: { duration: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="mb-2.5 cursor-default"
          >
            <MacBookWorkstation isMobile={true} />
          </motion.div>

          {/* Symmetrical 2-column mobile grid: Left Flank & Right Flank */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 w-full max-w-xs px-1">
            {TOOLS_ORBIT.map((tool, idx) => (
              <motion.div
                key={`mobile-${tool.name}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 20, scale: 0.9 }
                }
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 14,
                  delay: 0.08 + idx * 0.05,
                }}
                className="flex items-center gap-2 p-1.5 rounded-xl border-2 border-[#141416] shadow-[2.5px_2.5px_0_#141416] select-none"
                style={{ backgroundColor: tool.bgTint }}
              >
                <div
                  className="grid h-6 w-6 place-items-center rounded-lg border border-[#141416]/15 bg-white shrink-0"
                >
                  <DeltaGlyph color={tool.color} />
                </div>
                <div className="flex flex-col min-w-0 text-left">
                  <span className="font-black text-[10px] uppercase tracking-tight text-[#141416] truncate">
                    {tool.name}
                  </span>
                  <span className="font-mono text-[7px] font-bold text-[#686872] uppercase tracking-wider truncate">
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
