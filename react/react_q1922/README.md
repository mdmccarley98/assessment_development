# Keys

## Item ID
1922


## Claim
1: core_concepts

## Threshold Probabilities
[0.30, 0.48, 0.66, 0.85]

## Claim Behavior (evidence)
- [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html) - reactjs.org

## Content Target
Keys

## Cognitive Model
* Comprehend

## Item Type
Multiple Choice

## Stem
In React, elements may be given a `key`.  What is a key, and under what situation should you provide keys for elements?


## Answer Key
Keys give elements a stable identity.  Keys are necessary when rendering an array of elements, especially if that array will change size or the ordering of items.

## Distractors
### 1.
An element's `key` takes an authentication token.  It is used to conditionally render secure components.

### 2.
A `key` provides a way to access DOM nodes or React elements created in the render method.  So a key should be provided when you will need to programmatically find an element in the DOM tree.

### 3.
The `key` attribute in JSX replaces the `name` attribute in HTML, just as `className` replaces `class`.  It uniquely identifies form fields in POST requests sent back to the server.


## Common errors, misconceptions, or irrelevant information (optional):

* Providing keys is necessary most often when creating lists of elements.  It is common to use `Array.map()` to map data to elements.  The underlying array may change in ways that will cause React to lose track of which elements correspond to which items in the list.
* This is one of those tricky situations in React where a developer who misunderstands keys can easily write code that will work *most* of the time.  Then in production, some users will experience a bug where data becomes mixed up between elements.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

