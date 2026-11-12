import { SectionShell } from "@/components/ui/SectionShell";
import { landing } from "@/content/landing";

export function EligibilitySection() {
  const e = landing.eligibility;

  return (
    <SectionShell id="eligibility" eyebrow={e.eyebrow} title={e.title} description={e.description} tone="muted">
      <div className="grid grid-cols-1 gap-3">
        {e.cards.map((card) => (
          <article key={card.title} className="min-w-0 rounded-2xl bg-white p-5 text-left">
            <p className="text-[12px] font-bold tracking-wide text-[#3182F6]">{card.label}</p>
            <h3 className="mt-2 text-[17px] font-bold leading-6 text-[#191F28]">{card.title}</h3>
            <p className="mt-2 text-[15px] leading-6 text-[#6B7684]">{card.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
