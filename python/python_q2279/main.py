"""
For 1 to 3 variables, ROT_TWO and/or ROT_THREE is used. 
ROT_TWO stores a local pointer to the interpreter stack and then swaps them. 

For more variables, BUILD_TUPLE and UNPACK_SEQUENCE are used.
The language guarantees that LHS assignments happen from left to right.
"""
import dis

print('Swap 1')
def swap1(x=1):
    x, = x,

dis.dis(swap1)


print('Swap 2')
def swap2(x=1, y=2):
    x, y = y, x

dis.dis(swap2)


print('Swap 2 Function')
def _helper(): return 2, 1
def swap2b(x=1, y=2):
    x, y = _helper()

dis.dis(swap2b)


print('Swap 3')
def swap3(x=1, y=2, z=3):
    x, y, z = y, z, x

dis.dis(swap3)

print('Swap 3b')
def swap3b(x=1, y=2, z=3):
    x, y, z = z, x, y

dis.dis(swap3b)


print('Swap 4')
def swap4(w=0, x=1, y=2, z=3):
    w, x, y, z = y, z, x, w

dis.dis(swap4)