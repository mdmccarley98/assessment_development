# programmatic_problem_solving

## Item ID
1524

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the value of the variable `names` after the following code runs?

## Code Snippet (optional)
```java
Consumer<List<String>> deleteBlankItems = (items) -> {
  for (int i = 0; i < items.size(); i++) {
    if (items.get(i).length() == 0) {
      items.remove(i);
    }
  }
};

List<String> names = new ArrayList<>(Arrays.asList("Rachel", "Meghana", "", "", "Tim"));
deleteBlankItems.accept(names);
```

## Answer Key
`["Rachel", "Meghana", "", "Tim"]`

## Distractors

### 1.
`["Rachel", "", "Meghana", "", "", "Tim"]`

### 2.
`["Rachel", "", "Meghana", "", "Tim"]`

### 3.
`["Rachel", "Meghana", "Tim"]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

