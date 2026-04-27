import { CONTACTS } from "../config/contacts";

export function useMobileCallAction() {
  return { callHref: CONTACTS.phoneHref };
}
