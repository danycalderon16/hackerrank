function miniMaxSum(arr) {
  // Write your code here

  let min = arr[0];
  let max = arr[0];
  let total = arr[0];
  for (let i = 1; i < arr.length; i++) {
    total += arr[i];
    if (arr[i] < min) min = arr[i];
    else if (arr[i] > max) max = arr[i];
  }

  console.log(total - max, total - min);
}

console.log(miniMaxSum([1, 3, 5, 7, 9]));
