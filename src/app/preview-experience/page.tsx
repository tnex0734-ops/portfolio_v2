"use client";

import { ExperienceBooksSection } from "@/components/ExperienceBooksSection";

export default function PreviewExperiencePage() {
  return (
    <div className="bg-[var(--paper)] min-h-screen py-12">
      <ExperienceBooksSection defaultActiveIndex={0} />
    </div>
  );
}

