"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import Image from "next/image";
import { CertificateModal } from "@/components/ui/certificate-modal";

export function Certificates() {
  const { certificates } = usePortfolio();
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 border-t border-zinc-100">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
          Licenses & Certifications
        </p>
        <h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight text-zinc-900">
          Professional Certificates
        </h2>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert: any, i: number) => (
          <motion.div
            key={cert.id || cert._id || i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setSelectedCert(cert)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer relative"
          >
            <div className="relative aspect-[4/3] w-full bg-zinc-100">
              {cert.gambar ? (
                <Image
                  src={cert.gambar}
                  alt={cert.nama}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-400">
                  No Image Available
                </div>
              )}
              {/* Click hint */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-[10px] font-mono text-zinc-600 bg-white/90 backdrop-blur px-2 py-1 rounded-full shadow-sm">
                  Lihat Detail
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-semibold text-zinc-900 text-lg mb-1 leading-tight">
                {cert.nama}
              </h3>
              <p className="text-sm text-zinc-500 mb-4 font-medium">{cert.penerbit}</p>
              <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
                {cert.desk}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
