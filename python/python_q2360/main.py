import numpy as np
from numpy.lib.stride_tricks import as_strided

x = np.arange(0, 20, 2, dtype='float32')
N = len(x)
print(x)
w = 3
big = as_strided(x, (N - w + 1, w), (4, 4))
print(big)
# 1 or -1 are equivalent
print(big.mean(axis=-1))

