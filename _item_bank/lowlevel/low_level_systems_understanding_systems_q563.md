# low_level_systems_understanding

## Item ID
q563

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
systems

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Why would interrupts be disabled around a single line of code?

## Code Snippet (optional)
```c
cli(); // disable all interrupts
rocket_thrusters_enabled |= (1 << SOLID_BOOSTERS);
sei(); // re-enable interrupts
```

## Answer Key
The protected line might be compiled into multiple non-atomic CPU instructions.

## Distractors

### 1.
This tells the CPU to wait until all is quiet before starting the solid boosters.

### 2.
Interrupts could slow down this high-priority section of code.

### 3.
This is unnecessary. A single line of code is always executed as one unit.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

