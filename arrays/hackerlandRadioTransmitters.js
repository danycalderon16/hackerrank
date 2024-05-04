function hackerlandRadioTransmitters(x = [], k = 0) {
  const sa = x.sort((a, b) => a - b);
  const n = sa.length;
  let acc = 0;
  let i = 0;

  while (i < n) {
    let cover = sa[i];
    while (i < n && sa[i] <= cover + k) {
      i++;
    }
    cover = sa[i - 1];
    while (i < n && sa[i] <= cover + k) {
      i++;
    }
    acc++;
  }

  return acc;
}

const r = hackerlandRadioTransmitters([1, 2, 3, 4, 5, 10], 5);
const t = hackerlandRadioTransmitters([7, 2, 4, 6, 5, 9, 12, 11], 2);

console.log(r);
console.log(t);
