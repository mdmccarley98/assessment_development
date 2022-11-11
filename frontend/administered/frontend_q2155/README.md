# File Selection

## Item ID
2155

## Claim
Claim 3: performance_and_security

## Claim Behavior (evidence)
[FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)

## Content Target
Forms

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
When a user selects files with the file input, the following error appears in the console:

```
TypeError: this.files.forEach is not a function
```

The code:

```html
<input id="file-selector" type="file" multiple />

<script>
    function processFiles(event) {
        this.files.forEach(file => {  // <-- Error!
            // ...
        })
    }

    const selector = document.getElementById('file-selector')
    selector.addEventListener("change", processFiles)
</script>
```

Why is this happening?

## Code Snippet (optional)

## Answer Key
Files selected from a file input are represented as a FileList object, not an Array.

## Distractors
### 1.
In the `processFiles()` method, `this` is not a reference to the file input element.

### 2.
The "change" event fires before the files have actually been selected.

### 3.
The file input element does not have a `files` property.

## Common errors, misconceptions, or irrelevant information:
* FileList is an "array-like" object, but not an Array.  So it doesn't conform to the Array interface, especially as new features are added to Array.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
