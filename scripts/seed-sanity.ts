import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import {
  profile,
  about,
  education,
  achievements,
  experience,
  projects,
  skills,
  listSertifikat,
  listTools,
  listAiTools,
} from '../src/lib/data';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

async function uploadImage(filePath: string) {
  if (!filePath || filePath.trim() === '') return undefined;
  
  const absolutePath = path.join(process.cwd(), 'public', filePath);
  if (!fs.existsSync(absolutePath)) {
    console.warn(`[WARNING] Image not found: ${absolutePath}`);
    return undefined;
  }

  console.log(`Uploading ${filePath}...`);
  try {
    const asset = await client.assets.upload('image', fs.createReadStream(absolutePath), {
      filename: path.basename(absolutePath),
    });
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (err) {
    console.error(`Failed to upload image ${filePath}:`, err);
    return undefined;
  }
}

/** Returns count of documents for a given type */
async function countDocs(type: string): Promise<number> {
  const result = await client.fetch(`count(*[_type == "${type}"])`);
  return result ?? 0;
}

/**
 * Smart seed: only seeds a collection if it has 0 documents.
 * Pass --force flag to overwrite existing data for specific types:
 *   npx tsx scripts/seed-sanity.ts --force=profile,tools
 */
async function seed() {
  // Parse --force=type1,type2 from CLI args
  const forceArg = process.argv.find(a => a.startsWith('--force='));
  const forceTypes: string[] = forceArg
    ? forceArg.replace('--force=', '').split(',').map(s => s.trim())
    : [];
  const forceAll = process.argv.includes('--force-all');

  console.log('');
  console.log('=== Smart Seed Sanity ===');
  if (forceAll) console.log('Mode: FORCE ALL (will overwrite everything)');
  else if (forceTypes.length) console.log('Force overwrite:', forceTypes.join(', '));
  else console.log('Mode: SAFE (skip collections that already have data)');
  console.log('');

  try {
    // ─── PROFILE ─────────────────────────────────────────────
    const profileCount = await countDocs('profile');
    if (profileCount === 0 || forceAll || forceTypes.includes('profile')) {
      if (profileCount > 0) {
        await client.delete({ query: '*[_type == "profile"]' }).catch(() => {});
      }
      console.log('Seeding profile...');
      const avatarImg = await uploadImage(profile.avatar);
      const aboutImg = await uploadImage(about.image);
      await client.create({
        _type: 'profile',
        name: profile.name,
        fullName: profile.fullName,
        role: profile.role,
        university: profile.university,
        headline: profile.headline,
        headlineHighlight: profile.headlineHighlight,
        subtext: profile.subtext,
        avatar: avatarImg,
        aboutImage: aboutImg,
        aboutParagraphs: about.paragraphs,
        gpa: profile.gpa,
        location: profile.location,
        email: profile.email,
        linkedin: profile.linkedin,
        instagram: profile.instagram,
        github: profile.github,
      });
    } else {
      console.log(`⏭  Profile already has ${profileCount} doc(s) — skipping.`);
    }

    // ─── EDUCATION ───────────────────────────────────────────
    const eduCount = await countDocs('education');
    if (eduCount === 0 || forceAll || forceTypes.includes('education')) {
      if (eduCount > 0) await client.delete({ query: '*[_type == "education"]' }).catch(() => {});
      console.log('Seeding education...');
      for (let i = 0; i < education.length; i++) {
        const edu = education[i];
        await client.create({
          _type: 'education',
          degree: edu.degree,
          school: edu.school,
          period: edu.period,
          semester: edu.semester || undefined,
          score: edu.score || undefined,
          description: edu.description,
          tags: edu.tags,
          order: i,
        });
      }
    } else {
      console.log(`⏭  Education already has ${eduCount} doc(s) — skipping.`);
    }

    // ─── ACHIEVEMENTS ────────────────────────────────────────
    const achCount = await countDocs('achievement');
    if (achCount === 0 || forceAll || forceTypes.includes('achievement')) {
      if (achCount > 0) await client.delete({ query: '*[_type == "achievement"]' }).catch(() => {});
      console.log('Seeding achievements...');
      for (let i = 0; i < achievements.length; i++) {
        const ach = achievements[i];
        await client.create({
          _type: 'achievement',
          title: ach.title,
          organizer: ach.organizer,
          level: ach.level,
          year: ach.year,
          rank: ach.rank,
          order: i,
        });
      }
    } else {
      console.log(`⏭  Achievements already has ${achCount} doc(s) — skipping.`);
    }

    // ─── EXPERIENCE ──────────────────────────────────────────
    const expCount = await countDocs('experience');
    if (expCount === 0 || forceAll || forceTypes.includes('experience')) {
      if (expCount > 0) await client.delete({ query: '*[_type == "experience"]' }).catch(() => {});
      console.log('Seeding experience...');
      let expOrder = 100;
      for (const exp of experience) {
        await client.create({
          _type: 'experience',
          role: exp.role,
          org: exp.org,
          period: exp.period,
          type: exp.type || 'organization',
          workType: (exp as any).workType || undefined,
          employmentType: (exp as any).employmentType || undefined,
          points: exp.points,
          order: expOrder--,
        });
      }
    } else {
      console.log(`⏭  Experience already has ${expCount} doc(s) — skipping.`);
    }

    // ─── SKILLS ──────────────────────────────────────────────
    const skillCount = await countDocs('skill');
    if (skillCount === 0 || forceAll || forceTypes.includes('skill')) {
      if (skillCount > 0) await client.delete({ query: '*[_type == "skill"]' }).catch(() => {});
      console.log('Seeding skills...');
      let skillOrder = 0;
      for (const s of skills.hard) {
        await client.create({
          _type: 'skill',
          name: s.name,
          description: s.desc || '',
          emoji: s.emoji || '',
          type: 'hard',
          order: skillOrder++,
        });
      }
      for (const s of skills.soft) {
        await client.create({
          _type: 'skill',
          name: s.name,
          description: s.desc || '',
          emoji: (s as any).emoji || '',
          type: 'soft',
          order: skillOrder++,
        });
      }
    } else {
      console.log(`⏭  Skills already has ${skillCount} doc(s) — skipping.`);
    }

    // ─── PROJECTS ────────────────────────────────────────────
    const projCount = await countDocs('project');
    if (projCount === 0 || forceAll || forceTypes.includes('project')) {
      if (projCount > 0) await client.delete({ query: '*[_type == "project"]' }).catch(() => {});
      console.log('Seeding projects...');
      for (let i = 0; i < projects.length; i++) {
        const proj = projects[i];
        const img = await uploadImage(proj.image);
        await client.create({
          _type: 'project',
          number: proj.number,
          title: proj.title,
          category: proj.category,
          description: proj.description,
          image: img,
          gradient: proj.gradient,
          size: proj.size,
          tags: proj.tags,
          badge: (proj as any).badge || undefined,
          order: i,
        });
      }
    } else {
      console.log(`⏭  Projects already has ${projCount} doc(s) — skipping.`);
    }

    // ─── CERTIFICATES ─────────────────────────────────────────
    const certCount = await countDocs('certificate');
    if (certCount === 0 || forceAll || forceTypes.includes('certificate')) {
      if (certCount > 0) await client.delete({ query: '*[_type == "certificate"]' }).catch(() => {});
      console.log('Seeding certificates...');
      for (let i = 0; i < listSertifikat.length; i++) {
        const cert = listSertifikat[i];
        const img = await uploadImage(cert.gambar);
        await client.create({
          _type: 'certificate',
          nama: cert.nama,
          penerbit: cert.penerbit,
          desk: cert.desk,
          gambar: img,
          order: i,
        });
      }
    } else {
      console.log(`⏭  Certificates already has ${certCount} doc(s) — skipping.`);
    }

    // ─── TOOLS ───────────────────────────────────────────────
    const toolCount = await countDocs('tool');
    if (toolCount === 0 || forceAll || forceTypes.includes('tool')) {
      if (toolCount > 0) await client.delete({ query: '*[_type == "tool"]' }).catch(() => {});
      console.log('Seeding tools...');
      for (let i = 0; i < listTools.length; i++) {
        const t = listTools[i];
        const img = await uploadImage(t.img);
        await client.create({
          _type: 'tool',
          nama: t.nama,
          ket: t.ket,
          img: img,
          order: i,
        });
      }
    } else {
      console.log(`⏭  Tools already has ${toolCount} doc(s) — skipping.`);
    }

    // ─── AI TOOLS ────────────────────────────────────────────
    const aiToolCount = await countDocs('aiTool');
    if (aiToolCount === 0 || forceAll || forceTypes.includes('aiTool')) {
      if (aiToolCount > 0) await client.delete({ query: '*[_type == "aiTool"]' }).catch(() => {});
      console.log('Seeding AI tools...');
      for (let i = 0; i < listAiTools.length; i++) {
        const t = listAiTools[i];
        const img = await uploadImage(t.img);
        await client.create({
          _type: 'aiTool',
          nama: t.nama,
          ket: t.ket,
          img: img,
          order: i,
        });
      }
    } else {
      console.log(`⏭  AI Tools already has ${aiToolCount} doc(s) — skipping.`);
    }

    console.log('');
    console.log('✅ Done seeding Sanity!');
    console.log('');
  } catch (error) {
    console.error('Error seeding Sanity:', error);
  }
}

seed();
