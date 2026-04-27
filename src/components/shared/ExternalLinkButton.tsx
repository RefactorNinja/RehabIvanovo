import { cn } from "../../lib/utils/classNames";

type ExternalLinkButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export function ExternalLinkButton({ href, label, className }: ExternalLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn("inline-flex rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium", className)}
    >
      {label}
    </a>
  );
}
