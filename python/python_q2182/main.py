sum = 1
Σ = 2

try:
    eval('range = 1; raise = 2')
except SyntaxError:
    print('D1 raised OK')

try:
    eval('print = 1; 3l3phant = 2')
except SyntaxError:
    print('D2 raised OK')

try:
    eval('_ = 1; my variable = 2')
except SyntaxError:
    print('D3 raised OK')
