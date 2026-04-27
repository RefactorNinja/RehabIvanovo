import type { ValueItem } from "../../types/content";
import { AnimatedReveal } from "../shared/AnimatedReveal";

type ValueCardProps = {
  item: ValueItem;
};

export function ValueCard({ item }: ValueCardProps) {
  return (
    <AnimatedReveal>
      <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
        <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{item.description}</p>
      </article>
    </AnimatedReveal>
  );
}
