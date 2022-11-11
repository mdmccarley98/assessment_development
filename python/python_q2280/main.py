arr = [1,2,3]

def my_append_a(item):
    arr += [item]

def my_append_b(item): 
    arr[len(arr)] = item

def my_append_c(item):
    # works
    #arr[-1:] = [arr[-1], item]
    arr[-1:] = [item]

def my_append_d(item):
    arr[len(arr):] = [item]



if __name__ == '__main__':
    try:
        my_append_a(4)
    except Exception as e:
        print(e)
    print(arr)

    try:
        my_append_b(5)
    except Exception as e:
        print(e)
    print(arr)

    try:
        my_append_c(6)
    except Exception as e:
        print(e)
    print(arr)

    my_append_d(7)
    print(arr)

