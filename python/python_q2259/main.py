def my_zip(*args):
    iterables = [iter(arg) for arg in args]
    while 1:
        gen = (next(it) for it in iterables)
        yield tuple(gen)

a = my_zip([0, 1, 2], [3, 4])
#print(list(a)) # Runs forever


# This doesn't fix it because tuple already consumed the StopIteration
def my_zip_bad(*args):
    iterables = [iter(arg) for arg in args]
    while 1:
        gen = (next(it) for it in iterables)
        try:
            yield tuple(gen)
        except StopIteration as e:
            raise e

# print('My zip bad:', )
# a = my_zip_bad([0, 1, 2], [3, 4])
# print(list(a))


# This does not fix it because now tuple just eats it.
def my_zip_bad2(*args):
    iterables = [iter(arg) for arg in args]
    while 1:
        gen = list(next(it) for it in iterables)
        yield tuple(gen)

# print('My zip bad 2')
# a = my_zip_bad2([0, 1, 2], [3, 4])
# print(list(a))


# This does fix it because gen is no longer a generator expression
def my_zip_good(*args):
    iterables = [iter(arg) for arg in args]
    while 1:
        gen = [next(it) for it in iterables]
        yield tuple(gen)

print('My zip good 2')
a = my_zip_good([0, 1, 2], [3, 4])
print(list(a))
print(list(my_zip_good([0, 1], [])))