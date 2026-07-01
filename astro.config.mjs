import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // Set this to your final domain so canonical URLs / sitemaps are correct.
  site: 'https://lambertspace.com',
  image: {
    // Serve modern, well-compressed formats to keep bandwidth (and cost) low.
    responsiveStyles: true,
  },
});
