def generator_function(): yield from range(100)

options = [
    open('README.md'),
    generator_function(),
    (i for i in range(100)),
    {i: i for i in range(100)}
]

for i, option in enumerate(options):
    print(i, iter(option) is option, hasattr(option, '__next__'))