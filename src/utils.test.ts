import { calculateDistance } from './utils.js';
import { test, expect } from 'vitest';

test('calculateDistance', () => {
  expect(
    calculateDistance(
      { lat1: 34.0522, lon1: -118.2437 },
      { lat2: 41.8781, lon2: -87.6298 },
    ),
  ).toBeTypeOf('number');
});
