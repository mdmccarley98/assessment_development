import re

# R or equivalently r means backslashes are treated as normal characters.
# This is a 9 character string containing 7 backslashes.
my_string = R'\ \\ \\\\'
print('Target string:', len(my_string), my_string)


pats = [
    '\\\\', # 2-length string containing two backslashes - works.
    '\\',  # 1-length string containing one backslash. Not a valid regexp.
    #r'\', # unterminated string literal - breaks
    R'\\\\'  # 4 literal backslashes - matches a pair of backslashes
]

for pat in pats:
    print('\nPattern: ', pat)
    try:
        m = re.findall(pat, my_string)
    except Exception as e:
        print(e)
    else:
        print(len(m), m)
