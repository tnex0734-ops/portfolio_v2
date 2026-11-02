"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Authentic 8-Bit Pixel Art Flowers (Faithful to Reference Image)    */
/* ------------------------------------------------------------------ */

// The signature Sunflower replacing the letter 'i': taush + [flower] + k
export function PixelSunflower({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 22 40"
      className={cn(
        "w-6 h-11 sm:w-8 sm:h-14 md:w-10 md:h-18 lg:w-12 lg:h-22 select-none overflow-visible inline-block origin-bottom",
        className
      )}
      animate={{ rotate: [-2.5, 2.5, -2.5] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
      shapeRendering="crispEdges"
    >
      {/* ── Sunflower Petals (Yellow #ffd000) ── */}
      <rect x="9" y="0" width="4" height="2" fill="#ffd000" />
      <rect x="9" y="14" width="4" height="2" fill="#ffd000" />
      <rect x="2" y="7" width="2" height="4" fill="#ffd000" />
      <rect x="18" y="7" width="2" height="4" fill="#ffd000" />

      {/* Diagonal petals */}
      <rect x="5" y="2" width="4" height="4" fill="#ffd000" />
      <rect x="13" y="2" width="4" height="4" fill="#ffd000" />
      <rect x="5" y="10" width="4" height="4" fill="#ffd000" />
      <rect x="13" y="10" width="4" height="4" fill="#ffd000" />

      {/* Petal shading */}
      <rect x="5" y="2" width="1" height="1" fill="#eab308" />
      <rect x="16" y="2" width="1" height="1" fill="#eab308" />
      <rect x="5" y="13" width="1" height="1" fill="#eab308" />
      <rect x="16" y="13" width="1" height="1" fill="#eab308" />

      {/* Brown center (2x2 units = 6x6 px) */}
      <rect x="8" y="5" width="6" height="6" fill="#5c3818" />

      {/* ── Green Stem & Leaves (#16a34a) ── */}
      <rect x="10" y="16" width="2" height="24" fill="#16a34a" />

      {/* Left leaf */}
      <rect x="6" y="26" width="4" height="2" fill="#15803d" />
      <rect x="4" y="24" width="2" height="2" fill="#15803d" />

      {/* Right leaf */}
      <rect x="12" y="22" width="4" height="2" fill="#15803d" />
      <rect x="16" y="20" width="2" height="2" fill="#15803d" />
    </motion.svg>
  );
}

// Red Tulip Flower with Yellow Center
export function PixelTulipRed({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 10 16"
      className={cn("w-4 h-6 sm:w-5 sm:h-8 select-none overflow-visible origin-bottom", className)}
      animate={{ rotate: [-2, 2, -2] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.25, y: -2 }}
      shapeRendering="crispEdges"
    >
      <rect x="3" y="0" width="4" height="2" fill="#ef4444" />
      <rect x="3" y="6" width="4" height="2" fill="#ef4444" />
      <rect x="0" y="2" width="2" height="4" fill="#ef4444" />
      <rect x="8" y="2" width="2" height="4" fill="#ef4444" />
      <rect x="2" y="2" width="6" height="4" fill="#ffd000" />
      <rect x="4" y="8" width="2" height="8" fill="#16a34a" />
      <rect x="6" y="10" width="2" height="2" fill="#15803d" />
    </motion.svg>
  );
}

// Yellow Tulip Flower with Brown Center
export function PixelTulipYellow({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 10 16"
      className={cn("w-4 h-6 sm:w-5 sm:h-8 select-none overflow-visible origin-bottom", className)}
      animate={{ rotate: [2, -2, 2] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      whileHover={{ scale: 1.25, y: -2 }}
      shapeRendering="crispEdges"
    >
      <rect x="3" y="0" width="4" height="2" fill="#ffd000" />
      <rect x="3" y="6" width="4" height="2" fill="#ffd000" />
      <rect x="0" y="2" width="2" height="4" fill="#ffd000" />
      <rect x="8" y="2" width="2" height="4" fill="#ffd000" />
      <rect x="2" y="2" width="6" height="4" fill="#5c3818" />
      <rect x="4" y="8" width="2" height="8" fill="#16a34a" />
    </motion.svg>
  );
}

// Tiny Star Flower (Gold 4-pixel)
export function PixelStarFlower({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 6 6"
      className={cn("w-3 h-3 sm:w-4 sm:h-4 select-none overflow-visible", className)}
      whileHover={{ scale: 1.3, rotate: 90 }}
      transition={{ duration: 0.2 }}
      shapeRendering="crispEdges"
    >
      <rect x="2" y="0" width="2" height="6" fill="#ffd000" />
      <rect x="0" y="2" width="6" height="2" fill="#ffd000" />
      <rect x="2" y="2" width="2" height="2" fill="#ffffff" />
    </motion.svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Redesigned About Me Section (Full-Bleed Red Grid Universe)        */
/*  - Parallax overlay sheet sliding up from Hero                     */
/*  - "Hi, I am" placed above "Taushik"                               */
/*  - Letter 'i' replaced by Sunflower: taush + [flower] + k          */
/*  - Clean white typography directly on the red grid                 */
/* ------------------------------------------------------------------ */

export function AboutRedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  // Parallax sheet lift effect (smooth rising curve like Zainab Kabira reference)
  const yParallax = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const sheetScale = useTransform(scrollYProgress, [0, 1], [0.985, 1]);

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      style={{
        y: yParallax,
        scale: sheetScale,
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.14) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 1px, transparent 1px)
        `,
        backgroundSize: "38px 38px",
      }}
      className="relative z-20 w-full pt-20 pb-16 sm:pt-28 sm:pb-24 bg-[#e52424] -mt-10 sm:-mt-16 rounded-t-[36px] sm:rounded-t-[56px] shadow-[0_-20px_50px_rgba(229,36,36,0.22)] overflow-hidden select-none scroll-mt-16 transition-shadow duration-300"
    >
      {/* ── Top Arched Accent Wave / Parallax Lip ── */}
      <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

      {/* ── 1. Scattered Retro Pixel Art Flowers Across the Grid ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-10">
        {/* Top-Left: Red Tulip */}
        <div className="absolute left-[5%] top-[8%] pointer-events-auto">
          <PixelTulipRed />
        </div>

        {/* Mid-Left: Yellow Star Bloom */}
        <div className="absolute left-[3%] top-[45%] pointer-events-auto">
          <PixelStarFlower />
        </div>

        {/* Bottom-Left: Yellow Tulip */}
        <div className="absolute left-[4%] bottom-[10%] pointer-events-auto">
          <PixelTulipYellow />
        </div>

        {/* Top-Right: Red Tulip */}
        <div className="absolute right-[8%] top-[10%] pointer-events-auto">
          <PixelTulipRed />
        </div>

        {/* Bottom-Right (near location tag): Red Tulip with Leaf */}
        <div className="absolute right-[14%] bottom-[12%] pointer-events-auto">
          <PixelTulipRed />
        </div>

        {/* Far-Right: Red Blossom */}
        <div className="absolute right-[4%] top-[55%] pointer-events-auto">
          <PixelTulipRed />
        </div>
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-8">
        {/* ── 2. THE SIGNATURE HERO NAME BANNER ── */}
        <div className="flex flex-col items-center justify-center pt-2 pb-10 sm:pb-14 border-b border-white/20">
          
          {/* Top-Left Tag above name: UI/UX & PRODUCT DESIGNER */}
          <div className="w-full max-w-4xl flex items-start justify-start mb-2 sm:mb-4 px-2">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.26em] text-white/90 uppercase"
            >
              UI/UX &amp; PRODUCT DESIGNER
            </motion.div>
          </div>

          {/* "HI, I AM" placed cleanly at the top */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-mono text-xs sm:text-sm md:text-base lg:text-lg font-black tracking-[0.3em] text-white uppercase mb-1 sm:mb-2 text-center"
          >
            HI, I AM
          </motion.div>

          {/* Centerpiece Name: Taush + [Pixel Sunflower] + k (Letter 'i' removed) */}
          <div className="relative flex items-baseline justify-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-editorial-italic text-[3.5rem] xs:text-[4.5rem] sm:text-[6.8rem] md:text-[9.5rem] lg:text-[12rem] xl:text-[14rem] leading-[0.85] text-white tracking-[-0.03em] select-none flex items-baseline justify-center font-normal drop-shadow-[0_4px_24px_rgba(0,0,0,0.18)]"
            >
              <span>Taush</span>
              {/* Signature Pixel Sunflower in place of the letter 'i' */}
              <span className="relative inline-flex items-end mx-1 sm:mx-2 md:mx-3 translate-y-[2px] sm:translate-y-[6px]">
                <PixelSunflower />
              </span>
              <span>k</span>
            </motion.h2>
          </div>

          {/* Bottom-Right Tag below name: BASED IN HYDERABAD */}
          <div className="w-full max-w-4xl flex items-end justify-end mt-2 sm:mt-4 px-2">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.22em] text-white/90 uppercase flex items-center gap-1.5"
            >
              <MapPin size={13} className="text-white/80" />
              <span>BASED IN HYDERABAD</span>
            </motion.div>
          </div>
        </div>

        {/* ── 3. CONTENT AREA: SINGLE UNIFIED CONTAINER (IMAGE + BIO CONTENT) ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-14 max-w-5xl mx-auto rounded-2xl sm:rounded-3xl border-2 border-white/35 bg-white/10 backdrop-blur-sm p-4 xs:p-6 sm:p-8 lg:p-10 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* The Sketch of Taushik with laptop with gentle breathing float */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[360px]"
              >
                <img
                  src="/taushik_laptop_sketch.png"
                  alt="Taushik Chandana sitting relaxed with laptop sketch"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </motion.div>
            </div>

            {/* The Descriptive Narrative & Pill Badges */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-3.5 sm:space-y-5">
              <p className="text-sm xs:text-base sm:text-xl md:text-2xl font-bold leading-relaxed sm:leading-snug text-white tracking-tight">
                I&apos;m a UI/UX &amp; Product Designer bridging the gap between user experience, visual craft, and design engineering. I build intuitive digital interfaces and product architectures that turn complex systems into seamless user journeys.
              </p>

              <p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed text-white/85 font-medium">
                Beyond traditional screens, I focus on how products are built and shipped—combining design systems, modern frontend code, AI stack workflows, vibe coding, and rapid prototyping to turn bold ideas into production-ready software.
              </p>

              {/* Clean Pill Badges Featuring Vibe Coding */}
              <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#e52424] font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-sm">
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="inline-block origin-center"><Sparkle size={12} fill="currentColor" /></motion.span>
                  <span>Vibe Coding</span>
                </span>

                {[
                  "UI/UX & Product Design",
                  "Design Systems & Tokens",
                  "Interactive Prototypes",
                  "AI Stack Workflows",
                  "Rapid Prototyping",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-mono text-[11px] sm:text-xs font-bold tracking-wider transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
