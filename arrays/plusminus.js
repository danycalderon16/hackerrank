function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.map((el) => {
    if (el > 0) positive++;
    else if (el < 0) negative++;
    else zero++;
  });

  console.log((positive / arr.length).toFixed(6) ?? 0.0);
  console.log((negative / arr.length).toFixed(6) ?? 0.0);
  console.log((zero / arr.length).toFixed(6) ?? 0.0);
}

plusMinus([1, -1, 0]);

// console.log(r);
