class MyClass:
    def __a(self):
        return 1

    def __init__(self):
        self.__b = 1
        setattr(self, '__c', 1)

    @property
    def __d(self):
        return 1



   
if __name__ == '__main__':
    from pprint import pprint
    obj = MyClass()
    pprint(dir(obj))
    print(getattr(obj, '__a', None))
    print(getattr(obj, '__b', None))
    print(getattr(obj, '__c', None))
    print(getattr(obj, '__d', None))