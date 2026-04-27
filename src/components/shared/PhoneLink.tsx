import { CONTACTS } from "../../config/contacts";
import { cn } from "../../lib/utils/classNames";

type PhoneLinkProps = {
  className?: string;
  label?: string;
};

export function PhoneLink({ className, label }: PhoneLinkProps) {
  return (
    <a href={CONTACTS.phoneHref} className={cn("inline-flex items-center justify-center", className)}>
      {label ?? `Позвонить ${CONTACTS.phoneDisplay}`}
    </a>
  );
}
