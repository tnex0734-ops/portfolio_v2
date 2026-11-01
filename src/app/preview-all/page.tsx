"use client";

import { ToolsSection } from "@/components/ToolsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ExperienceBooksSection } from "@/components/ExperienceBooksSection";
import { ContactLetterSection } from "@/components/ContactLetterSection";
import { FloatingNavbar } from "@/components/FloatingNavbar";

export default function PreviewAllPage() {
  return (
    <div className="bg-[var(--paper)] min-h-screen">
      <FloatingNavbar />
      <div className="pt-20 space-y-8">
        <ToolsSection />
        <ExperienceBooksSection />
        <AchievementsSection />
        <ContactLetterSection />
      </div>
    </div>
  );
}
