function chooseBestSum(t, k, ls) {
  if (ls.length < k) {
    return null;
  }

  let maxSum = 0;

  for (let i = 0; i < ls.length - 2; i++) {
    for (let j = i + 1; j < ls.length - 1; j++) {
      for (let k = j + 1; k < ls.length; k++) {
        let sum = ls[i] + ls[j] + ls[k];
        if (maxSum < sum && sum <= t) maxSum = sum;
      }
    }
  }

  return maxSum === 0 ? null : maxSum;
}
