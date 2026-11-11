import type { Metadata } from "next";
import { LegalDocument } from "@/components/layout/LegalDocument";
import { legal } from "@/content/landing";

export const metadata: Metadata = {
  title: legal.terms.title,
};

export default function TermsPage() {
  return <LegalDocument title={legal.terms.title} body={legal.terms.body} />;
}
