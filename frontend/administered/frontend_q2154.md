# Default Form Submission

## Item ID
2154

## Claim
Claim 2: data

## Claim Behavior (evidence)
[HTML <form> method Attribute](https://www.w3schools.com/tags/att_form_method.asp) - w3c

## Content Target
Forms

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
The form below is served from: "https://example.com/form"

What happens when this form is submitted?


## Code Snippet (optional)
```html
<form>
    <label for="name">Name</label>
    <input type="text" name="name" />
    <button type="submit">Submit</button>
</form>
```

## Answer Key
A GET request is sent to "https://example.com/form".

## Distractors
### 1.
A POST request is sent to "https://example.com/form".

### 2.
A GET request is sent to "https://example.com/".

### 3.
A POST request is sent to "https://example.com/".

## Common errors, misconceptions, or irrelevant information:
* For a traditional form submission it is most common to specify "post" as the `method`.  However, "get" is the default.
* By default, form submissions are sent to their same URL.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
