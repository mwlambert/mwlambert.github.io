// Personal projects. Most-recent first.
//
// To add a project: add an entry here. Optional `url` makes the title a link.
// For photos, drop images into src/assets/projects/<folder>/ and set `folder`
// to that folder name — every image inside loads. Then git push.

export const projects = [
  {
    title: 'Mercedes Sprinter Campervan',
    dates: 'May 2023 – Jul 2023',
    description:
      'A ground-up conversion of a 2016 Mercedes Sprinter into a self-contained campervan, built from an empty panel van over three months — framing, insulation, a full electrical system, and a compact liveable interior. It then became home on the road for several months of travelling around Europe, before being sold at the end of the year.',
    folder: 'van', // images auto-load from src/assets/projects/van/
  },
  {
    title: 'Mongol Rally',
    url: 'https://www.theadventurists.com/mongol-rally/',
    dates: 'Jul 2018 – Aug 2018',
    description:
      'An intercontinental car rally that begins in Europe and ends in Ulan-Ude, Russia. Three fundamental rules govern it:',
    bullets: [
      'Rally vehicles have a 1200cc engine limit — ideally under 1000cc.',
      'Teams are entirely unsupported.',
      'Each team must raise at least £500 for charity.',
    ],
    folder: 'mongol-rally', // drop photos in src/assets/projects/mongol-rally/
  },
];
