# Python syntax nonlocal

## Item ID
2183

## Claim
1

## Claim Behavior (evidence)
[The nonlocal statement](https://docs.python.org/3/reference/simple_stmts.html#the-nonlocal-statement)

## Content Target
`nonlocal`

## Cognitive Model 
Use

## Item Type
Multiple choice

## Stem

Complete the following Python code so that calling the function `outer` returns 1.

## Code Snippet (optional)

```python
def outer():
    counter = 0

    def increment():
        # fill in the missing statement here
        counter = counter + 1
    
    increment()
    return counter
```

## Answer Key
`nonlocal counter`

## Distractors 
### 1.
`global counter`

### 2.
`extern counter`

### 3.
`import counter`

## Common errors, misconceptions, or irrelevant information (optional)

D3 fails with ImportError if a `counter` module does not exist, and `TypeError` if it does.

## Content Review
