# Responsive Design

## Item ID
2122

## Claim
Claim 3: performance_and_security

## Claim Behavior (evidence)
* [@media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

## Content Target
CSS

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Which of the following CSS rules will be applied when the viewport is in a portrait orientation OR when the user is printing the document?

## Code Snippet (optional)

## Answer Key
```css
@media screen and (orientation: portrait), print {

}
```

## Distractors
### 1.
```css
@media screen and (orientation: portrait) or print {

}
```

### 2.
```css
@media screen and (orientation: portrait),
@media print {

}
```

### 3.
```css
@media screen and (orientation: portrait) {
    @media print {

    }
}
```

## Common errors, misconceptions, or irrelevant information:
* The CSS language is simple, but complex queries are usually not necessary except in advanced responsive design.
* Logical AND is usually done with nesting, except in complex queries when it is done with `and`.
* It seems inconsistent, but there is no `or` operator.  Logical OR is always a comma (`,`).

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
