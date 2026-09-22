"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import Image from "next/image";

export function AITools() {
  const { aiTools } = usePortfolio();

  if (!aiTools || aiTools.length === 0) return null;

  return (
    <section id="ai-tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-100">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
          AI Tools
        </p>
        <h2 className="font-sans font-medium text-3xl md:text-4xl tracking-tight text-zinc-900">
          AI Tools I Use
        </h2>
        <p className="text-sm text-zinc-500 mt-2">Tools that supercharge my workflow with AI assistance</p>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-4 justify-center">
        {aiTools.map((t: any, i: number) => (
          <motion.div
            key={t._id || t.id || i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex flex-col items-center justify-center p-4 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-300 group"
          >
            <div className="w-10 h-10 relative mb-2.5 flex items-center justify-center">
              {t.img ? (
                <Image
                  src={t.img}
                  alt={t.nama}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-200"
                />
              ) : (
                <div className="w-9 h-9 bg-zinc-100 rounded-full flex items-center justify-center text-xs font-bold text-zinc-400">
                  {t.nama?.[0]}
                </div>
              )}
            </div>
            <p className="font-medium text-zinc-900 text-[11px] text-center leading-tight">{t.nama}</p>
            <p className="text-[9px] font-mono text-zinc-400 text-center mt-0.5 uppercase tracking-widest">{t.ket}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
