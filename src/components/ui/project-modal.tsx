"use client";

import { useEffect, useRef } from "react";
import { X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectModalProps {
  project: {
    title: string;
    number: string;
    category: string;
    description: string;
    detailedDescription?: string;
    tags: string[];
    badge?: string;
    pdfUrl?: string;
    link?: string;
    image?: string;
  } | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-3xl max-h-[95svh] sm:max-h-[90vh] flex flex-col bg-white rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-4 border-b border-zinc-100">
              <div>
                <p className="text-xs font-mono text-zinc-400 mb-1">
                  {project.number} · {project.category}
                </p>
                <h2 className="text-xl font-semibold text-zinc-900 tracking-tight">
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Tutup"
                className="ml-4 shrink-0 h-9 w-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors"
              >
                <X size={16} className="text-zinc-600" />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1">
              {/* PDF or Image Viewer */}
              {project.pdfUrl ? (
                <div className="w-full h-[40vh] sm:h-[50vh] bg-zinc-100 relative">
                  <iframe
                    src={`https://docs.google.com/viewer?url=${encodeURIComponent(project.pdfUrl)}&embedded=true`}
                    className="w-full h-full border-0"
                    title={`PDF - ${project.title}`}
                  />
                </div>
              ) : project.image ? (
                <div className="w-full h-[40vh] sm:h-[50vh] bg-zinc-100 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-full h-40 bg-zinc-50 flex flex-col items-center justify-center gap-3 border-b border-zinc-100">
                  <div className="h-12 w-12 rounded-2xl bg-zinc-100 flex items-center justify-center">
                    <FileText size={20} className="text-zinc-400" />
                  </div>
                  <p className="text-sm text-zinc-400">PDF / Image belum tersedia</p>
                </div>
              )}

              {/* Detail */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.badge && (
                    <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-medium text-emerald-700">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm leading-7 text-zinc-500 mb-4">
                  {project.detailedDescription || project.description}
                </p>
              </div>
            </div>

            {/* Footer actions */}
            {(project.link || project.pdfUrl) && (
              <div className="p-4 border-t border-zinc-100 bg-white">
                <a
                  href={project.link || project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-zinc-900 hover:bg-zinc-700 text-white px-6 py-3 text-sm font-medium transition-colors"
                >
                  View / Detail
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
