import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import * as staticData from "./data";

export async function getPortfolioData() {
  try {
    const profile = await client.fetch(`*[_type == "profile"][0]`);
    const education = await client.fetch(`*[_type == "education"] | order(order asc)`);
    const achievements = await client.fetch(`*[_type == "achievement"] | order(order asc)`);
    const experience = await client.fetch(`*[_type == "experience"] | order(order desc)`);
    const projects = await client.fetch(`*[_type == "project"] | order(order asc) {
      ...,
      "pdfUrl": pdfFile.asset->url
    }`);
    const skills = await client.fetch(`*[_type == "skill"] | order(order asc)`);
    const certificates = await client.fetch(`*[_type == "certificate"] | order(order asc) {
      ...,
      "pdfUrl": pdfFile.asset->url
    }`);
    const tools = await client.fetch(`*[_type == "tool"] | order(order asc)`);

    // Helper to resolve Sanity image URLs or fallback to static string
    const resolveImage = (sanityImg: any, fallbackStr: string) => {
      return sanityImg ? urlFor(sanityImg).url() : fallbackStr;
    };

    // Construct the data payload, falling back to staticData if Sanity is empty
    return {
      profile: profile ? {
        ...staticData.profile,
        ...profile,
        avatar: resolveImage(profile.avatar, staticData.profile.avatar),
      } : staticData.profile,
      
      about: profile ? {
        image: resolveImage(profile.aboutImage, staticData.about.image),
        paragraphs: profile.aboutParagraphs || staticData.about.paragraphs,
      } : staticData.about,
      
      education: education.length > 0 ? education : staticData.education,
      
      achievements: achievements.length > 0 ? achievements : staticData.achievements,
      
      experience: experience.length > 0 
        ? experience.filter((e: any) => e.type === "organization") 
        : staticData.experience.filter((e: any) => e.type === "organization"),
      
      internship: experience.length > 0 
        ? experience.filter((e: any) => e.type === "internship")
        : staticData.experience.filter((e: any) => e.type === "internship"),

      projectBased: experience.length > 0 
        ? experience.filter((e: any) => e.type === "project-based")
        : staticData.experience.filter((e: any) => e.type === "project-based"),
        
      projects: projects.length > 0 ? projects.map((p: any) => ({
        ...p,
        image: resolveImage(p.image, staticData.projects[0].image),
      })) : staticData.projects,
      
      skills: skills.length > 0 ? {
        hard: skills.filter((s: any) => s.type === "hard"),
        soft: skills.filter((s: any) => s.type === "soft"),
      } : staticData.skills,
      
      certificates: certificates.length > 0 ? certificates.map((c: any) => ({
        ...c,
        gambar: resolveImage(c.gambar, staticData.listSertifikat[0]?.gambar || ""),
      })) : staticData.listSertifikat,
      
      tools: tools.length > 0 ? tools.map((t: any) => ({
        ...t,
        img: resolveImage(t.img, ""),
      })) : staticData.listTools,
    };
  } catch (error) {
    console.error("Error fetching Sanity data, falling back to static data:", error);
    return {
      profile: staticData.profile,
      about: staticData.about,
      education: staticData.education,
      achievements: staticData.achievements,
      experience: staticData.experience.filter((e: any) => e.type === "organization"),
      internship: staticData.internship,
      projects: staticData.projects,
      skills: staticData.skills,
      publicSpeaking: staticData.publicSpeaking,
      certificates: staticData.listSertifikat,
      tools: staticData.listTools,
    };
  }
}

