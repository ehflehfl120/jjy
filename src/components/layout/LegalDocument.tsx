import { pageContainerClass } from "@/components/ui/pageContainer";

type LegalDocumentProps = {
  title: string;
  body: string;
};

export function LegalDocument({ title, body }: LegalDocumentProps) {
  return (
    <main className="flex-1 bg-white">
      <article className={`${pageContainerClass} py-16`}>
        <h1 className="text-2xl font-bold leading-snug tracking-tight text-[#191F28]">
          {title}
        </h1>
        <p className="mt-6 whitespace-pre-line text-base leading-7 text-[#6B7684]">
          {body}
        </p>
      </article>
    </main>
  );
}
