// Data for the little life-timeline gantt on the homepage.
// Dates are decimal years (e.g. 2016.9 ≈ Nov 2016) — tweak to taste.
// `logo` reuses the same files as experience.js; schools need their own logos
// in src/assets/logos/. Until a logo is dropped in, a monogram badge shows.

export const START = 2012;
export const END = 2026.9; // a little past "now" so present-day bars keep going

export const ticks = [2012, 2014, 2016, 2018, 2020, 2022, 2024, 2026];

// Per-phase knobs:
//   href — where clicking the bar jumps to (e.g. '#rocket-lab', matching a
//          company id in the experience list). Omit for no link.
//   pad  — padding (px) inside the logo badge. Higher = more space around the
//          logo (looser); lower = logo fills more (tighter). Default 3.
export const lanes = [
  {
    name: 'Study',
    phases: [
      { label: 'University of Auckland', logo: 'auckland.png', start: 2012, end: 2016.9, pad: 2, href: '#university-of-auckland' },
      { label: 'Te Wānanga o Raukawa', logo: 'te-wananga.png', start: 2022, end: 2023, pad: 0, href: '#te-wananga' },
    ],
  },
  {
    name: 'Work',
    phases: [
      // Commented out for now — kept so they're easy to restore later.
      // { label: 'CR Automation', logo: 'cr-automation.png', start: 2012.85, end: 2013.15 },
      // { label: 'HV Power', logo: 'hv-power.png', start: 2014.85, end: 2015.9 },
      { label: 'Rocket Lab', logo: 'rocket-lab.png', start: 2016.6, end: 2023.3, href: '#rocket-lab', pad: 5 },
      { label: 'MaiaSpace', logo: 'maiaspace.png', start: 2024.1, end: 2025.4, href: '#maiaspace', pad: 5 },
      { label: 'Norma', logo: 'norma.png', start: 2025.4, end: 2026.55, href: '#norma', pad: 5 },
    ],
  },
  {
    name: 'Founded',
    phases: [
      // Set `labelLeft: true` to show the name to the left of the badge.
      { label: 'Spencer St.', logo: 'spencer-st.png', start: 2024.92, end: 2026.9, href: '#spencer-st', pad: 4 },
      { label: 'P78 Space', logo: 'p78-space.png', start: 2026.62, end: 2026.9, href: '#p78-space' },
    ],
  },
];
