import Link from "next/link";
import { pageContainerClass } from "@/components/ui/pageContainer";
import { footer, legal, site } from "@/content/landing";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#E5E8EB] bg-white pb-24">
      <div className={`${pageContainerClass} flex flex-col gap-6 py-10`}>
        <div className="min-w-0">
          <p className="text-base font-bold text-[#191F28]">{site.name}</p>
          <ul className="mt-3 space-y-1 text-[13px] leading-6 text-[#6B7684]">
            {footer.company.map((item) => (
              <li key={item.label}>
                <span className="font-medium text-[#4E5968]">{item.label}</span> {item.value}
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="법적 고지" className="flex gap-4 text-[13px] font-medium">
          <Link href="/privacy" className="inline-flex min-h-12 items-center text-[#191F28]">
            {legal.privacy.title}
          </Link>
          <Link href="/terms" className="inline-flex min-h-12 items-center text-[#191F28]">
            {legal.terms.title}
          </Link>
        </nav>
        <p className="text-[12px] leading-5 text-[#8B95A1]">{footer.copyright}</p>
      </div>
    </footer>
  );
}
