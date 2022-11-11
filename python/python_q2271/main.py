class MyClass:
    __slots__ = ('x', 'y')

    z = 1

    def __init__(self, x, y):
        self.x = x
        self.y = y

class MyDerived(MyClass):
    pass

if __name__ == '__main__':
    obj = MyClass(1, 2)

    try:
        print(vars(obj))
    except TypeError as e:
        print(e)


    print(dir(obj))

    obj2 = MyDerived(1, 2)
    print('derived')
    try:
        print(vars(obj))
    except TypeError as e:
        print(e)


    print(dir(obj))