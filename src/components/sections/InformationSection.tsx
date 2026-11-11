import { information } from "@/content/landing";
import { InfoCard } from "@/components/ui/InfoCard";
import { SectionShell } from "@/components/ui/SectionShell";

export function InformationSection() {
  return (
    <SectionShell
      id={information.id}
      eyebrow={information.eyebrow}
      title={information.title}
      description={information.description}
      tone="muted"
    >
      <div className="grid grid-cols-1 gap-4">
        {information.cards.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </SectionShell>
  );
}
