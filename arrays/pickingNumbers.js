function pickingNumbers(a) {
  // Write your code here
  const pickings = new Map();

  for (let i = 0; i < a.length; i++) {
    pickings.set(a[i], (pickings.get(a[i]) || 0) + 1);
  }

  let max = 0;
  let current = 0;

  pickings.forEach((pick, key) => {
    const before = pick + (pickings.get(key - 1) || 0);
    const next = pick + (pickings.get(key + 1) || 0);
    current = Math.max(before, next);
    max = current > max ? current : max;
  });

  return max;
}

const pn = pickingNumbers([4, 6, 5, 3, 3, 1]);

console.log(pn);
