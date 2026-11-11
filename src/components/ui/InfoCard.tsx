type InfoCardProps = {
  title: string;
  description: string;
  badge?: string;
};

export function InfoCard({ title, description, badge }: InfoCardProps) {
  return (
    <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5">
      {badge ? (
        <p className="text-sm font-bold tracking-wide text-blue-700">{badge}</p>
      ) : null}
      <h3
        className={`text-lg font-semibold text-slate-900 ${badge ? "mt-3" : ""}`}
      >
        {title}
      </h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
    </article>
  );
}
