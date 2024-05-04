function icecreamParlor(m, arr) {
  const map = new Map();

  map.set(m - arr[0], arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return [map.get(arr[i]), arr[i]];
    } else map.set(m - arr[i], arr[i]);
  }

  return -1;
}

const r = icecreamParlor(4, [10, 11, 4, 5, 3, 1]);
console.log(r);
