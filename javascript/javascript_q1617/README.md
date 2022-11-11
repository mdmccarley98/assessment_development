# Proxy

## Item ID
1617

## Claim
Claim 3: Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
- [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) - Mozilla
- [Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect) - Mozilla

## Content Target
Proxy

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You want to log all updates to any current or future properties of the `obj` object. Which function below returns an object that can be used in place of `obj` but will log all updates made to any current or future properties?

## Code Snippet
```javascript
const obj = {
    prop1: 0,
    prop2: 1
}

// Note that prop1 is not writable
Object.defineProperty(obj, 'prop1', {
    writable: false
})

const loggingObj = logPropertyUpdates(obj)

loggingObj.prop1 = 2
loggingObj.prop2 = 3
loggingObj.prop3 = 4
```

The correct function will have the output:
```
Prop prop2 set to 3
Prop prop3 set to 4
```

## Answer Key
```javascript
function logPropertyUpdates(target) {
    return new Proxy(target, {
        set(target, propName, value) {
            const success = Reflect.set(target, propName, value)
            
            if (success) {
                console.log(`Prop ${propName} set to ${value}`)
            }
        }
    })
}
```

## Distractors

### 1.
```javascript
function logPropertyUpdates(target) {
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            Object.defineProperty(target, key, {
                set(value) {
                    this['_' + key] = value
                    console.log(`Prop ${key} set to ${value}`)
                },
                get() {
                    return this['_' + key]
                }
            })
        }
    }
    return target
}
```
### 2.
```javascript
function logPropertyUpdates(target) {
    return new Proxy(target, {
        set(target, propName, value) {
            target[propName] = value
            console.log(`Prop ${propName} set to ${value}`)
        }
    })
}
```

### 3.
```javascript
function logPropertyUpdates(target) {
    const wrapper = {
        set [propName](value) {
            'use strict'
            try {
                target[propName] = value
                console.log(`Prop ${propName} set to ${value}`)
            } catch(e) {
                // Don't log if update fails
            }
        }
    }

    return wrapper
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* Looping over properties and using `Object.defineProperty()` would only work for the properties that already exist, not any new properties that are added later.
* Without a check to know that the update was successful, unsuccessful updates would also be logged.  
* Using a computed property name to dynamically name a setter does not work because the property name is not known when the setter function is created.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
