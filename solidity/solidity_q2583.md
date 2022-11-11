# Operators

## Item ID
2583

## Claim
1

## Claim Behavior (evidence)
https://docs.soliditylang.org/en/v0.8.12/types.html#enums

## Content Target
Operators

## Cognitive Model
Comprehension

## Item Type
Multiple Choice 

## Stem
The code below is a profit calculation contract. It contains one bug. Choose the option that correctly identifies and fixes the bug.

## Code Snippet (optional)
```solidity
// SPDX-Licence-Identifier: MIT

pragma solidity 0.8.1;
contract profitCalculation
{
    uint totalSales;
    uint totalCost;

    function totalSalesSet(uint x) public
    {
        totalSales = x;
    }

    function totalCostSet(uint y) public
    {
        totalCost = y;
    }

    function Sub() view public returns (bool)
    {
        uint Grossmargin = totalSales - totalCost;

        return Grossmargin;
    }
}
```

## Answer Key
```solidity
function Sub() view public returns (bool)
```

should be changed to:
```solidity
function Sub() view public returns (uint)
```

## Distractors
### 1.
```solidity
function Sub() view public returns (bool)
```

should be changed to:
```solidity
function Sub() view private return (uint)
```

### 2.
```solidity
uint totalSales;
uint totalCost;
```

should be changed to:
```solidity
uint totalSales 
uint totalCost 
```

### 3.
```solidity
uint Grossmargin = totalSales - totalCost;
```

should be changed to:
```solidity
uint Grossmargin = totalSales -sub totalCost;
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
