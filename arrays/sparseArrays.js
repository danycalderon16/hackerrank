/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) {
  const map = new Map();

  queries.forEach((element) => {
    map.set(element, 0);
  });

  stringList.forEach((str) => {
    if (map.has(str)) {
      map.set(str, map.get(str) + 1);
    }
  });

  return queries.map((el) => map.get(el));
}
const r = matchingStrings(
  ["aba", "baba", "aba", "xzxb"],
  ["aba", "xzxb", "ab"]
);

console.log(r);
