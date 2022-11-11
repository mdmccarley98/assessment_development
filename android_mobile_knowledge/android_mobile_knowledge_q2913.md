# Android - Coroutines Async

## Item ID
2913

## Claim
2: data_management

## Target Skill Level
Level 3

## Claim Behavior (evidence)
Coroutines is a simple but powerful new api for parallel work management.  
It differs from the usual Threading approach by adding an extra layer that increase performance 
and adds a lot of tooling.  
`async` is an important method to launch a new coroutine, understanding its behaviour is important 
for the correct usage during development.  
https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/async.html

## Content Target
- real-world, practical applications of Java or Kotlin
- coroutines
- async
- threading

## Cognitive Model
- Use

## Item Type
Multiple Choice

## Stem
What is the output of the following code?

## Code Snippet (optional)
```kotlin
fun sumAsync() {
    CoroutineScope(Job()).launch {
        val one = async(context = Dispatchers.Unconfined) {
            println("one")
            1
        }
        val two = async(start = CoroutineStart.LAZY) {
            println("two")
            2
        }

        println("three")
        println("four ${one.await() + two.await()}")
    }
}
```

## Answer Key
```
one
three
two
four 3
```

## Distractors
### 1.
The code won't compile

### 2.
```
one
two
three
four 3
```

### 3.
```
three
one
two
four 3
```

## Common errors, misconceptions, or irrelevant information:
- Coroutines is a relatively new api, and often times I've seen developers using it while not 
understanding the underlying;
- Candidate might confuse Coroutines behaviour with Java threading;
- Candidate might not understand **when** a coroutine executes.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
