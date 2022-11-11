# Python Syntax For Loops

## Item ID
1296

## Claim
Claim 1

## Claim Behavior (evidence)
[control flow](https://docs.python.org/3/tutorial/controlflow.html): for loops,  `range()` function

## Content Target
`for loops`

## Cognitive Model 
Comprehension

## Item Type
Multiple choice

## Stem

What value will the following code snippet produce? 

## Code Snippet (optional)

```python
value = 0
for i in range(0, 10, 2):
    value += i
print(value)
```

## Answer Key

`20`

## Distractors 
### 1.
`30`

### 2.
`45`

### 3.
`8`

## Common errors, misconceptions, or irrelevant information (optional)
- `30` is the output if you include  `10` (`range()` is exclusive of the end value)
- `45` is the output if you fail to incorporate the step size of `2` and sum all the values from `0` to `9`
- `8` is the output if you update `value` and fail to recognize that `+=` increments `value` 

## Content Review

- Accuracy: ✅
- Alignment: 🤷‍ it's more of a `range()` function question than `for` loop, but combined with the `+=` part, it's sorta both.

The misconception section isn't as clear as it could be:
> `9` is the output if you update `value` and fail to recognize that `+=` increments `value` 

The distractor 9 assumes *both* `range(0, 10)` and `value = i` but the
explanation in the misconceptions section makes it sound like it's just `value = i`


```python
value = 0
for i in range(0, 10, 2):
    value = i
```
In that case, the value is `8`
