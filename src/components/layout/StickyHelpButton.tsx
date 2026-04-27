import { PhoneLink } from "../shared/PhoneLink";

export function StickyHelpButton() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
      <PhoneLink className="block rounded-2xl bg-sky-300 px-4 py-3 text-center font-semibold text-slate-900 shadow-lg" />
    </div>
  );
}
