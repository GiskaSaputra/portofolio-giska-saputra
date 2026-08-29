"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/components/providers/portfolio-provider";

export function Skills() {
  const { skills } = usePortfolio();
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
          (05) Skills
        </p>
        <h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight text-zinc-900">
          Skills &amp; Competencies.
        </h2>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Hard Skills */}
        <div>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">Hard Skills</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.hard.map((s: any, i: number) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-zinc-300 transition-colors duration-200 cursor-default"
              >
                <p className="font-semibold text-zinc-900 text-sm leading-snug">{s.name}</p>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">Soft Skills</p>
          <div className="space-y-3">
            {skills.soft.map((s: any, i: number) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 hover:border-zinc-300 transition-colors duration-200 cursor-default"
              >
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                <div>
                  <p className="font-semibold text-zinc-900 text-sm">{s.name}</p>
                  <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
