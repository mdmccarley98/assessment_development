"""
Note you can use uncompyle6 to view the bytecode generated in __pycache__/lib*.pyc

"""

print(f'The value of __debug__ is: {__debug__}', )

import lib
print(lib.debug())

assert False, "This won't hit in debug mode"

