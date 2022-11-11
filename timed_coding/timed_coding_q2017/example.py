def vowels_to_front(s):
    return ''.join(sorted(s, key=lambda c: not c in 'AEIOUaeiou'))

CASES = [
["abcde"], "aebcd",

### 2.
["aebcdae"], "aeaebcd",

### 3.
["AbCde"], "AebCd",

## Private Test Cases (NOT Seen by Candidate)
### 1.
["grtHHBklJvexrKUIaDAT"], "eUIaAgrtHHBklJvxrKDT",

### 2.
["NUXqDWBJQoJSYETEcKPG"], "UoEENXqDWBJQJSYTcKPG",

### 3.
["yVkEbDiMEBOZwBmLaHii"], "EiEOaiiyVkbDMBZwBmLH",

### 4.
["gbDAhlnnIVxEwGVxkItc"], "AIEIgbDhlnnVxwGVxktc",

### 5.
["ZPlHGUZtvInfVnZxWrST"], "UIZPlHGZtvnfVnZxWrST",
]

for i in range(0, len(CASES), 2):
    arg, = CASES[i]
    expected = CASES[i+1]
    actual = vowels_to_front(arg)

    print('FT'[actual == expected], arg, actual, expected)