import timeit

sizes = [100 * 1000, 1000 * 1000, 10 * 1000 * 1000]

for size in sizes:
    elapsed = timeit.timeit('sorted(arr)', f'arr = list(range({size})); arr.reverse()', number=10)
    print(f'Sort reversed list size {size:09d}: {elapsed:.2f}')

for size in sizes:
    elapsed = timeit.timeit('sorted(arr)', f'import random; arr = [random.random() for _ in range({size})]', number=10)
    print(f'Sort random list size {size:09d}: {elapsed:.2f}')

# verify only 1 CPU core used during this