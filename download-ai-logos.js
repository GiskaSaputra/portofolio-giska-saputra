const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/ai-tools';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const fromSimpleIcons = [
  ['openai', 'chatgpt.svg'],
  ['anthropic', 'claude.svg'],
  ['googlegemini', 'gemini.svg'],
];

fromSimpleIcons.forEach(([slug, file]) => {
  https.get('https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/' + slug + '.svg', res => {
    if (res.statusCode === 200) {
      const f = fs.createWriteStream(path.join(dir, file));
      res.pipe(f);
      f.on('finish', () => console.log('Downloaded ' + file));
    } else {
      console.log('FAIL ' + slug + ' status=' + res.statusCode);
    }
  }).on('error', e => console.log('ERR ' + e.message));
});

// Custom SVGs for tools without SimpleIcons entries
const customSVGs = {
  'claudecode.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="18" fill="#D97706"/><text x="50" y="58" font-family="monospace" font-weight="bold" font-size="26" fill="white" text-anchor="middle">CC</text></svg>`,
  'cursor.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="18" fill="#1a1a1a"/><text x="50" y="62" font-family="sans-serif" font-weight="bold" font-size="42" fill="white" text-anchor="middle">⌶</text></svg>`,
  'opencode.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="18" fill="#059669"/><text x="50" y="58" font-family="monospace" font-weight="bold" font-size="24" fill="white" text-anchor="middle">OC</text></svg>`,
  'antigravity.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="18" fill="#4F46E5"/><text x="50" y="58" font-family="sans-serif" font-weight="bold" font-size="22" fill="white" text-anchor="middle">AG</text></svg>`,
  '9router.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="18" fill="#7C3AED"/><text x="50" y="62" font-family="monospace" font-weight="bold" font-size="34" fill="white" text-anchor="middle">9R</text></svg>`,
  'notebooklm.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="18" fill="#1A73E8"/><text x="50" y="58" font-family="sans-serif" font-weight="bold" font-size="22" fill="white" text-anchor="middle">NLM</text></svg>`,
};

for (const [filename, svg] of Object.entries(customSVGs)) {
  fs.writeFileSync(path.join(dir, filename), svg);
  console.log('Created ' + filename);
}

console.log('Done!');
