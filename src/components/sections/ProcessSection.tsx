import { SectionShell } from "@/components/ui/SectionShell";
import { landing } from "@/content/landing";

export function ProcessSection() {
  const p = landing.process;

  return (
    <SectionShell id="process" eyebrow={p.eyebrow} title={p.title} description={p.description}>
      <ol className="relative text-left">
        {p.steps.map((step, index) => (
          <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
            {index < p.steps.length - 1 ? (
              <span className="absolute left-[17px] top-9 bottom-0 w-0.5 bg-[#E5E8EB]" aria-hidden />
            ) : null}
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3182F6] text-[13px] font-bold text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 pt-1">
              <p className="text-[12px] font-bold tracking-wide text-[#3182F6]">
                STEP {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-[17px] font-bold leading-6 text-[#191F28]">{step.title}</h3>
              <p className="mt-1 text-[15px] leading-6 text-[#6B7684]">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
