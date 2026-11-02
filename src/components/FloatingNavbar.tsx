"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play, Pause } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  isDownload?: boolean;
}

const defaultNavItems: NavItem[] = [
  { label: "Work", href: "#products" },
  { label: "Playground", href: "#tools" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "/Taushik_ux_resume.pdf", isDownload: true },
];

export function FloatingNavbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/fitoor.mp3");
    audio.preload = "auto";
    audio.loop = true;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", (e) => {
      console.warn("Audio load error:", e);
    });

    audioRef.current = audio;

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio play prevented:", err);
          setIsPlaying(false);
        });
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-3 sm:top-5 z-50 flex justify-center px-3 sm:px-6 pointer-events-none select-none">
      <div className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 rounded-full bg-white/90 backdrop-blur-md border border-[#e5e7eb] px-2.5 py-1.5 sm:px-4 sm:py-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 max-w-fit mx-auto">
        
        {/* LEFT: Mascot Sticker Cutout & Wordmark */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02] shrink-0"
          aria-label="Home"
        >
          {/* Sticker Cutout Avatar with Fun Starburst/Scalloped Border */}
          <div className="relative flex items-center justify-center p-0.5">
            <div className="absolute inset-0 bg-[#ffd4db] rounded-full scale-110 -rotate-6 group-hover:rotate-12 transition-transform duration-300" />
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-white bg-white shadow-xs">
              <Image
                src="/mascot_avatar.png"
                alt="Taushik Mascot"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                sizes="36px"
                priority
              />
            </div>
          </div>

          {/* Logo Wordmark */}
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#141416] flex items-center">
            Taushik<span className="text-[#e52424] font-black">.</span>
          </span>
        </a>

        {/* MIDDLE: Clean Nav Links: Work | Playground | About | Resume */}
        <nav className="hidden sm:flex items-center gap-1 sm:gap-1.5">
          {defaultNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              download={item.isDownload ? "Taushik_ux_resume.pdf" : undefined}
              target={item.isDownload ? "_blank" : undefined}
              rel={item.isDownload ? "noreferrer" : undefined}
              onClick={(e) => !item.isDownload && scrollToSection(e, item.href)}
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#505058] hover:text-[#141416] hover:bg-neutral-100/80 transition-all duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* RIGHT: Two Buttons Only: 1) "Play a song" / "Fitoor" Audio Button, 2) "Let's talk" */}
        <div className="flex items-center gap-2">
          
          {/* 1. Stoppable Audio Button: Written "Play a song" by default, shows "Fitoor" when playing */}
          <button
            onClick={toggleAudio}
            type="button"
            className={`flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 cursor-pointer ${
              isPlaying
                ? "bg-[#e52424] border-[#e52424] text-white shadow-sm shadow-[#e52424]/30 hover:bg-[#c91818] active:scale-95"
                : "bg-[#f8f8fa] border-[#e5e5eb] text-[#141416] hover:border-[#e52424] hover:bg-[#fff5f5] active:scale-95 shadow-xs"
            }`}
            title={isPlaying ? "Stop 'Fitoor'" : "Play a song"}
            aria-label={isPlaying ? "Stop 'Fitoor'" : "Play a song"}
          >
            {/* Play / Pause circular indicator */}
            <div
              className={`grid h-4 w-4 sm:h-5 sm:w-5 place-items-center rounded-full transition-colors ${
                isPlaying ? "bg-white text-[#e52424]" : "bg-[#141416] text-white"
              }`}
            >
              {isPlaying ? (
                <Pause size={9} fill="currentColor" />
              ) : (
                <Play size={9} className="ml-0.5" fill="currentColor" />
              )}
            </div>

            {/* Dynamic Label: "Play a song" vs "Fitoor" */}
            <span className="whitespace-nowrap tracking-tight">
              {isPlaying ? "Fitoor" : "Play a song"}
            </span>

            {/* Equalizer animation when playing */}
            {isPlaying && (
              <div className="flex items-end gap-[1.5px] h-3 ml-0.5 shrink-0" aria-hidden="true">
                <span className="w-[1.5px] h-full bg-white animate-[bounce_0.6s_ease-in-out_infinite_alternate]" />
                <span className="w-[1.5px] h-2 bg-white animate-[bounce_0.4s_ease-in-out_infinite_alternate_0.2s]" />
                <span className="w-[1.5px] h-full bg-white animate-[bounce_0.8s_ease-in-out_infinite_alternate_0.1s]" />
              </div>
            )}
          </button>

          {/* 2. The "Let's talk" Button Pair matching Attachment 1 (Circular [↗] + Rounded Pill [Let's talk]) */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-[#141416] hover:bg-[#e52424] text-white shadow-xs transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Direct contact link"
            >
              <ArrowUpRight size={13} className="sm:w-3.5 sm:h-3.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#141416] hover:bg-[#e52424] text-white text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 shadow-xs hover:scale-105 active:scale-95 shrink-0"
            >
              <span>Let's talk</span>
            </a>
          </div>

        </div>

      </div>
    </header>
  );
}
