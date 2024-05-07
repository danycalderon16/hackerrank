function kangaroo(x1, v1, x2, v2) {
  if ((x1 < x2 && v1 <= v2) || (x1 > x2 && v1 >= v2)) {
    return "NO";
  }
  let pos1 = x1;

  let pos2 = x2;

  while (pos1 <= pos2) {
    pos1 += v1;
    pos2 += v2;

    if (pos1 == pos2) {
      return "YES";
    }
  }

  return "NO";
}

const k = kangaroo(0, 1, 1, 1);

console.log(k);
