def drawingEdge(n):
    limit = 10**9 + 7

    def power(x, y):
        res = 1
        x = x % limit
        while y > 0:
            if y & 1:
                res = (res * x) % limit
            y = y >> 1
            x = (x * x) % limit
        return res

    total_edges = n * (n - 1) // 2

    total_graphs = power(2, total_edges)

    return total_graphs

# Ejemplo de uso:
n = 991
print(drawingEdge(n))  # El resultado será 948726690