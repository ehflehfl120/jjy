"use client";

import { useState } from "react";
import { faq } from "@/content/landing";
import { SectionShell } from "@/components/ui/SectionShell";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell
      id={faq.id}
      eyebrow={faq.eyebrow}
      title={faq.title}
      description={faq.description}
    >
      <div className="w-full min-w-0 divide-y divide-slate-200 border-y border-slate-200">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;

          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  className="flex min-h-12 w-full items-start justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="min-w-0 flex-1 text-base font-semibold leading-7 text-slate-900">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-xl leading-none text-blue-700" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <p
                id={panelId}
                hidden={!isOpen}
                className="pb-5 text-base leading-7 text-slate-600"
              >
                {item.answer}
              </p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
