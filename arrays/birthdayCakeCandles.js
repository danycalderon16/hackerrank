function birthdayCakeCandles(candles) {
  let acc = 1;
  let tallest = candles[0];

  for (let i = 1; i < candles.length; i++) {
    if (candles[i] > tallest) {
      tallest = candles[i];
      acc = 1;
    } else if (candles[i] === tallest) acc++;
  }
  return acc;
}

const r = birthdayCakeCandles([3, 2, 1, 3]);

console.log(r);
