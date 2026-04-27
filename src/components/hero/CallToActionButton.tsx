import { motion } from "framer-motion";
import { PhoneLink } from "../shared/PhoneLink";

export function CallToActionButton() {
  return (
    <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2.4, repeat: Infinity }}>
      <PhoneLink className="rounded-2xl bg-sky-300 px-6 py-3 text-base font-semibold text-slate-900 shadow-md" />
    </motion.div>
  );
}
