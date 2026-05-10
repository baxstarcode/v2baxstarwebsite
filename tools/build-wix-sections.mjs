import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const SECTIONS_DIR = path.join(ROOT, 'sections');
const DIST_DIR = path.join(ROOT, 'dist');
const OUT_FILE = path.join(DIST_DIR, 'wix-sections.md');
const MANIFEST_FILE = path.join(DIST_DIR, 'wix-sections-manifest.json');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function listHtmlFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((file) => file.toLowerCase().endsWith('.html'))
    .sort();
}

function hash(content) {
  return crypto.createHash('sha256').update(content).digest('hex').slice(0, 12);
}

ensureDir(SECTIONS_DIR);
ensureDir(DIST_DIR);

const files = listHtmlFiles(SECTIONS_DIR);
const generatedAt = new Date().toISOString();

const manifest = {
  generatedAt,
  sourceDirectory: 'sections',
  wixDestination: 'Manual paste into Wix HTML embed unless/until Wix Git integration is enabled.',
  sections: []
};

let markdown = `# Wix Section Paste-Ready Bundle\n\nGenerated: ${generatedAt}\n\n`;
markdown += `GitHub is the source of truth. Edit files in \`sections/*.html\`, then use this generated file as the Wix paste checklist.\n\n`;

if (files.length === 0) {
  markdown += `No section files found yet. Add HTML snippets to \`sections/\`, for example \`sections/hero.html\`.\n`;
} else {
  for (const file of files) {
    const relPath = path.join('sections', file).replaceAll('\\\\', '/');
    const fullPath = path.join(SECTIONS_DIR, file);
    const content = fs.readFileSync(fullPath, 'utf8').trim();
    const digest = hash(content);
    manifest.sections.push({ file: relPath, hash: digest, characters: content.length });

    markdown += `## ${file}\n\n`;
    markdown += `Source: \`${relPath}\`  \n`;
    markdown += `Version hash: \`${digest}\`  \n`;
    markdown += `Characters: ${content.length}\n\n`;
    markdown += '```html\n';
    markdown += content;
    markdown += '\n```\n\n';
  }
}

fs.writeFileSync(OUT_FILE, markdown, 'utf8');
fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

console.log(`Built ${files.length} Wix section(s).`);
console.log(`Wrote ${path.relative(ROOT, OUT_FILE)}`);
console.log(`Wrote ${path.relative(ROOT, MANIFEST_FILE)}`);
