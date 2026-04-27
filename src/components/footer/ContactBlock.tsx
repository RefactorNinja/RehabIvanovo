import { CONTACTS } from "../../config/contacts";
import { PhoneLink } from "../shared/PhoneLink";

export function ContactBlock() {
  return (
    <div>
      <PhoneLink className="text-2xl font-bold text-slate-900 md:text-4xl" label={CONTACTS.phoneDisplay} />
      <p className="mt-3 text-slate-700">Мы готовы помочь. Звонок бесплатный и анонимный.</p>
      <p className="mt-2 text-slate-600">{CONTACTS.address}</p>
    </div>
  );
}
