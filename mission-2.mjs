function sumOdd(n) {
  // 재귀 로직
  if (n <= 0) return 0;
  const isOdd = n % 2 === 1;
  return sumOdd(isOdd ? n - 2 : n - 1) + (isOdd ? n : 0);
}

console.log(sumOdd(10)); // 25
