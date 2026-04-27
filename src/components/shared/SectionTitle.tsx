type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
