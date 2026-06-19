export type Lang = 'uk' | 'en';

export type IconName =
  | 'activity'
  | 'check'
  | 'cloudOff'
  | 'fileText'
  | 'gauge'
  | 'home'
  | 'layers'
  | 'package'
  | 'radio'
  | 'shield'
  | 'smartphone'
  | 'thermometer'
  | 'wifiOff'
  | 'wrench'
  | 'zap';

export interface FeatureItem {
  icon: IconName;
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const site = {
  uk: {
    htmlLang: 'uk',
    path: '/',
    alternatePath: '/en/',
    languageLabel: 'UA',
    seo: {
      title: 'OSH Floor — терморегулятор з бездротовим датчиком температури',
      description:
        'OSH Floor керує теплою підлогою за температурою у потрібній кімнаті: без окремого Zigbee-шлюзу та складних автоматизацій.'
    },
    nav: [
      { href: '#scenario', label: 'Сценарій' },
      { href: '#solution', label: 'Як працює' },
      { href: '#product', label: 'Комплект' },
      { href: '#app', label: 'Демо' },
      { href: '#trust', label: 'Довіра' },
      { href: '#faq', label: 'FAQ' }
    ],
    hero: {
      eyebrow: 'OSH Floor',
      status: 'Перша партія у розробці',
      title: 'Точна температура там, де вона важлива.',
      lead:
        'Керуйте теплою підлогою за температурою у потрібній кімнаті — без окремого Zigbee-шлюзу та складних автоматизацій.',
      cta: 'Дізнатися більше',
      note:
        'Перший продукт — OSH Floor Starter Kit. Публічна версія готується; сайт фіксує сценарій, матеріали і чесні обмеження.',
      facts: [
        { label: 'Reference sensor', value: 'кімнатний датчик' },
        { label: 'Local schedules', value: 'працюють локально' },
        { label: 'Floor NTC', value: 'обмеження підлоги' }
      ]
    },
    scenario: {
      eyebrow: 'Сценарій',
      title: 'Терморегулятор часто встановлений не там, де потрібно міряти температуру.',
      lead:
        'Тепла підлога може бути у ванній, а настінний блок — у коридорі. Вбудований датчик бачить температуру біля себе, а не там, де людина очікує комфорт.',
      points: [
        {
          icon: 'home',
          title: 'Не та кімната',
          text: 'Терморегулятор у коридорі не знає реальну температуру повітря у ванній.'
        },
        {
          icon: 'thermometer',
          title: 'Датчик підлоги не замінює повітря',
          text: 'NTC у стяжці потрібен для обмеження нагріву, але він не вимірює комфорт у кімнаті.'
        },
        {
          icon: 'layers',
          title: 'Smart home — це вже проєкт',
          text: 'Шлюз, датчик, реле і автоматизації працюють, але для більшості це складніше за саму проблему.'
        }
      ]
    },
    solution: {
      eyebrow: 'Рішення',
      title: 'OSH переносить вимірювання в правильну кімнату.',
      lead:
        'Терморегулятор залишається на стіні, а опорна температура приходить з підтримуваного бездротового датчика.',
      steps: [
        {
          title: 'Підключіть датчик',
          text: 'Додайте підтримуваний Zigbee-датчик без окремого gateway для базового сценарію.'
        },
        {
          title: 'Оберіть кімнату',
          text: 'Назвіть датчик і виберіть його як reference sensor для одного підключеного контуру.'
        },
        {
          title: 'Задайте режим',
          text: 'Manual, Daily, Weekly або Temperature range працюють з екрана і збереженої конфігурації.'
        }
      ]
    },
    product: {
      eyebrow: 'Перший продукт',
      title: 'OSH Floor Starter Kit',
      lead:
        'Концепція першого комплекту для електричної теплої підлоги: настінний терморегулятор, датчик підлоги і бездротовий кімнатний датчик.',
      status: 'У розробці для першої партії',
      kit: [
        'настінний терморегулятор OSH Floor',
        'проводовий NTC для обмеження температури підлоги',
        'підтримуваний бездротовий Zigbee-датчик',
        'інструкція, схема підключення і гарантійна інформація'
      ],
      features: [
        {
          icon: 'thermometer',
          title: 'Кімнатний reference sensor',
          text: 'Опалення може орієнтуватися на температуру у потрібній кімнаті.'
        },
        {
          icon: 'smartphone',
          title: 'Екран і застосунок',
          text: 'Базове керування доступне на стіні; віддалені функції працюють через мережу.'
        },
        {
          icon: 'gauge',
          title: 'Енергія і історія',
          text: 'Планується облік енергії та графіки температури для розуміння роботи підлоги.'
        }
      ]
    },
    app: {
      eyebrow: 'Демо',
      title: 'Керування на стіні і в застосунку.',
      lead:
        'Перший сайт показує структуру майбутніх матеріалів: dashboard, історію температури і відео взаємодії з AMOLED-екраном.',
      cards: [
        {
          id: 'PH-05',
          title: 'App dashboard',
          text: 'Головний екран з температурою, режимами, heating status і активністю.'
        },
        {
          id: 'PH-06',
          title: 'Temperature history',
          text: 'Графік температури за день/тиждень з target/heating маркерами.'
        },
        {
          id: 'PH-07',
          title: 'Wall UI video',
          text: 'Короткий ролик зміни режиму або розкладу на екрані пристрою.'
        }
      ]
    },
    offline: {
      eyebrow: 'Локальна робота',
      title: 'Без інтернету основне опалення не зникає.',
      lead:
        'OSH не повинен обіцяти повну роботу всіх функцій offline. Важливо розділити локальну отоплювальну логіку і хмарні можливості.',
      localTitle: 'Працює локально',
      onlineTitle: 'Потребує мережі',
      local: ['регулювання температури', 'підключені датчики', 'розклади і режими', 'NTC-обмеження підлоги', 'керування з AMOLED-екрана'],
      online: ['мобільний застосунок', 'віддалене керування', 'cloud Home Assistant', 'online history', 'OTA-оновлення']
    },
    compatibility: {
      eyebrow: 'Сумісність',
      title: 'Підтримувані Zigbee-датчики, а не будь-які Zigbee.',
      lead:
        'Формальна підтримка Zigbee не гарантує однакову поведінку кожної моделі. OSH має публікувати перевірений список і рівень підтримки.',
      levels: ['Official', 'Supported', 'Compatible with limitations', 'Community tested', 'Not supported']
    },
    trust: {
      eyebrow: 'Довіра',
      title: '230 В потребують доказів, не обіцянок.',
      lead:
        'Перші матеріали мають показувати, як продукт тестується, що відбувається при втраті датчика і які обмеження вже відомі.',
      features: [
        {
          icon: 'shield',
          title: 'Safety-first messaging',
          text: 'Номінальна нагрузка, нагрів корпусу і клеми мають підтверджуватися тестами.'
        },
        {
          icon: 'cloudOff',
          title: 'Чесна cloud policy',
          text: 'Хмарні функції відокремлені від локального керування опаленням.'
        },
        {
          icon: 'fileText',
          title: 'Українська документація',
          text: 'Схеми, FAQ, compatibility list і підтримка мають бути зрозумілими до продажів.'
        }
      ]
    },
    faq: [
      {
        question: 'Чи потрібен окремий Zigbee-шлюз?',
        answer:
          'Для базового сценарію з підтримуваним бездротовим датчиком окремий smart-home gateway не потрібен: датчик підключається до OSH Floor.'
      },
      {
        question: 'Чи працює терморегулятор без інтернету?',
        answer:
          'Основне регулювання температури, підключені датчики, режими, розклади і керування з екрана мають працювати локально. Мобільний застосунок, віддалене керування, OTA та cloud Home Assistant потребують мережі.'
      },
      {
        question: 'Чи можна підключити будь-який Zigbee-датчик?',
        answer:
          'Ні. OSH має підтримувати протестовані датчики різних виробників і публікувати список сумісності з обмеженнями.'
      },
      {
        question: 'Чи можна керувати кількома кімнатами незалежно?',
        answer:
          'Поточна концепція OSH Floor керує одним підключеним контуром. Можна показувати кілька датчиків і вибирати один опорний, але це не багатозонний контролер.'
      },
      {
        question: 'Навіщо потрібен NTC підлоги, якщо є кімнатний датчик?',
        answer:
          'Бездротовий датчик вимірює повітря у кімнаті. Проводовий NTC потрібен для захисту підлоги та обмеження максимальної температури поверхні.'
      },
      {
        question: 'Чому не просто Aqara або Terneo?',
        answer:
          'Якщо користувач уже має потрібну екосистему, інший продукт може бути раціональним вибором. OSH фокусується на готовому room-sensor сценарії без окремого gateway для базової функції, з локальним керуванням і українською підтримкою.'
      }
    ],
    footer: {
      text: 'OSH Floor — перший продукт майбутньої лінійки OSH для опалення і домашньої енергетики.',
      marketplace: 'Публічні сторінки маркетплейсів зʼявляться після готовності першої партії.'
    }
  },
  en: {
    htmlLang: 'en',
    path: '/en/',
    alternatePath: '/',
    languageLabel: 'EN',
    seo: {
      title: 'OSH Floor — thermostat with a wireless room temperature sensor',
      description:
        'OSH Floor controls floor heating by the temperature in the room that matters, without a separate Zigbee gateway or custom smart-home automations.'
    },
    nav: [
      { href: '#scenario', label: 'Scenario' },
      { href: '#solution', label: 'How it works' },
      { href: '#product', label: 'Kit' },
      { href: '#app', label: 'Demo' },
      { href: '#trust', label: 'Trust' },
      { href: '#faq', label: 'FAQ' }
    ],
    hero: {
      eyebrow: 'OSH Floor',
      status: 'First batch in development',
      title: 'Precise temperature where it matters.',
      lead:
        'Control floor heating based on the temperature in the right room — without a separate Zigbee gateway or complex automations.',
      cta: 'Learn more',
      note:
        'The first product is the OSH Floor Starter Kit. The public version is in progress; this site frames the scenario, materials, and honest limitations.',
      facts: [
        { label: 'Reference sensor', value: 'room temperature' },
        { label: 'Local schedules', value: 'stored on device' },
        { label: 'Floor NTC', value: 'surface limit' }
      ]
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
      ]
    },
    solution: {
      eyebrow: 'Solution',
      title: 'OSH moves the measurement to the right room.',
      lead:
        'The thermostat stays on the wall, while the reference temperature comes from a supported wireless sensor.',
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
      ]
    },
    product: {
      eyebrow: 'First product',
      title: 'OSH Floor Starter Kit',
      lead:
        'The first kit concept for electric floor heating: wall thermostat, floor sensor, and a wireless room sensor.',
      status: 'In development for the first batch',
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
      ]
    },
    app: {
      eyebrow: 'Demo',
      title: 'Control on the wall and in the app.',
      lead:
        'This first site maps the future media set: dashboard, temperature history, and a short AMOLED interaction video.',
      cards: [
        {
          id: 'PH-05',
          title: 'App dashboard',
          text: 'Main screen with temperature, modes, heating status, and activity.'
        },
        {
          id: 'PH-06',
          title: 'Temperature history',
          text: 'Day/week graph with target and heating markers.'
        },
        {
          id: 'PH-07',
          title: 'Wall UI video',
          text: 'Short clip showing mode or schedule changes on the device screen.'
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
      online: ['mobile app', 'remote control', 'cloud Home Assistant', 'online history', 'OTA updates']
    },
    compatibility: {
      eyebrow: 'Compatibility',
      title: 'Supported Zigbee sensors, not every Zigbee sensor.',
      lead:
        'A Zigbee logo does not mean identical behavior. OSH should publish a tested list and a support level for each model.',
      levels: ['Official', 'Supported', 'Compatible with limitations', 'Community tested', 'Not supported']
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
      ]
    },
    faq: [
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
        answer:
          'No. OSH should support tested sensors from multiple vendors and publish a compatibility list with limitations.'
      },
      {
        question: 'Can it control multiple rooms independently?',
        answer:
          'The current OSH Floor concept controls one connected heating output. It can show multiple sensors and choose one reference, but it is not a multi-zone controller.'
      },
      {
        question: 'Why use floor NTC if there is a room sensor?',
        answer:
          'The wireless sensor measures room air. The wired NTC is used for floor protection and maximum surface temperature limiting.'
      },
      {
        question: 'Why not just use Aqara or Terneo?',
        answer:
          'If a user already has the right ecosystem, another product may be a rational choice. OSH focuses on a ready room-sensor workflow without a separate gateway for the core function, plus local controls and Ukrainian support.'
      }
    ],
    footer: {
      text: 'OSH Floor is the first product in a future OSH line for heating and home energy.',
      marketplace: 'Public marketplace pages will be added after the first batch is ready.'
    }
  }
} satisfies Record<Lang, any>;

export const assetIds = [
  'LOGO-01',
  'PH-01',
  'PH-02',
  'PH-03',
  'PH-04',
  'PH-05',
  'PH-06',
  'PH-07',
  'PH-08',
  'PH-09',
  'PH-10',
  'PH-11',
  'PH-12'
] as const;
