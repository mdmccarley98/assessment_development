from collections import OrderedDict

class PrintingDict(dict):
    def __setitem__(self, k, v):
        print(f'Setting {k} to {v}')
        return super().__setitem__(k, v)


class A(PrintingDict, OrderedDict, dict): pass

class B(OrderedDict, PrintingDict, dict): pass
 
try:
    class C(dict, PrintingDict, OrderedDict): pass
except TypeError as e:
    print(e)

try:
    class D(PrintingDict, dict, OrderedDict): pass
except TypeError as e:
    print(e)


print(A.__mro__)
print(B.__mro__)


print('A:')
a = A()
for i in range(10):
    a[10-i] = i
print(a)

print('B:')
b = B()
for i in range(10):
    b[10-i] = i
print(b)