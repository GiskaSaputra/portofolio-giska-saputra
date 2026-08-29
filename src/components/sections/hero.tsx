"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import { Mail, Linkedin, Instagram, Github, MapPin } from "lucide-react";

export function Hero() {
  const { profile } = usePortfolio();

  const socials = [
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { label: "Instagram", href: profile.instagram, icon: Instagram },
    { label: "GitHub", href: profile.github, icon: Github },
  ].filter((s) => s.href && s.href !== "mailto:undefined");

  return (
    <>
      {/* Fullscreen photo hero */}
      <section className="relative h-[85svh] md:h-[100svh] w-full bg-[#fafafa] overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70vh] w-full bg-[radial-gradient(circle_at_center,rgba(238,242,255,0.6)_0%,transparent_70%)] pointer-events-none z-0" />

        {/* Hero Image with bottom fade mask */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-10 w-full h-full pointer-events-none [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
        >
          {profile.avatar ? (
            <Image
              src={profile.avatar}
              alt={profile.fullName || profile.name || "Giska Saputra"}
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-zinc-200/50" />
          )}
        </motion.div>

        {/* Name overlay — bottom, mix-blend-difference for depth */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-end pb-16 md:pb-20 w-full mix-blend-difference">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start px-6 w-full max-w-7xl mx-auto"
          >
            <h3 className="text-white text-2xl md:text-5xl font-[family-name:var(--font-caveat)] mb-2 md:mb-2 ml-1 md:ml-3">
              hi, i&apos;m
            </h3>

            {/* Desktop */}
            <h1 className="hidden md:block text-white font-sans font-semibold tracking-tighter leading-[0.85] text-[clamp(4rem,10vw,12rem)] whitespace-nowrap">
              {profile.name}
            </h1>

            {/* Mobile */}
            <h1 className="md:hidden text-white font-sans font-bold text-[12vw] sm:text-[10vw] leading-none tracking-tight uppercase break-words w-full">
              {profile.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Sub-hero info bar — below the photo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-5 mt-8"
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-400 hover:text-zinc-900 transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
          {profile.location && (
            <span className="ml-auto flex items-center gap-1.5 text-sm text-zinc-400">
              <MapPin size={14} />
              {profile.location}
            </span>
          )}
        </motion.div>

        {/* Headline + description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 mb-12 max-w-5xl"
        >
          <h2 className="font-sans font-medium text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none mb-6 text-zinc-900">
            {profile.headline}{" "}
            <span className="bg-gradient-to-b from-zinc-900 to-zinc-400 bg-clip-text text-transparent">
              {profile.headlineHighlight}
            </span>
          </h2>
          <p className="max-w-3xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
            {profile.subtext}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.querySelector("#project")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-zinc-900 hover:bg-zinc-700 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer"
            >
              Lihat Project
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 px-6 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer"
            >
              Hubungi Saya
            </button>
          </div>
        </motion.div>

        {/* Availability bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4 py-4 px-6 bg-white rounded-full border border-zinc-200 mb-20 text-sm font-medium text-zinc-600 shadow-sm"
        >
          <div className="flex items-center gap-2 text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for opportunities</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-zinc-400 text-xs">
            <span>{profile.role}</span>
            <span>·</span>
            <span>{profile.university}</span>
          </div>
          <div className="flex items-center gap-5">
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors text-xs">
                <Mail size={14} />
                <span className="hidden sm:inline">{profile.email}</span>
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors text-xs">
                <Linkedin size={14} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
