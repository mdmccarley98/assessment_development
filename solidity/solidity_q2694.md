# Solidity - Oracle Price Manipulation

## Item ID
2694

## Claim
Claim 2

## Claim Behavior (evidence)
https://github.com/HydroProtocol/protocol/blob/244b01ad323a7d0796ae2eda3b7b455a361dd376/contracts/oracle/DaiPriceOracle.sol#L74-L87

Lines: 74 - 87

https://github.com/HydroProtocol/protocol/blob/0466e064234117d9c8f7ae6962fe6233427d8656/contracts/oracle/DaiPriceOracle.sol#L100-L124

Lines: 100 - 124

## Content Target
Oracle price manipulation

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
A fellow coder has written a function to fetch a price update via an oracle. You are tasked to rewrite it to prevent an attack using a manipulated price oracle. You still have three lines missing. Please choose the option that correctly completes the rewritten function.

## Code Snippet (optional)
Your fellow coder's original function:
```solidity
function updatePrice()
    public
    returns (bool)
{
    uint256 _price = peek();

    if (_price != 0) {
        price = _price;
        emit UpdatePrice(price);
        return true;
    } else {
        return false;
    }
}
// HydroProtocol: Apache License 2.0
```

Your rewritten function that is missing three lines:
```solidity
function updatePrice()
    public
    returns (bool)
{
    uint256 _price = peek();

    // Please fill in the missing line 1 _______
    // Please fill in the missing line 2 _______
    }

    if (_price == price) {
        return true;
    }

    // Please fill in the missing line 3 _______
        _price = maxPrice;
    } else if (_price < minPrice) {
        _price = minPrice;
    }

    price = _price;
    emit UpdatePrice(price);

    return true;
}
// HydroProtocol: Apache License 2.0
```

## Answer Key
```solidity
    // completes line 1
    if (_price == 0) {
        // completes line 2
        return false;
    // completes line 3
    if (_price > maxPrice) {
```

## Distractors
### 1.
```solidity
    // completes line 1
    if (price = 0) {
        // completes line 2
        return false;
    // completes line 3
    if (price => maxPrice) {
```

### 2.
```solidity
    // completes line 1
    if (_price >= 0) {
        // completes line 2
        return false;
    // completes line 3
    if (_price > Price) {
```

### 3.
```solidity
    // completes line 1
    if (price <= 0) {
        // completes line 2
        return false;
    // completes line 3
    if (price > Price) {
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
