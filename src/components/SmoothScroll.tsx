"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // Handle instant deep-link jump on load
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      const jumpId = params.get("jump") || (hash ? hash.replace("#", "") : null);
      if (jumpId) {
        setTimeout(() => {
          const el = document.getElementById(jumpId);
          if (el) {
            lenis.scrollTo(el, { immediate: true });
          }
        }, 300);
      }
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}

