import { describe, expect, it } from 'vitest';
import { mergeSort } from './index';

describe('mergeSort', () => {
  it('should return sorted array', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return sorted array', () => {
    expect(mergeSort([1, 2, 45, 23, 4654, 21, 9])).toEqual([
      1, 2, 9, 21, 23, 45, 4654
    ]);
  });

  it('should return the same array', () => {
    expect(mergeSort([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
