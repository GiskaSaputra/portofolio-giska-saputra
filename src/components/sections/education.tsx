"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/components/providers/portfolio-provider";

export function Education() {
  const { education } = usePortfolio();
  return (
    <section id="education" className="bg-zinc-50 py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            (01) Education
          </p>
          <h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight text-zinc-900">
            Education History.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu: any, i: number) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-8 md:p-10 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
                {/* Left: period */}
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-zinc-400">{edu.period}</p>
                  {edu.semester && (
                    <p className="text-xs text-zinc-400">{edu.semester}</p>
                  )}
                  {edu.score && (
                    <span className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700 w-fit mt-1">
                      {edu.score}
                    </span>
                  )}
                </div>

                {/* Right: content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-zinc-500 mb-4">{edu.school}</p>
                  <p className="text-base leading-7 text-zinc-600 mb-5">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
