# programmatic_problem_solving

## Item ID
q544

## Claim
4

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The following code manages the position of the main character in a video game. Which of these statements about it is most accurate?

## Code Snippet (optional)
```python
def onFrame(self):
  self.character.velocity_y += 9.81
  self.character.y += character.velocity_y
  self.character.x += character.velocity_x
  
  # ...
```

## Answer Key
If some frames take longer to compute than others, the character's vertical acceleration could be inconsistent, from one point in time to the next.

## Distractors

### 1.
If some frames take longer to compute than others, the character's vertical acceleration could be inconsistent, from one frame to the next.

### 2.
This code is memory inefficient. Rather than having separate variables — one for velocity_y, and one for velocity_x) — we should have a single variable, velocity, that tracks velocity across both axes.

### 3.
These operations are in the wrong order. We should first add the character's velocity to its position, and then add the acceleration constant to its velocity.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

