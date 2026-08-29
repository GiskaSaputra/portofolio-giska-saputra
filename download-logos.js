const fs = require('fs');
const path = require('path');
const https = require('https');

const tools = [
  { slug: 'visualstudiocode', filename: 'vscode.svg' },
  { slug: 'react', filename: 'react.svg' },
  { slug: 'nextdotjs', filename: 'nextjs.svg' },
  { slug: 'tailwindcss', filename: 'tailwindcss.svg' },
  { slug: 'bootstrap', filename: 'bootstrap.svg' },
  { slug: 'javascript', filename: 'javascript.svg' },
  { slug: 'nodedotjs', filename: 'nodejs.svg' },
  { slug: 'github', filename: 'github.svg' },
  { slug: 'openai', filename: 'aitools.svg' },
  { slug: 'canva', filename: 'canva.svg' },
  { slug: 'figma', filename: 'figma.svg' },
  { slug: 'laravel', filename: 'laravel.svg' },
  { slug: 'codeigniter', filename: 'codeigniter.svg' },
  { slug: 'php', filename: 'php.svg' }
];

const dir = path.join(__dirname, 'public', 'images', 'tools');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

tools.forEach(tool => {
  const url = `https://cdn.simpleicons.org/${tool.slug}`;
  const filePath = path.join(dir, tool.filename);
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${tool.filename}`);
      });
    } else {
      console.log(`Failed to download ${tool.slug}: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${tool.slug}: ${err.message}`);
  });
});
