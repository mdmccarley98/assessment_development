# React Native Navigation

## Item ID
react-native-navigation

## Claim
2: state

## Threshold Probabilities
[0.25, 0.41, 0.57, 0.75]

## Claim Behavior (evidence)
- [navigate](https://reactnavigation.org/docs/navigation-prop#navigate) - reactnavigation.org
- [push](https://reactnavigation.org/docs/stack-actions#push) - reactnavigation.org

## Content Target
Navigation

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You are writing a React Native application that uses the popular React Navigation library.  Your app uses `Stack.Navigator` and contains three screens:

```jsx
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='User' component={UserScreen} />
        <Stack.Screen name='EditUser' component={EditUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```

Suppose the current route stack is: (Home -> User -> EditUser)

What would the difference be between executing `navigation.navigate('Home')` versus executing `navigation.push('Home')`?

## Answer Key
`navigation.navigate('Home')` would change the route stack to: (Home)
`navigation.push('Home')` would change the route stack to: (Home -> User -> EditUser -> Home)

## Distractors
### 1.
They are synonyms.  Either would change the route stack to: (Home -> User -> EditUser -> Home)

### 2.
They are synonyms.  Either would change the route stack to: (Home)

### 3.
`navigation.navigate('Home')` would change the route stack to: (Home)
`navigation.push('Home')` would replace the current route with a new one. So the resulting stack would be: (Home -> User -> Home)


## Common errors, misconceptions, or irrelevant information (optional):

* The resulting stack will affect future navigation, like what happens if the user presses the "Back" button.
* In the case that the new route is not already in the route stack, `navigation.navigate()` and `navigation.push()` do the same thing: add a new route to the stack and switch to that route.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

