/**  
 * wo children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
 * **/

function countWaysToDivideChocolate(s = [], d = 0, m = 0) {
  let rigth = 0;

  let w = 0;
  for (let i = 0; i < s.length; i++) {
    rigth = i + m;
    const acc = s.slice(i, rigth).reduce((a, b) => a + b, 0);
    if (acc === d) w++;
  }

  return w;
}

console.log(countWaysToDivideChocolate([1, 2, 1, 3, 2], 3, 2));
