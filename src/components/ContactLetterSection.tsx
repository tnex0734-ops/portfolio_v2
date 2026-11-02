"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Copy,
  Check,
  Mail,
  MessageCircle,
  MousePointerClick,
} from "lucide-react";

export function ContactLetterSection({ defaultOpen = false }: { defaultOpen?: boolean } = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const autoOpenTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-open in 6 seconds if the user does not click
  useEffect(() => {
    if (isInView && !isOpen) {
      autoOpenTimerRef.current = setTimeout(() => {
        setIsOpen(true);
      }, 6000);
    }
    return () => {
      if (autoOpenTimerRef.current) {
        clearTimeout(autoOpenTimerRef.current);
      }
    };
  }, [isInView, isOpen]);

  const handleToggle = () => {
    if (autoOpenTimerRef.current) {
      clearTimeout(autoOpenTimerRef.current);
    }
    setIsOpen((prev) => !prev);
  };

  const handleCopy = (e: React.MouseEvent, text: string, key: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const tracks = [
    {
      id: "email",
      trackNumber: "TRACK 01",
      category: "DIRECT INBOX",
      title: "Email Direct",
      detail: "taushikok@gmail.com",
      actionLabel: "Send Email",
      actionHref: "mailto:taushikok@gmail.com",
      isExternal: false,
      copyValue: "taushikok@gmail.com",
      icon: <Mail size={16} />,
    },
    {
      id: "linkedin",
      trackNumber: "TRACK 02",
      category: "PROFESSIONAL NETWORK",
      title: "LinkedIn",
      detail: "linkedin.com/in/taushik-chandana",
      actionLabel: "Connect",
      actionHref: "https://www.linkedin.com/in/taushik-chandana-16ba14378",
      isExternal: true,
      copyValue: "https://www.linkedin.com/in/taushik-chandana-16ba14378",
      icon: <span className="font-mono text-xs font-black">in</span>,
    },
    {
      id: "phone",
      trackNumber: "TRACK 03",
      category: "DIRECT LINE & CHAT",
      title: "Phone & WhatsApp",
      detail: "+91 8919237170",
      actionLabel: "Call / WhatsApp",
      actionHref: "https://wa.me/918919237170",
      isExternal: true,
      copyValue: "+918919237170",
      icon: <MessageCircle size={16} />,
    },
    {
      id: "resume",
      trackNumber: "TRACK 04",
      category: "CURRICULUM VITAE",
      title: "Resume & Portfolio CV",
      detail: "Taushik_ux_resume.pdf • 2026 Edition",
      actionLabel: "Download CV",
      actionHref: "/Taushik_ux_resume.pdf",
      isExternal: true,
      isDownload: true,
      copyValue: null,
      icon: <Download size={16} />,
    },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative overflow-hidden bg-[var(--paper)] pt-16 sm:pt-24 pb-0 select-none scroll-mt-16"
    >
      {/* ── BOLD CORNER EDGE JUNCTION GEOMETRIC SHAPES ── */}
      <div className="pointer-events-none absolute top-8 left-8 z-0 hidden lg:block opacity-40" aria-hidden="true">
        <div className="relative w-16 h-16 border-2 border-[#141416]">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#e52424]" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#141416]" />
          <div className="absolute inset-2 border border-dashed border-[#e52424]" />
        </div>
      </div>
      <div className="pointer-events-none absolute top-8 right-8 z-0 hidden lg:block opacity-40" aria-hidden="true">
        <div className="relative w-16 h-16 border-2 border-[#141416]">
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#e52424]" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#141416]" />
          <div className="absolute inset-2 border border-dashed border-[#e52424]" />
        </div>
      </div>

      {/* Background ambient accents */}
      <div
        className="pointer-events-none absolute top-12 left-10 h-72 w-72 rounded-full bg-[#e52424]/5 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-12 right-10 h-80 w-80 rounded-full bg-[#b4c398]/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
        
        {/* Section Top Header (Eyebrow label removed) */}
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#141416] leading-[1.06]">
            lets{" "}
            <span className="font-editorial-italic italic font-normal text-[#e52424] drop-shadow-sm">
              design
            </span>{" "}
            incredible work together.
          </h2>
          
          <p className="mt-3 text-xs sm:text-sm text-[var(--muted)] font-medium max-w-lg mx-auto">
            {isOpen
              ? "Envelope unsealed — all contact channels and resume are ready below."
              : "Sealed postal dispatch. Click 'Click here' or wait 6 seconds to open."}
          </p>
        </div>

        {/* =================================================================== */}
        {/* BIG PROPORTIONAL RECTANGULAR POSTAL ENVELOPE                        */}
        {/* =================================================================== */}
        <div
          className="relative mx-auto w-[94%] sm:w-full max-w-3xl sm:max-w-4xl pt-16 sm:pt-36 pb-6"
          style={{ perspective: "1400px" }}
        >
          {/* ── 1. THE LETTER DOCUMENT (EMERGES UPWARD OUT OF THE ENVELOPE) ── */}
          <motion.div
            initial={false}
            animate={
              isOpen
                ? { y: -220, opacity: 1, scale: 1, display: "block" }
                : { y: 60, opacity: 0, scale: 0.95, transitionEnd: { display: "none" } }
            }
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 16,
            }}
            whileHover={isOpen ? { y: -230 } : {}}
            className="relative z-20 w-full rounded-2xl sm:rounded-3xl border-2 border-[var(--ink)] bg-[#b8c79c] text-neutral-950 shadow-[0_24px_70px_rgba(0,0,0,0.22)] overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(to bottom, #bccca0, #b4c398)",
              pointerEvents: isOpen ? "auto" : "none",
            }}
          >
            {/* Top Bar of Letter (Editorial Title & Airmail Postmark Stamp) */}
            <div className="relative border-b border-black/15 p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest text-neutral-800">
                    DISPATCH LETTER // TAUSHIK CHANDANA
                  </span>
                  <span className="h-1 w-1 rounded-full bg-neutral-900" />
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-neutral-700">
                    HYDERABAD &bull; INDIA
                  </span>
                </div>
                <h3 className="font-extrabold text-2xl sm:text-3xl text-neutral-950 tracking-tight">
                  Taushik Chandana
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-neutral-800 mt-1 max-w-lg leading-relaxed">
                  UI/UX &amp; Product Designer &bull; Specializing in design systems, vibe coding, heuristics, and high-impact software experiences.
                </p>
              </div>

              {/* Verified Airmail Stamp Badge */}
              <div className="flex items-center gap-3 self-start md:self-auto border-2 border-dashed border-neutral-800/40 rounded-xl p-2.5 sm:p-3 bg-white/20 backdrop-blur-sm">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#e52424] text-white shadow-sm font-serif font-black text-xl">
                  T
                </div>
                <div className="font-mono text-[10px] text-neutral-800 font-bold leading-tight uppercase">
                  <span>AIRMAIL DISPATCH</span>
                  <br />
                  <span className="text-[#e52424] font-black">2026 // OFFICIAL</span>
                </div>
              </div>
            </div>

            {/* 4 Working Contact Tracks (Email, LinkedIn, Phone, Resume) */}
            <div className="divide-y divide-black/10">
              {tracks.map((track) => (
                <motion.div
                  key={track.id}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                  className="p-4 sm:p-5 lg:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-black/20 bg-white/70 text-neutral-900 shadow-sm">
                      {track.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] font-black uppercase tracking-wider text-neutral-700">
                          {track.trackNumber}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-neutral-600" />
                        <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#e52424]">
                          {track.category}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-base sm:text-lg text-neutral-950 mt-0.5 truncate">
                        {track.title}
                      </h4>
                      <p className="font-mono text-xs sm:text-sm text-neutral-800 font-medium truncate">
                        {track.detail}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 mt-2 sm:mt-0 pl-[52px] sm:pl-0 flex-wrap">
                    {track.copyValue && (
                      <button
                        onClick={(e) => handleCopy(e, track.copyValue!, track.id)}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-lg border border-black/20 bg-white/70 hover:bg-white text-[11px] sm:text-xs font-mono font-bold text-neutral-900 shadow-sm transition active:scale-95"
                        title="Copy to clipboard"
                      >
                        {copiedKey === track.id ? (
                          <>
                            <Check size={12} className="text-emerald-700" />
                            <span className="text-emerald-800">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} className="text-neutral-700" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}

                    <a
                      href={track.actionHref}
                      target={track.isExternal ? "_blank" : undefined}
                      rel={track.isExternal ? "noreferrer" : undefined}
                      download={track.isDownload ? "Taushik_ux_resume.pdf" : undefined}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-neutral-950 text-white text-[11px] sm:text-sm font-bold uppercase tracking-wider shadow-sm hover:bg-[#e52424] hover:scale-105 active:scale-95 transition-all group/btn"
                    >
                      <span>{track.actionLabel}</span>
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Letter Bottom Security Stamp Bar */}
            <div className="border-t border-black/15 bg-black/5 p-3 px-6 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-neutral-700 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />
                OFFICIAL CORRESPONDENCE &bull; VERIFIED DETAILS
              </span>
              <span>TAUSHIK.SPACE &bull; 2026</span>
            </div>
          </motion.div>

          {/* ── 2. THE LARGE RECTANGULAR ENVELOPE BODY ── */}
          <div
            onClick={() => !isOpen && handleToggle()}
            className="relative -mt-24 sm:-mt-36 mx-auto w-full min-h-[260px] sm:min-h-[340px] rounded-2xl sm:rounded-3xl border-2 border-[var(--ink)] bg-[#f7f2ea] shadow-[4px_4px_0_#141416] sm:shadow-[8px_8px_0_#141416] overflow-visible flex flex-col justify-between cursor-pointer"
          >
            {/* Airmail Border Chevrons (Classic postal diagonal stripes around perimeter) */}
            <div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none p-1 sm:p-1.5"
              style={{
                background:
                  "repeating-linear-gradient(135deg, #e52424 0, #e52424 12px, transparent 12px, transparent 18px, #1e3a8a 18px, #1e3a8a 30px, transparent 30px, transparent 36px)",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
              }}
            />

            {/* ── 3. TOP ENVELOPE FLAP (ROTATES BACKWARD WHEN OPEN) ── */}
            <motion.div
              initial={false}
              animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
              }}
              className="absolute -top-px left-0 right-0 h-28 sm:h-44 z-30 pointer-events-none"
            >
              {/* Triangular flap face */}
              <div
                className="w-full h-full bg-[#eee6da] border-2 border-t-0 border-[var(--ink)] shadow-md flex items-end justify-center pb-3"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              >
                {/* Red Wax Seal */}
                <div className="w-10 h-10 rounded-full bg-[#e52424] text-white flex items-center justify-center font-serif font-black text-base shadow-[2px_2px_0_#141416] border-2 border-white/60 mb-2">
                  T
                </div>
              </div>
            </motion.div>

            {/* ── 4. ENVELOPE BODY (CLEAN WHEN CLOSED, NO CLUTTERED LABELS) ── */}
            <div className="relative z-10 p-6 sm:p-10 pt-20 sm:pt-28 flex-1 flex flex-col items-center justify-center text-center">
              {/* Subtle watermark seal on the clean closed envelope */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-[#141416]/20 flex items-center justify-center mb-3">
                <span className="font-serif font-black text-2xl text-[#141416]/25">T</span>
              </div>
            </div>

            {/* ── 5. ENVELOPE BOTTOM POCKET & "CLICK HERE" BUTTON ── */}
            <div className="relative z-20 w-full p-4 sm:p-8 rounded-b-2xl sm:rounded-b-3xl bg-[#f2ebd0]/50 border-t-2 border-[#141416]/15 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 font-mono text-xs text-[#141416]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e52424] animate-pulse" />
                <span className="font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                  {isOpen ? "DISPATCH UNSEALED" : "SEALED DISPATCH • AUTO-OPENS IN 6S"}
                </span>
              </div>

              {/* Prominent "CLICK HERE" Button on Envelope */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle();
                }}
                className={`group relative flex items-center gap-2.5 px-6 py-3 rounded-full border-2 border-[#141416] font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-[4px_4px_0_#141416] active:translate-x-0.5 active:translate-y-0.5 ${
                  isOpen
                    ? "bg-white text-[#141416] hover:bg-[#fff0f0]"
                    : "bg-[#e52424] text-white hover:bg-[#c91818] animate-bounce"
                }`}
                aria-label={isOpen ? "Close letter" : "Click here to open envelope"}
              >
                <MousePointerClick size={16} className={isOpen ? "text-[#141416]" : "text-white"} />
                <span>{isOpen ? "Close Letter" : "Click here"}</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* =================================================================== */}
      {/* 6. COMPLETE FOOTER: FULL ARTWORK "LESS CHAOS. MORE DESIGN."         */}
      {/* =================================================================== */}
      <footer
        className="relative w-full overflow-hidden select-none border-t border-[var(--line)]"
        style={{
          background: "linear-gradient(to bottom, #fdf6f6 0%, #fbe7e8 100%)",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 pt-8 pb-4 flex flex-col items-center justify-center">
          
          {/* Full Artwork Render */}
          <div className="relative w-full max-w-5xl aspect-[1536/1024] sm:aspect-[16/9]">
            <img
              src="/footer_designer.png"
              alt="Taushik - LESS CHAOS. MORE DESIGN."
              className="w-full h-full object-contain object-bottom block"
              loading="eager"
            />
          </div>

          {/* Discrete back-to-top pill */}
          <div className="mt-4 pb-2">
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 hover:bg-white text-xs font-mono font-bold text-[#141416] border border-[#141416]/20 shadow-sm transition-all hover:scale-105"
            >
              <span>Back to top</span>
              <span>&uarr;</span>
            </a>
          </div>

        </div>
      </footer>
    </section>
  );
}
