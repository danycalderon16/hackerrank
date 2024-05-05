function hackerlandRadioTransmitters(x = [], k = 0) {
  const sa = x.sort((a, b) => a - b);
  const n = sa.length;
  let acc = 0;
  let i = 0;

  while (i < n) {
    let loc = sa[i];
    while (i < n && sa[i] <= loc + k) {
      i++;
    }
    loc = sa[i - 1];
    while (i < n && sa[i] <= loc + k) {
      i++;
    }
    acc++;
  }

  return acc;
}

const r = hackerlandRadioTransmitters([1, 10, 40, 60], 10);

console.log(r);
console.log(t);
