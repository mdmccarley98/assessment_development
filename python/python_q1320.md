# Python std datetime

## Item ID
1320

## Claim
Claim 4

## Claim Behavior (evidence)

[Source](https://docs.python.org/3/library/datetime.html). Using the Python `datetime` module.

## Content Target
`datetime`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem
Which of the following takes the date_string `01/21/2020` for January 21st, 2020, and prints the epoch POSIX timestamp?

## Code Snippet (optional)
```python
from datetime import datetime

date_string = "01/21/2020"
```

## Answer Key

```python
print(datetime.strptime(date_string, "%m/%d/%Y").timestamp())
```

## Distractors 
### 1.
```python
print(datetime.strptime(date_string, "%m/%d/%Y").ctime())
```

### 2.
```python
print(datetime.strptime(date_string, "%M/%D/%Y").timestamp())
```

### 3.
```python
print(datetime.strptime(date_string, "%M/%D/%Y").ctime())
```

## Common errors, misconceptions, or irrelevant information (optional)

Epoch time is the number of seconds since January 1st, 1970.
This is a widely used time format.

`ctime()` prints the time in the same format as the `C` language function `ctime`

* `%m` is for months
* `%d` is for days
* `%Y` is for years
* `%M` is of minutes
* `%D` is not a valid format specifier

## Content Review

- Accuracy: 🔸
    * "Common errors" said `%M` is for non zero padded months, but it's for `zero padded minutes: https://docs.python.org/3/library/datetime.html#strftime-strptime-behavior
    * fixed "Common errors"
    * clarified USA date format as January 21st
    * clarified Epoch as POSIX timestamp
- Alignment: 🔸
    * moved import to top
    * changed distractors to datetime functions or format, instead of `import` or not
    * changed awkward `datetime.datetime` to `datetime` by importing `from datetime import datetime`

* fixed `<code>` formatting to ` ```python `
