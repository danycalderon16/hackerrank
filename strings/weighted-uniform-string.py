

WEIGHTS = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26
}

def weightedUniformStrings(s, queries):
  grupos = set()
  i = 0
  J = 1
  last = s[0]
  
  for l in s:
    if i == 0:
      grupos.add(WEIGHTS[l])
      i += 1
      last = l
      continue
    
    if l == last:
      grupos.add(WEIGHTS[l] * (J + 1))
      J += 1
    else:
      grupos.add(WEIGHTS[l])
      J = 1
    
    i += 1
    last = l

  return ["Yes" if el in grupos else "No" for el in queries]
if __name__ == '__main__':
   
  res = weightedUniformStrings("abccddde", [1, 3, 12, 5, 9, 10])

  print(res)