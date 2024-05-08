function climbingLeaderboard(ranked = [], player = []) {
  // Write your code here
  const rankedDistinct = Array.from(new Set(ranked));
  const places = [];
  for (let j = 0; j < player.length; j++) {
    while (
      rankedDistinct.length > 0 &&
      rankedDistinct[rankedDistinct.length - 1] <= player[j]
    ) {
      rankedDistinct.pop();
    }
    places.push(rankedDistinct.length + 1);
  }
  return places;
}

const cl = climbingLeaderboard(
  [100, 100, 50, 40, 40, 20, 10],
  [5, 25, 50, 120]
);

console.log(cl);
