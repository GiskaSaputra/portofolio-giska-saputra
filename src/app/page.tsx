import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { AboutMe } from "@/components/sections/about-me";
import { Education } from "@/components/sections/education";
import { Achievement } from "@/components/sections/achievement";
import { Experience } from "@/components/sections/experience";
import { Project } from "@/components/sections/project";
import { Skills } from "@/components/sections/skills";
import { Tools } from "@/components/sections/tools";
import { Certificates } from "@/components/sections/certificates";
import { PortfolioProvider } from "@/components/providers/portfolio-provider";
import { getPortfolioData } from "@/lib/sanity-data";

export const revalidate = 0; // Disable cache so Sanity changes reflect immediately

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <PortfolioProvider data={data}>
      <main>
        <Navbar />
        <Hero />
        <AboutMe />
        <Education />
        <Achievement />
        <Experience />
        <Project />
        <Skills />
        <Tools />
        <Certificates />
        <Footer />
      </main>
    </PortfolioProvider>
  );
}
