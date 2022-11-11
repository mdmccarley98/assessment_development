# CSS Custom Property Inheritance

## Item ID
2125

## Claim
Claim 1: responsive_ui

## Claim Behavior (evidence)
* [Inheritance of custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#inheritance_of_custom_properties)

## Content Target
CSS

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
When the following styles: 
```css
:root {
    --text-color: red;
}

article {
    --text-color: yellow;
}

p.intro {
    --text-color: green;
}

p.main {
    color: var(--text-color);
}
```

are applied to the following markup:
```html
<article>
    <p class="intro">Lorem ipsum</p>
    <p class="main">dolor sit amet</p>
</article>
```

What are the colors of the "intro" and "main" paragraphs?

## Code Snippet (optional)

## Answer Key
* intro: browser default
* main: yellow

## Distractors
### 1.
* intro: green
* main: yellow

### 2.
* intro: green
* main: browser default

### 3.
* intro: black
* main: red

## Common errors, misconceptions, or irrelevant information:
* CSS Custom Properties are inherited by child elements.
* Double dashes (`--`) are used to define a Custom Property.  Without applying the Custom Property value with `var()`, nothing is affected.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
