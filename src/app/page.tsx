import { landingSections } from "@/components/sections";

export default function HomePage() {
  return (
    <main className="flex-1">
      {landingSections.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </main>
  );
}
