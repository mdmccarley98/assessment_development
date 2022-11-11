options = [
    (i for i in range(100)),
    range(100),
    list(range(100)),
    set(range(100))
]

for i, option in enumerate(options):
    print(i, iter(option) is option, hasattr(option, '__next__'))
