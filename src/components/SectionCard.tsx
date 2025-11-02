interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionCard({ title, children }: SectionCardProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
