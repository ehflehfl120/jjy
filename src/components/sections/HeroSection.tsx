import { pageContainerClass } from "@/components/ui/pageContainer";
import { landing } from "@/content/landing";

export function HeroSection() {
  const h = landing.hero;

  return (
    <section id="hero" className="scroll-mt-16 bg-white">
      <div className={`${pageContainerClass} py-10 text-center`}>
        <h2 className="text-2xl font-bold leading-[1.4] tracking-tight text-[#191F28]">
          {h.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-3 whitespace-pre-line text-[15px] leading-6 text-[#6B7684]">{h.description}</p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {h.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#E5E8EB] bg-white px-3 py-1 text-[13px] leading-5 text-[#6B7684]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <ul className="mt-6 space-y-2 rounded-2xl bg-[#F2F4F6] p-5 text-left">
          {h.checks.map((check) => (
            <li key={check} className="flex gap-2 text-[15px] leading-6 text-[#333D4B]">
              <span className="shrink-0 font-bold text-[#3182F6]" aria-hidden>
                ✓
              </span>
              <span className="min-w-0">{check}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 whitespace-pre-line text-[13px] leading-5 text-[#6B7684]">{h.note}</p>
      </div>
    </section>
  );
}
