# low_level_systems_understanding

## Item ID
q574

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
systems

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
You notice that your physics code is getting slower as you increase the amount of entities. Which of the following would help?

## Code Snippet (optional)
```cplusplus
typedef struct Entity_t {
  double pos_x, pos_y;
  double vel_x, vel_y;
  int health, action, mind;
  int level;
  void *equipment, *abilities,
       *effects;
} Entity;
```

## Answer Key
Move the physics data to a structure of arrays to increase cache coherency.

## Distractors

### 1.
Decrease pointer indirection by moving `equipment`, `abilities`, and `levels` into `Entity`.

### 2.
Move the entities into a linked list so that you can directly access the next item from the current.

### 3.
Rearrange the data so that `pos_x`, `pos_y`, `vel_x`, and `vel_y` are last to improve access speed.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

