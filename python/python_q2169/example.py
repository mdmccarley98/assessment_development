class Normal:
    def __init__(self, x):
        self.x = x

class Slots:
    __slots__ = ['x']
    def __init__(self, x):
        self.x = x

obj = Normal(1)
obj.y = 1

obj = Slots(1)
obj.y = 1
