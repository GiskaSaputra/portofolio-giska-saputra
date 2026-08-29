"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePortfolio } from "@/components/providers/portfolio-provider";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export function AboutMe() {
  const { about, profile } = usePortfolio();
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      {/* Section label */}
      <motion.p {...fadeIn()} className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
        (00) About Me
      </motion.p>

      <div className="grid gap-16 md:grid-cols-2 md:items-start mt-10">
        {/* Left: image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-100">
            {about.image ? (
              <Image
                src={about.image}
                alt={profile.fullName || profile.name || "Giska Saputra"}
                fill
                quality={100}
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ) : (
              <div className="w-full h-full bg-zinc-200" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Floating role card */}
          <div className="absolute -bottom-5 left-6 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-zinc-100">
            <p className="text-sm font-semibold text-zinc-900">{profile.role}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{profile.university}</p>
          </div>
        </motion.div>

        {/* Right: text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="pt-4 space-y-6"
        >
          <h2 className="font-sans font-medium text-5xl sm:text-6xl tracking-tight leading-none text-zinc-900">
            Bridging responsive front-end with robust back-end.
          </h2>

          <div className="space-y-4 pt-2">
            {about.paragraphs.map((p: string, i: number) => (
              <p key={i} className="text-base leading-7 text-zinc-600">
                {p}
              </p>
            ))}
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-8 border-t border-zinc-200 pt-6">
            <div>
              <p className="text-3xl font-semibold text-zinc-900">{profile.gpa}</p>
              <p className="text-xs text-zinc-500 mt-0.5">GPA</p>
            </div>
            <div className="h-8 w-px bg-zinc-200" aria-hidden="true" />
            <div>
              <p className="text-3xl font-semibold text-zinc-900">9+</p>
              <p className="text-xs text-zinc-500 mt-0.5">Projects Completed</p>
            </div>
            <div className="h-8 w-px bg-zinc-200" aria-hidden="true" />
            <div>
              <p className="text-3xl font-semibold text-zinc-900">2+</p>
              <p className="text-xs text-zinc-500 mt-0.5">Certifications</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
