# Frontend dragdrop


## Item ID
frontend_frontend_dragdrop


## Claim
Claim 1


## Claim Behavior (evidence)

> dragover event
> ...
> Default action: Reset the current drag operation to "none"
> ...
> See the [drag event](https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event) for example code or this [JSFiddle demo](https://jsfiddle.net/zfnj5rv4/).
> 
> -- https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event


> If you want to allow a drop, you must prevent the default handling by cancelling the event. You can do this either by returning false from an attribute-defined event listener, or by calling the event's event.preventDefault method.
> 
> -- https://stackoverflow.com/questions/8414154/html5-drop-event-doesnt-work-unless-dragover-is-handled




## Content Target
DOM


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
A colleague is writing a simple drag and drop feature below.
But there is a problem, dragging works, but dropping doesn't move the draggable div.

What change will allow you to drag and drop `draggable` from one area to the other?


## Code Snippet (optional)
```html
<div class="drop-area">
	<div id="draggable" draggable="true">Draggable</div>
</div>
<div class="drop-area">
</div>

<script>
	var dragging;
	document.addEventListener("dragstart", function(event) {
		dragging = event.target;
	});
	document.addEventListener("drop", function(event) {
		dragging.parentNode.removeChild(dragging);
		event.target.appendChild(dragging);
	});
</script>
```


## Answer Key
```javascript
	// Add a "dragover" event listener with preventDefault.
	document.addEventListener("dragover", function(event) {
		event.preventDefault();
	});
```


## Distractors
### 1.
```javascript
	// Change the "drop" listener to only work on the "drop-area"
	document.addEventListener("drop", function(event) {
		if (event.target.className == "drop-area") {
			dragging.parentNode.removeChild(dragging);
			event.target.appendChild(dragging);
		}
	});
```


### 2.
```javascript
	// Change the "drop" event listener to "useCapture = false"
	document.addEventListener("drop", function(event) {
		dragging.parentNode.removeChild(dragging);
		event.target.appendChild(dragging);
	}, false);
```

### 3.
```html
	<!-- Change the draggable's ondragstart to return false  -->
	<div id="draggable" draggable="true" ondragstart="return false;">Draggable</div>
```



## Common errors, misconceptions, or irrelevant information:

1. this fixes a different bug, that you can drop outside the drop-area.
2. the default for useCapture is already `false`, also `true` does not solve the issue
3. this will completely prevent dragging from starting

Tested in Chrome 92 and Firefox 89.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
