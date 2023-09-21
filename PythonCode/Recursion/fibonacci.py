# fib(4) // 3
# fib(10) // 55
# fib(28) // 317811
# fib(35) // 9227465


def fibonacci(num):
    #1, 1, 2, 3, 5, 8
    if(num <= 2): return 1

    return fibonacci(num - 1) + fibonacci(num - 2)


val = fibonacci(3)
print(val)

