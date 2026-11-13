import Link from "next/link";
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

/**
 * 상담 버튼.
 * - landing.survey.enabled 가 true 이면 질문지(/survey)로 이동합니다.
 * - false 이면 landing.site.kakaoUrl(카카오톡 채널)로 바로 연결합니다.
 */
export function KakaoButton({ label, variant = "primary", className = "" }: KakaoButtonProps) {
  const classes = `inline-flex h-14 w-full items-center justify-center rounded-2xl px-5 text-center text-[17px] font-semibold leading-6 ${variants[variant]} ${className}`;

  if (landing.survey.enabled) {
    return (
      <Link href="/survey" className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <a href={landing.site.kakaoUrl} target="_blank" rel="noopener noreferrer" className={classes}>
      {label}
    </a>
  );
}
