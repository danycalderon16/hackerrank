"use strict";
/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let first = 0;
  let second = 0;

  a.map((el, index) =>
    el > b[index] ? first++ : el < b[index] ? second++ : second
  );

  return [first, second];
}

function main() {
  const a = [1, 2, 3];

  const b = [3, 2, 1];

  const result = compareTriplets(a, b);

  console.log(result);
}

main();
