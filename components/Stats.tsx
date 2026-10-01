
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";

export default function Stats() {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 mx-auto -mb-10 max-w-6xl px-5">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: -22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="grid gap-5 rounded-3xl bg-ink p-7 text-white shadow-xl sm:grid-cols-2 lg:grid-cols-4"
      >
        {content.stats.map((s, i) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-bold text-pink">
              {s.value}
              {s.suffix}
            </div>
            <p className="mt-1 text-xs text-white/70">{s.label}</p>
          </div>
        ))}

        <div className="flex items-center justify-center text-center">
          <span className="rounded-full border border-pink/50 px-4 py-2 text-sm font-semibold">
            ✦ Open to BPO Roles
          </span>
        </div>
      </motion.div>
    </section>
  );
}