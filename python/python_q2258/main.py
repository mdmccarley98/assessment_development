from types import MethodType

class Original:
    def A(self): return False

    @staticmethod 
    def B(): return False

    @classmethod
    def C(cls): return False

    D = property(fget=lambda self: False, fset=lambda self, value: False)

class Replacement:
    def A(self): return True

    @staticmethod
    def B(): return True

    @classmethod
    def C(cls): return True

    D = property(fget=lambda self: True, fset=lambda value: True)

obj = Original()
source = Replacement()

obj.A = source.A
obj.B = source.B
obj.C = source.C
obj.D = source.D

if __name__ == '__main__':
    print(obj.A())
    print(obj.B())
    print(obj.C())
    print(obj.D)

    print(obj.__dict__)