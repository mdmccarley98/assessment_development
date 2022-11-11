"""
Reference implementation in Python.

Intended to be language agnostic.
"""

def sample_variance(array):
    mean = 0
    sum_sq_dist = 0
    i = 0
    for item in array:
        delta = item - mean
        mean += delta / (i + 1)
        sum_sq_dist += delta * (item - mean)        
        i += 1
    return sum_sq_dist / i


def distractor_1(array):
    mean = 0
    sum_sq_dist = 0
    i = 0
    for item in array:
        delta = item - mean
        mean += delta / (i + 1)
        sum_sq_dist += delta * delta
        i += 1
    return sum_sq_dist / i


def distractor_2(array):
    mean = 0
    sum_sq_dist = 0
    i = 0
    for item in array:
        delta = item - mean
        mean += delta / (i + 1)
        sum_sq_dist += (item - mean) * (mean - item)
        i += 1
    return sum_sq_dist / i


def distractor_3(array):
    mean = 0
    sum_sq_dist = 0
    i = 0
    for item in array:
        delta = item - mean
        mean += delta / (i + 1)                
        sum_sq_dist += delta ** 2 / (i + 1)
        i += 1     
    return sum_sq_dist / i

if __name__ == '__main__':
    import numpy as np
    n_iters = 50
    arr_size = 10000

    mses = np.zeros(4, dtype=np.float64)
    for i in range(n_iters):
        data = 1e5 + np.random.random(arr_size)
        var = np.var(data, ddof=1)
        for j, fn in enumerate([sample_variance, distractor_1, distractor_2, distractor_3]):
            result = fn(data)
            mses[j] += (result - var)**2

    print('MSE of each version compared to built-in var (should be zero if correct):')
    print(mses / n_iters)