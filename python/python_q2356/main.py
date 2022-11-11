import re

items = ['apple', 'banana', 'carrot', 'dill', 'Egg', '(fennel)', '^caret']

patterns = [
    r'^[^aeiou]', # works
    r'^[aeiou]', # starting caret is start of string, not a negation caret
    r'^[^(aeiou)]',
    r'^[^a^e^i^o^u]', # matches literal caret as well - first character negates the whole range
]

for pattern in patterns:
    print('\n', pattern)
    for item in items:
        if re.search(pattern, item, re.IGNORECASE):
            print(item)
