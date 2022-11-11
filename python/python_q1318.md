# Python Domain scope

## Item ID
1318

## Claim
Claim 6

## Claim Behavior (evidence)

[Execution Model describing scope and namespaces](https://docs.python.org/3.3/reference/executionmodel.html)

## Content Target
`scope and namespace`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem

What value will the code below print?

## Code Snippet (optional)

```python
x = "cat"

def f():
    x = "bird"

    def g():
        x = "dog"
        y = "fish"
        print(x)

    g()

f()
```

## Answer Key

dog

## Distractors 
### 1.
cat

### 2.
bird 

### 3.
fish

## Common errors, misconceptions, or irrelevant information (optional)

Variable namespace order goes `local > enclosing > global > builtin`

## Content Review

- Accuracy: ✅ it printed an extra "None"
    ```
    dog
    None
    ```
    * Fixed the code so it only prints `dog`
    * Changed stem from "What value will the code below return?" to "What value will the code below print?"
- Alignment: ✅ 
    - Said it was about "namespace" which is correct, but confusing because "namespaces" often refer to external modules as well as scope.  So I added "scope" to the target. 
    * added scope / namespace reference

* fixed `<code>` formatting to ` ```python `
