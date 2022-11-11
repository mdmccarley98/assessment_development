import re

doc = 'Mail me at example@example.com\nor example (at) example.co.com'
count = 0
for _ in range(1000000):
    matches = re.finditer(r'.*\b(\w+(@|\s*\(?at\)?\s*)\w+(\.\w+)+)\b.*', doc)
    count += sum(1 for _ in matches)

print(count)
