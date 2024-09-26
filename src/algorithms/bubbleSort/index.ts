export function bubbleSort(array: number[]): number[] {
  const length = array.length;

  for (let i = 0; i <= length; i++) {
    let isSwapped = false;
    for (let j = 0; j <= length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      return array;
    }
  }

  return array;
}
