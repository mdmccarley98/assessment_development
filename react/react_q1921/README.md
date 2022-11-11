# Function Component

## Item ID
1921


## Claim
1: core_concepts

## Threshold Probabilities
[0.35, 0.55, 0.75, 0.95]

## Claim Behavior (evidence)
- [Components and Props](https://reactjs.org/docs/components-and-props.html) - reactjs.org

## Content Target
Components

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
Choose the answer that implements a "function component" such that the following JSX:
```javascript
<Hello name='World' />
```
would render to the following HTML:
```html
<h1>Hello World!</h1>
```

## Answer Key
```jsx
function Hello({name}) {
    return <h1>Hello {name}!</h1>
}
```

## Distractors
### 1.
```jsx
class Welcome extends React.Component {
    render() {
        return <h1>Hello {this.props.name}!</h1>
    }
}
```

### 2.
```javascript
@Component({
    selector: 'Hello',
    template:`<h1>Hello {{name}}!</h1>`
})
export class Hello implements OnInit {
    name:string

    constructor() { }

    rxctOnInit(): void { }
}
```

### 3.
```javascript
React.component('hello', {
  props: ['name'],
  template: '<h1>Hello {{ name }}!</h1>'
})
```

## Common errors, misconceptions, or irrelevant information (optional):

* Function components in React are literally just normal Javascript functions.
* Distractor 1 works, but is a "class component".
* Distractor 2 is basically how components are defined in Angular.
* Distractor 3 is basically how components are defined in Vue.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
