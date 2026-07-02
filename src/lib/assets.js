// Looks up logo / work images by filename so the experience data can just
// reference a name (e.g. 'rocket-lab.png') and the file is resolved + optimized
// at build time. Drop files into src/assets/logos or src/assets/work.

const logos = import.meta.glob(
  '../assets/logos/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}',
  { eager: true },
);
const work = import.meta.glob(
  '../assets/work/**/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}',
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

// Group images by their immediate subfolder (e.g. work/rocket-lab/*, sorted).
function byFolder(files, section) {
  const re = new RegExp(`/${section}/([^/]+)/([^/]+)$`);
  const folders = {};
  for (const path in files) {
    const m = path.match(re);
    if (!m) continue;
    const [, folder, file] = m;
    (folders[folder] ||= []).push({ file, image: files[path].default });
  }
  for (const folder in folders) {
    folders[folder].sort((a, b) => a.file.localeCompare(b.file));
  }
  return folders;
}

const logoMap = byFilename(logos);
const workFolders = byFolder(work, 'work');
const projectFolders = byFolder(projects, 'projects');

export const getLogo = (file) => (file && logoMap[file]) || null;
export const getWorkImages = (folder) =>
  folder && workFolders[folder] ? workFolders[folder].map((x) => x.image) : [];
export const getProjectImages = (folder) =>
  folder && projectFolders[folder] ? projectFolders[folder].map((x) => x.image) : [];
