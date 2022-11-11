import numpy as np


x = np.arange(40).reshape((5, 2, 4, 1))

targets = [
   #(5, 2, 4, 1) 
       (1, 4, 2),   # works
       (5, 2, 4),    # can't left align
          (2, 4),    # can't middle align
    (5, 1, 2, 4),   # dim 2 doesn't match
]


for t in targets:
    y = np.arange(np.product(t)).reshape(t)
    try:
        print(x.shape, y.shape, (x * y).shape)
    except ValueError as e:
        print(e)