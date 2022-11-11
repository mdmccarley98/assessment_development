# Frontend - requestAnimationFrame

## Item ID
2871

## Claim
3: performance_and_security

## Target Skill Level
4

## Claim Behavior (evidence)
[requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

## Content Target
Browser APIs (performance) - requestAnimationFrame

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What is true about the progress bar after running the following code?

## Code Snippet (optional)
```javascript
const progressBar = document.getElementById('progressBar');

function startProgressBarRendering() {
    let progressPercentage = 0;
    function renderProgressBar() {
        progressPercentage++;
        if(progressPercentage > 100) return
        progressBar.width = `${progressPercentage}%`;
        requestAnimationFrame(renderProgressBar);
    };
    requestAnimationFrame(renderProgressBar);
}

startProgressBarRendering();
```

## Answer Key
It will likely increase its width at the same refresh rate as the user display.

## Distractors
### 1.
It will increase its width each time a CSS animation is called.

### 2.
It will increase its width every second consistently.

### 3.
It will increase its width through a background task, even when a tab or window is inactive.

## Common errors, misconceptions, or irrelevant information:
* One of the most common errors is to confuse requestanimationframe with a default CSS animation on DOM element
* Another common error is thinking about it as a background task API
* Is not a battery friendly method
* Is exclusive to the canvas API

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
