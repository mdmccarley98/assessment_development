print(__file__)

if __debug__:
    def debug():
        """This docstring will be removed with -OO but not -O"""
        return 'This will be normally present'

else:
    def debug():
        """This docstring will be removed with -OO but not -O"""
        return "This will be present when -O or -OO is used"

while 0:
    print('This code is unreachable')

print('This code is reachable')


a = 2 + 2  # Will be constant folded

b = not a is a # Will be constant folded

c = not a in []
