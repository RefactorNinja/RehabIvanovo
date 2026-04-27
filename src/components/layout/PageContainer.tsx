import { cn } from "../../lib/utils/classNames";
import type { WithChildren } from "../../types/ui";

type PageContainerProps = WithChildren & {
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 md:px-6", className)}>{children}</div>;
}
