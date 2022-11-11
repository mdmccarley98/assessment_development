from numbers import Number

template = """
class MyClass:
    def __mul__(self, other):
        if isinstance(other, MyClass):
            pass # the operation succeeds
        else:
            %s
"""

completions = [
    'return NotImplemented',
    'raise NotImplementedError',
    "raise TypeError(f\"unsupported operand type(s) for *: 'MyClass' and '{other.__class__.__name__}'\")",
    'return other.__rmul__(self)',
]

for completion in completions:
    try:
        print(completion)
        exec(template % completion, globals())
        obj = MyClass()
        other = object()

        obj * other
    except Exception as e:
        print('\t', e)
    else:
        print('\tOK!')