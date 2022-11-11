# Closed Components

## Item ID
2138

## Claim
Claim 5

## Claim Behavior (evidence)
[Element.attachShadow() Parameters](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#parameters)
[Element.attachShadow() Return Value](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#return_value)

## Content Target
Web Components

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
The author of this code expected it to display "Hello", but it doesn't work.  Nothing is displayed, and an error is produced: 
`Uncaught TypeError: Cannot set property 'innerHTML' of null`

Why is this happening?

## Code Snippet (optional)
```html
<body>
    <my-component></my-component>

    <script>
        class MyComponent extends HTMLElement {
            constructor() {
                super()
                this.attachShadow({ mode: 'closed' })
            }
            connectedCallback() {
                this.shadowRoot.innerHTML = '<p>Hello</p>'
            }
        }

        window.customElements.define("my-component", MyComponent)
    </script>
</body>
```

## Answer Key
"Closed" components do not get a reference to the `shadowRoot` at `this.shadowRoot`

## Distractors
### 1.
`this` does not reference `MyComponent` within `connectedCallback()`

### 2.
"Closed" components cannot be updated after construction

### 3.
The `connectedCallback()` method executes before the `shadowRoot` is attached

## Common errors, misconceptions, or irrelevant information:
* Closed components allow developers to control which parts of the code can access the component's Shadow DOM.
* This provides encapsulation, but not security, as any code that executes before the constructor can hijack the `attachShadow()` method.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
