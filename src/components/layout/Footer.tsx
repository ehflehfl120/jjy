import Link from "next/link";
import { pageContainerClass } from "@/components/ui/pageContainer";
import { footer, legal, site } from "@/content/landing";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className={`${pageContainerClass} flex flex-col gap-8 py-12`}>
        <div className="min-w-0">
          <p className="text-lg font-bold text-slate-900">{site.logoText}</p>
          <ul className="mt-4 space-y-2 text-base leading-7 text-slate-600">
            {footer.company.map((item) => (
              <li key={item.label}>
                <span className="font-medium text-slate-800">{item.label}</span>{" "}
                {item.value}
              </li>
            ))}
          </ul>
        </div>

        <nav
          aria-label="법적 고지"
          className="flex flex-col items-start gap-1 text-base font-medium"
        >
          <Link
            href="/privacy"
            className="inline-flex min-h-12 items-center text-slate-700 hover:text-blue-700"
          >
            {legal.privacy.title}
          </Link>
          <Link
            href="/terms"
            className="inline-flex min-h-12 items-center text-slate-700 hover:text-blue-700"
          >
            {legal.terms.title}
          </Link>
        </nav>
      </div>
      <div className="border-t border-slate-200">
        <p className={`${pageContainerClass} py-4 text-sm leading-6 text-slate-500`}>
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
