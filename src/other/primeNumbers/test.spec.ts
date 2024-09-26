import { describe, expect, it } from 'vitest';
import { primeNumbers } from '.';

describe('primeNumbers', () => {
  it('should return prime numbers from 2 to 20', () => {
    expect(primeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
