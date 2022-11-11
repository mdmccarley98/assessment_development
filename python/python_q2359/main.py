import numpy as np

a = np.arange(5)
b = np.arange(10).reshape(-1, 5)
c = np.arange(1).reshape(1, 1)

# note this doesn't work: np.add takes exactly 2 input arguments
# print(np.add(a, b, c))
# you have to do np.add(np.add(a, b), c) and a + b + c desugars to this.


for name, obj in np.__dict__.items():
    if isinstance(obj, np.ufunc):
        print(name, obj.nin, obj.nout)