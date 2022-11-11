# Basic Solidity Syntax

## Item ID
2547

## Claim
Claim 1

## Claim Behavior (evidence)
https://github.com/dydxprotocol/solo/blob/master/contracts/protocol/Getters.sol

Lines 345 - 364

## Content Target
Basic Solidity Syntax

## Cognitive Model
Comprehension

## Item Type
Multiple choice

## Stem
The function below has two syntax errors. Choose the option that correctly identifies those errors.

## Code Snippet (optional)
```solidity
/**
* Get the adjusted liquidation spread for some market pair. This is equal to the global
* liquidation spread multiplied by (1 + spreadPremium) for each of the two markets.
*
* @param  heldMarketId  The market for which the account has collateral
* @param  owedMarketId  The market for which the account has borrowed tokens
* @return               The adjusted liquidation spread
*/
Function getLiquidationSpreadForPair{
    uint256 heldMarketId,
    uint256 owedMarketId
}
    public
    view
    returns (Decimal.D256 memory)
{
    _requireValidMarket(heldMarketId);
    _requireValidMarket(owedMarketId);
    return g_state.getLiquidationSpreadForPair(heldMarketId, owedMarketId);
}
```

## Answer Key
The word "function" should be written in lower case letters, and the parameters should be wrapped in parentheses.

## Distractors
### 1.
The word "function" should be written in upper case letters, and the parameters should be wrapped in braces.

### 2.
A function should always be private without view.

### 3.
At the end of the function, the "return" should be "returns", and after the closing brace, there should be a semicolon.

## Common errors, misconceptions, or irrelevant information:
1. Since functions form a complete snippet inside a contract, some developers start with "Function" instead of "function" as they would start a sentence.

2. Contract visibility and the difference between public view and private are often made errors.

3. The "function returns something..." would be written in a normal sentence, but it is "return" in Solidity. There is never a semicolon after the closing brace at the end of the function.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
