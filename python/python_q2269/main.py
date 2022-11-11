"""
super(Singleton, cls) means search cls.__mro__, starting after the position of Singleton.
super() inside a method definition fills the current class for first arg using __class__, and self/cls

"""

def test():
    class A(Singleton): pass
    class B(Singleton): pass

    a1 = A()
    a2 = A()
    assert a1 is a2

    b1 = B()
    b2 = B()
    assert b1 is b2
    assert a1 is not b1


# Correct:
class Singleton:
    _instances = {}

    def __new__(cls, *args, **kwargs):
        instance = cls._instances.get(cls)
        if instance is None:
            instance = super(Singleton, cls).__new__(cls, *args, **kwargs)
            cls._instances[cls] = instance
        return instance

test()

# D1
class Singleton:
    _instances = {}

    def __new__(cls, *args, **kwargs):
        instance = cls._instances.get(cls)
        if instance is None:
            instance = super(cls).__new__(cls, *args, **kwargs)
            cls._instances[cls] = instance
        return instance

try:
    test()
except Exception as e:
    print('D1 fail as expected')
    print(e)

# D2
class Singleton:
    _instances = {}

    def __new__(cls, *args, **kwargs):
        instance = cls._instances.get(cls)
        if instance is None:
            instance = super(cls, Singleton).__new__(cls, *args, **kwargs)
            cls._instances[cls] = instance
        return instance

try:
    test()
except Exception as e:
    print('D2 fail as expected')
    print(e)


# D3
class Singleton:
    _instances = {}

    def __new__(cls, *args, **kwargs):
        instance = cls._instances.get(cls)
        if instance is None:
            instance = __class__.__new__(cls, *args, **kwargs)
            cls._instances[cls] = instance
        return instance

try:
    test()
except Exception as e:
    print('D3 fail as expected')    
    print(e)