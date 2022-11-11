# CSS Selectors

## Item ID
2142

## Claim
Topic Claim: CSS
Difficulty level Claim 3

## Claim Behavior (evidence)
[:nth-child()](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) - developer.mozilla.org
[Child combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator) - developer.mozilla.org

## Content Target
CSS

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Which of the following CSS queries will match BOTH "email" and "phone" `input` elements?

## Code Snippet (optional)
```html
    <form>
        <div>
            <label for="first-name">First Name</label>
            <input id="first-name" type="text" />
            <label for="last-name">Last Name</label>
            <input id="last-name" type="text" />
        </div>
        <div>
            <label for="email">Email</label>
            <input id="email" type="text" />
            <label for="phone">Phone</label>
            <input id="phone" type="text" />
        </div>
        <div>
            <label for="address">Address</label>
            <input id="address" type="text" />
        </div>
    </form>
```

## Answer Key
```css
form>div:nth-child(2) input
```

## Distractors
### 1.
```css
form>div:nth-child(1) input
```

### 2.
```css
form .email, form .phone
```

### 3.
```css
form>#email, form>#phone
```

## Common errors, misconceptions, or irrelevant information:
* `element.nth-child()` is one-based, not zero-based like the arrays and lists of most languages.
* `#email, #phone` would match, but `form>#email, form#phone` queries only for direct children of `form`.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
