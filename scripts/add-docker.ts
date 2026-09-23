import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

async function addDocker() {
  const filePath = 'public/images/tools/docker.svg';
  const absolutePath = path.join(process.cwd(), filePath);
  
  console.log('Uploading docker.svg...');
  const asset = await client.assets.upload('image', fs.createReadStream(absolutePath), {
    filename: 'docker.svg',
  });

  const img = {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
  };

  const doc = await client.create({
    _type: 'tool',
    nama: 'Docker',
    ket: 'Containerization',
    img,
    order: 14,
  });

  console.log('Created tool:', doc._id);
}

addDocker().catch(console.error);
