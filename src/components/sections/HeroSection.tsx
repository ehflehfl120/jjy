import { pageContainerClass } from "@/components/ui/pageContainer";
import { hero } from "@/content/landing";

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-16 bg-white">
      <div className={`${pageContainerClass} py-14`}>
        <p className="text-sm font-semibold leading-6 text-blue-700">
          {hero.eyebrow}
        </p>
        <h1 className="mt-3 text-[1.75rem] font-bold leading-tight tracking-tight text-slate-900">
          {hero.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          {hero.description}
        </p>
        <div
          className="mt-8 flex aspect-[4/3] w-full min-w-0 items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-blue-50 px-5 text-center text-base font-medium leading-7 text-blue-800"
          role="img"
          aria-label={hero.imageLabel}
        >
          {hero.imageLabel}
        </div>
        <div className="mt-8">
          <button
            type="button"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-center text-base font-semibold leading-6 text-white"
          >
            {hero.ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
