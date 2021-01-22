function digital_root(n) {
  if (n < 10) {
    return n;
  }
  let sumOfDigits = 0;
  while (n > 0) {
    sumOfDigits += n % 10;
    n = Math.floor(n / 10);
  }
  return digital_root(sumOfDigits);
}
