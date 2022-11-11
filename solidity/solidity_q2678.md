# Convex Finance

## Item ID
2678

## Claim
3

## Claim Behavior (evidence)
https://www.convexfinance.com/

https://github.com/convex-eth/platform/blob/main/contracts/contracts/ConvexMasterChef.sol

Lines: 177 - 183

## Content Target
Convex Finance

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Below you will find a `massUpdatePools` function. Which option describes the pitfall in calling this function?

## Code Snippet (optional)
```solidity
function massUpdatePools() public {
    uint256 length = poolInfo.length;
    for (uint256 pid = 0; pid < length; ++pid) {
        updatePool(pid);
    }
}
// convexfinance.com: MIT licence
```

## Answer Key
High gas costs

## Distractors
### 1.
There is no pitfall since it will revert

### 2.
`massUpdatePools` may be called by anyone and thus let any attacker dry the funds from all pools.

### 3.
Calling `massUpdatePools` may alter the equilibrium of the token pairs locked in the pools.

## Common errors, misconceptions, or irrelevant information:
Common errors:
Since it is a function inside a contract of a protocol which has been thoroughly audited and which has been in use for a prolonged period of time, the only pitfall in calling it are the high gas costs.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
