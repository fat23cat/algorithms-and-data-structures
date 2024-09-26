import { describe, expect, it } from 'vitest';
import { binarySearch } from './index';

describe('binarySearch', () => {
  it('should return target item index', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 3)).toBe(2);
  });

  it('should return -1 if target was not found', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 42)).toBe(-1);
  });
});
