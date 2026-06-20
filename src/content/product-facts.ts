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
    { model: 'Tuya ZTH-02', status: 'supported' },
    { model: 'Aqara Temperature and Humidity Sensor T1', status: 'testing' }
  ],
  isDraft: true
} satisfies ProductFacts;
