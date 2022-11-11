# Solidity - Perpetual Market

## Item ID
2676

## Claim
3

## Claim Behavior (evidence)
https://github.com/predyprotocol/v2-contracts/blob/main/contracts/PerpetualMarket.sol

Lines: 348 - 380

## Content Target
Perpetual Market

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Below is a function used in the PerpetualMarket.sol smart contract. What is this function used for?

## Code Snippet (optional)
```solidity
function execConsolidate() external override onlyHedger returns (uint256 amountUsdc, uint256 amountUnderlying) {
    perpetualMarketCore.executeFundingPayment();

    perpetualMarketCore.updatePoolSnapshot();

    perpetualMarketCore.rebalance();

    NettingLib.CompleteParams memory completeParams = perpetualMarketCore.getTokenAmountForHedging();

    perpetualMarketCore.completeHedgingProcedure(completeParams);

    perpetualMarketCore.rebalance();

    amountUsdc = completeParams.amountUsdc / 1e2;
    amountUnderlying = Math.scale(completeParams.amountUnderlying, 8, ERC20(underlyingAsset).decimals());

    if (completeParams.isLong) {
        IERC20(underlyingAsset).safeTransferFrom(msg.sender, address(this), amountUnderlying);
        sendLiquidity(msg.sender, amountUsdc);
    } else {
        IERC20(quoteAsset).safeTransferFrom(msg.sender, address(this), amountUsdc);
        sendUndrlying(msg.sender, amountUnderlying);
    }

    emit Consolidated(msg.sender, completeParams.isLong, amountUsdc, amountUnderlying);
}
```

## Answer Key
It executes hedging.

## Distractors
### 1.
It executes the underlying asset's quote.

### 2.
It executes the vault's USDC amount.

### 3.
It executes the yield of the funding payment.

## Common errors, misconceptions, or irrelevant information:
Common errors: 
It executes the complete hedging process.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
