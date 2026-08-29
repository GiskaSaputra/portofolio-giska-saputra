"use client";

import { usePortfolio } from "@/components/providers/portfolio-provider";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Skills", href: "#skills" },
];

const socialLinks = (profile: any) => [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Instagram", href: profile.instagram, icon: Instagram },
  { label: "GitHub", href: profile.github, icon: Github },
].filter((s) => s.href && s.href !== "mailto:undefined");

export function Footer() {
  const { profile } = usePortfolio();
  return (
    <footer id="contact" className="bg-zinc-950">
      {/* Top border */}
      <div className="h-px w-full bg-zinc-800" aria-hidden="true" />

      {/* CTA block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 border-b border-zinc-800">
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4">
          Let&apos;s Connect
        </p>
        <h2 className="font-sans font-medium text-4xl md:text-6xl tracking-tight text-white leading-[1.05] mb-6">
          Mari berkolaborasi.
        </h2>
        <p className="max-w-xl text-base text-zinc-400 leading-7 mb-8">
          Terbuka untuk kolaborasi akademik, kompetisi, dan peluang yang relevan di bidang accounting, business, dan digital innovation.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-zinc-100 px-8 py-4 text-sm font-semibold text-zinc-900 transition-colors duration-200"
        >
          <Mail size={15} />
          {profile.email}
        </a>
      </div>

      {/* Footer grid */}
      <div className="max-w-7xl mx-auto grid gap-10 px-4 sm:px-6 lg:px-8 py-12 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <p className="text-base font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-500">{profile.role}</p>
          <p className="mt-0.5 text-xs text-zinc-600">{profile.university}</p>

          {/* Social icons */}
          <div className="flex gap-3 mt-5">
            {socialLinks(profile).map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-4 text-xs font-mono text-zinc-500 uppercase tracking-wider">Navigasi</p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-4 text-xs font-mono text-zinc-500 uppercase tracking-wider">Kontak</p>
          <ul className="space-y-2.5">
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                <Mail size={13} />
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
              {profile.location}, Indonesia
            </li>
          </ul>
        </div>

        {/* Status */}
        <div>
          <p className="mb-4 text-xs font-mono text-zinc-500 uppercase tracking-wider">Status</p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-emerald-400">Available</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Terbuka untuk kesempatan akademik, kompetisi, kolaborasi, dan project baru.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-zinc-800 px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </p>
        <p className="text-xs text-zinc-700">
          Universitas Pekalongan · S1 Akuntansi
        </p>
      </div>
    </footer>
  );
}
