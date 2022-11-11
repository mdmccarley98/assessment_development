def modify_inplace_A(src, dest):
    src = dest[:]

def modify_inplace_B(src, dest):
    for item, item2 in zip(src, dest):
        item = item2

def modify_inplace_C(src, dest):
    for i, item in enumerate(dest):
        src[i] = item

def modify_inplace_D(src, dest):
    for i, item in enumerate(src):
        item = dest[i]


for fn in [modify_inplace_A, modify_inplace_B, modify_inplace_C, modify_inplace_D]:
    src = [0, 1, 2]
    id_src = id(src)
    dest = [3, 4, 5]
    fn(src, dest)

    print(fn.__name__)
    print('\t', src, dest)
    if id_src == id(src) and src == dest:
        print('\tWorks!')
    else:
        print('\tDoes not work')