import enum

# Valid - green is alias to red
class ColorA(enum.Enum):
    RED = 1
    GREEN = 1


# Error at definition time
"""
try:
    class ColorB(enum.Enum):
        RED = 1
        RED = 2
except TypeError as e:
    print(e)
"""
