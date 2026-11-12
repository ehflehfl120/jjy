import { landing } from "@/content/landing";

type KakaoButtonProps = {
  label: string;
  variant?: "primary" | "kakao" | "white";
  className?: string;
};

const variants = {
  primary: "bg-[#3182F6] text-white",
  kakao: "bg-[#FEE500] text-[#191919]",
  white: "bg-white text-[#191F28]",
};

/** 상담 링크 버튼. 링크 주소는 landing.site.kakaoUrl 에서 수정합니다. */
export function KakaoButton({ label, variant = "primary", className = "" }: KakaoButtonProps) {
  return (
    <a
      href={landing.site.kakaoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-14 w-full items-center justify-center rounded-2xl px-5 text-center text-[17px] font-semibold leading-6 ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
