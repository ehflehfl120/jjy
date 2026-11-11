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
  const background = tone === "muted" ? "bg-slate-50" : "bg-white";

  return (
    <section id={id} className={`scroll-mt-16 py-16 ${background}`}>
      <div className={pageContainerClass}>
        <div className="min-w-0 text-left">
          {eyebrow ? (
            <p className="text-sm font-semibold leading-6 text-blue-700">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-bold leading-snug tracking-tight text-slate-900">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-600">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
