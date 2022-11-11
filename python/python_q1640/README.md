# Python std urlopen

## Item ID
1640

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
* [urllib.request.urlopen](https://docs.python.org/3/library/urllib.request.html) python 3 library http


## Content Target
* urllib
* urllib.requset.urlopen

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

You're writing a program in Python 3 to tell you when Python 4.0 is ready for download.

Choose the line that completes the code below:

## Code Snippet (optional)

```python
from urllib.request import urlopen

EXCITING_NEW_VERSION = 'Python 4.0'

# ** CHOOSE THE ANSWER THAT GOES HERE **

    for line in res:
        if EXCITING_NEW_VERSION in str(line):
            print("THE NEW", EXCITING_NEW_VERSION, "IS AVAILABLE FOR DOWNLOAD")
            exit(0)

exit(1)
```

## Answer Key

```python
with urlopen('https://www.python.org/downloads/') as res:
```

## Distractors

### 1.
```python
res = urlopen.get('https://www.python.org/downloads/')
if res.status == 'OK':
```

### 2.
```python
with open('https://www.python.org/downloads/') as res:
```

### 3.
```python
with urlopen.get('https://www.python.org/downloads/') as res:
```


## Common errors, misconceptions, or irrelevant information:

Even the python documentation for `urlopen` recommends using `requests` instead:
> See also The [Requests package](https://requests.readthedocs.io/en/master/) is recommended for a higher-level HTTP client interface.
> -- [urllib.request — Extensible library for opening URLs](https://docs.python.org/3/library/urllib.request.html)


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

