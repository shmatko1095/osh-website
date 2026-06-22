import type { FeatureItem, SiteContent } from './types';

export const en = {
  seo: {
    home: { title: 'OSH Floor — smart thermostat for the room that matters', description: 'Control electric floor heating by the temperature in the room you choose, without a separate Zigbee gateway or custom automations.' },
    docs: { title: 'OSH Floor documentation', description: 'How the reference sensor, modes, local controls, and network features work in OSH Floor.' },
    support: { title: 'OSH Floor support', description: 'Warranty, local behaviour, cloud features, and OSH Floor support channels.' }
  },
  navigationLabel: 'Main navigation',
  languageLabel: 'Site language',
  menuOpenLabel: 'Open menu',
  menuCloseLabel: 'Close menu',
  nav: [
    { page: 'home', label: 'OSH Floor' },
    { page: 'docs', label: 'Docs' },
    { page: 'support', label: 'Support' }
  ],
  home: {
    hero: {
      eyebrow: 'OSH Floor',
      title: 'The right temperature where it truly matters.',
      lead: 'Control floor heating by the temperature in the room you care about, even if the thermostat is installed elsewhere. No separate Zigbee gateway and no custom automations.',
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
        { icon: 'thermometer', title: 'Temperature in the right room', text: 'Place a wireless sensor where a comfortable temperature matters.' },
        { icon: 'radio', title: 'No separate gateway', text: 'A supported Zigbee sensor pairs directly with OSH Floor.' },
        { icon: 'activity', title: 'Local schedules', text: 'Modes and schedules are stored on the thermostat.' },
        { icon: 'shield', title: 'Floor temperature limit', text: 'A wired NTC keeps floor heating within a safe limit.' },
        { icon: 'smartphone', title: 'Wall screen and app', text: 'Control heating on the wall or remotely in the mobile app.' },
        { icon: 'gauge', title: 'History and energy', text: 'Review temperature, heating activity, and energy use.' }
      ]
    },
    compatibility: {
      eyebrow: 'Compatibility',
      testedTitle: 'Tested with popular Zigbee temperature sensors, including Tuya.',
      testedText: 'OSH Floor pairs with compatible Zigbee sensors without a separate hub, gets the available sensor readings, and lets you use the sensor\'s temperature to control heating.',
      media: {
        id: 'PH-12',
        title: 'Tuya Zigbee temperature sensor',
        description: 'One of the sensors tested with OSH Floor.',
        alt: 'White Tuya wireless Zigbee temperature sensor.',
        aspect: 'square',
        fit: 'contain'
      }
    },
    capabilities: {
      eyebrow: 'Control',
      title: 'Everything important is available on the wall and in the app.',
      lead: 'Each interface has a clear job: quick changes on the wall, remote control, and temperature and energy history.',
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
        { question: 'Can I connect any Zigbee sensor?', answer: 'Compatibility depends on the exact model and version. We test popular Zigbee temperature sensors, including Tuya devices.' },
        { question: 'Can one thermostat control several rooms?', answer: 'One OSH Floor controls one connected heating circuit. It can see several sensors, but one is selected as the reference.' }
      ]
    },
    finalCta: { title: 'Learn more about OSH Floor.', text: 'Explore how it works, check compatibility, or open support channels for your installation.', docs: 'View documentation', support: 'Support' }
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
      { question: 'What if a sensor does not pair?', answer: 'Contact support and send the exact model, a product link, and the device version when available.' },
      { question: 'Will heating stop without Wi-Fi?', answer: 'No. Local thermostat functions continue to work without Wi-Fi or cloud access.' },
      { question: 'Who should install OSH Floor?', answer: 'A qualified professional should perform the 230 V connection according to local requirements.' }
    ]
  },
  footer: { text: 'OSH builds understandable products for heating and home energy.', navigationLabel: 'Navigation', contactLabel: 'Contact', rights: 'All rights reserved.' }
} satisfies SiteContent;
