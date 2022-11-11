"""Reference implementation in Python."""

import random

def randint(a): return random.randint(0, a)

def choose(array):
    result = None
    i = 0
    for item in array:
        if randint(i) == 0:
            result = item
        i += 1
    return result

# Heavily biased towards the end of the array
def distractor_1(array):
    result = None
    i = 0
    for item in array:
        if randint(i) > 0:
            result = item
        i += 1
    return result


# ValueError for empty range
def distractor_2(array):
    result = None
    i = 0
    for item in array:
        if randint(i - 1) > 0:
            result = item
        i += 1
    return result

# Heavily biased towards the end of the array
def distractor_3(array):
    result = None
    i = 0    
    for item in array:
        if randint(i) < i:
            result = item
        i += 1
    return result


if __name__ == '__main__':
    n_iters = 10000
    iter_size = 10

    print('Frequencies of each number from [0-10) selected (should be roughly uniform)')
    for fn in [choose, distractor_1, distractor_2, distractor_3]:
        print(fn)
        results = [0 for _ in range(iter_size)]
        try:
            for i in range(n_iters):
                results[fn(range(iter_size))] += 1
        except ValueError:
            pass
        print(results)