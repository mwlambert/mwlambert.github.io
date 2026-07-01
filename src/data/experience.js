// Your work history. Most-recent first.
//
// To add / edit a role: change an entry here. To add a company logo, drop an
// image into src/assets/logos/ and set `logo` to its filename. To add work
// photos to a role, drop images into src/assets/work/ and list the filenames in
// that role's `images` array. Then git push. No layout edits needed.
//
// Anything marked TODO is a placeholder for you to fill in.

export const experience = [
  {
    company: 'Norma',
    logo: 'norma.png', // TODO: drop src/assets/logos/norma.png
    url: 'https://norma.tech',
    duration: 'May 2025 – Present',
    roles: [
      {
        title: 'Senior Mechanical Engineer',
        dates: 'May 2025 – Present · 1 yr 3 mos',
        location: 'Paris, France',
        bullets: [
          'Leading mechanical design and development of an innovative Direct Air Capture (DAC) system, focusing on performance, cost, and scalability.',
          'Drive end-to-end prototyping and hardware iteration, ensuring cost efficiency throughout the process.',
          'Own mechanical simulation and system modeling, validating performance and reliability through rigorous testing.',
          'Manage cross-functional timelines from concept to deployment, fostering collaboration across teams.',
        ],
        images: [], // e.g. ['norma-dac-1.jpg']
      },
    ],
  },
  {
    company: 'MaiaSpace',
    logo: 'maiaspace.png', // TODO: drop src/assets/logos/maiaspace.png
    url: 'https://www.maia-space.com',
    duration: 'Feb 2024 – May 2025',
    roles: [
      {
        title: 'Propulsion Systems Engineer',
        dates: 'February 2024 – May 2025 · 1 yr 4 mos',
        location: '',
        bullets: [
          'Design of the kick-stage propulsion system and RCS.',
          'Design and simulation of the first- and second-stage RCS systems for ascent and landing phases.',
        ],
        images: [],
      },
    ],
  },
  {
    company: 'Rocket Lab',
    logo: 'rocket-lab.png', // TODO: drop src/assets/logos/rocket-lab.png
    url: 'https://www.rocketlabusa.com',
    duration: '6 yrs 9 mos',
    roles: [
      {
        title: 'Senior Mechanical Development Engineer',
        dates: 'March 2021 – April 2023 · 2 yrs 2 mos',
        location: '',
        bullets: [
          'Led development of the Photon fluid system for the CAPSTONE mission, achieving a qualified system within two years.',
          'Contributed to the successful launch of the pathfinder mission on 28 June 2022; the spacecraft is currently in lunar orbit.',
          "Led design of the RCS system for NASA's ESCAPADE mission (launched 2025), enhancing research capabilities for studying the martian magnetosphere.",
        ],
        images: [],
      },
      {
        title: 'Vehicle Test Engineer II',
        dates: 'February 2019 – March 2021 · 2 yrs 2 mos',
        location: 'Auckland, New Zealand',
        bullets: [
          "Led Electron integration and checkouts at Rocket Lab's Launch Complex 1 in Mahia — payload integration, high-level vehicle checkouts, and vehicle readiness.",
          'From early 2020, led development of the Photon fluids and RCS systems for the CAPSTONE moon mission — fully developing and qualifying an RCS system and components in-house for testing on the Pathstone mission in March 2021.',
          'Worked closely with a design engineer and technician to take the system from concept to flight-ready in 12 months, while developing the rest of the CAPSTONE fluids system, including fluidic components and propellant-management systems.',
        ],
        images: [],
      },
      {
        title: 'Test Engineer',
        dates: 'November 2016 – February 2019 · 2 yrs 4 mos',
        location: '',
        bullets: [
          'Conducted comprehensive testing on Electron hardware — structures, mechanisms, and fluid systems.',
          'Designed and built custom test hardware in a fast-paced environment to meet project needs.',
          'Executed random-vibration and environmental-loads testing to ensure component reliability.',
          'Collaborated on payload-deployment and fairing-jettison testing to enhance mission success.',
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
