"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/components/providers/portfolio-provider";

export function Achievement() {
  const { achievements } = usePortfolio();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
          (02) Achievement
        </p>
        <h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight text-zinc-900">
          Achievements &amp; Awards.
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((item: any, i: number) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-7 flex flex-col justify-between gap-8 hover:-translate-y-1 transition-transform duration-300"
          >
            <div>
              {/* Rank */}
              <p className="text-xs font-mono text-zinc-400 mb-5 uppercase tracking-wider">
                {item.rank}
              </p>

              <h3 className="text-lg font-semibold leading-snug text-zinc-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.organizer}</p>
            </div>

            {/* Bottom badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600">
                {item.level}
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-500">
                {item.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
