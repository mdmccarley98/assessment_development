from collections.abc import Hashable

class A:
    __hash__ = None

class B:
    def __eq__(self, other): return False

class C:
    def __hash__(self): raise TypeError

class D: pass


print(isinstance(A(), Hashable))
print(isinstance(B(), Hashable))
print(isinstance(C(), Hashable))
print(isinstance(D(), Hashable))