function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let countMin = 0;
  let countMax = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) {
      min = scores[i];
      countMin++;
    }
    if (scores[i] > max) {
      max = scores[i];
      countMax++;
    }
  }

  return [countMax, countMin];
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords(scores));
