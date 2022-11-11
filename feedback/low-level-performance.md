# Low-Level Performance

## Item ID
low-level-performance

## Claim
Low-Level Systems

## Claim Behavior (evidence)

- [Data-Oriented Design and C++](https://www.youtube.com/watch?v=rX0ItVEVjHc) Mike Acton CppCon 2014 - youtube.com
- [Structure of Arrays vs Array of Structures in CUDA](https://stackoverflow.com/a/46693795/92584) JackOLantern - stackoverflow.com
- [AoS and SoA](https://en.wikipedia.org/wiki/AoS_and_SoA)

## Content Target
Structure of Arrays vs Array of Structures (SoA vs AoS)

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You have a game that renders 3D objects on a screen.
These objects have a Transform, Velocity, Collider, Mesh, and many other properties.

Like this pseudocode:
```
struct Object {
    Transform transform;
    Velocity velocity;
    Collider collider;
    Mesh mesh;
}
struct World {
    Array<Object> gameObjects;
}
```

One system in the game applies the Velocity to the Transform of all moving objects.  Basically moving an object to a different place every frame.

Which method will make these velocity calculations happen as fast as possible?


## Code Snippet (optional)


## Answer Key
* Use a structure of arrays, so that the data needed for the calculation fits inside a cache line.

## Distractors

### 1.
* Use pointer arithmetic, so you can easily change the address and access the next object.

### 2.
* Use an immutable array, so that other threads cannot change data while it's being accessed.

### 3.
* Use a vertex buffer object, so that mesh data doesn't need to be sent to the GPU every frame.

## Common errors, misconceptions, or irrelevant information (optional):

* Pointer arithmetic is irrelevant to the speed of velocity changing the transform.
* Multi-threaded concurrency is not related to performance in this case. Immutable arrays might even make things slower, because the Transform needs to change, you'd have to create a new array instead of modifying existing data in a mutable array.
* Sending changing mesh data each frame was not a problem in this example.  And VBOs are not related to changing the Transform with the Velocity.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

