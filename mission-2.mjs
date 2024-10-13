function sumOdd(n) {
  // 재귀 로직
  if (n <= 0) return 0;
  return n % 2 === 1 ? sumOdd(n - 2) + n : sumOdd(n - 1);
}

console.log(sumOdd(10)); // 25
