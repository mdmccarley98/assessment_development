import re

doc = 'Mail me at example@example.com\nor example (at) example.co.com'
count = 0
# 110% slower to use separate expressions
# but 13% faster in my test to use compiled separate vs separate
# symbol_re = re.compile(r'\b(\w+@\w+(\.\w+)+)\b')
# word_re = re.compile(r'\b(\w+\s*\(?at\)?\s*\w+(\.\w+)+)\b')
for _ in range(1000000):
    symbol_matches = re.findall(r'\b(\w+@\w+(\.\w+)+)\b', doc)
    word_matches = re.findall(r'\b(\w+\s*\(?at\)?\s*\w+(\.\w+)+)\b', doc)
    # symbol_matches = symbol_re.findall(doc)
    # word_matches = word_re.findall(doc)
    count += len(symbol_matches) + len(word_matches)

print(count)
