# low_level_systems_understanding

## Item ID
q580

## Claim
4

## Claim Behavior (evidence)
NA

## Content Target
systems

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the missing if statement?

## Code Snippet (optional)
```python
import os

def child():
  print('\nA new child ', os.getpid())
  os._exit(0)  

def parent():
  newpid = os.fork()
  if # MISSING STATEMENT:
    child()
  else:
    pids = (os.getpid(), newpid)
    print("parent: %d, child: %d\n" % pids)
  input("wait from input")

parent()
```

## Answer Key
`newpid == 0`

## Distractors

### 1.
`newpid != 0`

### 2.
`newpid \u003c 0`

### 3.
`newpid \u003e 0`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

