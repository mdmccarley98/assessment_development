import builtins

class Cup:
    coffee = False

print('coffee in cup:', 'coffee' in dir(Cup))
print('dir():', 'Cup' in dir())

print("coffee in dir 'Cup':", 'coffee' in dir('Cup'))

print("example.py in dir:", 'example.py' in dir())

print("dir in builtins", dir in builtins)
