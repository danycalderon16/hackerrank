function simpleArraySum(ar) {
  return ar.reduce((value, acc) => value + acc, 0);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
