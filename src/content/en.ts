import type { FeatureItem, SiteContent } from './types';

export const en = {
  seo: {
    home: { title: 'OSH Floor — smart thermostat for the room that matters', description: 'Control electric floor heating by the temperature in the room you choose, without a separate Zigbee gateway or custom automations.' },
    compatibility: { title: 'OSH Floor compatibility — sensors and 55 × 55 frames', description: 'Check OSH Floor compatibility with wireless temperature sensors, frames, and installation conditions.' },
    docs: { title: 'OSH Floor documentation', description: 'How the reference sensor, modes, local controls, and network features work in OSH Floor.' },
    support: { title: 'OSH Floor support', description: 'Warranty, local behaviour, cloud features, and OSH Floor support channels.' },
    contact: { title: 'Contact OSH', description: 'Contact OSH about the product, installation, support, or partnerships.' }
  },
  navigationLabel: 'Main navigation',
  languageLabel: 'Site language',
  menuOpenLabel: 'Open menu',
  menuCloseLabel: 'Close menu',
  nav: [
    { page: 'home', label: 'OSH Floor' },
    { page: 'compatibility', label: 'Compatibility' },
    { page: 'docs', label: 'Docs' },
    { page: 'support', label: 'Support' },
    { page: 'contact', label: 'Contact' }
  ],
  home: {
    hero: {
      eyebrow: 'OSH Floor',
      title: 'The right temperature where it truly matters.',
      lead: 'Control floor heating with a wireless sensor in the room you care about. No separate Zigbee gateway and no custom automations.',
      primaryCta: 'Learn more',
      secondaryCta: 'How it works',
      highlights: ['Wireless reference sensor', 'Core functions work locally', 'Floor protection with NTC'],
      media: { id: 'PH-01', title: 'OSH Floor thermostat', description: 'A wall thermostat with an AMOLED screen in a modern interior.', alt: 'OSH Floor thermostat mounted on a wall.', aspect: 'portrait' }
    },
    benefits: {
      eyebrow: 'Capabilities',
      title: 'More flexible than a thermostat. Simpler than a smart home.',
      lead: 'OSH Floor combines measurement, control, and floor protection in one purpose-built device.',
      items: [
        { icon: 'thermometer', title: 'Temperature in the right room', text: 'Place a wireless sensor where comfort is expected.' },
        { icon: 'radio', title: 'No separate gateway', text: 'A supported Zigbee sensor pairs directly with OSH Floor.' },
        { icon: 'activity', title: 'Local schedules', text: 'Modes and schedules are stored on the thermostat.' },
        { icon: 'shield', title: 'Floor temperature limit', text: 'A wired NTC keeps floor heating within a safe limit.' },
        { icon: 'smartphone', title: 'Wall screen and app', text: 'Control heating on the wall or remotely in the mobile app.' },
        { icon: 'gauge', title: 'History and energy', text: 'Review temperature, heating activity, and energy use.' }
      ]
    },
    differentiator: {
      eyebrow: 'Why OSH',
      title: 'The thermostat stays on the wall. The temperature comes from the right room.',
      lead: 'The warm floor may be in the bathroom while the wall unit is in the hallway. OSH controls heating from the sensor you choose as the reference.',
      points: ['See temperatures from several supported sensors.', 'Choose one sensor to control the connected heating circuit.', 'Change the reference room without rebuilding smart-home automations.'],
      media: { id: 'PH-02', title: 'Hallway and bathroom', description: 'A scenario where the thermostat and comfort room are in different places.', alt: 'Thermostat in the hallway and wireless sensor in the bathroom.', aspect: 'video' }
    },
    capabilities: {
      eyebrow: 'Control',
      title: 'Everything important is available on the wall and in the app.',
      lead: 'Each interface has a clear job: quick changes on the wall, remote control, and understandable history.',
      items: [
        { title: 'AMOLED controls', text: 'Temperature, mode, schedule, and reference-sensor status directly on the thermostat.', media: { id: 'PH-04', title: 'OSH Floor display', description: 'Current temperature, target, and heating state.', alt: 'OSH Floor thermostat interface.', aspect: 'portrait', fit: 'contain' } },
        { title: 'Mobile app', text: 'Change mode and temperature remotely and check device state.', media: { id: 'PH-05', title: 'App dashboard', description: 'Temperature, mode, and heating activity.', alt: 'OSH mobile app dashboard.', aspect: 'portrait', fit: 'contain' } },
        { title: 'Temperature history', text: 'Compare room temperature, target, and heating periods.', media: { id: 'PH-06', title: 'Temperature history', description: 'A day or week graph.', alt: 'Temperature history in the OSH app.', aspect: 'portrait', fit: 'contain' } },
        { title: 'Quick wall changes', text: 'Change a mode or schedule even when the phone is not nearby.', media: { id: 'PH-07', title: 'Wall interaction', description: 'A short OSH Floor control video.', alt: 'Changing a mode on the OSH Floor display.', aspect: 'portrait', fit: 'contain' } }
      ]
    },
    setup: {
      eyebrow: 'Setup',
      title: 'Pair a sensor. Choose a room. Set the temperature.',
      lead: 'The core scenario needs no separate smart-home gateway, relay, or custom automations.',
      steps: [
        { title: 'Install OSH Floor', text: 'Replace a compatible thermostat and connect the floor NTC.' },
        { title: 'Pair a sensor', text: 'Add a supported wireless temperature sensor.' },
        { title: 'Choose the room', text: 'Name the sensor and make it the heating reference.' },
        { title: 'Set the mode', text: 'Choose Manual, Daily, Weekly, or Temperature range.' }
      ],
      media: { id: 'PH-03', title: 'Four setup steps', description: 'Installation, sensor, room, and mode.', alt: 'OSH Floor setup sequence.', aspect: 'square', fit: 'contain' }
    },
    kit: {
      eyebrow: 'Starter Kit',
      title: 'OSH Floor Starter Kit',
      lead: 'One kit for the core electric floor-heating scenario.',
      itemsTitle: 'In the box',
      items: ['OSH Floor thermostat', 'wired floor NTC', 'supported wireless sensor', 'manual and warranty information'],
      priceLabel: 'Indicative price',
      currentLabel: 'Maximum current',
      warrantyLabel: 'Warranty',
      draftNote: 'Preliminary specifications and pricing may be updated.',
      media: { id: 'PH-08', title: 'OSH Floor Starter Kit', description: 'Thermostat, NTC, wireless sensor, and documentation.', alt: 'OSH Floor Starter Kit contents.', aspect: 'video', fit: 'contain' }
    },
    installation: {
      eyebrow: 'Installation',
      title: 'Designed for familiar in-wall installation.',
      lead: 'OSH Floor fits a standard wall box and supports the 55 × 55 mm frame format.',
      points: [] as FeatureItem[],
      media: { id: 'PH-11', title: 'Installation and frame', description: 'Depth, terminals, wall box, and compatible frame.', alt: 'OSH Floor installation in a wall box and frame.', aspect: 'video', fit: 'contain' }
    },
    trust: {
      eyebrow: 'Reliability',
      title: 'Core heating does not depend on the cloud.',
      lead: 'Local logic keeps working without internet, while network-dependent features are clearly separated.',
      localTitle: 'Works locally',
      onlineTitle: 'Needs network',
      local: ['temperature control', 'paired sensors', 'modes and schedules', 'floor NTC limit', 'AMOLED controls'],
      online: ['mobile app', 'remote control', 'online history', 'OTA updates', 'cloud integration'],
      localMedia: { id: 'PH-09', title: 'Local operation', description: 'The thermostat and sensor continue working when cloud access is unavailable.', alt: 'OSH Floor local operation without internet.', aspect: 'square', fit: 'contain' }
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Answers before installation.',
      lead: 'The essentials about sensors, internet access, rooms, and safe floor control.',
      items: [
        { question: 'Do I need a separate Zigbee gateway?', answer: 'No. A supported sensor pairs directly with OSH Floor.' },
        { question: 'Does the thermostat work without internet?', answer: 'Yes. Regulation, sensors, modes, schedules, NTC, and wall controls work locally.' },
        { question: 'Can I connect any Zigbee sensor?', answer: 'No. Compatibility depends on the exact model and version. Current statuses are listed on the [compatibility page](/en/compatibility/).' },
        { question: 'Can one thermostat control several rooms?', answer: 'One OSH Floor controls one connected heating circuit. It can see several sensors, but one is selected as the reference.' },
        { question: 'Why is a floor NTC still needed?', answer: 'The floor NTC can work as the heating reference or as a floor-temperature limit. It helps keep the surface comfortable to walk on and prevents the floor covering from overheating.' }
      ]
    },
    finalCta: { title: 'Learn more about OSH Floor.', text: 'Explore how it works, check compatibility, or contact us about your installation.', docs: 'View documentation', contact: 'Contact us' }
  },
  compatibility: {
    eyebrow: 'Compatibility',
    title: 'Verified compatibility instead of broad promises.',
    lead: 'A Zigbee logo or 55 × 55 format does not guarantee identical behaviour for every model.',
    frameTitle: 'Frames and installation',
    frameText: 'OSH Floor uses the 55 × 55 mm format. Compatibility with a frame series depends on mechanics, depth, and the mounting adapter.',
    sensorTitle: 'Wireless sensors',
    sensorText: 'The statuses below are working values and may change after additional testing.',
    modelLabel: 'Model',
    statusLabel: 'Status',
    statuses: { supported: 'Supported', testing: 'Testing' },
    policyTitle: 'What is tested',
    policyItems: ['temperature and humidity', 'reporting interval', 'battery level', 'recovery after signal loss', 'behaviour after restart'],
    contactCta: 'Ask about compatibility'
  },
  docs: {
    eyebrow: 'Documentation',
    title: 'How OSH Floor controls heating.',
    lead: 'Core workflows and system boundaries without unnecessary smart-home jargon.',
    workflowTitle: 'Reference sensor workflow',
    workflowSteps: ['pair a supported sensor', 'give it a room name', 'select it as the reference', 'set a temperature or schedule'],
    modesTitle: 'Modes',
    modes: [
      { title: 'Manual', text: 'Maintains the selected temperature without a schedule.' },
      { title: 'Daily schedule', text: 'Uses the same schedule every day.' },
      { title: 'Weekly schedule', text: 'Uses a separate schedule for each weekday.' },
      { title: 'Temperature range', text: 'Keeps temperature between a minimum and maximum.' }
    ],
    boundariesTitle: 'Local and network features',
    localTitle: 'On the device',
    onlineTitle: 'Through the network',
    local: ['regulation', 'schedules', 'sensors', 'floor NTC', 'display'],
    online: ['mobile app', 'remote control', 'history', 'OTA', 'cloud integration'],
    downloadsTitle: 'Installation files',
    downloadsText: 'The manual, wiring diagram, and frame list will appear here after final documents are registered.'
  },
  support: {
    eyebrow: 'Support',
    title: 'Support before and after installation.',
    lead: 'Help with compatibility, setup, local behaviour, and warranty questions.',
    warrantyTitle: 'Warranty',
    warrantyText: 'The current warranty period is {months} months. This is a preliminary value and may be updated in the terms of sale.',
    cloudTitle: 'Local operation and cloud services',
    cloudText: 'Core regulation works locally. The app, remote control, online history, OTA, and cloud integration require network access.',
    channelsTitle: 'Support channels',
    emailLabel: 'Send an email',
    telegramLabel: 'Open Telegram',
    faqTitle: 'Common questions',
    faq: [
      { question: 'What if a sensor does not pair?', answer: 'Check the model on the compatibility page and contact support with the model name and device version.' },
      { question: 'Will heating stop without Wi-Fi?', answer: 'No. Local thermostat functions continue to work without Wi-Fi or cloud access.' },
      { question: 'Who should install OSH Floor?', answer: 'A qualified professional should perform the 230 V connection according to local requirements.' }
    ]
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Tell us about your installation.',
    lead: 'Questions about the product, installation, support, or partnerships are welcome by email or Telegram.',
    emailTitle: 'Email',
    emailText: 'For formal requests, documents, and detailed issue descriptions.',
    telegramTitle: 'Telegram',
    telegramText: 'For quick product, compatibility, and setup questions.',
    audiencesTitle: 'Who we work with',
    audiences: [
      { title: 'Homeowners', text: 'Use-case selection, compatibility, and OSH Floor operation.' },
      { title: 'Electricians and installers', text: 'Mounting, frames, documentation, and repeat installations.' },
      { title: 'Partners', text: 'Renovation companies, retailers, reviews, and distribution.' }
    ]
  },
  footer: { text: 'OSH builds understandable products for heating and home energy.', navigationLabel: 'Navigation', contactLabel: 'Contact', rights: 'All rights reserved.' }
} satisfies SiteContent;
