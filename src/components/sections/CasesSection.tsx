import { SectionShell } from "@/components/ui/SectionShell";
import { landing } from "@/content/landing";

export function CasesSection() {
  const c = landing.cases;

  return (
    <SectionShell id="cases" eyebrow={c.eyebrow} title={c.title} description={c.description} tone="muted">
      <div className="grid grid-cols-1 gap-3 text-left">
        {c.items.map((item) => (
          <article key={item.title} className="min-w-0 rounded-2xl bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="min-w-0 text-[13px] leading-5 text-[#6B7684]">{item.category}</p>
              <span className="shrink-0 rounded-full bg-[#E8F3FF] px-2.5 py-0.5 text-[12px] font-semibold text-[#3182F6]">
                해결 완료
              </span>
            </div>
            <p className="mt-2 text-[22px] font-bold leading-7 tracking-tight text-[#3182F6]">{item.amount}</p>
            <h3 className="mt-2 text-[17px] font-bold leading-6 text-[#191F28]">{item.title}</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-[#6B7684]">{item.body}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <li key={tag} className="rounded-md bg-[#F2F4F6] px-2 py-0.5 text-[12px] text-[#4E5968]">
                  #{tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-3 text-[12px] leading-5 text-[#8B95A1]">{c.note}</p>
    </SectionShell>
  );
}
