# frontend

## Item ID
331

## Claim
Claim 1

## Threshold Probabilities
[.45, .55, .75, .85]

## Claim Behavior (evidence)
NA

## Content Target
javascript

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Fill in the missing line of code.

## Code Snippet (optional)
```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<div class='todos'>
  <div class='todo'>Todo 1</div>
  <div class='todo'>Todo 2</div>
  <div class='todo'>Todo 3</div>
</div>
<button id='btn'>Add a Todo</button>
<script>
  $('#btn').click(function() {
    $('.todos').append("<div class='todo'>New Todo</div>");
  });
  
  function onTodoClick(cb) {
    // ???
  }
  
  // bind to all current and future todos
  onTodoClick(function() {
    // alert with the text of the clicked todo
    alert($(this).text());
  });
</script>
```

## Answer Key
`$('.todos').on('click', '.todo', cb)`

## Distractors

### 1.
`$('.todos .todo').on('click', cb)`

### 2.
`$('.todo').click(cb)`

### 3.
`$('.todos').on('click', cb)`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

