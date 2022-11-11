import numpy as np
from numpy import einsum

X = np.arange(10)
Y = np.arange(1, 11)


print('Outer product:\n', einsum('i, j -> i j', X, Y))

print('Inner (dot) product:\n', einsum('i, i -> ', X, Y))

print('Elementwise Multiply:\n', einsum('i, i -> i', X, Y))

print('Transpose Outer Product:\n', einsum('i, j -> j i', X, Y))

