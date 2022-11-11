registry = {}

class Meta(type):
    def __new__(meta, name, bases, attrs):
        cls = super().__new__(meta, name, bases, attrs)
        registry[name] = cls
        return cls

class A(metaclass=Meta): pass
class B(A): pass

print(registry)
