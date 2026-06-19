import type { SiteContent } from './types';

export const en = {
  seo: {
    title: 'OSH Floor — thermostat with a wireless room temperature sensor',
    description:
      'OSH Floor controls floor heating by the temperature in the room that matters, without a separate Zigbee gateway or custom smart-home automations.'
  },
  header: {
    navLabel: 'Main navigation',
    languageLabel: 'Site language',
    logoAlt: 'OSH logo',
    nav: [
      { href: '#scenario', label: 'Scenario' },
      { href: '#solution', label: 'How it works' },
      { href: '#product', label: 'Kit' },
      { href: '#app', label: 'Demo' },
      { href: '#trust', label: 'Trust' },
      { href: '#faq', label: 'FAQ' }
    ]
  },
  hero: {
    eyebrow: 'OSH Floor',
    status: 'First batch in development',
    title: 'Precise temperature where it matters.',
    lead:
      'Control floor heating based on the temperature in the right room — without a separate Zigbee gateway or complex automations.',
    cta: 'Learn more',
    facts: [
      { label: 'Reference sensor', value: 'room temperature' },
      { label: 'Local schedules', value: 'stored on device' },
      { label: 'Floor NTC', value: 'surface limit' }
    ],
    media: {
      id: 'PH-01',
      title: 'Hero product scene',
      description: 'Clean thermostat-on-wall scene as the first product signal.',
      alt: 'OSH Floor thermostat mounted on a wall.',
      aspect: 'portrait'
    }
  },
  scenario: {
    eyebrow: 'Scenario',
    title: 'A thermostat is often installed somewhere other than the room you care about.',
    lead:
      'The warm floor may be in the bathroom while the wall unit sits in the hallway. The built-in sensor sees the temperature around the device, not where comfort is expected.',
    points: [
      {
        icon: 'home',
        title: 'Wrong room',
        text: 'A hallway thermostat does not know the actual air temperature in the bathroom.'
      },
      {
        icon: 'thermometer',
        title: 'Floor sensing is not air sensing',
        text: 'The NTC in the floor is important for limiting heat, but it does not measure room comfort.'
      },
      {
        icon: 'layers',
        title: 'Smart home becomes a project',
        text: 'A hub, sensor, relay, and automations can work, but that is often harder than the original problem.'
      }
    ],
    media: {
      id: 'PH-02',
      title: 'Hallway to bathroom scenario',
      description: 'Visual: wall unit in hallway, wireless sensor in bathroom, different temperatures.',
      alt: 'Thermostat in the hallway and wireless sensor in the bathroom.',
      aspect: 'video'
    }
  },
  solution: {
    eyebrow: 'Solution',
    title: 'OSH moves the measurement to the right room.',
    lead: 'The thermostat stays on the wall, while the reference temperature comes from a supported wireless sensor.',
    steps: [
      {
        title: 'Pair a sensor',
        text: 'Add a supported Zigbee sensor without a separate gateway for the core scenario.'
      },
      {
        title: 'Choose the room',
        text: 'Name the sensor and use it as the reference sensor for one connected heating output.'
      },
      {
        title: 'Set the mode',
        text: 'Manual, Daily, Weekly, or Temperature range can run from the screen and stored configuration.'
      }
    ],
    media: {
      id: 'PH-03',
      title: 'Pair, choose, set',
      description: 'Simple 3-step visual: sensor, reference room, temperature or schedule.',
      alt: 'Three OSH Floor setup steps: sensor, room, and temperature.',
      aspect: 'square'
    }
  },
  product: {
    eyebrow: 'First product',
    title: 'OSH Floor Starter Kit',
    lead: 'The first kit concept for electric floor heating: wall thermostat, floor sensor, and a wireless room sensor.',
    status: 'In development for the first batch',
    kitTitle: 'Kit contents',
    kit: [
      'OSH Floor wall thermostat',
      'wired NTC for floor temperature limiting',
      'supported wireless Zigbee sensor',
      'manual, wiring diagram, and warranty information'
    ],
    features: [
      {
        icon: 'thermometer',
        title: 'Room reference sensor',
        text: 'Heating can follow the temperature in the room where comfort matters.'
      },
      {
        icon: 'smartphone',
        title: 'Wall screen and app',
        text: 'Core controls are available on the wall; remote functions use the network.'
      },
      {
        icon: 'gauge',
        title: 'Energy and history',
        text: 'Energy tracking and temperature graphs are planned to explain floor behavior.'
      }
    ],
    kitMedia: {
      id: 'PH-08',
      title: 'Starter Kit',
      description: 'Future kit contents without extra smart-home boxes.',
      alt: 'OSH Floor Starter Kit contents.',
      aspect: 'video'
    },
    closeupMedia: {
      id: 'PH-04',
      title: 'Product close-up',
      description: 'Close-up screen: current temperature, target, reference sensor.',
      alt: 'OSH Floor screen with current and target temperatures.',
      aspect: 'video'
    }
  },
  app: {
    eyebrow: 'Demo',
    title: 'Control on the wall and in the app.',
    lead: 'This first site maps the future media set: dashboard, temperature history, and a short AMOLED interaction video.',
    cards: [
      {
        id: 'PH-05',
        title: 'App dashboard',
        description: 'Main screen with temperature, modes, heating status, and activity.',
        alt: 'OSH app dashboard.',
        aspect: 'portrait'
      },
      {
        id: 'PH-06',
        title: 'Temperature history',
        description: 'Day/week graph with target and heating markers.',
        alt: 'Temperature history in the OSH app.',
        aspect: 'portrait'
      },
      {
        id: 'PH-07',
        title: 'Wall UI video',
        description: 'Short clip showing mode or schedule changes on the device screen.',
        alt: 'Changing a mode on the OSH Floor screen.',
        aspect: 'portrait'
      }
    ]
  },
  offline: {
    eyebrow: 'Local behavior',
    title: 'Core heating does not disappear when the internet is down.',
    lead:
      'OSH should not promise that every feature works offline. The key is separating local heating logic from cloud-dependent features.',
    localTitle: 'Works locally',
    onlineTitle: 'Needs network',
    local: ['temperature regulation', 'paired sensors', 'schedules and modes', 'floor NTC limit', 'AMOLED screen control'],
    online: ['mobile app', 'remote control', 'cloud Home Assistant', 'online history', 'OTA updates'],
    media: {
      id: 'PH-09',
      title: 'Offline behavior diagram',
      description: 'Diagram: cloud unavailable while local heating logic keeps running.',
      alt: 'Diagram of OSH Floor working locally without internet.',
      aspect: 'square'
    }
  },
  compatibility: {
    eyebrow: 'Compatibility',
    title: 'Supported Zigbee sensors, not every Zigbee sensor.',
    lead: 'A Zigbee logo does not mean identical behavior. OSH should publish a tested list and a support level for each model.',
    levelsTitle: 'Compatibility levels',
    levels: ['Official', 'Supported', 'Compatible with limitations', 'Community tested', 'Not supported'],
    note: 'Each future compatibility-list row should include model, firmware, reporting interval, battery level, and known limitations.'
  },
  trust: {
    eyebrow: 'Trust',
    title: '230 V needs proof, not claims.',
    lead:
      'Early materials should show how the product is tested, what happens when a sensor is lost, and which limitations are already known.',
    features: [
      {
        icon: 'shield',
        title: 'Safety-first messaging',
        text: 'Load rating, enclosure temperature, and terminals need test evidence.'
      },
      {
        icon: 'cloudOff',
        title: 'Honest cloud policy',
        text: 'Cloud features are separated from local heating control.'
      },
      {
        icon: 'fileText',
        title: 'Ukrainian documentation',
        text: 'Wiring, FAQ, compatibility list, and support should be clear before marketplace pages appear.'
      }
    ],
    testingMedia: {
      id: 'PH-10',
      title: 'Safety and load testing',
      description: 'Real photos of load testing, enclosure temperature, or a lab bench.',
      alt: 'OSH Floor load and enclosure-temperature testing.',
      aspect: 'video'
    },
    installationMedia: {
      id: 'PH-11',
      title: 'Installation and frame fit',
      description: 'Frame, wall box, depth, and terminal compatibility visual.',
      alt: 'OSH Floor installation in a wall box and frame.',
      aspect: 'video'
    }
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions worth answering early.',
    lead: 'Technical honesty matters for trust in a new 230 V device.',
    items: [
      {
        question: 'Do I need a separate Zigbee gateway?',
        answer:
          'For the core scenario with a supported wireless sensor, no separate smart-home gateway is needed: the sensor pairs with OSH Floor.'
      },
      {
        question: 'Does the thermostat work without internet?',
        answer:
          'Core temperature regulation, paired sensors, modes, schedules, and screen control should work locally. The mobile app, remote control, OTA, and cloud Home Assistant need network access.'
      },
      {
        question: 'Can I connect any Zigbee sensor?',
        answer: 'No. OSH should support tested sensors from multiple vendors and publish a compatibility list with limitations.'
      },
      {
        question: 'Can it control multiple rooms independently?',
        answer:
          'The current OSH Floor concept controls one connected heating output. It can show multiple sensors and choose one reference, but it is not a multi-zone controller.'
      },
      {
        question: 'Why use floor NTC if there is a room sensor?',
        answer: 'The wireless sensor measures room air. The wired NTC is used for floor protection and maximum surface temperature limiting.'
      },
      {
        question: 'Why not just use Aqara or Terneo?',
        answer:
          'If a user already has the right ecosystem, another product may be a rational choice. OSH focuses on a ready room-sensor workflow without a separate gateway for the core function, plus local controls and Ukrainian support.'
      }
    ]
  },
  footer: {
    logoAlt: 'OSH logo',
    text: 'OSH Floor is the first product in a future OSH line for heating and home energy.',
    marketplaceId: 'PH-12',
    marketplace: 'Public marketplace pages will be added after the first batch is ready.'
  }
} satisfies SiteContent;
