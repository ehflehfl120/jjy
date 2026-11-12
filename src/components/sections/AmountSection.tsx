import { pageContainerClass } from "@/components/ui/pageContainer";
import { KakaoButton } from "@/components/ui/KakaoButton";
import { landing } from "@/content/landing";

const won = (n: number) => `${Math.round(n).toLocaleString("ko-KR")}원`;

export function AmountSection() {
  const a = landing.amount;
  const interest = a.principal * (a.ratePercent / 100) * a.years;

  return (
    <section id="amount" className="scroll-mt-16 bg-white">
      <div className={`${pageContainerClass} pt-8 text-center`}>
        <p className="text-[13px] font-semibold leading-5 text-[#6B7684]">{a.eyebrow}</p>
        <h1 className="mt-2 whitespace-pre-line text-[26px] font-bold leading-[1.4] tracking-tight text-[#191F28]">
          {a.title}
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-[#6B7684]">{a.description}</p>

        <article className="mt-6 rounded-2xl border border-[#E5E8EB] bg-white p-5 text-left">
          <dl className="space-y-4">
            <Row label={a.principalLabel} value={won(a.principal)} />
            <Row label={a.interestLabel} value={`+${won(interest)}`} />
          </dl>
          <div className="my-4 border-t border-[#E5E8EB]" />
          <div className="flex items-baseline justify-between gap-3">
            <p className="shrink-0 whitespace-nowrap text-[13px] leading-5 text-[#6B7684]">{a.totalLabel}</p>
            <p className="shrink-0 whitespace-nowrap text-right text-[24px] font-bold leading-7 tracking-tight text-[#3182F6] tabular-nums">
              {won(a.principal + interest)}
            </p>
          </div>
        </article>
        <p className="mt-3 text-left text-[12px] leading-[1.6] text-[#8B95A1]">{a.note}</p>
        <KakaoButton label={a.ctaLabel} className="mt-5" />
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="shrink-0 whitespace-nowrap text-[13px] leading-5 text-[#6B7684]">{label}</dt>
      <dd className="shrink-0 whitespace-nowrap text-right text-[20px] font-bold leading-6 tracking-tight text-[#191F28] tabular-nums">
        {value}
      </dd>
    </div>
  );
}
