# Python

## Item ID
2290

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
* [Weak References](https://docs.python.org/3/library/weakref.html#module-weakref)


## Content Target
Weak references

## Cognitive Model
Comprehend


## Item Type
Multiple Choice

## Stem

Consider the following code where Listener instances can register to be notified by a Dispatcher when something happens. Fill in the missing line of code so that Listener instances can be garbage collected when the only reference to them is from a Dispatcher instance.

## Code Snippet (optional)

```python
class Dispatcher:
    def __init__(self):
        self.refs = []

    def register(self, listener):
        # Fill in the missing statement here
    
    def dispatch(self):
        for ref in self.refs:
            callable = ref()
            if callable is not None: callable()

class Listener:
    def on_event(self): 
        print(f'Hello from {id(self)}')
```

## Answer Key

`self.refs.append(weakref.WeakMethod(listener.on_event))`

## Distractors

### 1.
`self.refs.append(weakref.ref(listener))`

### 2.
`self.refs.append(weakref.ReferenceType(listener.on_event))`

### 3.
`self.refs.append(listener.on_event)`


## Common errors, misconceptions, or irrelevant information:

D1 would work if the dispatch method was implemented to expect an object, but it expects a callable.
D2 fails because the bound method is GC'd immediately upon leaving register.
D3 fails because it is a strong reference, so the refs list keeps listener alive indefinitely even if nothing else in the program needs listener.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

