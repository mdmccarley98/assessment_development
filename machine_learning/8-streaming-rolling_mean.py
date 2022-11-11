from numpy import zeros

def rolling(array, output_array, window_size):
    total = 0.0
    buffer = zeros(window_size) # An array of length window_size filled with zeros
    i = 0
    for x in array:
        total += x
        if i >= window_size:
            total -= buffer[i % window_size]
        buffer[i % window_size] = x        
        output_array[i] = total / (i+1 if i < window_size else window_size)
        i += 1


def distractor_1(array, output_array, window_size):
    total = 0.0
    buffer = zeros(window_size)
    i = 0
    for x in array:
        total += x
        if i >= window_size:
            total -= buffer[i - window_size + 1]
        buffer[i % window_size] = x
        output_array[i] = total / (i+1 if i < window_size else window_size)
        i += 1

def distractor_2(array, output_array, window_size):
    total = 0.0
    buffer = zeros(window_size)
    i = 0
    for x in array:
        total += x
        if i >= window_size:
            total -= buffer[i - window_size]
        buffer[i % window_size] = x
        output_array[i] = total / (i+1 if i < window_size else window_size)
        i += 1


def distractor_3(array, output_array, window_size):
    total = 0.0
    buffer = zeros(window_size)
    i = 0
    for x in array:
        total += x
        if i >= window_size:
            total -= buffer[window_size - (i % window_size) - 1]
        buffer[i % window_size] = x
        output_array[i] = total / (i+1 if i < window_size else window_size)
        i += 1

if __name__ == '__main__':
    import numpy as np
    fns = [rolling, distractor_1, distractor_2, distractor_3]

    print('\nShort example\n')
    for j, fn in enumerate(fns):
        print(fn.__name__)
        try:
            array = np.array(list(range(2, 12, 2)))
            out = np.zeros_like(array)
            fn(array, out, window_size=3)
            print(out)
        except Exception as e:
            print(e)

    print('\nLong example\n')
    for j, fn in enumerate(fns):
        print(fn.__name__)
        try:
            array = np.array(list(range(2, 24, 2)))
            out = np.zeros_like(array)
            fn(array, out, window_size=3)
            print(out)
        except Exception as e:
            print(e)
