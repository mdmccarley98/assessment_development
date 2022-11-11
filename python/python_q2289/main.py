import valid


try:
    import invalid
except SyntaxError:
    print('Invalid module not loaded')

import copy_of_valid
print(copy_of_valid.x)