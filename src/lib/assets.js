// Looks up logo / work images by filename so the experience data can just
// reference a name (e.g. 'rocket-lab.png') and the file is resolved + optimized
// at build time. Drop files into src/assets/logos or src/assets/work.

const logos = import.meta.glob(
  '../assets/logos/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}',
  { eager: true },
);
const work = import.meta.glob(
  '../assets/work/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}',
  { eager: true },
);
const projects = import.meta.glob(
  '../assets/projects/**/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}',
  { eager: true },
);

function byFilename(files) {
  const map = {};
  for (const path in files) {
    map[path.split('/').pop()] = files[path].default;
  }
  return map;
}

const logoMap = byFilename(logos);
const workMap = byFilename(work);

// Project images are grouped by their subfolder under src/assets/projects/.
// A project just points at a folder; every image inside it loads, sorted by name.
const projectFolders = {};
for (const path in projects) {
  const m = path.match(/\/projects\/([^/]+)\/([^/]+)$/);
  if (!m) continue;
  const [, folder, file] = m;
  (projectFolders[folder] ||= []).push({ file, image: projects[path].default });
}
for (const folder in projectFolders) {
  projectFolders[folder].sort((a, b) => a.file.localeCompare(b.file));
}

export const getLogo = (file) => (file && logoMap[file]) || null;
export const getWork = (file) => (file && workMap[file]) || null;
export const getProjectImages = (folder) =>
  folder && projectFolders[folder] ? projectFolders[folder].map((x) => x.image) : [];
