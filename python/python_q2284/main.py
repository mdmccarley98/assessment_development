import enum

bases = [
    enum.Enum,
    enum.Flag,
    enum.IntEnum,
    enum.IntFlag
]

derived1 = [base(str(base.__name__) + "Sub", dict(ZERO=0, RED=1, BLUE=2, GREEN=4)) for base in bases]
derived2 = [base(str(base.__name__) + "Sub2", dict(ZERO=0, RED=1, BLUE=2, GREEN=4)) for base in bases]



print(derived1)
#print('Is equal to its value:')
#print([d.BLUE == d.BLUE.value for d in derived1])

print('Is equal to another identical enum of the same type:')
print([d1.BLUE == d2.BLUE for d1, d2 in zip(derived1, derived2)])

def tryAdd(d):
    try:
        d.RED + d.BLUE
        return True
    except TypeError:
        return False

# print('Can be added: ')
# print([tryAdd(d) for d in derived1])

print('Coerced when zero:')
print([bool(d.ZERO) for d in derived1])

# print('Is int subclass')
# print([isinstance(d.RED, int) for d in derived1])

