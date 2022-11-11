

for command in input('echo: ', iter=True, end='quit'):
    print(command)

# fail:
try:
    for command in iter(input('echo: '), 'quit'):
        print(command)
except TypeError as e:
    print(e)

# fail:
for command in iter(input('echo: ')) != 'quit':
    print(command)

# Works
for command in iter(lambda: input('echo: '), 'quit'):
    print(command)

# Works (3.8+)
while (command := input('echo: ')) != 'quit':
    print(command)