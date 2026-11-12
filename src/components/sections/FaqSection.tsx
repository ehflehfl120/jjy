"use client";

import { useState } from "react";
import { SectionShell } from "@/components/ui/SectionShell";
import { landing } from "@/content/landing";

export function FaqSection() {
  const f = landing.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell id="faq" eyebrow={f.eyebrow} title={f.title} description={f.description}>
      <div className="w-full min-w-0 divide-y divide-[#E5E8EB] border-y border-[#E5E8EB] text-left">
        {f.items.map((item, index) => {
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
                  <span className="min-w-0 flex-1 text-[15px] font-semibold leading-6 text-[#191F28]">
                    <span className="mr-1.5 text-[#3182F6]">Q.</span>
                    {item.question}
                  </span>
                  <span className="shrink-0 text-xl leading-6 text-[#8B95A1]" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <p id={panelId} hidden={!isOpen} className="pb-5 text-[15px] leading-6 text-[#6B7684]">
                {item.answer}
              </p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
