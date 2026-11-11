import { processSection } from "@/content/landing";
import { SectionShell } from "@/components/ui/SectionShell";

export function ProcessSection() {
  return (
    <SectionShell
      id={processSection.id}
      eyebrow={processSection.eyebrow}
      title={processSection.title}
      description={processSection.description}
      tone="muted"
    >
      <ol className="grid grid-cols-1 gap-4">
        {processSection.steps.map((step) => (
          <li
            key={step.step}
            className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5"
          >
            <p className="text-sm font-bold tracking-wide text-blue-700">
              {step.step}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
