function hurdleRace(k, height) {
  // Write your code here
  let piv = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] <= k) continue;
    const diff = height[i] - k;
    piv = piv + k >= height[i] ? piv : diff;
  }

  return piv;
}

console.log(hurdleRace(4, [2, 6, 4, 5, 1]));
