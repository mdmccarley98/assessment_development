# programmatic_problem_solving

## Item ID
1490

## Claim
2

## Claim Behavior (evidence)
```python
# function returns index of first matching
# element in an array
def first_index_of_element_in_array(element, array):
    for i, array_element in enumerate(array):
        # MISSING CODE
        if array_element == element:
            return i
    return -1


print(first_index_of_element_in_array(3, [7, 7, 3, 4, 5, 6, 7, 8, 9]))
print(first_index_of_element_in_array(3, []))
```
```
% python example.py
2
-1
```


## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Select the line of code that completes the function

## Code Snippet (optional)
```python
# function returns index of first matching 
# element in an array
def first_index_of_element_in_array(element, array):
    for i, array_element in enumerate(array):
        # MISSING CODE
    return -1
```

## Answer Key
```python
        if array_element == element:
            return i
```


## Distractors

### 1.
```python
        return array_element == element
```


### 2.
```python
        i += 1
```


### 3.
```python
        if element == array_element:
            return (i + 1)
```


## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

