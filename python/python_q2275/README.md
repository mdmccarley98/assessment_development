# Python 

## Item ID
2275

## Claim
3

## Claim Behavior (evidence)

[PEP 3104 - Access to Names in Outer Scopes](https://www.python.org/dev/peps/pep-3104/)

## Content Target
Closures

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Suppose you are using a `Button` class from a user interface library, where  `Button` instance has a `callback` attribute which is invoked when the user clicks the button.

Given the following code, what will be printed when `buttons[0]` is clicked?


## Code Snippet (optional)
```python

buttons = [Button(), Button(), Button()] 
for i, button in enumerate(buttons):
    button.callback = lambda: print(f'Button {i} was clicked')

```

## Answer Key

"Button 2 was clicked"

## Distractors

### 1.

"Button 0 was clicked"

### 2.

"Button 1 was clicked"

### 3.

"Button 3 was clicked"


## Common errors, misconceptions, or irrelevant information:

The desired behavior is to see "Button 0 was clicked" but at the time the lambda executes, the last value of `i` is used which is 2. 

To achieve the desired behavior the lambda should capture the current value of `i` instead.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

