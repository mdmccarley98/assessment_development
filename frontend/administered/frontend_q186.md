# frontend

## Item ID
186

## Claim
Claim 3: performance_and_security

## Threshold Probabilities
[.50, .60, .70, .85]

## Claim Behavior (evidence)
NA

## Content Target
frontend

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What's wrong with the following code?

## Code Snippet (optional)
```javascript
Game.prototype.start = function(inputElements) {
  inputElements.forEach(function ($el) {
  	$el.on("click", this.handleClick);
  });
};

Game.prototype.handleClick = function (e) {
    // .....
}
```

## Answer Key
The click event handler written above will call handleClick on the window instead of the Game object.

## Distractors

### 1.
That code will only handle the first click; it needs to recreate the event handler each time.

### 2.
It is unsafe to pass the event object from function to function.

### 3.
The code written there will cause a memory leak which will use arbitrary amounts of memory and be bad for performance.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

