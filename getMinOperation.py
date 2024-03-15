import math

def getMinOperations(n):
    count = 0
    
    while n > 0:
        if n % 2 == 0:
            n //= 2
        else:
            n -= 1
        count += 1
    
    return count

# Ejemplo de uso:
n = 5
print(getMinOperations(n))  # Output: 2