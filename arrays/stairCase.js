function staircase(n) {
  const space = " ";
  const cat = "#";
  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + cat.repeat(i));
  }
}

staircase(5);
