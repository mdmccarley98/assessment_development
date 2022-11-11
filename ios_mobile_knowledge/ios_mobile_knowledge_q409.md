# mobile_knowledge

## Item ID
q409

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
ios

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the problem with the following code?

## Code Snippet (optional)
```swift
// Represents a Node in a binary tree
class Node {
    var value: Int
    
    // Equivalent to: @property Node *parent;
    var parent: Node? = nil
    
    var left: Node? = nil
    var right: Node? = nil
    
    init(_ value: Int, left: Node? = nil,  right: Node? = nil) {
        self.value = value
        self.left = left
        self.right = right
      
        // Set left.parent to self if left is not nil
        left?.parent = self
        right?.parent = self
    }
}

var lnode: Node? = Node.init(1)
var rnode: Node? = Node.init(3)
var root:  Node? = Node.init(2, left: lnode, right: rnode)
```

## Answer Key
This code created a reference cycle, and none of the nodes will be deallocated. You should break the cycle by making `“parent”` as a weak property.

## Distractors

### 1.
This code created a reference cycle, and none of the nodes will be deallocated. You should break the cycle by making `“parent”` as well as `“left”` and `“right”` weak references.

### 2.
This code is fine. It's a clean implementation of a binary tree.

### 3.
This code breaks because two objects reference each other. This should is always dangerous, and should be avoided.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

