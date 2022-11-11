# Reward Campaign

## Item ID
2548

## Claim
Claim 3

## Claim Behavior (evidence)
https://github.com/alpaca-finance/bsc-alpaca-contract/blob/main/contracts/6.12/GrazingRange.sol

Lines 102 - 118;

## Content Target
Reward Campaign

## Cognitive Model
Use

## Item Type
Multiple choice

## Stem
The function below is for a reward campaign. One campaign is represented by a pair of a staking token and a reward token, the last reward block, and accumulated reward per share. Choose the option that correctly identifies the missing line.

## Code Snippet (optional)
```solidity
function addCampaignInfo(
    IERC20 _stakingToken,
    IERC20 _rewardToken,
    uint256 _startBlock
) external onlyOwner {
    campaignInfo.push(
        CampaignInfo({
            stakingToken: _stakingToken,
            ____________________________ // Missing line
            startBlock: _startBlock,
            lastRewardBlock: _startBlock,
            accRewardPerShare: 0,
            totalStaked: 0,
            totalRewards: 0
        })
    );
}
```

## Answer Key
`rewardToken: _rewardToken,`

## Distractors
### 1.
No line is missing. The function, as shown above, is complete.

### 2.
`rewardToken: _rewardToken;`

### 3.
`rewardTokens: _rewardTokens;`

## Common errors, misconceptions, or irrelevant information:

1. It may be assumed that only defining `IERC20 _rewardToken,` in the third line in the function definition will be sufficient. 

2. Using a semicolon instead of a comma is a common error.

3. Using plural instead of the singular is a common error.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
