# Python Containers inheritance

## Item ID
1307

## Claim
Claim 2

## Claim Behavior (evidence)

[Class docs](https://docs.python.org/3/tutorial/classes.html#inheritance). Instantiating a class object and calling a method from an inherited class.

## Content Target
`classes`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem
Assume we have a class `Square` defined below and the class `Cube` which inherits from the class `Square`. 
Which of the following would calculate the surface area of a cube with a side length of `6`?

## Code Snippet (optional)
```python
class Square:
    def __init__(self, side):
        self.side = side
    def area(self):
        return self.side ** 2   

class Cube(Square):
    def surface_area(self):
        area = super().area()
        return 6 * area
```

## Answer Key
```python
print(Cube(6).surface_area())
```

## Distractors 
### 1.
```python
print(Cube().surface_area(6))
```

### 2.
```python
print(Square.Cube(6).surface_area())
```

### 3.
```python
print(Square.Cube().surface_area(6))
```
## Common errors, misconceptions, or irrelevant information (optional)

## Content Review

- Accuracy: ✅ 🔸 fixed grammar in stem, missing "calculate"
- Alignment: ✅

Fixed code formatting.
