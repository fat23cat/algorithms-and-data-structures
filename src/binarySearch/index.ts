export function binarySearch(array: number[], target: number): number {
  let start = 0;
  let end = array.length - 1;

  while (end >= start) {
    const middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return middle;
    }
    if (target < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}
