"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumeDownloadButtonProps {
  variant?: "header" | "footer" | "hero";
  className?: string;
}

export function ResumeDownloadButton({
  variant = "header",
  className,
}: ResumeDownloadButtonProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFlipped) return;

    // Trigger physical PDF download
    const link = document.createElement("a");
    link.href = "/Taushik_ux_resume.pdf";
    link.download = "Taushik_ux_resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Flip button to show downloaded state
    setIsFlipped(true);

    // Automatically flip back after 3.8s so user can download again if desired
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsFlipped(false);
    }, 3800);
  };

  const isHeader = variant === "header";

  return (
    <div
      className={cn(
        "relative select-none shrink-0 inline-block",
        isHeader ? "h-9 w-[116px] sm:w-[122px]" : "h-10 sm:h-11 w-[188px] sm:w-[200px]",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      <motion.button
        type="button"
        onClick={handleClick}
        animate={{ rotateX: isFlipped ? -180 : 0 }}
        transition={{
          duration: 0.55,
          ease: [0.34, 1.4, 0.64, 1], // Emil Kowalski crisp spring flip curve
        }}
        whileHover={!isFlipped ? { scale: 1.03 } : undefined}
        whileTap={!isFlipped ? { scale: 0.97 } : undefined}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full rounded-full cursor-pointer focus:outline-hidden"
        aria-label={isFlipped ? "Resume downloaded" : "Download Resume"}
        title={isFlipped ? "Resume downloaded" : "Download Resume"}
      >
        {/* ── FRONT FACE: Initial State (White pill with red accent badge) ── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className={cn(
            "absolute inset-0 flex items-center justify-between rounded-full border-2 border-[var(--ink)] bg-white text-[var(--ink)] shadow-[2.5px_2.5px_0_#220608] hover:shadow-[3.5px_3.5px_0_#e52424] transition-all",
            isHeader ? "px-2.5 sm:px-3 py-1" : "px-4 sm:px-4.5 py-1.5"
          )}
        >
          <span
            className={cn(
              "font-mono font-black uppercase tracking-wider text-[var(--ink)] leading-none",
              isHeader ? "text-[11px] sm:text-xs" : "text-xs sm:text-sm"
            )}
          >
            {isHeader ? "Resume" : "Download Resume"}
          </span>

          <span
            className={cn(
              "grid place-items-center rounded-full bg-[#e52424] text-white shrink-0 shadow-xs",
              isHeader ? "h-5 w-5" : "h-6 w-6"
            )}
          >
            <Download size={isHeader ? 11 : 13} strokeWidth={2.5} />
          </span>
        </div>

        {/* ── BACK FACE: Flipped Black State (Matching vid1 microinteraction) ── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
          className={cn(
            "absolute inset-0 flex items-center justify-between rounded-full border-2 border-[var(--ink)] bg-[#121214] text-white shadow-[2.5px_2.5px_0_#220608]",
            isHeader ? "px-2.5 sm:px-3 py-1" : "px-4 sm:px-4.5 py-1.5"
          )}
        >
          {/* Subtle dashed inner border guideline like in the reference video */}
          <div className="pointer-events-none absolute inset-0.5 rounded-full border border-dashed border-white/20" />

          <div className="flex items-center gap-1.5 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span
              className={cn(
                "font-mono font-black uppercase tracking-wider text-white leading-none",
                isHeader ? "text-[10px] sm:text-[11px]" : "text-xs sm:text-sm"
              )}
            >
              Downloaded
            </span>
          </div>

          <span
            className={cn(
              "grid place-items-center rounded-full bg-emerald-500 text-white shrink-0 z-10 shadow-[0_0_8px_rgba(16,185,129,0.5)]",
              isHeader ? "h-5 w-5" : "h-6 w-6"
            )}
          >
            <Check size={isHeader ? 11 : 13} strokeWidth={3} />
          </span>
        </div>
      </motion.button>
    </div>
  );
}
