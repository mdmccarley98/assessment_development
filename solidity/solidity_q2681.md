# Solidity - Tokemak Utility

## Item ID
2681

## Claim
3

## Claim Behavior (evidence)
https://docs.tokemak.xyz/

https://etherscan.io/address/0xc803737D3E12CC4034Dde0B2457684322100Ac38#code

ZeroExTradeWallet.sol

Lines: 68 - 85

## Content Target
Tokemak Utility

## Cognitive Model
Use

## Item Type
Multiple Choice 

## Stem
You are given an incomplete function with three missing lines (see below). Please choose the option that correctly fills in the missing lines.

## Code Snippet (optional)
```solidity
function withdraw(address[] calldata tokensToWithdraw, uint256[] calldata amounts)
    external
    // Please fill in the missing line 1 _____________________________________
    onlyManager
{
    uint256 tokensLength = tokensToWithdraw.length;
    // Please fill in the missing line 2 _____________________________________
    require(tokensLength > 0, "EMPTY_TOKEN_LIST");
    require(tokensLength == amountsLength, "LENGTH_MISMATCH");

    for (uint256 i = 0; i < tokensLength; i++) {
        IERC20(tokensToWithdraw[i]).safeTransfer(msg.sender, amounts[i]);
        // Please fill in the missing line 3 _____________________________________    
            tokens.remove(address(tokensToWithdraw[i]));
        }
    }
}
// tokemak.xyz: MIT licence
```

## Answer Key
```solidity
override
uint256 amountsLength = amounts.length;
if (IERC20(tokensToWithdraw[i]).balanceOf(address(this)) == 0) {
```

## Distractors
### 1.
```solidity
override
uint128 amountsLength == amounts.length;
if (IERC20(tokensToWithdraw).balanceOf(address(this)) == 0) {
```

### 2.
```solidity
push
uint256 amountsLength = amounts.length;
if (ERC20(tokensToWithdraw[i]).balanceOf(address(this)) = 0) {
```

### 3.
```solidity
override
uint256 amountsLength = amount.length;
if (IERC20(tokensToWithdraw[i]).balanceOf(address.this) == 0) {
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
