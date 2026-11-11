import type { ComponentType } from "react";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InformationSection } from "@/components/sections/InformationSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

type LandingSection = {
  id: string;
  Component: ComponentType;
};

/**
 * 홈 본문 섹션 순서.
 * 항목을 추가하거나 삭제하고, 배열 순서를 바꾸면 화면 순서가 함께 바뀝니다.
 * Header와 Footer는 공통 레이아웃에서 렌더링합니다.
 */
export const landingSections: LandingSection[] = [
  { id: "hero", Component: HeroSection },
  { id: "information", Component: InformationSection },
  { id: "benefits", Component: BenefitsSection },
  { id: "process", Component: ProcessSection },
  { id: "faq", Component: FaqSection },
];
