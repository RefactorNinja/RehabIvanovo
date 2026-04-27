import type { ComponentPropsWithoutRef } from "react";
import { CONTACTS } from "../../config/contacts";
import { cn } from "../../lib/utils/classNames";

type PhoneLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  label?: string;
};

export function PhoneLink({ className, label, children, ...rest }: PhoneLinkProps) {
  return (
    <a href={CONTACTS.phoneHref} className={cn("inline-flex items-center justify-center", className)} {...rest}>
      {children ?? label ?? `Позвонить ${CONTACTS.phoneDisplay}`}
    </a>
  );
}
