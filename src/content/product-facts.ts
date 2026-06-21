import type { ProductFacts } from './types';

export const productFacts = {
  starterKitPriceUah: 5499,
  maxCurrentAmp: 16,
  warrantyMonths: 24,
  certifications: [
    { id: 'lowVoltage', status: 'preparing' },
    { id: 'emc', status: 'preparing' },
    { id: 'radio', status: 'preparing' }
  ],
  supportedSensors: [
    { model: 'Tuya Zigbee temperature sensor — item 1005005234573063', status: 'supported' },
    { model: 'Tuya Zigbee temperature sensor — item 1005011992980900', status: 'supported' },
    { model: 'Tuya Zigbee temperature sensor — item 1005009935590269', status: 'supported' }
  ],
  isDraft: true
} satisfies ProductFacts;
