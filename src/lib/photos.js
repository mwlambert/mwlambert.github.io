// Auto-discovers every image in src/photos/ at build time.
//
// Workflow: drop an image into src/photos/, commit, push. Done.
// Ordering:  photos sort NEWEST-FIRST by filename, so a date-prefixed name
//            (e.g. 2026-06-15-...) always lands on top. No manual reordering.

const files = import.meta.glob(
  '../photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

export const photos = Object.entries(files)
  .map(([path, mod]) => ({
    file: path.split('/').pop(),
    image: mod.default,
  }))
  .sort((a, b) => b.file.localeCompare(a.file)); // newest-first
