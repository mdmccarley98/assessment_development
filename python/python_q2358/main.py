actual = 2j
 
d1 = complex(2)
print(actual == d1)

# invalid syntax
try:
    eval('2i')
except Exception as e:
    print(e)


# value error (domain)
import math
try:
    d3 = math.sqrt(-4)
except ValueError as e:
    print(e)