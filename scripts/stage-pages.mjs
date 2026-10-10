import { cp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// GitHub Pages publishes main:/; keep source files and stage only exported assets.
const root = resolve(process.argv[2] || '.');
const exported = resolve('out');
const manifest = resolve(root, '.pages-files.json');
const allowed = /^(\.nojekyll|_next|_not-found|404|404\.html|index\.(html|txt)|__next\..+\.txt|icon\.svg|opengraph-image|profile\.jpg|Arwa_Eldesawy_CV\.pdf|projects)$/;
const entries = await readdir(exported);
if (!entries.includes('index.html') || entries.some(entry => !allowed.test(entry))) {
  throw new Error('Unexpected static export; source files will not be overwritten.');
}
let previous = [];
try { previous = JSON.parse(await readFile(manifest, 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
if (!Array.isArray(previous) || previous.some(entry => typeof entry !== 'string' || !allowed.test(entry))) {
  throw new Error('Invalid Pages manifest; no files removed.');
}
for (const entry of new Set([...previous, ...entries])) {
  await rm(resolve(root, entry), { recursive: true, force: true });
}
for (const entry of entries) {
  await cp(resolve(exported, entry), resolve(root, entry), { recursive: true });
}
await writeFile(manifest, JSON.stringify(entries, null, 2) + '\n');
console.log(`Staged ${entries.length} static export entries for GitHub Pages in ${root}`);
