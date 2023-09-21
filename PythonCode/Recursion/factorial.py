# power of a base to e using recursion


def factorial(n):
    if(n == 1 ): return 1
    return n * factorial(n-1)



val = factorial(5)
print(val)