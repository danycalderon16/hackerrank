function getTotalX(a, b) {
  // Write your code here
  const sa = a.sort((a, b) => a - b);
  const sb = b.sort((a, b) => a - b);
  const multiplos = [];

  const heightA = sa[sa.length - 1];
  let piv = heightA;

  while (piv <= sb[0]) {
    multiplos.push(piv);
    piv = piv + heightA;
  }

  for (let i = 0; i < sa.length; i++) {
    let j = 0;
    while (j < multiplos.length) {
      if (multiplos[j] % sa[i] === 0) j++;
      else multiplos.splice(j, 1);
    }
  }

  for (let i = 0; i < sb.length; i++) {
    let j = 0;
    while (j < multiplos.length) {
      if (sb[i] % multiplos[j] === 0) j++;
      else multiplos.splice(j, 1);
    }
  }
  return multiplos.length;
}

// 4-8-16

const gtx = getTotalX([2, 4], [16, 32, 96]);
