# React Native Animation Values


## Item ID
1928

## Claim
2: state

## Threshold Probabilities
[0.25, 0.38, 0.51, 0.65]


## Claim Behavior (evidence)
- [Animated](https://reactnative.dev/docs/animated) - reactnative.dev
- [useRef](https://reactjs.org/docs/hooks-reference.html#useref) reactjs.org


## Content Target
Native animations


## Cognitive Model
Comprehend


## Item Type
Multiple Choice


## Stem
You are creating an animated bar chart component for React Native.  So far it just has one bar that should appear to grow from the bottom of the screen.  It does this, but you notice that the animation restarts every time that its parent component re-renders?  How can you fix it?


## Code Snippet (optional)
```jsx
function Chart() {
  const height = new Animated.Value(0)

  useEffect(() => {
    Animated.timing(
      height,
      {
        toValue: 200,
        duration: 2000,
      }
    ).start()
  }, [height])

  return (
    /* Chart */
    <View style={{
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column-reverse',
      backgroundColor: 'white'
    }}>
      {/* Bar to animate */}
      <Animated.View style={{
        height: height,
        width: '10px',
        backgroundColor: 'blue'
      }}>
      </Animated.View>
    </View>
  )
}
```


## Answer Key
Wrap the animated value in a "ref":

```jsx
function Chart() {
  const height = useRef(new Animated.Value(0)).current
  // ...
}
```

## Distractors
### 1.
Use "px" to indicate pixels:

```jsx
      <Animated.View style={{
        height: height,
        height: `${height}px`,
        width: '10px',
        backgroundColor: 'blue'
      }}>
```

### 2.
Use `isInteraction: false`:

```jsx
    Animated.timing(
      height,
      {
        toValue: 200,
        duration: 2000,
        isInteraction: false
      }
    ).start()
```


### 3.
Wrap the animation in `Animatied.parallel()`:

```jsx
    Animated.parallel(
      Animated.timing(
        height,
        {
          toValue: 200,
          duration: 2000
        }
      )
    ).start()
```


## Common errors, misconceptions, or irrelevant information:
* In web-based React, refs are almost always used for one purpose, creating stable references to DOM elements.  So it is a common misunderstanding that that is what refs are for.  Refs hold a stable value between renders, and they can hold any value.
* For animations, refs are necessary to hold the animated value.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

