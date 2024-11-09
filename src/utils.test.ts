import { calculateDistance } from './utils.js';
import { test, expect } from 'vitest';

test('Should return a type of number', () => {
  expect(
    calculateDistance(
      { lat: 34.0522, lon: -118.2437 },
      { lat: 41.8781, lon: -87.6298 },
    ),
  ).toBeTypeOf('number');
});

test('Should return a distance greater than zero if points are not the same', () => {
  expect(
    calculateDistance(
      { lat: 34.0522, lon: -118.2437 },
      { lat: 41.8781, lon: -87.6298 },
    ),
  ).toBeGreaterThan(0);
});
