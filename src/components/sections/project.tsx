"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import { ProjectModal } from "@/components/ui/project-modal";

export function Project() {
  const { projects } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [first, ...rest] = projects;

  return (
    <section id="project" className="bg-zinc-950 py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            (04) Projects
          </p>
          <h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight text-white">
            Projects &amp; Innovations.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
            A collection of web applications, design prototypes, and technical projects showcasing my expertise in modern software development.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Featured: first project */}
          {first && (
            <motion.div
              onClick={() => setSelectedProject(first)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="group relative md:col-span-2 overflow-hidden rounded-[2rem] cursor-pointer block"
            >
              <div className="relative aspect-[16/9] md:aspect-auto md:h-80 w-full bg-zinc-800 overflow-hidden">
                <Image
                  src={first.image}
                  alt={first.title}
                  fill
                  className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 66vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Click hint */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-[10px] font-mono text-white/60 bg-white/10 backdrop-blur px-2 py-1 rounded-full">
                    klik untuk detail
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="mb-2 text-xs font-mono text-zinc-400">{first.number} · {first.category}</p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{first.title}</h3>
                  <p className="mt-2 max-w-sm text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {first.description}
                  </p>
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {first.tags.map((tag: string) => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Rest of projects */}
          {rest.map((project: any, i: number) => (
            <motion.div
              key={project.number ?? i}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: "easeOut" as const }}
              className="group relative overflow-hidden rounded-[1.75rem] cursor-pointer block"
            >
              <div className="relative aspect-[4/3] w-full bg-zinc-800 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Click hint */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-[10px] font-mono text-white/60 bg-white/10 backdrop-blur px-2 py-1 rounded-full">
                    detail
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="mb-1.5 text-xs font-mono text-zinc-400">{project.number}</p>
                  <h3 className="text-base font-semibold text-white tracking-tight leading-snug">{project.title}</h3>
                  <p className="mt-1.5 text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  {project.badge && (
                    <span className="mt-2 inline-flex items-center rounded-full bg-white/10 border border-white/10 px-2.5 py-0.5 text-[10px] font-medium text-zinc-300">
                      {project.badge}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
