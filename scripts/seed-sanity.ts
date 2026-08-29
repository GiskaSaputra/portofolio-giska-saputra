import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import {
  profile,
  about,
  education,
  achievements,
  experience,
  internship,
  projects,
  skills,
  listSertifikat,
  listTools,
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

async function clearData() {
  console.log('Clearing old data...');
  const types = ['profile', 'education', 'achievement', 'experience', 'project', 'skill', 'certificate', 'tool'];
  for (const type of types) {
    await client.delete({ query: `*[_type == "${type}"]` }).catch(() => {});
  }
}

async function seed() {
  try {
    await clearData();

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

    console.log('Seeding experience...');
    let expOrder = 100;
    for (const exp of experience) {
      await client.create({
        _type: 'experience',
        role: exp.role,
        org: exp.org,
        period: exp.period,
        type: exp.type || 'organization',
        points: exp.points,
        order: expOrder--,
      });
    }

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

    console.log('Done seeding Sanity!');
  } catch (error) {
    console.error('Error seeding Sanity:', error);
  }
}

seed();
