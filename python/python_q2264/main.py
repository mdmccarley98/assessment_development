from typing_extensions import ParamSpecKwargs


class Root: pass
class Second(Root): pass
class BaseA(Root): pass
class BaseB(Second): pass
class Derived(BaseA, BaseB): pass

print([c.__name__ for c in Derived.__mro__])