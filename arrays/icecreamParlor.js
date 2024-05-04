function icecreamParlor(m, arr) {
  const map = new Map();
  map.set(m - arr[0], 1);
  for (let i = 1; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return [map.get(arr[i]), i + 1];
    } else map.set(m - arr[i], i + 1);
  }

  return [];
}

const r = icecreamParlor(6, [1, 3, 4, 5, 6]);
console.log(r);
