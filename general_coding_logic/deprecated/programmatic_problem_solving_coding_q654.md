# programmatic_problem_solving

## Item ID
q654

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The below code uses multiple inheritance to implement geometries.  Fill in the missing line of code.

## Code Snippet (optional)
```python
@dataclass(frozen=True)
class Parallelogram:
    width: float
    height: float
    angle: float

class Rhombus(Parallelogram):
    """A parallelogram with equal sides."""
    def __init__(self, side, angle):
        super().__init__(side, side, angle)

class Rectangle(Parallelogram):
    """A parallelogram with 90 degree angles."""
    def __init__(self, width, height):
        super().__init__(width, height, 90)

class Square(Rhombus, Rectangle):
    """A parallelogram with equal sides and 90 degree angles."""
    def __init__(self, side):
        # (Fill in the missing line here)
```

## Answer Key
`super(Rhombus, self).__init__(side, side)`

## Distractors

### 1.
`super().__init__(side, 90)`

### 2.
`super(Square, self).__init__(side, 90)`

### 3.
`super(Rectangle, self).__init__(side, side)`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

