def modify_inplace_A(src, dest):
    src[0:len(dest)] = dest

def modify_inplace_B(src, dest):
    src[:len(dest)] = dest

def modify_inplace_C(src, dest):
    src[::-1] = dest

def modify_inplace_D(src, dest):
    src[0:len(src)] = dest


for fn in [modify_inplace_A, modify_inplace_B, modify_inplace_C, modify_inplace_D]:
    src = [0, 1, 2, 3, 4]
    id_src = id(src)
    dest = [3, 4, 5, 6]
    print(fn.__name__)

    try:
        fn(src, dest)
    except Exception as e:
        print('\t', e)
        continue

    print('\t', src, ',', dest)
    if id_src == id(src) and src == dest:
        print('\tWorks!')
    else:
        print('\tDoes not work')