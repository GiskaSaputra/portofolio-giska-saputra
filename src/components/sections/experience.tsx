"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/components/providers/portfolio-provider";

// Badge color mapping
const workTypeBadge: Record<string, { label: string; color: string }> = {
  remote: { label: "Remote", color: "bg-sky-50 text-sky-600 border-sky-200" },
  onsite: { label: "Onsite", color: "bg-amber-50 text-amber-600 border-amber-200" },
  hybrid: { label: "Hybrid", color: "bg-violet-50 text-violet-600 border-violet-200" },
};

const employmentTypeBadge: Record<string, { label: string; color: string }> = {
  "full-time": { label: "Full-time", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  "part-time": { label: "Part-time", color: "bg-orange-50 text-orange-600 border-orange-200" },
  freelance: { label: "Freelance", color: "bg-pink-50 text-pink-600 border-pink-200" },
  contract: { label: "Contract", color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
  internship: { label: "Internship", color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
  volunteer: { label: "Volunteer", color: "bg-lime-50 text-lime-600 border-lime-200" },
};

function ExperienceCard({ exp, index, colIndex }: { exp: any; index: number; colIndex: number }) {
  const wt = exp.workType ? workTypeBadge[exp.workType] : null;
  const et = exp.employmentType ? employmentTypeBadge[exp.employmentType] : null;

  return (
    <motion.div
      key={exp._id ?? index}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 + colIndex * 0.1 }}
      className="relative pl-8 pb-7 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-zinc-900" />

      <div className="bg-white rounded-2xl border border-zinc-200 p-5 hover:border-zinc-300 hover:shadow-sm transition-all duration-200">
        <p className="text-xs font-mono text-zinc-400 mb-1">{exp.period}</p>
        <h4 className="font-semibold text-zinc-900 leading-snug text-sm md:text-base">
          {exp.role}
        </h4>
        <p className="text-xs text-zinc-500 mt-1">{exp.org}</p>

        {/* Badges */}
        {(wt || et) && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {et && (
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${et.color}`}>
                {et.label}
              </span>
            )}
            {wt && (
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${wt.color}`}>
                {wt.label}
              </span>
            )}
          </div>
        )}

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
  );
}

export function Experience() {
  const { experience, internship, work } = usePortfolio();

  const columns = [
    { title: "Work", data: work ?? [] },
    { title: "Internship", data: internship ?? [] },
    { title: "Organization", data: experience ?? [] },
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

                {col.data.length === 0 ? (
                  <p className="pl-8 text-xs text-zinc-400 italic">No data yet.</p>
                ) : (
                  col.data.map((exp: any, i: number) => (
                    <ExperienceCard key={exp._id ?? i} exp={exp} index={i} colIndex={colIndex} />
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
