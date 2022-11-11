# Custom Elements

## Item ID
2121

## Claim
Claim 4

## Claim Behavior (evidence)

## Content Target
HTML

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You want to create a custom HTML element to represent album covers with this markup:
```html
<album-cover>
    <div slot="title">Thriller</div>
</album-cover>
```

So you write the following custom element:
```html
<template id="cover-template">
  <h1><slot name="title">No Title</slot></h1>
</template>

<script>
  class AlbumCover extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({mode: 'open'})
    }
  }
  customElements.define('album-cover', AlbumCover)
</script>
```

How do you attach the template to the custom element?

## Code Snippet (optional)

## Answer Key
Add these lines to the constructor:
```javascript
const template = document.getElementById('cover-template')
const clone = template.content.cloneNode(true)
this.shadowRoot.appendChild(clone)
```

## Distractors
### 1.
Add these lines to the constructor:
```javascript
const template = document.getElementById('cover-template')
this.shadowRoot.appendChild(template)
```

### 2.
Add this line to the constructor:
```javascript
this.tempate = document.getElementById('cover-template')
```

### 3.
Implement the `render()` method:
```javascript
render() {
  return document.getElementById('cover-template').content
}
```

## Common errors, misconceptions, or irrelevant information:
* The template should be cloned, then appended.
* Distractor 2 is a little like Angular and Vue.
* Distractor 3 is a little like React.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
