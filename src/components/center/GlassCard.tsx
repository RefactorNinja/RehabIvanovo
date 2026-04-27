import type { WithChildren } from "../../types/ui";

export function GlassCard({ children }: WithChildren) {
  return <div className="rounded-2xl border border-white/60 bg-white/50 p-6 shadow-lg backdrop-blur-md">{children}</div>;
}
