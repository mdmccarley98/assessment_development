"""Reference implementation in Python."""

from random import randrange

def sample(array, r):
    result = []
    i = 0
    for item in array:
        if i < r:
            result.append(item)
        else:            
            index_to_overwrite = randrange(i + 1) 
            if index_to_overwrite < r:
                result[index_to_overwrite] = item
        i += 1
    return result

# Last item has 1/r chance to be in the output, not r/N
def distractor_1(array, r):
    result = []
    i = 0
    for item in array:
        if i < r:
            result.append(item)
        else:            
            index_to_overwrite = randrange(r)
            if index_to_overwrite < r:
                result[index_to_overwrite] = item
        i += 1
    return result

# Last element has r/(N-1) to be in the output, not r/N
def distractor_2(array, r):
    result = []
    i = 0
    for item in array:
        if i < r:
            result.append(item)
        else:            
            index_to_overwrite = randrange(i) # fill in the missing expression here
            if index_to_overwrite < r:
                result[index_to_overwrite] = item
        i += 1
    return result


def distractor_3(array, r):
    result = []
    i = 0
    for item in array:
        if i < r:
            result.append(item)
        else:            
            index_to_overwrite = randrange(r + 1) # fill in the missing expression here
            if index_to_overwrite < r:
                result[index_to_overwrite] = item
        i += 1
    return result

if __name__ == '__main__':
    n_iters = 20000
    iter_size = 10
    reservoir_size = 5

    print('Frequencies of each number from [0-10) selected (should be roughly uniform)')
    for fn in [sample, distractor_1, distractor_2, distractor_3]:        
        print(fn.__name__)
        results = [0 for _ in range(iter_size)]
        try:
            for i in range(n_iters):
                for result in fn(range(iter_size), reservoir_size):
                    results[result] += 1
        except ValueError:
            pass
        print(results)