# Inheritance

## Item ID
1615

## Claim
Claim 3: Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
- [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) - Mozilla
- [Inheritance in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance) - Mozilla

## Content Target
Inheritance

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You want to model the relationship between a dog and a pet using inheritance. Which of the following is *NOT* a valid way to achieve inheritance?

## Answer Key
Using `Object.prototype`

```javascript
const pet = {
    speak: function() { return 'silence' },
    walk: function() { return 'scurry' }
}

const dog = {
    speak: function() { return 'woof' }
}
dog.prototype = pet
```

## Distractors
### 1.
Using `function.call()` in a constructor function.

```javascript
function Pet() {
    this.speak = function() { return 'silence' }
    this.walk = function() { return 'scurry' }
}

function Dog() {
    Pet.call(this)
    this.speak = function() { return 'woof' }
}

const dog = new Dog()
```

### 2.
Using the `extends` keyword

```javascript
class Pet {
    speak() { return 'silence' }
    walk() { return 'scurry' }
}

class Dog extends Pet {
    speak() { return 'woof' }
}

const dog = new Dog()
```

### 3.
Using `Object.create()`

```javascript
const pet = {
    speak: function() { return 'silence' },
    walk: function() { return 'scurry' }
}

const dog = Object.create(pet)
dog.speak = function() { return 'woof' }
```

## Common errors, misconceptions, or irrelevant information (optional):

* There is no pre-existing `Object.prototype`. However, there are *so* many different ways of defining inheritance:
* `function.prototype` can be set to define the prototype used by a constructor function.
* There are a few ways of changing an object's prototype that do work, but none of them are recommended because it causes significant performance issues.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

