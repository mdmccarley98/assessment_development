

# D1
def outer():
    counter = 0

    def increment():
        global counter
        counter = counter + 1
    
    increment()
    return counter

try:
    print(outer()) 
except NameError:
    print('D1 raised OK')


# D2
try:
    s = '''
    def outer():
    counter = 0

    def increment():
        extern counter
        counter = counter + 1
    
    increment()
    return counter'''
    eval(s)

    print(outer())
except SyntaxError:
    print('D2 raised OK')


# D3
def outer():
    counter = 0

    def increment():
        import counter
        counter = counter + 1
    
    increment()
    return counter

try:
    print(outer())
except NameError:
    print('D3 raised OK')


# Correct
def outer():
    counter = 0

    def increment():
        nonlocal counter
        counter = counter + 1
    
    increment()
    return counter

print(outer())