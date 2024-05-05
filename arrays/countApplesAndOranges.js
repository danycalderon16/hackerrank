/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples = [], oranges = []) {
  // Write your code here
  const applesCount = apples.reduce((acc, el) => {
    const distance = a + el;
    console.log(a, el, distance);
    if (distance <= t && distance >= s) return acc + 1;
    else return acc;
  }, 0);
  const orangesCount = oranges.reduce((acc, el) => {
    const distance = b + el;
    console.log(b, el, distance);
    if (distance <= t && distance >= s) return acc + 1;
    else return acc;
  }, 0);
  console.log(applesCount, orangesCount);
}

const r = countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
