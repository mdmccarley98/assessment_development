import os

x = 123

# Invalid, requires parens around assignment statement
#f(x = y := 0)

# Actually a f-string formatter
print(f'{x := 20}')

def f(): return 1
flag = True
# Parens mandatory, invalid syntax otherwise
if flag and (value := f()):
    print(value)

# Valid but binds to the boolean
while command := input("prompt> ") != "quit":
    print(command)