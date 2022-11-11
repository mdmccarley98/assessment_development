# General Coding Logic - Logical Expression Reduction

## Item ID
2855

## Claim
1: `programming_logic`

## Claim Behavior (evidence)
> The outptut of the expression in the code is 
```
0 0 0: 1 
0 0 1: 1 
0 1 0: 1 
0 1 1: 1 
1 0 0: 1 
1 0 1: 0 
1 1 0: 1 
1 1 1: 0
```

## Target Skill Level
1

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Which other expression can substitute `expr` and result in the same output?

## Code Snippet (optional)
```java
class Example
{
    static int toInt(Boolean b){
        return b ? 1 : 0;
    }

    public static void main(String args[])
    {
        boolean is_car, has_spoiler, is_lowered;
        for(int i=0; i < 8; i++)
        {
            is_car = (i & 1) > 0;
            has_spoiler = (i & 2) > 0;
            is_lowered = (i & 4) > 0;
            
            boolean expanded = ((!is_car && !has_spoiler) || (!is_car || !is_lowered));

            System.out.println(toInt(is_lowered) + " " + toInt(has_spoiler) + " " + toInt(is_car) + ": " + toInt(expanded));
        }
    }
}
```

## Answer Key
```java
!(is_car && is_lowered)
```

## Distractors
### 1.
```java
(!is_car && is_lowered) || has_spoiler
```

### 2.
```java
(is_car && has_spoiler) || (is_car || !is_lowered)
```

### 3.
```java
(is_car && has_spoiler)
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Output is 
    ```
    0 0 0: 0
    0 0 1: 0
    0 1 0: 1
    0 1 1: 1
    1 0 0: 1
    1 0 1: 0
    1 1 0: 1
    1 1 1: 1
    ```
- Distractor 2
    - Output is
    ```
    0 0 0: 1
    0 0 1: 1
    0 1 0: 1
    0 1 1: 1
    1 0 0: 0
    1 0 1: 1
    1 1 0: 0
    1 1 1: 1
    ```
- Distractor 3
    - Output is
    ```
    0 0 0: 0
    0 0 1: 0
    0 1 0: 0
    0 1 1: 1
    1 0 0: 0
    1 0 1: 0
    1 1 0: 0
    1 1 1: 1
    ```

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
