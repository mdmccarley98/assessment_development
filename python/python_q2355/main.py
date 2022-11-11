import re

my_string = \
"""A line

A line
Another line
More lines with stuff in them
"""
print(my_string)

print('Empty string:')
m = list(re.finditer(r"", my_string, re.MULTILINE))
print(m)

print('Zero copies of a character:')
m = list(re.finditer(r".{0}", my_string, re.MULTILINE))
print(m)

print('Anchors (works):')
m = list(re.finditer(r"^$", my_string, re.MULTILINE))
print(m)

print('AZ (only start and end of whole string in multiline mode):')
m = list(re.finditer(r"\A\Z", my_string, re.MULTILINE))
print(m)

# Bad escape
#print('Az')
#m = list(re.finditer(r"\A\z", my_string, re.MULTILINE))