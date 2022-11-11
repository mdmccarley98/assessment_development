# Reward Per Block

## Item ID
2546

## Claim
Claim 3

## Claim Behavior (evidence)
https://github.com/alpaca-finance/bsc-alpaca-contract/blob/main/contracts/6.12/GrazingRange.sol

Lines 175 -178;

## Content Target
Reward Per Block

## Cognitive Model
Comprehend

## Item Type
Multiple choice

## Stem
What does this function return?

## Code Snippet (optional)
```solidity
function currentRewardPerBlock(uint256 _campaignID) external view returns (uint256) {
    return _rewardPerBlockOf(_campaignID, block.number);
}
```

## Answer Key
This function will return the reward per block based on the current block number.

## Distractors
### 1.
This function will return the current block number.

### 2.
This function will return the campaignID.

### 3.
This function will return an error since it has a coding error.

## Common errors, misconceptions, or irrelevant information:
1. The rewardPerBlockOf and the campaignID calculate the current block number.
2. The rewardPerBlockOf and the current block number will be used to calculate the campaignID.
3. The function definition should also include uint256 block.number instead of only uint256 _campaignID.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
