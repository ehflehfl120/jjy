import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/LegalDocument";
import { legal } from "@/content/landing";

export const metadata: Metadata = {
  title: legal.privacy.title,
};

export default function PrivacyPage() {
  return (
    <LegalDocument title={legal.privacy.title} body={legal.privacy.body} />
  );
}
