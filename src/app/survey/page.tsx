import type { Metadata } from "next";
import { SurveyFlow } from "@/components/survey/SurveyFlow";
import { site, survey } from "@/content/landing";

export const metadata: Metadata = {
  title: `${survey.eyebrow} | ${site.name}`,
  description: site.description,
};

export default function SurveyPage() {
  return (
    <main className="flex-1 bg-white">
      <SurveyFlow />
    </main>
  );
}
