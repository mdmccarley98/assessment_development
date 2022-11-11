class MyClass:
    __a = 1

    def __new__(cls, *args, **kwargs):
        cls.__b = 1
        return super().__new__(cls, *args, **kwargs)
      
    @property
    def __c(self):
        return 1

MyClass.__d = 1        

if __name__ == '__main__':
    from pprint import pprint
    pprint(dir(MyClass))

    print(getattr(MyClass, '__a', None))
    print(getattr(MyClass, '__b', None))
    print(getattr(MyClass, '__c', None))
    print(getattr(MyClass, '__d', None))



