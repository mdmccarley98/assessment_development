"""
An iterable implements __iter__ OR __getitem__

__getitem__ style not picked up by isinstance(obj, Iterable)


https://stackoverflow.com/questions/926574/why-does-defining-getitem-on-a-class-make-it-iterable-in-python

__getitem__ style only applies to classes
    - without iter
    - whose getitem accepts integers starting at 0
"""


# Functioning iterable without __iter__
class Iterable:
    def __getitem__(self, index):
        return index
    

iterable = Iterable()
iterator = iter(iterable)
print('Made a builtin iterator of type: ', type(iterator))
print(iterator.__iter__)
print(iterator.__next__)
print(next(iterator))

# works
for x in iterable:
    if x > 10:
        break
    print(x)


# Iterator works just fine without __iter__
print('Iterator without __iter__:')
class Iterator:
    def __init__(self):
        self.count = 0
    def __next__(self):
        self.count += 1
        if self.count >= 10:
            raise StopIteration
        return self.count
    # skipping __iter__ here

class Iterable:
    def __iter__(self):
        print('Creating an iterator')
        return Iterator()
        

for x in Iterable():
    print(x)

print('Iterator may itself not be iterable:')
try:
    it = iter(Iterable())
    for x in it:
        print(x)
except TypeError as e:
    print(e)