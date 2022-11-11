# DOM Form Value


## Item ID
frontend-frontend-dom-form-value


## Claim
Claim 1


## Claim Behavior (evidence)

>     // Introduced in DOM Level 2:
>     Element            getElementById(in DOMString elementId);
>
> -- https://www.w3.org/TR/DOM-Level-2-Core/#core-i-Document (November 2000)

>     interface ParentNode {
>         readonly attribute HTMLCollection children;
>     ...
>     element = collection . namedItem(name)
>     element = collection[name]
>         Returns the first element with ID or name name from the collection.
>
> https://www.w3.org/TR/2015/WD-dom-20150428/#interface-parentnode (April 2015)

> Chrome 1, Firefox 1, Safari 1, IE 8
> 
> -- https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

```html
<div id="hero">
	<form id=newsletter>
		<input type="email" name="email" class="form-control" value="example@example.com" />
		<button type="submit" class="btn btn-primary">Subscribe</button>
	</form>
</div>

<script>

	function promise_of(f) {
		return new Promise((resolve, _) => resolve(f()))
	}

	function logResult(name, promise) {
		promise
			.then(v => console.log(name + ": ", v))
			.catch(e => console.error(name + ": ", e.message))
	}

	function logAll(promises) {
		for (k in promises) {
			logResult(k, promises[k])
		}
	}

	logAll({
		"props": promise_of(() => document["hero"]["newsletter"]["email"].value),
		"form then name": promise_of(() => document.forms["newsletter"].getElementsByName("email")[0].value),
		"FormData prop": promise_of(() => new FormData(document.forms[0]).values("email")),
		"id children": promise_of(() => document.getElementById("newsletter").children["email"].value),
		// "name": promise_of(() => document.getElementsByName("email")[0].value),
		// "className": promise_of(() => document.getElementsByClassName("form-control")[0].value),
		// "tagName": promise_of(() => document.getElementsByTagName("input")[0].value),
	})

</script>
```

Console Log:
```
FormData prop:  undefined

id children:  example@example.com

props:  Cannot read property 'newsletter' of undefined

form then name:  document.forms.newsletter.getElementsByName is not a function
```


## Content Target
DOM manipulation


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
There is a newsletter form on your website, as seen below.

Which of the following expressions will return "example@example.com"?


## Code Snippet (optional)
```html
<div id="hero">
	<form id=newsletter>
		<input type="email" name="email" class="form-control" value="example@example.com" />
		<button type="submit" class="btn btn-primary">Subscribe</button>
	</form>
</div>
```


## Answer Key
```javascript
document.getElementById("newsletter").children["email"].value
```


## Distractors
### 1.
```javascript
new FormData(document.forms[0]).values("email")
```


### 2.
```javascript
document.forms["newsletter"].getElementsByName("email")[0].value
```


### 3.
```javascript
document["hero"]["newsletter"]["email"].value
```


## Common errors, misconceptions, or irrelevant information:

1. FormData uses the `get("email")` method, or `getAll("email")[0]` to return the data, `values()` takes no arguments and returns an iterator.
2. There is no `getElementsByName` function on an `Element`, that function is on `Document`.
3. `HTMLFormElement` has named properties for it's fields, but `Document` does not.

The answer seems fair to me, because it's the most straight-forward way to get the value since DOM 4 introduced `children` in 2015.  (Chrome 1, Firefox 1, Safari 1, IE 8: [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection))


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

