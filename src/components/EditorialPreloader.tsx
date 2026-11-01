"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EditorialPreloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Allow bypassing preloader via query param for testing if needed
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("skipPreloader") === "true") {
        setIsFinished(true);
        onComplete?.();
        return;
      }
    }

    const startTime = performance.now();
    const duration = 1800; // 1.8s smooth loading

    const updateLoader = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.floor(eased * 100);
      setProgress(current);

      if (t < 1) {
        requestAnimationFrame(updateLoader);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsFinished(true);
          onComplete?.();
        }, 250);
      }
    };

    const animId = requestAnimationFrame(updateLoader);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  if (!isMounted) return null;

  const circleRadius = 54;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader-curtain"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#fcfcfc] text-[#141416] select-none overflow-hidden"
        >
          {/* Subtle Hairline Grid Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#e52424 1px, transparent 1px), linear-gradient(90deg, #e52424 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* ══════════════════════════════════════════════════════════════════════ */}
          {/* CHAOTIC GEOMETRIC SHAPES (LEFT-TO-RIGHT & RIGHT-TO-LEFT TRAVERSAL)  */}
          {/* ══════════════════════════════════════════════════════════════════════ */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* L -> R: Wireframe Hexagon / Cube */}
            <motion.div
              initial={{ x: "-120px", y: "15vh", rotate: 0 }}
              animate={{ x: "115vw", rotate: 360 }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
              className="absolute text-[#e52424]/40"
            >
              <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
                <line x1="50" y1="5" x2="50" y2="50" />
                <line x1="50" y1="50" x2="95" y2="72.5" />
                <line x1="50" y1="50" x2="5" y2="72.5" />
              </svg>
            </motion.div>

            {/* R -> L: Bold Red Square with Inner Crosshair */}
            <motion.div
              initial={{ x: "110vw", y: "22vh", rotate: 0 }}
              animate={{ x: "-120px", rotate: -360 }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
              className="absolute"
            >
              <div className="w-12 h-12 border-3 border-[#e52424] flex items-center justify-center bg-[#e52424]/10">
                <div className="w-4 h-4 bg-[#e52424]" />
              </div>
            </motion.div>

            {/* L -> R: Concentric Circles Target */}
            <motion.div
              initial={{ x: "-100px", y: "38vh", scale: 0.8 }}
              animate={{ x: "110vw", scale: [0.8, 1.2, 0.8], rotate: 180 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute"
            >
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#141416]/50 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border border-[#e52424] bg-[#e52424]/20" />
              </div>
            </motion.div>

            {/* R -> L: Geometric Triangle & Polygon */}
            <motion.div
              initial={{ x: "115vw", y: "48vh", rotate: 0 }}
              animate={{ x: "-100px", rotate: 360 }}
              transition={{ duration: 2.9, repeat: Infinity, ease: "linear", delay: 0.2 }}
              className="absolute text-[#141416]/40"
            >
              <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                <polygon points="50,10 90,90 10,90" />
                <circle cx="50" cy="60" r="10" fill="#e52424" />
              </svg>
            </motion.div>

            {/* L -> R: Fast Red Asterisk / Spark Marker */}
            <motion.div
              initial={{ x: "-80px", y: "65vh" }}
              animate={{ x: "110vw", rotate: 720 }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "linear", delay: 0.6 }}
              className="absolute flex items-center justify-center text-[#e52424]"
            >
              <span className="text-3xl font-black">✦</span>
            </motion.div>

            {/* R -> L: Stepped Brutalist Geometric Grid Box */}
            <motion.div
              initial={{ x: "110vw", y: "75vh", rotate: 45 }}
              animate={{ x: "-120px", rotate: -315 }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "linear", delay: 0.5 }}
              className="absolute"
            >
              <div className="w-16 h-16 border-2 border-[#141416]/60 flex items-center justify-center">
                <div className="w-8 h-8 border border-[#e52424] rotate-45" />
              </div>
            </motion.div>

            {/* L -> R: Floating Red Geometry Dot Matrix */}
            <motion.div
              initial={{ x: "-100px", y: "85vh" }}
              animate={{ x: "110vw" }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 0.3 }}
              className="absolute flex gap-2"
            >
              <div className="w-3 h-3 rounded-full bg-[#e52424]" />
              <div className="w-3 h-3 rounded-full bg-[#141416]" />
              <div className="w-3 h-3 rounded-full bg-[#e52424]" />
            </motion.div>
          </div>

          {/* Central Circular Progress Dial */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
              {/* SVG Ring */}
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 140 140">
                {/* Track */}
                <circle
                  cx="70"
                  cy="70"
                  r={circleRadius}
                  stroke="#e8e8ea"
                  strokeWidth="3.5"
                  fill="transparent"
                />
                {/* Progress bar in portfolio red */}
                <circle
                  cx="70"
                  cy="70"
                  r={circleRadius}
                  stroke="#e52424"
                  strokeWidth="4"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-[stroke-dashoffset] duration-75 ease-linear"
                />
              </svg>

              {/* Inner Percentage Display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141416]">
                  {progress}
                  <span className="text-sm font-semibold text-[#e52424] ml-0.5">%</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#73737a] mt-0.5">
                  INITIALIZING
                </span>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="mt-8 flex flex-col items-center gap-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#141416] font-semibold">
                DESIGNING EXPERIENCES
              </span>
              <div className="w-32 h-[2px] bg-[#e8e8ea] overflow-hidden rounded-full">
                <div
                  className="h-full bg-[#e52424] transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-8 sm:bottom-12 font-mono text-[10px] text-[#a0a0a5] tracking-widest uppercase">
            CRAFTING WITH EMOTION & PRECISION
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
