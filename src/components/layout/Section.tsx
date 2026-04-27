import type { WithChildren } from "../../types/ui";

type SectionProps = WithChildren & {
  id?: string;
  className?: string;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
