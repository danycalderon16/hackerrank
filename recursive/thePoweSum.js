function powerSum(X, N) {
  return recusive(X, N, 1);
}

function recusive(total, power, num) {
  let val = total - Math.pow(num, power);

  if (val === 0) {
    return 1;
  } else if (val < 0) {
    return 0;
  }

  return recusive(val, power, num + 1) + recusive(total, power, num + 1);
}

const r = powerSum(100, 2);
