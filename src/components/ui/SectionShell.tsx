import type { ReactNode } from "react";
import { pageContainerClass } from "@/components/ui/pageContainer";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "white" | "muted";
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  tone = "white",
  children,
}: SectionShellProps) {
  const background = tone === "muted" ? "bg-[#F2F4F6]" : "bg-white";

  return (
    <section id={id} className={`scroll-mt-16 py-10 ${background}`}>
      <div className={pageContainerClass}>
        <div className="min-w-0 text-center">
          {eyebrow ? (
            <p className="text-[13px] font-semibold leading-5 text-[#3182F6]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 whitespace-pre-line text-2xl font-bold leading-[1.4] tracking-tight text-[#191F28]">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 whitespace-pre-line text-[15px] leading-6 text-[#6B7684]">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
