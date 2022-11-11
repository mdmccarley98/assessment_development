# React Native: Infinite Scroll

## Item ID
react-native-infinite-scroll

## Claim
1: core_concepts

## Threshold Probabilities
[0.30, 0.48, 0.66, 0.85]

## Claim Behavior (evidence)
- [FlatList](https://reactnative.dev/docs/flatlist) - reactnative.dev
- [ScrollView](https://reactnative.dev/docs/scrollview) - reactnative.dev
- [RefreshControl](https://reactnative.dev/docs/refreshcontrol) - reactnative.dev
- [View](https://reactnative.dev/docs/view) - reactnative.dev

## Content Target
Native
Components

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You are creating a React Native social media app and want to add "infinite scroll".  

Choose the best component that will lazily render posts and provides the simplest API for knowing when to fetch more posts.

## Answer Key
FlatList

## Distractors
### 1.
ScrollView

### 2.
RefreshControl

### 3.
View


## Common errors, misconceptions, or irrelevant information (optional):

* FlatList and SectionList both extend VirtualizedList, and any of those three would be suitable to create infinite scrolling.
* ScrollView does not lazily render its children.  Also, handling the scroll events to implement infinite scroll would be pretty clunky.  It would fire an `onScroll` event at least once per scroll.  Then some math would be necessary to figure out when to fetch more data.  Even then, it would likely be buggy, as the scroll event throttling would obscure the exact current position of the scroll.  Scroll event throttling could be reduced to make the position more accurate, but that would likely become a performance issue.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
