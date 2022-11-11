# Python std re

## Item ID
1639

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
> Most non-trivial applications always use the compiled form.
> -- [Library re](https://docs.python.org/3/library/re.html#module-contents) python 3 library re

## Content Target
* re
* regular expressions / regex

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You're writing an program to get email addresses from a million documents.

How can you use the `re` library to speed up the following program?

## Code Snippet (optional)
```python
import re

doc = 'Mail me at example@example.com\nor example (at) example.co.com'
count = 0
for _ in range(1000000):
    matches = re.findall(r'\b(\w+(@|\s*\(?at\)?\s*)\w+(\.\w+)+)\b', doc)
    count += len(matches)

print(count)
```

## Answer Key

Use `re.compile()` outside the loop, then use the `Pattern.findall()` function inside the loop.

## Distractors

### 1.
Separate the expressions searching for `@` and ` (at) ` into different `re.findall()` searches.

### 2.
Use `re.finditer()` instead.

### 3.
Use `string.findall()` instead.


## Common errors, misconceptions, or irrelevant information:

Compiling the expression before the loop was 15% faster:

```
time python stem.py
2000000
python stem.py  3.39s user 0.01s system 99% cpu 3.401 total

time python key.py
2000000
python key.py  2.89s user 0.01s system 99% cpu 2.907 total

time python distractor1.py
2000000
python distractor1.py  6.09s user 0.01s system 99% cpu 6.107 total

time python distractor2.py
2000000
python distractor2.py  4.72s user 0.01s system 99% cpu 4.734 total
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

