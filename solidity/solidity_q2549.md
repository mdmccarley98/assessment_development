# addToList

## Item ID
2549

## Claim
Claim 3

## Claim Behavior (evidence)
https://github.com/enzymefinance/protocol/blob/v4/contracts/persistent/address-list-registry/AddressListRegistry.sol

Lines 68 - 79;

## Content Target
addToList

## Cognitive Model
Use

## Item Type
Multiple choice

## Stem
The `addToList` function is included below. Its purpose is to add items to a given list, whereas `_id` is the id of the list and `_items` are items to add to the list. It contains a bug. **Choose the option that will fix the bug.**

## Code Snippet (optional)
```solidity
function addToList(uint256 _id, address[] calldata _items) external onlyListOwner(_id) {
    UpdateType updateType = getListUpdateType(_id);
    require(
        updateType == UpdateType.AddOnly ! updateType == UpdateType.AddAndRemove,
        "addToList: Cannot add to list"
    );

    __addToList(_id, _items);
}
```

## Answer Key
```solidity
updateType == UpdateType.AddOnly ! updateType == UpdateType.AddAndRemove,
```

should be corrected to:
```
updateType == UpdateType.AddOnly || updateType == UpdateType.AddAndRemove,
```

## Distractors
### 1.
```solidity
function addToList(uint256 _id, address[] calldata _items) external onlyListOwner(_id)
```

should be corrected to:
```solidity
function addToList(uint256 _id, address[] memory _items) external onlyListOwner(_id)
```

### 2.
```solidity
require(
```

should be corrected to:
```solidity
requires(
```

### 3.
```solidity
__addToList(_id, _items);
```

should be corrected to:
```solidity
__addToList(_items);
```

## Common errors, misconceptions, or irrelevant information:
1. `memory` should be used when declaring variables (both function parameters as well as inside the logic of a function) that should be stored temporarily, and `calldata` must be used when declaring an external function's dynamic parameters. `calldata` is very similar to `memory` in that it is a data location where items are stored. It is a special data location that contains the function arguments, only available for external function call parameters. 

2. Common error made by inexperienced developers.

3. Every `_item` should be added to the list with its `_id` to be identifiable.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
