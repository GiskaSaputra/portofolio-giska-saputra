"use client";

import { useEffect, useState } from "react";
import { usePortfolio } from "@/components/providers/portfolio-provider";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  const { profile } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed inset-x-0 z-[100] top-3 px-4">
        <nav
          className={`mx-auto max-w-[740px] rounded-full transition-all duration-500 ease-in-out px-5 py-2 flex items-center justify-between gap-4
            ${scrolled
              ? "bg-white/95 backdrop-blur-xl border border-zinc-200/70 shadow-[0_2px_24px_rgba(0,0,0,0.08)]"
              : "bg-white/80 backdrop-blur-md border border-zinc-200/50 shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
            }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="font-semibold text-[0.9375rem] tracking-tight text-zinc-900 shrink-0 transition-opacity hover:opacity-60"
          >
            {profile.name || "Giska Saputra"}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium px-3.5 py-1.5 transition-colors duration-200 text-zinc-500 hover:text-zinc-900 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex shrink-0">
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-700 text-white transition-colors duration-200 cursor-pointer"
            >
              Hubungi Saya
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl transition-colors text-zinc-700 hover:bg-zinc-100 cursor-pointer"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="block w-5 h-px bg-current mb-1.5" />
            <span className="block w-5 h-px bg-current mb-1.5" />
            <span className="block w-3 h-px bg-current" />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mx-auto mt-2 max-w-[740px] rounded-3xl bg-white/95 backdrop-blur-xl border border-zinc-200 shadow-[0_8px_40px_rgba(0,0,0,0.08)] px-4 py-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left text-sm font-medium px-4 py-3 rounded-2xl transition-colors text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-1 border-t border-zinc-100 mt-1">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full text-center text-sm font-semibold px-4 py-3 rounded-2xl bg-zinc-900 text-white cursor-pointer"
                >
                  Hubungi Saya
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
