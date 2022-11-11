def a():
    yield 1
    yield 2

def b():
    yield 3
    yield 4
    print('This print statement does not appear.')
    yield 5


print(list(zip(a(), b())))

