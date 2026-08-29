"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import Image from "next/image";

export function Tools() {
  const { tools } = usePortfolio();

  if (!tools || tools.length === 0) return null;

  return (
    <section id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 border-t border-zinc-100">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
          Tools & Technologies
        </p>
        <h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight text-zinc-900">
          My Tech Stack
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 justify-center">
        {tools.map((t: any, i: number) => (
          <motion.div
            key={t._id || t.id || i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-300"
          >
            <div className="w-12 h-12 relative mb-3 flex items-center justify-center">
              {t.img ? (
                <Image src={t.img} alt={t.nama} fill className="object-contain" />
              ) : (
                <div className="w-10 h-10 bg-zinc-100 rounded-full" />
              )}
            </div>
            <p className="font-medium text-zinc-900 text-sm text-center">{t.nama}</p>
            <p className="text-[10px] font-mono text-zinc-500 text-center mt-1 uppercase tracking-widest">{t.ket}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
