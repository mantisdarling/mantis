const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'apps', 'web', 'src', 'app');
const localeDir = path.join(appDir, '[locale]');
const messagesDir = path.join(__dirname, 'apps', 'web', 'messages');

fs.mkdirSync(localeDir, { recursive: true });
fs.mkdirSync(messagesDir, { recursive: true });

const toMove = [
  'admin', 
  'dashboard', 
  'experts', 
  'messages', 
  'page.tsx', 
  'layout.tsx', 
  'error.tsx', 
  'globals.css'
];

for (const item of toMove) {
  const src = path.join(appDir, item);
  const dest = path.join(localeDir, item);
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    console.log(`Moved ${item}`);
  }
}
