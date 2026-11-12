import { pageContainerClass } from "@/components/ui/pageContainer";
import { KakaoButton } from "@/components/ui/KakaoButton";
import { landing } from "@/content/landing";

export function CtaSection() {
  const c = landing.cta;

  return (
    <section id="cta" className="scroll-mt-16 bg-white py-8">
      <div className={pageContainerClass}>
        <div className="rounded-3xl bg-[#191F28] px-5 py-8 text-center">
          <p className="text-[12px] font-semibold tracking-widest text-[#8B95A1]">{c.eyebrow}</p>
          <h2 className="mt-2 whitespace-pre-line text-[22px] font-bold leading-[1.4] text-white">{c.title}</h2>
          <p className="mt-2 whitespace-pre-line text-[15px] leading-6 text-[#B0B8C1]">{c.description}</p>
          <KakaoButton label={c.buttonLabel} variant="kakao" className="mt-5" />
        </div>
      </div>
    </section>
  );
}
