function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b);
}

const r = aVeryBigSum([
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
]);

console.log(r);
