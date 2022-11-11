class Final(type):
    def __new__(meta, name, bases, attrs):
        print('D1:', Final in bases)
        print('D2:', issubclass(meta, Final))
        print('D3:', any(issubclass(b, Final) for b in bases))
        print('Correct:', any(isinstance(b, Final) for b in bases))
        return super().__new__(meta, name, bases, attrs)

print('Creating ThisIsSealed: check should be False')
class Sealed(metaclass=Final): pass
print('Creating ThisShouldFail: check should be True')
class ShouldFail(Sealed): pass