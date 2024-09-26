import { describe, expect, it } from 'vitest';
import { fibCycle, fibRecursion } from '.';

describe('fibonacci', () => {
  describe('fibRecursion', () => {
    it('should return first 7 fibonacci numbers', () => {
      expect(fibRecursion(7)).toBe(13);
    });
  });

  describe('fibCycle', () => {
    it('should return first 7 fibonacci numbers', () => {
      expect(fibCycle(7)).toBe(13);
    });
  });
});
