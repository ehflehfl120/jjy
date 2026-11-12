import { SectionShell } from "@/components/ui/SectionShell";
import { landing } from "@/content/landing";

export function WhySection() {
  const w = landing.why;

  return (
    <SectionShell id="why" eyebrow={w.eyebrow} title={w.title} description={w.description}>
      <div className="grid grid-cols-1 gap-3">
        {w.cards.map((card, index) => (
          <article key={card.title} className="min-w-0 rounded-2xl border border-[#E5E8EB] bg-white p-5 text-left">
            <p className="text-[13px] font-bold text-[#3182F6]">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-[17px] font-bold leading-6 text-[#191F28]">{card.title}</h3>
            <p className="mt-2 text-[15px] leading-6 text-[#6B7684]">{card.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
