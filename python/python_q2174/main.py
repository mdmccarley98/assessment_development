## A
x = [1, 2, 3]
y = [4, 5]

print('before:', id(x), x)
print(x.extend(y)) # returns None
print('after:', id(x), x)

## B
x = [1, 2, 3]
y = [4, 5]

print('before:', id(x), x)
print(x.__iadd__(y)) # returns x
print('after:', id(x), x)

## C
x = [1, 2, 3]
y = [4, 5]

print('before:', id(x), x)
x += y  # can't print this because this is not an expression
print('after:', id(x), x)

## D
x = [1, 2, 3]
y = [4, 5]

print('before:', id(x), x)
x = x + y
print('after:', id(x), x)