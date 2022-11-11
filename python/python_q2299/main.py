import collections.abc
import itertools

class MyGenerator:
    def __init__(self, start):
        self.inner = itertools.count(start)

    def __iter__(self):
        return self

    def __next__(self):
        return next(self.inner)
    
    def send(self, value):
        print('Child received value:', value)

    def throw(self, type, value=None, traceback=None):
        print('Throw', type, value, traceback)

    def close(self):
        print('Closing child!')


def parent(gen: MyGenerator):
    yield from gen

p = parent(MyGenerator(5))
print(next(p))
print(next(p))
print(p.send(None))
print('Closing parent')
p.close()