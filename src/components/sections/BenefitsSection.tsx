import { benefits } from "@/content/landing";
import { InfoCard } from "@/components/ui/InfoCard";
import { SectionShell } from "@/components/ui/SectionShell";

export function BenefitsSection() {
  return (
    <SectionShell
      id={benefits.id}
      eyebrow={benefits.eyebrow}
      title={benefits.title}
      description={benefits.description}
    >
      <div className="grid grid-cols-1 gap-4">
        {benefits.cards.map((card, index) => (
          <InfoCard
            key={card.title}
            badge={String(index + 1).padStart(2, "0")}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </SectionShell>
  );
}
