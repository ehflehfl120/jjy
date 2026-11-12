import { pageContainerClass } from "@/components/ui/pageContainer";
import { landing } from "@/content/landing";

export function StatsSection() {
  const s = landing.stats;

  return (
    <section id="stats" className="scroll-mt-16 bg-[#F2F4F6] py-10">
      <div className={pageContainerClass}>
        <p className="text-center text-[13px] font-semibold leading-5 text-[#3182F6]">{s.eyebrow}</p>
        <ul className="mt-4 grid grid-cols-3 gap-2">
          {s.items.map((item) => (
            <li key={item.label} className="min-w-0 rounded-2xl bg-white px-2 py-4 text-center">
              <p className="text-[24px] font-bold leading-7 tracking-tight text-[#191F28] tabular-nums">
                {item.value}
                <span className="text-[15px] text-[#3182F6]">{item.unit}</span>
              </p>
              <p className="mt-1 text-[12px] font-semibold leading-4 text-[#333D4B]">{item.label}</p>
              <p className="mt-1 text-[11px] leading-4 text-[#8B95A1]">{item.caption}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-3 grid grid-cols-2 gap-2">
          {s.badges.map((badge) => (
            <li
              key={badge}
              className="rounded-xl bg-white px-3 py-3 text-center text-[13px] font-medium leading-5 text-[#4E5968]"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
