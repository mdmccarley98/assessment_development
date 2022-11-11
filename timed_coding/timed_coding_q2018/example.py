def count_vehicles(times, threshold):
    count = 0
    last = float('-inf')
    for t in times:
        if t > last + threshold:
            count += 1
            last = t
    return count


CASES = [
[[0, 200, 300, 600, 700], 0], 5,

### 2.
[[0, 200, 300, 600, 700], 300], 2,

### 3.
[[0, 200, 300, 600, 700], 700], 1,

### 4.
[[0,4,8],4], 2,

## Private Test Cases (NOT Seen by Candidate)
### 1.
[[1,5,10],5], 2,

### 2.
[[],10], 0,

### 3.
[[0,3,3,3,7],3], 2,

### 4.
[[0],5], 1,

### 5.
[[0,1],1], 1,

### 6.
[[0,3,3,3,7],0], 3,
]

for i in range(0, len(CASES), 2):
    args = CASES[i]
    expected = CASES[i+1]
    actual = count_vehicles(*args)

    print('FT'[actual == expected], args, actual, expected)