import { KakaoButton } from "@/components/ui/KakaoButton";
import { landing } from "@/content/landing";

/** 화면 하단에 고정되는 상담 버튼 */
export function FloatingCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center">
      <div className="pointer-events-auto w-full max-w-[430px] bg-gradient-to-t from-white via-white/95 to-white/0 px-5 pb-4 pt-6">
        <KakaoButton label={landing.site.floatingCtaLabel} variant="kakao" className="shadow-lg" />
      </div>
    </div>
  );
}
