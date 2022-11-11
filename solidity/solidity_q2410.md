# Add New Liquidity Provider To Pool

## Item ID
2410

## Claim
Claim 3

## Target Level
4

## Claim Behavior (evidence)
https://github.com/sushiswap/sushiswap/blob/canary/contracts/MasterChefV2.sol

Lines: 107 - 124

## Content Target
Add New Liquidity Provider To Pool

## Cognitive Model
Use

## Item Type
Multiple choice

## Stem
This function adds a new liquidity provider (LP) to the pool. However, one line is missing. **Choose the option that correctly identifies the missing line.**

## Code Snippet (optional)
```
/// @notice Add a new LP to the pool. Can only be called by the owner.
/// DO NOT add the same LP token more than once. Rewards will be messed up if you do.
/// @param _lpToken Address of the LP ERC-20 token.
/// @param _rewarder Address of the rewarder delegate.
function add(uint256 allocPoint, IERC20 _lpToken, IRewarder _rewarder) public onlyOwner {
    uint256 lastRewardBlock = block.number;
    totalAllocPoint = totalAllocPoint.add(allocPoint);
    lpToken.push(_lpToken);
    rewarder.push(_rewarder);

    poolInfo.push(PoolInfo({
        allocPoint: allocPoint.to64(),
        lastRewardBlock: lastRewardBlock.to64(),
        accSushiPerShare: 0
    }));
    // Missing line
}
// sushi.com: MIT License
```

## Answer Key
```
emit LogPoolAddition(lpToken.length.sub(1), allocPoint, _lpToken, _rewarder);
```

## Distractors
### 1.
```
emit LogPoolAddition(lpTokens.length.sub(1), allocPoint, _lpToken, _rewarder);
```

### 2.
```
emit LogPoolAddition(lpToken.length.sub(0), allocPoint, _lpToken, _rewarder);
```

### 3.
```
emit LogPoolAddition(lpToken.length.sub(1), allocPoint, _lpTokens, _rewarder);
```

## Common errors, misconceptions, or irrelevant information:
- Irrelevant information:
    - In 2020, a pseudonymous developer forked Uniswap to create SushiSwap — a near clone protocol that added “community-oriented” features like a governance token and staking rewards to Uniswap’s original code on its own platform. Seeking to gain users and liquidity, SushiSwap mounted a vampire attack on Uniswap, siphoning liquidity on the order of billions of dollars from its competitor, and altering the landscape of decentralized finance (DeFi) in the process.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
