from collections import Counter, defaultdict
from typing import Type

class A(Counter, defaultdict): pass
class B(defaultdict, Counter): pass

try:
    class C(A, B): pass
except TypeError as e:
    print('Not linearizable, as expected')
    print(e)

try:
    class C(defaultdict, A): pass
except TypeError as e:
    print('Not linearizable, as expected')
    print(e)
