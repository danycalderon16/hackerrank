function diagonalDifference(arr) {
  let i = arr.length;
  let leftToRight = 0;
  let rightToLeft = 0;
  for (let j = 0; j < i; j++) {
    leftToRight += arr[j][j];
    rightToLeft += arr[j][i - 1 - j];
  }
  return Math.abs(leftToRight - rightToLeft);
}
const r = diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log(r);
