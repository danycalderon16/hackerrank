function formingMagicSquare(s) {
  // Write your code here
  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = Infinity;

  magicSquares.forEach((ms) => {
    let curCost = 0;
    for (let i = 0; i < ms.length; i++) {
      for (let j = 0; j < ms[i].length; j++) {
        const a = ms[i][j];
        const b = s[i][j];
        curCost += Math.abs(a - b);
      }
    }
    console.log({ curCost, minCost });
    minCost = curCost < minCost ? curCost : minCost;
  });

  return minCost;
}

const r = formingMagicSquare([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
]);

console.log(r);
