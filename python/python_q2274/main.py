import types

def unbound(self):
    return self.x 


class MyClass:
    def __init__(self, x):
        self.x = x
obj = MyClass(1)
obj.method = types.MethodType(unbound, obj)
print('A', obj.method())


class MyClass:
    def __init__(self, x):
        self.x = x
obj = MyClass(1)
obj.method = unbound.__get__(None, MyClass)
try:
    print('B', obj.method())
except Exception as e:
    print(e)


class MyClass:
    def __init__(self, x):
        self.x = x
obj = MyClass(1)
obj.method = unbound
try:
    print('C', obj.method())
except Exception as e:
    print(e)


class MyClass:
    def __init__(self, x):
        self.x = x
obj = MyClass(1)
obj.method = classmethod(MyClass)
try:
    print('D', obj.method())
except Exception as e:
    print(e)