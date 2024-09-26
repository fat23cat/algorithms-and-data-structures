export function primeNumbers(n: number): number[] {
  const result: number[] = [];

  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      result.push(i);
    }
  }

  return result;
}
