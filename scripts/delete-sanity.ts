import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

async function deleteAll() {
  console.log('Deleting all documents...');
  try {
    const docs = await client.fetch('*[!(_id in path("_.**")) && !(_id in path("system.**"))][0...1000]{_id}');
    if (docs.length === 0) {
      console.log('No documents found.');
      return;
    }
    
    console.log(`Found ${docs.length} documents to delete.`);
    
    let transaction = client.transaction();
    for (const doc of docs) {
      transaction.delete(doc._id);
    }
    
    await transaction.commit();
    console.log('Successfully deleted all documents.');
  } catch (err) {
    console.error('Error deleting documents:', err);
  }
}

deleteAll();
