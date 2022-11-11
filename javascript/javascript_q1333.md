# lang_javascript_08#

## Item ID
1333

## Claim
Claim 3: Distinguishing Features of Language

## Claim Behavior (evidence)


## Content Target
`Browser - Event Handling`

## Cognitive Model


## Item Type
Multiple Choice

## Stem
There are two nested DOM elements, a parent and a child. What is the value of x after clicking the child element once?

## Code Snippet

```javascript
    let x = 0;
    parent.addEventListener('click', () => x++);
    child.addEventListener('click', () => {
        event.preventDefault();
        x++;
    });

```

## Answer Key

```
    2
```

## Distractors

### 1.
```
    0
```

### 2.

```
    1
```

### 3.
```
    3
```

## Common errors, misconceptions, or irrelevant information (optional):

the preventDefault() method applies to browser behavior but does not affect event bubbling 

---

