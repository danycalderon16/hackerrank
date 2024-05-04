function hackerlandRadioTransmitters(x = [], k = 0) {
  // Write your code here
  // k = 5
  // i  0 1 2 3 4 5
  // sa 1 2 3 4 5 10
  // c = 10
  // fh = 0
  // acc = 1
  //         c    sa[i]  sa[fh]
  // i = 1 | 10 - (2   -   1   ) = 9  - false + falso = falso
  // i = 2 | 10 - (3   -   1   ) = 8  - false + falso = falso
  // i = 3 | 10 - (4   -   1   ) = 7  - false + falso = falso
  // i = 4 | 10 - (5   -   1   ) = 6  - false + falso = falso
  // i = 5 | 10 - (10  -  1   )  = 1  - false + true = true

  const cover = k * 2;
  const sa = x.sort((a, b) => a - b);
  let acc = 1;
  let fh = 0; // first house
  for (let i = 1; i < sa.length; i++) {
    if (cover - (sa[i] - sa[fh]) <= 0) {
      acc += 1;
      fh = i + 1;
    }
  }

  return acc;
}

const r = hackerlandRadioTransmitters([1, 2, 3, 4, 5, 10], 5);
const t = hackerlandRadioTransmitters([7, 2, 4, 6, 5, 9, 12, 11], 2);

console.log(r);
console.log(t);
