export function fibRecursion(n: number) {
  return n > 1 ? fibRecursion(n - 1) + fibRecursion(n - 2) : n;
}

export function fibCycle(n: number) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}
