import re

doc = 'Mail me at example@example.com\nor example (at) example.co.com'
count = 0
email_re = re.compile(r'\b(\w+(@|\s*\(?at\)?\s*)\w+(\.\w+)+)\b')
for _ in range(1000000):
    matches = email_re.findall(doc)
    count += len(matches)

print(count)
