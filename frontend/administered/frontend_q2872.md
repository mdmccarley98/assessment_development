# Frontend - will-change (CSS property)

## Item ID
2872

## Claim
3: performance_and_security

## Target Skill Level
4

## Claim Behavior (evidence)
[will-change (CSS property)](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
[Usage Recommendations](https://dev.opera.com/articles/css-will-change-property/)

## Content Target
CSS (performance)

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What is true about the following code snippet?

## Code Snippet (optional)
```html
<div id="element-1" class="willChange fadeIn"></div>
<div id="element-2" class="fadeIn"></div>

<style>
    .willChange {
        will-change: opacity;
    }
    .fadeIn {
       opacity: 0;
    }
    .fadeIn:hover {
        transition: opacity .1s ease-in;
        opacity: 1;
    }
</style>
<script>
    const enableWillChange = (e) => e.currentTarget.style.willChange = 'opacity';
    const disableWillChange = (e) => e.currentTarget.style.willChange = 'auto';
    
    const element2 = document.getElementById("element-2");
    element2.addEventListener('mouseover', enableWillChange);
    element2.addEventListener('animationEnd', disableWillChange);
</script>
```

## Answer Key
`element-2`'s transition manages browser resources effectively.

## Distractors
### 1.
`element-1`'s transition execution will have priority over `element-2`.

### 2.
`element-2`'s transition uses more resources than `element-1`'s transition.

### 3.
`element-2`'s `will-change` update through Javascript is useless.

## Common errors, misconceptions, or irrelevant information:
* will-change only works if pre-defined in CSS.
* will-change is useless when set using Javascript
* will-change css property usage leads to performance issues. 
  This is not true, and there are some cases where is encouraged

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
