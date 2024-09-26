import { describe, expect, it } from 'vitest';
import { bubbleSort } from './index';

describe('bubbleSort', () => {
  it('should return sorted array', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return sorted array', () => {
    expect(bubbleSort([1, 2, 45, 23, 4654, 21, 9])).toEqual([
      1, 2, 9, 21, 23, 45, 4654
    ]);
  });

  it('should return the same array', () => {
    expect(bubbleSort([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
