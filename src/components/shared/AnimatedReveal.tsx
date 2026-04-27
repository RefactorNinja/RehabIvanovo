import { motion } from "framer-motion";
import type { WithChildren } from "../../types/ui";

export function AnimatedReveal({ children }: WithChildren) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      {children}
    </motion.div>
  );
}
