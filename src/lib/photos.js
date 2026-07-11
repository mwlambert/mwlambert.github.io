// Auto-discovers every image in src/photos/ at build time.
//
// Workflow: drop an image into src/photos/, add a line in src/data/captions.js,
// commit, push. Done.
//
// Ordering:  photos appear in the SAME ORDER they're listed in captions.js, so
//            you reorder the gallery just by moving lines in that file — no
//            renaming. Any photo not yet listed in captions.js falls to the end
//            (newest-first by filename among those).
//
// Each photo also carries an `orientation` ('landscape' | 'portrait' | 'square')
// derived from its intrinsic dimensions, so the grid can size landscapes wider
// than portraits.

import { captions } from '../data/captions.js';

const files = import.meta.glob(
  '../photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

const order = Object.keys(captions); // insertion order is preserved

function orientationOf({ width, height }) {
  const r = width / height;
  if (r > 1.15) return 'landscape';
  if (r < 0.87) return 'portrait';
  return 'square';
}

export const photos = Object.entries(files)
  .map(([path, mod]) => ({
    file: path.split('/').pop(),
    image: mod.default,
    orientation: orientationOf(mod.default),
  }))
  .sort((a, b) => {
    const ia = order.indexOf(a.file);
    const ib = order.indexOf(b.file);
    if (ia === -1 && ib === -1) return b.file.localeCompare(a.file); // both unlisted
    if (ia === -1) return 1; // a unlisted → after b
    if (ib === -1) return -1; // b unlisted → after a
    return ia - ib; // both listed → captions.js order
  });
