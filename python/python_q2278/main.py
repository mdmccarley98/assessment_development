# Optimizes to tuple
def func_a(x):
    return x in [2, 3, 5, 7, 11]


def func_b(x):
    return x in (2, 3, 5, 7, 11)


# Optimizes to frozenset
def func_c(x):
    return x in {2, 3, 5, 7, 11}

if __name__ == '__main__':  
    import dis
    print('Disassembly of LIST:')
    print(dis.dis(func_a))
    print('\n\nDisassembly of TUPLE')
    print(dis.dis(func_b))
    print('\n\nDisassembly of SET')
    print(dis.dis(func_c))