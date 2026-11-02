"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Trophy, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { achievements } from "@/lib/content";

export function AchievementsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travelDistance, setTravelDistance] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Measure dynamic horizontal scroll distance
  useEffect(() => {
    const updateDistance = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const containerWidth =
          trackRef.current.parentElement?.clientWidth || window.innerWidth;
        const distance = Math.max(0, trackWidth - containerWidth + 40);
        setTravelDistance(distance);
      }
    };

    updateDistance();
    const timer = setTimeout(updateDistance, 400);
    window.addEventListener("resize", updateDistance);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDistance);
    };
  }, []);

  // Vertical scroll drives horizontal translation across cards
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Track active card index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(
        achievements.length - 1,
        Math.floor(latest * achievements.length + 0.15)
      );
      setActiveCardIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Smooth physical interpolation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  });

  // Translate track from 0 to -travelDistance pixels
  const x = useTransform(smoothProgress, [0, 1], [0, -travelDistance]);

  // Navigate to a specific card programmatically
  const scrollToCard = (index: number) => {
    if (!targetRef.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalScrollable = targetRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / (achievements.length - 1)) * totalScrollable;

    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(targetScroll);
    } else {
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section
      id="achievements"
      ref={targetRef}
      className="relative h-[360vh] bg-white text-[var(--ink)] scroll-mt-0 select-none border-b border-[var(--line)]"
    >
      {/* ── STICKY VIEWPORT CONTAINER (IN A SINGLE VIEWPORT EVERYTHING IS VISIBLE) ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-4 sm:px-8 lg:px-12 py-3 sm:py-6 relative">
        
        {/* ── GEOMETRICAL SHAPES ON LEFT SIDE ── */}
        {/* ── BOLD KINETIC GEOMETRICAL INSTRUMENTS ON LEFT SIDE ── */}
        <div
          className="pointer-events-none absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-0 hidden sm:flex flex-col items-center gap-7 opacity-45"
          aria-hidden="true"
        >
          {/* Large Wireframe isometric cube with slow 360 rotation */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 text-[#e52424]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
            <line x1="50" y1="5" x2="50" y2="50" />
            <line x1="50" y1="50" x2="95" y2="72.5" />
            <line x1="50" y1="50" x2="5" y2="72.5" />
          </motion.svg>

          {/* Large Target circle with counter-rotation */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="relative w-14 h-14 rounded-full border-2 border-dashed border-[#141416] flex items-center justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-[#e52424]" />
            <div className="absolute w-full h-[1.5px] bg-[#141416]" />
            <div className="absolute h-full w-[1.5px] bg-[#141416]" />
          </motion.div>

          {/* Large Nested diamond with subtle scaling pulse */}
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rotate-45 border-2 border-[#141416] flex items-center justify-center"
          >
            <div className="w-6 h-6 border-2 border-[#e52424]" />
          </motion.div>
        </div>

        {/* ── BOLD KINETIC GEOMETRICAL INSTRUMENTS ON RIGHT SIDE ── */}
        <div
          className="pointer-events-none absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-0 hidden sm:flex flex-col items-center gap-7 opacity-45"
          aria-hidden="true"
        >
          {/* Large Concentric circles with slow rotation */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 text-[#141416]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="28" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="12" fill="#e52424" />
            <line x1="50" y1="0" x2="50" y2="10" />
            <line x1="50" y1="90" x2="50" y2="100" />
            <line x1="0" y1="50" x2="10" y2="50" />
            <line x1="90" y1="50" x2="100" y2="50" />
          </motion.svg>

          {/* Stepped diagonal grid with subtle horizontal shift */}
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col gap-1.5"
          >
            <div className="w-12 h-2 bg-[#e52424]" />
            <div className="w-10 h-2 bg-[#141416] ml-2" />
            <div className="w-8 h-2 bg-[#e52424] ml-4" />
          </motion.div>

          {/* Geometric Triangle with floating breathing drift */}
          <motion.svg
            animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 text-[#141416]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <polygon points="50,10 90,90 10,90" />
            <circle cx="50" cy="60" r="10" fill="#e52424" />
          </motion.svg>
        </div>

        {/* Subtle decorative background watermark */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.02]"
          aria-hidden="true"
        >
          <span className="display-font text-[24vw] font-black uppercase text-black leading-none">
            WINS
          </span>
        </div>

        {/* Top Header Bar */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex items-end justify-between gap-4 mb-3 sm:mb-5 pb-3 border-b-2 border-[var(--ink)]">
          <div>
            {/* The single clean heading: "Achievement" (Eyebrow label removed) */}
            <h2 className="display-font text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--ink)] leading-[0.9]">
              Achievement
            </h2>
          </div>

          {/* Navigation Controls & Progress Pill */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-[var(--ink)] bg-[#fff0f0] border-2 border-[var(--ink)] px-3 py-1 rounded-full shadow-[2px_2px_0_#220608]">
              0{activeCardIndex + 1} / 0{achievements.length}
            </span>

            {/* Clickable arrows for instant sliding */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollToCard(Math.max(0, activeCardIndex - 1))}
                disabled={activeCardIndex === 0}
                className="grid h-9 w-9 place-items-center rounded-full border-2 border-[var(--ink)] bg-white text-[var(--ink)] shadow-[2px_2px_0_#220608] hover:bg-[#e52424] hover:text-white hover:border-[#e52424] disabled:opacity-30 disabled:pointer-events-none transition-all active:translate-x-0.5 active:translate-y-0.5"
                aria-label="Previous achievement"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() =>
                  scrollToCard(Math.min(achievements.length - 1, activeCardIndex + 1))
                }
                disabled={activeCardIndex === achievements.length - 1}
                className="grid h-9 w-9 place-items-center rounded-full border-2 border-[var(--ink)] bg-white text-[var(--ink)] shadow-[2px_2px_0_#220608] hover:bg-[#e52424] hover:text-white hover:border-[#e52424] disabled:opacity-30 disabled:pointer-events-none transition-all active:translate-x-0.5 active:translate-y-0.5"
                aria-label="Next achievement"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ── HORIZONTAL CARDS TRACK (SCROLLS HORIZONTALLY ON VERTICAL SCROLL) ── */}
        <div className="relative z-10 w-full max-w-6xl mx-auto overflow-visible">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 sm:gap-8 lg:gap-10 w-max items-center pr-12"
          >
            {achievements.map((item, index) => (
              <article
                key={item.id}
                className="w-[88vw] sm:w-[84vw] max-w-[840px] h-[64vh] sm:h-[62vh] max-h-[480px] shrink-0 rounded-2xl sm:rounded-3xl border-2 border-[var(--ink)] bg-white shadow-[6px_6px_0_#220608] sm:shadow-[8px_8px_0_#220608] overflow-hidden flex flex-col md:grid md:grid-cols-2"
              >
                {/* LEFT HALF: Solid Red (#e52424) with Bold Typography & Metrics */}
                <div className="relative flex-1 flex flex-col justify-between p-3.5 sm:p-7 md:p-8 bg-[#e52424] text-white overflow-hidden min-h-0">
                  {/* Subtle dot matrix texture */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.85) 1.2px, transparent 1.2px)",
                      backgroundSize: "20px 20px",
                    }}
                    aria-hidden="true"
                  />

                  {/* Top: Event Metadata & Headline */}
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2.5">
                      <span className="inline-flex items-center gap-1 sm:gap-1.5 font-mono text-[9px] sm:text-xs font-black uppercase tracking-wider bg-black/25 backdrop-blur-sm text-white px-2 py-0.5 rounded-full border border-white/20">
                        <Trophy size={11} className="text-yellow-300" />
                        {item.tag}
                      </span>
                      <span className="font-mono text-[9px] sm:text-xs font-black text-white/90 bg-white/15 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                      <span className="font-mono text-[9px] sm:text-xs font-bold text-white/70 ml-auto">
                        0{index + 1} / 04
                      </span>
                    </div>

                    <h3 className="text-base sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-[1.1] mt-1 sm:mt-1.5">
                      {item.headline}
                    </h3>

                    <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-white/90 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom: The Big Bold Metrics */}
                  <div className="relative z-10 pt-2 sm:pt-3 border-t border-white/20 grid grid-cols-2 gap-2 sm:gap-4 mt-1 sm:mt-0">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-none">
                          {metric.value}
                        </span>
                        <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white/85 mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT HALF: Full-Bleed Artwork on Sketch Paper Tone (#fef7f7) */}
                <div className="relative w-full h-36 xs:h-44 sm:h-52 md:h-full bg-[#fef7f7] flex items-center justify-center overflow-hidden border-t-2 md:border-t-0 md:border-l-2 border-[var(--ink)] shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-2 sm:p-5"
                    loading="eager"
                  />
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* Bottom subtle progress track dots */}
        <div className="relative z-10 w-full max-w-6xl mx-auto mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {achievements.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToCard(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeCardIndex === idx
                    ? "w-8 bg-[#e52424]"
                    : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Jump to achievement ${idx + 1}`}
              />
            ))}
          </div>

          <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
            SLIDE TO PROGRESS &bull; NEXT: EXPERIENCE &darr;
          </span>
        </div>
      </div>
    </section>
  );
}
