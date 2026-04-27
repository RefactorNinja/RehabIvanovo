import { Phone } from "lucide-react";
import { PhoneLink } from "../shared/PhoneLink";

const fabBase =
  "shadow-lg ring-2 ring-white/70 transition hover:brightness-105 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600";

/** Мобильные: полоса на всю ширину снизу. Десктоп: FAB справа снизу. */
export function StickyHelpButton() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
        <PhoneLink
          className={`w-full justify-center rounded-none bg-sky-400 px-4 py-4 text-base font-bold text-slate-950 ${fabBase}`}
          style={{
            paddingBottom: "max(1rem, env(safe-area-inset-bottom))"
          }}
        >
          Позвонить 8-920-344-01-10
        </PhoneLink>
      </div>

      <div className="pointer-events-none fixed bottom-6 right-6 z-50 hidden md:pointer-events-auto md:block">
        <PhoneLink
          className={`h-16 w-16 rounded-full bg-sky-400 text-slate-950 ${fabBase}`}
          aria-label="Позвонить горячую линию 8-920-344-01-10"
        >
          <Phone className="h-7 w-7" aria-hidden strokeWidth={2.25} />
        </PhoneLink>
      </div>
    </>
  );
}
