"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/components/providers/portfolio-provider";

export function Experience() {
  const { experience, internship, projectBased } = usePortfolio();
  
  const columns = [
    { title: "Internship", data: internship },
    { title: "Project Based", data: projectBased },
    { title: "Organization", data: experience },
  ];

  return (
    <section id="experience" className="bg-zinc-50 py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            (03) Experience
          </p>
          <h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight text-zinc-900">
            Experience & Organizations.
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          {columns.map((col, colIndex) => (
            <div key={col.title}>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
                {col.title}
              </p>

              <div className="relative space-y-0">
                {/* Vertical line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-zinc-200" aria-hidden="true" />

                {col.data.map((exp: any, i: number) => (
                  <motion.div
                    key={exp.number ?? i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 + (colIndex * 0.1) }}
                    className="relative pl-8 pb-7 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-zinc-900" />

                    <div className="bg-white rounded-2xl border border-zinc-200 p-5 hover:border-zinc-300 transition-colors duration-200">
                      <p className="text-xs font-mono text-zinc-400 mb-1">{exp.period}</p>
                      <h4 className="font-semibold text-zinc-900 leading-snug text-sm md:text-base">
                        {exp.role}
                      </h4>
                      <p className="text-xs text-zinc-500 mt-1">{exp.org}</p>
                      {exp.points && exp.points.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {exp.points.map((pt: string, j: number) => (
                            <li key={j} className="flex gap-2 text-xs text-zinc-600 leading-relaxed">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
