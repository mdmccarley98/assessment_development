def f(x, y): pass

try:
    eval('[for x in range(5) for y in range(5) f(x, y) if f(x, y) > 0]')
except SyntaxError:
    print('D1 raised OK')

try:
    eval('[f(x, y) if f(x, y) > 0 for x in range(5) for y in range(5)]')
except SyntaxError:
    print('D2 raised OK')

try:
    eval('[for x in range(5) for y in range(5) if f(x, y) > 0 f(x, y)]')
except SyntaxError:
    print('D3 raised OK')

try:
    [f(x, y) for x in range(5) if f(x, y) > 0 for y in range(5)]
except UnboundLocalError:
    print('Correct answer raised OK')