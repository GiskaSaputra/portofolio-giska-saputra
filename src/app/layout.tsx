import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giska Saputra — Full-Stack Web Developer",
  description:
    "Informatics Engineering Diploma (D3) student and BNSP-Certified Web Developer. Specializing in React.js, Next.js, Tailwind CSS, Laravel, and CI4.",
  keywords: [
    "Giska Saputra",
    "Web Developer",
    "Full-Stack Developer",
    "Next.js",
    "Laravel",
    "React.js",
    "Informatics Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Giska Saputra" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${caveat.variable}`}>
      <body className="bg-[#fafafa] font-sans text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
