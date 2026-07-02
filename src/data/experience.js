// Your work history. Most-recent first.
//
// To add / edit a role: change an entry here. To add a company logo, drop an
// image into src/assets/logos/ and set `logo` to its filename.
//
// WORK PHOTOS: drop images into src/assets/work/<company>/<role>/ — e.g.
// src/assets/work/rocket-lab/senior-mechanical-development-engineer/. Every image
// there shows as a grid under that role. No filename list needed. Then git push.
// (The `images: []` fields below are no longer used.)

export const experience = [
  {
    company: 'P78 Space',
    logo: 'p78-space.png', // drop src/assets/logos/p78-space.png (monogram until then)
    url: 'https://p78space.com',
    duration: 'Aug 2026 – Present',
    roles: [
      {
        title: 'Co-founder',
        dates: 'August 2026 – Present',
        location: '',
        bullets: ['Developing modern propulsion for the next generation of spaceflight.'],
        images: [],
      },
    ],
  },
  {
    company: 'Spencer St.',
    logo: 'spencer-st.png',
    url: '',
    links: [{ label: 'Prompt', url: 'https://reallifeontap.com' }],
    duration: 'Dec 2024 – Present',
    roles: [
      {
        title: 'Co-founder & Developer',
        dates: 'December 2024 – Present · 1 yr 7 mos',
        location: '',
        bullets: [
          'Building Prompt, a social, social media app — beta released on TestFlight.',
        ],
        images: [],
      },
    ],
  },
  {
    company: 'Norma',
    logo: 'norma.png',
    url: 'https://norma.tech',
    duration: 'May 2025 – Jul 2026',
    roles: [
      {
        title: 'Senior Mechanical Engineer',
        dates: 'May 2025 – July 2026 · 1 yr 2 mos',
        location: 'Paris, France',
        bullets: [
          'Led the mechanical design and development of a novel Direct Air Capture (DAC) system.',
          'Drove end-to-end prototyping and hardware iteration.',
          'Performed mechanical simulation and system modelling, validating performance and reliability through testing.',
          'Managed cross-functional timelines from concept to deployment.',
          'Developed in-house tools for experiment automation and data analysis.',
        ],
        images: [], // e.g. ['norma-dac-1.jpg']
      },
    ],
  },
  {
    company: 'MaiaSpace',
    logo: 'maiaspace.png',
    url: 'https://www.maia-space.com',
    duration: 'Feb 2024 – May 2025',
    roles: [
      {
        title: 'Propulsion Systems Engineer',
        dates: 'February 2024 – May 2025 · 1 yr 4 mos',
        location: '',
        bullets: [
          'Designed the kick-stage propulsion system and RCS.',
          'Designed and simulated the first- and second-stage RCS systems for the ascent and landing phases.',
        ],
        images: [],
      },
    ],
  },
  {
    company: 'Rocket Lab',
    logo: 'rocket-lab.png',
    url: 'https://www.rocketlabusa.com',
    duration: '6 yrs 9 mos',
    links: [
      { label: 'CAPSTONE', url: 'https://rocketlabcorp.com/missions/lunar/' },
      { label: 'ESCAPADE', url: 'https://rocketlabcorp.com/missions/escapade/' },
      { label: 'Electron', url: 'https://rocketlabcorp.com/launch/electron/' },
      { label: 'Pathstone', url: 'https://space.skyrocket.de/doc_sdat/pathstone.htm' },
    ],
    roles: [
      {
        title: 'Senior Mechanical Development Engineer',
        dates: 'March 2021 – April 2023 · 2 yrs 2 mos',
        location: '',
        bullets: [
          'Led development of the Photon fluid system for the CAPSTONE lunar mission, qualifying it within two years.',
          "Contributed to CAPSTONE's successful launch on 28 June 2022; the spacecraft is now in lunar orbit.",
          "Led design of the RCS system for NASA's ESCAPADE mission (launched 2025) to study the Martian magnetosphere.",
        ],
        images: [],
      },
      {
        title: 'Vehicle Test Engineer II',
        dates: 'February 2019 – March 2021 · 2 yrs 2 mos',
        location: 'Auckland, New Zealand',
        bullets: [
          "Led Electron integration and checkouts at Rocket Lab's Launch Complex 1 in Mahia — payload integration, high-level vehicle checkouts, and vehicle readiness.",
          'From early 2020, led development of the Photon fluids and RCS systems for the CAPSTONE lunar mission, developing and qualifying an RCS system and its components in-house for testing on the Pathstone mission in March 2021.',
          'Worked closely with a design engineer and technician to take the system from concept to flight-ready in 12 months, alongside the rest of the CAPSTONE fluids system — fluidic components and propellant-management systems.',
        ],
        images: [],
      },
      {
        title: 'Test Engineer',
        dates: 'November 2016 – February 2019 · 2 yrs 4 mos',
        location: '',
        bullets: [
          'Conducted comprehensive testing of Electron hardware — structures, mechanisms, and fluid systems.',
          'Designed and built custom test hardware in a fast-paced environment to meet project needs.',
          'Executed random-vibration and environmental-loads testing to verify component reliability.',
          'Contributed to payload-deployment and fairing-jettison testing.',
        ],
        images: [],
      },
      {
        title: 'Junior Vehicle Test Engineer',
        dates: 'August 2016 – November 2016 · 4 mos',
        location: '',
        bullets: ['Random-vibration testing, modal analysis, and quasi-static testing.'],
        images: [],
      },
    ],
  },
  /* Commented out for now — kept so they're easy to restore later.
  {
    company: 'HV Power',
    logo: 'hv-power.png',
    url: '',
    duration: 'Nov 2014 – Nov 2015',
    roles: [
      {
        title: 'Junior Engineer',
        dates: 'November 2014 – November 2015 · 1 yr 1 mo',
        location: '',
        bullets: [
          'Protection-relay and transformer-controller functional testing.',
          'Transformer thermal-control system design.',
        ],
        images: [],
      },
    ],
  },
  {
    company: 'CR Automation',
    logo: 'cr-automation.png',
    url: '',
    duration: 'Nov 2012 – Feb 2013',
    roles: [
      {
        title: 'Mechatronics Engineering Intern',
        dates: 'November 2012 – February 2013 · 4 mos',
        location: 'Hastings, New Zealand',
        bullets: ['PLC programming.'],
        images: [],
      },
    ],
  },
  */
];
