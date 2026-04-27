import type { WithChildren } from "../../types/ui";

export function PageContainer({ children }: WithChildren) {
  return <div className="mx-auto w-full max-w-6xl px-4 md:px-6">{children}</div>;
}
