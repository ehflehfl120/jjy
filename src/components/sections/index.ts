import type { ComponentType } from "react";
import { AmountSection } from "@/components/sections/AmountSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { EligibilitySection } from "@/components/sections/EligibilitySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhySection } from "@/components/sections/WhySection";
import { landing, type SectionId } from "@/content/landing";

const registry: Record<SectionId, ComponentType> = {
  amount: AmountSection,
  hero: HeroSection,
  stats: StatsSection,
  why: WhySection,
  eligibility: EligibilitySection,
  cta: CtaSection,
  process: ProcessSection,
  cases: CasesSection,
  faq: FaqSection,
};

/**
 * 홈 본문 섹션 순서와 노출 여부는 src/content/landing.ts 의 `sections` 배열에서 정합니다.
 */
export const landingSections = landing.sections
  .filter((section) => section.visible && registry[section.id])
  .map((section) => ({ id: section.id, Component: registry[section.id] }));
