import string
import random
import timeit

random.seed(0)

def make_key():
    return ''.join(random.sample(string.ascii_letters, 5))

N_a = 100000
N_b = 10000

A = {make_key() : i for i in range(N_a) }
B = {make_key(): i for i in range(N_b)}

def func1():
    return {k for k in B if k in A}


def func2():
    return {k for k in A if k in B}

def func3():
    return set(B) & set(A)


def func4():
    return set(A) & set(B)


if __name__ == '__main__':
    for i in range(1, 5):
        print(eval(f'func{i}()'))
    for i in range(1, 5):
        elapsed = timeit.timeit(f'func{i}()', globals=globals(), number=200)
        print(f'{elapsed:.2f}')
