from numbers import Number

class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector2D(self.x + other.x, self.y + other.y)
    
    def __mul__(self, scalar):
        if isinstance(scalar, Number):
            return Vector2D(self.x * scalar, self.y * scalar)
        return NotImplemented

    def __repr__(self):
        return f'Vector2D({self.x, self.y})'
    

vector = Vector2D(1, 2)
print(vector * 3)

# Blows up
try:
    print(vector * vector)
except TypeError as e:
    print(e)

try:
    print(3 * vector)
except TypeError as e:
    print(e)


class Vector2DWorking(Vector2D):
    __rmul__ = Vector2D.__mul__

vector = Vector2DWorking(1, 2)
print(vector * 3)
print(3 * vector)

vector *= 3
print(vector)